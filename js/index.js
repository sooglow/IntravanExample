function openMenu() {
  var hideMenu = document.getElementById('hideMenu');
  const bodyScroll = document.getElementById('bodyScroll');
  // hideMenu.classList.toggle('hidden');
  // hideMenu.classList.toggle('animatorFadein');
  // bodyScroll.classList.toggle('overflow-x-hidden'); 
  // bodyScroll.classList.toggle('overflow-y-hidden'); 
  
  if (hideMenu.classList.contains("hidden")) {
    console.log(1);
      hideMenu.classList.toggle('hidden');
      hideMenu.classList.toggle('block');
      hideMenu.classList.toggle('animatorFadein');
      hideMenu.classList.toggle('animatorFadeout');
      bodyScroll.classList.toggle('overflow-x-hidden'); 
      bodyScroll.classList.toggle('overflow-y-hidden'); 
    } else {
      console.log(2);
      hideMenu.classList.toggle('hidden');
      hideMenu.classList.toggle('block');
      hideMenu.classList.toggle('animatorFadein');
      hideMenu.classList.toggle('animatorFadeout');
      bodyScroll.classList.toggle('overflow-x-hidden'); 
      bodyScroll.classList.toggle('overflow-y-hidden'); 
    }
}
