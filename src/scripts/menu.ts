document.addEventListener('astro:page-load', () => {
  document.querySelector('.open-menu')?.addEventListener('click', () => {
    document.querySelector('.nav-mobile')?.classList.toggle('hidden');
  })
})

document.addEventListener('astro:page-load', () => {
  document.querySelector('.close-menu')?.addEventListener('click', () => {
    document.querySelector('.nav-mobile')?.classList.toggle('hidden');
  })
})