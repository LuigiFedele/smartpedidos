import { getCookie } from "cookies-next";

export async function getCookieClient() {
  return getCookie('token');
}