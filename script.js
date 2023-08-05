
  const showbtn = document.querySelector('.active');
  const hidebtn = document.querySelector('.navbar');
  
  const x = document.getElementById('menubar');
  const show = () => {
    x.classList = 'active';
  };
  
  const hide = () => {
    x.classList = 'navbar';
  };
  
  showbtn.addEventListener('click', show);
  hidebtn.addEventListener('click', hide);