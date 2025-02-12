import { NextResponse, type MiddlewareConfig, type NextRequest } from "next/server";
import { api } from "./services/api";

const publicRoutes = [
  {path: '/sign-in', whenAuthenticated: 'redirect'},
  {path: '/register', whenAuthenticated: 'redirect'},
  {path: '/pricing', whenAuthenticated: 'next'},
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/sign-in';

export async function middleware( request: NextRequest ) {
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find(route => route.path === path);
  const authToken = request.cookies.get('token');

  if (!authToken && publicRoute){
    return NextResponse.next();
  }

  if (!authToken && !publicRoute ){
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect'){
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/'
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && !publicRoute) {
   const isValid = await validateToken(authToken.value);

   if (!isValid) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
   }
  }

  return NextResponse.next();
}

async function validateToken(token: string) {
  try {
    await api.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export const config: MiddlewareConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ]
}