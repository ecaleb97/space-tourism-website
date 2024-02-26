/* const open = document.querySelector('.open-menu')
const close = document.querySelector('.close-menu')
const nav = document.querySelector('.nav-mobile') */

document.addEventListener('astro:page-load', () => {
  document.querySelector('.open-menu')?.addEventListener('click', () => {
    document.querySelector('.nav-mobile')?.classList.toggle('hidden');
  })
})



/* document.querySelector('.close-menu')?.addEventListener('click', () => {
  document.querySelector('.nav-mobile')?.classList.toggle('hidden');
}) */

document.addEventListener('astro:page-load', () => {
  document.querySelector('.close-menu')?.addEventListener('click', () => {
    document.querySelector('.nav-mobile')?.classList.toggle('hidden');
  })
})