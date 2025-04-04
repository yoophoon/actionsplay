import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
<a href="https://vite.dev" target="_blank">
<img src="${viteLogo}" class="logo" alt="Vite logo" />
</a>
<a href="https://www.typescriptlang.org/" target="_blank">
<img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
</a>
<h1>Vite + TypeScript</h1>
<div class="card">
<button id="counter" type="button"></button>
</div>
<p class="read-the-docs">
Click on the Vite and TypeScript logos to learn more
</p>
</div>
`
// import borderbox from './copy.css'
import borderboxi from './copy.css?inline'
import im3i from './mm3.png?inline'
import im3n from './mm3.png?no-inline'
// console.log('borderbox',borderbox)
console.log('borderboxi',borderboxi)
console.log(im3i)
console.log(im3n)

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
