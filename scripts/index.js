;'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');

  document.querySelector('.warning .title .close').addEventListener('click', () => {
    document.querySelector('.warning').classList.remove('show');
  });

  setTimeout(() => {
    document.querySelector('.warning').classList.add('show');
  }, 200);
});
