function openMenu() {
  var hideMenu = document.getElementById('hideMenu');
  const bodyScroll = document.getElementById('bodyScroll');
  if (hideMenu.classList.contains("hidden")){
  hideMenu.classList.toggle('hidden');
  hideMenu.classList.toggle('block');
  hideMenu.classList.toggle('fadein');
  bodyScroll.classList.toggle('overflow-x-hidden'); 
  bodyScroll.classList.toggle('overflow-y-hidden'); 
  }
  else{
      hideMenu.classList.toggle('fadeout');
      bodyScroll.classList.toggle('overflow-x-hidden'); 
      bodyScroll.classList.toggle('overflow-y-hidden'); 
  }

}
