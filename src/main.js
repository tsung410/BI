// tooltip title
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// dialog --------------
// open
const dialogOpen = document.querySelectorAll('[data-dialog-open]');
dialogOpen.forEach(item => {
  item.addEventListener('click',() => {
    document.querySelector(item.dataset.dialogOpen).showModal();
  })
})
// close
const dialogClose = document.querySelectorAll('[data-dialog-close]');
dialogClose.forEach(item => {
  item.addEventListener('click',() => {
    document.querySelector(item.dataset.dialogClose).close();
  })
})
