if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	// some code..
  document.getElementById('header').style.height = "70vh";
 } else {
  document.getElementById('header').style.height = "100vh";
 }