# Store-it

Store-it é uma aplicação de armazenamento em nuvem semelhante ao Google Drive. Com ela, usuários podem armazenar, organizar e acessar documentos de forma segura e eficiente, usando Appwrite.

<img center="right" src="./public/assets/images/storeIt.png"  />

## Tecnologias Utilizadas

- **Next.js** - Framework React para aplicações web.
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática.
- **Appwrite** - Backend para autenticação, banco de dados e armazenamento.
- **Tailwind CSS** - Framework de estilização baseado em utilitários.
- **React Hook Form** - Gerenciamento de formulários e validação.

## Funcionalidades

- **Cadastro e Autenticação de Usuário**
- **Upload e Download de Arquivos**
- **Organização de Documentos**
- **Interface Responsiva e Intuitiva**

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/store-it.git
   cd store-it
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   bun install
   ```

3. Configure as variáveis de ambiente no arquivo `.env.local`:

   ```env
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your-appwrite-project-id
   NEXT_PUBLIC_APPWRITE_DATABASE_ID=your-database-id
   NEXT_PUBLIC_APPWRITE_BUCKET_ID=your-bucket-id
   ```

4. Execute o projeto em ambiente de desenvolvimento:
   ```bash
   npm run dev
   # ou
   bun dev
   ```

## Uso

- Acesse `http://localhost:3000`
- Cadastre-se ou faça login na plataforma.
- Comece a enviar e organizar seus arquivos na nuvem.

## Deploy

A aplicação está hospedada na Vercel. Acesse a versão online em:
[Store-it](https://store-it-one-beta.vercel.app/sign-in)

## Contribuição

Se quiser contribuir para o projeto, siga os passos:

1. Crie um fork do repositório.
2. Crie uma branch para suas alterações: `git checkout -b minha-feature`
3. Faça commit das alterações: `git commit -m "Adicionando nova funcionalidade"`
4. Faça push para a branch: `git push origin minha-feature`
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Para mais informações, consulte o arquivo `LICENSE`.
