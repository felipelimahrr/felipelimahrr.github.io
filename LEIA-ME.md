# Site — Felipe Lima

Site estático (HTML, CSS e JavaScript, com GSAP e Lenis). Não precisa de instalação nem de build.

## Onde editar

Tudo o que você troca está em **`content.js`**: textos, número do WhatsApp, link do Instagram e os caminhos dos vídeos e imagens. Os outros arquivos você não precisa mexer.

## Como colocar os vídeos

1. Coloque o arquivo em `assets/videos/`. Use `.mp4` vertical, de preferência até ~10 MB.
2. Em `content.js`, preencha `video:` com o caminho, por exemplo `video: 'assets/videos/alphaville.mp4'`.
3. Troque o `poster:` por um frame do próprio vídeo. Os frames atuais estão em `assets/videos/posters/`.

Os vídeos que já estão no site: Trapiche (sempre sem som, com `semSom: true`), @esteticamarlapinho, @jleducacional, @alphathermeng, a expansão do Empório Fribal e o Alphaville Araçagi.

Os arquivos originais grandes (`Trapiche editado.mp4`, 200 MB, e `Alphaville editado.mp4`, 32 MB) não são usados pelo site: ele usa as cópias leves `trapiche.mp4` e `alphaville.mp4`. Tire os originais da pasta antes de publicar.

Eles tocam sem som quando você passa o mouse em cima (no celular, ao rolar). O clique abre em tela cheia, com som.

## O que ainda falta

- **Logos:** de @alphathermeng, @jleducacional, @esteticamarlapinho, @csoebenezer e @upaondigital. Preencha `logo:` quando tiver.

## Ver no computador

Abra a pasta num servidor local. Por exemplo, com Node instalado:

```bash
npx serve .
```

## Publicar de graça

Qualquer hospedagem estática funciona. Basta enviar a pasta inteira:

- **Netlify:** arraste a pasta em app.netlify.com/drop
- **Vercel** ou **GitHub Pages**

As pastas `referencia/`, `.impeccable/`, `.taste-skill/` e `.playwright-mcp/` não precisam ir para o ar.

## Fontes

- **Inter Bold** nos títulos.
- **Open Sans** no texto.
- **Lexend Exa** nas descrições. Ela substitui a CyGrotesk do PDF, que não tem licença web gratuita. Lexend Exa também é fina e larga.

As três fontes ficam dentro de `assets/fonts/` e são licenciadas pela OFL, então não dependem do Google Fonts.
