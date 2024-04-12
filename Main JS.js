document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');

    document.getElementById('close').addEventListener('click', ()=>{
      document.querySelector('.menu').classList.remove('active');
    })
  });