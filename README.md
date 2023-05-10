# Next.js 포트폴리오 만들기

## 완성사이트

> [포트폴리오](https://portfolio-2jomo85.vercel.app/)

## 1. 개발환경

1. [VSCode]("https://code.visualstudio.com/") 설치
2. [node.js]("https://nodejs.org/ko") 설치
3. [Next.js]("https://nextjs.org/")

   1. [Docs]("https://nextjs.org/docs") 이동
   2. Next.js 프로젝트 생성
      ```bash
      npx create-next-app@latest
      # or
      yarn create next-app
      # or
      pnpm create next-app
      ```
      - TypeScript : No
      - ESLint : Yes
      - Tailwind Css : No ==> 메뉴얼로 추가
      - /src/ directory : No
      - experimental 'app/' directory : No
      - import alias : 공백
   3. tailwindcss 설정 [tailwindcss]("https://tailwindcss.com/docs/guides/nextjs")
      ```bash
      # tailwindcss 설치
      npm install -D tailwindcss postcss autoprefixer
      # 초기화
      npx tailwindcss init -p
      ```
   4. root 경로에 `tailwind.config.js` 파일 생성

      ```
      /** @type {import('tailwindcss').Config} */
      module.exports = {
      mode: "jis",
      content: [
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
          "./pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",

          // Or if using `src` directory:
          "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      darkMode: "class",
      theme: {
          extend: {},
      },
      plugins: [],
      };
      ```

   5. root 경로에 postcss.config.js 파일 생성
      ```
      module.exports = {
      plugins: {
          tailwindcss: { config: "./tailwind.config.js" },
          autoprefixer: {},
      },
      };
      ```
   6. 메인화면 이미지 Lottie 이미지를 위한 lottie Player 설치
      [LottieFiles]("https://lottiefiles.com/")
      ```bash
      yarn add react-lottie-player
      ```
   7. 참조사이트
      - [Next.js](https://nextjs.org/)
      - [Tailwind CSS](https://tailwindcss.com/)
      - [Tailblocks](https://tailblocks.cc/)
      - [Lottie Animation](https://lottiefiles.com/)
      - [Notion api integration](https://developers.notion.com/docs/create-a-notion-integration)
      - [Vercel deploy](https://vercel.com/docs/concepts/deployments/overview)
