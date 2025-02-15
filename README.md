# SmartPedidos - Sistema de Gerenciamento de Pedidos e Mesas

Este repositório contém o **SmartPedidos**, um sistema completo para gerenciamento de pedidos e mesas em restaurantes. O sistema conecta garçons e gestores de pedidos, proporcionando uma comunicação eficiente e em tempo real, otimizando o processo de atendimento e organização das mesas.

## Tecnologias Utilizadas

- **Frontend**:
  - **NextJS**: Framework React para construção de interfaces dinâmicas e de alta performance.
  - **SASS**: Pré-processador CSS para uma estilização modular e reutilizável.
  - **Axios**: Biblioteca para realizar requisições HTTP de forma simples e eficiente.

- **Backend**:
  - **NodeJS**: Ambiente de execução JavaScript para backend, ideal para APIs rápidas e escaláveis.
  - **Express**: Framework minimalista para Node.js, utilizado para estruturar e gerenciar rotas.
  - **Prisma ORM**: Ferramenta de ORM para facilitar a interação com o banco de dados PostgreSQL de maneira eficiente e segura.
  - **Docker**: Plataforma para containerizar a aplicação, garantindo consistência no ambiente de desenvolvimento e produção.
  - **PostgreSQL**: Banco de dados relacional utilizado para armazenar informações de pedidos, mesas, clientes e funcionários.

## Funcionalidades

- **Gestão de Pedidos**: Permite que os garçons registrem, editem e marquem pedidos como concluídos, com acompanhamento em tempo real.
- **Gestão de Mesas**: Associa pedidos a mesas específicas, permitindo que os gestores acompanhem o status das mesas e o andamento dos pedidos.
- **Comunicação em Tempo Real**: Facilita a comunicação entre garçons e gestores, garantindo que as informações sobre pedidos sejam transmitidas de forma rápida e eficiente.
- **Escalabilidade e Dockerização**: A aplicação foi desenvolvida para ser facilmente escalável e portátil, utilizando Docker para isolar e padronizar o ambiente de execução.

## Requerimentos

- **Docker**: Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina para rodar a aplicação em containers.
- **PostgreSQL**: O banco de dados PostgreSQL deve estar configurado corretamente para armazenar os dados da aplicação.

## Como Rodar a Aplicação

1. Clone o Repositório:
   ```bash
   git clone https://github.com/seu-usuario/smartpedidos.git
   cd smartpedidos
   ```
   
2. Levante os Containers com Docker:
   ```bash
    docker-compose up -d
   ```

3. Instale as Dependências e Inicie o Backend: Entre no container do backend e instale as dependências:
   ```bash
    docker-compose exec app bash
    npm install
    npm run start:dev
   ```

4. Inicie o Frontend: Entre no diretório do frontend e rode o servidor de desenvolvimento:
    ```bash
      cd ../frontend
      npm install
      npm run dev
    ```

## Como Funciona

- **Pedidos**: Cada pedido é associado a uma mesa específica e possui um status (em andamento, concluído, etc.). O sistema permite gerenciar todos os pedidos em tempo real.
- **Mesas**: As mesas são gerenciadas e monitoradas pelos garçons e gestores, com informações sobre o status do atendimento.
- **Comunicação em Tempo Real**: Garçons e gestores recebem atualizações em tempo real sobre os pedidos, otimizando o fluxo de trabalho no restaurante.

## Conclusão

O **SmartPedidos** foi desenvolvido para otimizar o gerenciamento de pedidos e mesas em restaurantes, proporcionando uma solução ágil e eficiente para o dia a dia do estabelecimento. Com foco na escalabilidade e facilidade de uso, a aplicação oferece um ambiente de trabalho mais dinâmico e conectado entre todos os envolvidos.

