/*-----------------------------
      <!-- Nav Start -->
-----------------------------*/





//For menuUL (for main menu nav item) START
document.getElementById('menu').addEventListener('click',function(){
    document.getElementById('menuUL').classList.toggle('displayBlock');
});
//For menuUL (for main menu nav item) END





//for search START
document.getElementById('serch-icon').addEventListener('click',function(){
    document.getElementById('serch').classList.toggle('serchABC')
});




function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById('serch').classList.remove('serch')
      document.getElementById('serch').classList.add('displayNone')
    } 
    
    else {
      document.getElementById('serch').classList.add('serch')
      document.getElementById('serch').classList.remove('displayNone')
    }
}
  
var x = window.matchMedia("(max-width: 585px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
//for search END





/*-----------------------------
      <!-- Nav End -->
--------x----------x---------*/