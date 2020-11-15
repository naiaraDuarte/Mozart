//$('.dropdown-trigger').dropdown();
$('.dropdown-trigger').dropdown({ 
    hover: true,
    inDuration:	100,
    coverTrigger: true,
    alignment: 'left',
    constrainWidth: false
});

/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

$(document).ready(function(){
    $('select').formSelect();
});
    
var collapsi = document.querySelector('.collapsible');
var instance = M.Collapsible.init(collapsi, {
  accordion: false
});
      
$("#comCollapse").click(function() {
    var menu = document.getElementById('nav-bar');
    if(menu.className == 'l-navbar'){
        instance.close();
    }else{
        $('.dropdown-trigger').dropdown({ 
            onCloseEnd: null,
            inDuration:	250
        });
    }
});

$("#btnFechaMenu").click(function(){
    var comCollapse = document.getElementById('comCollapse');
    var menu = document.getElementById('nav-bar');
    console.log(comCollapse.classList[1]);
    if(menu.className == 'l-navbar'){
        $('.dropdown-trigger').dropdown({ 
            hover: true,
            inDuration:	500,
            coverTrigger: false, 
            alignment: 'left',
            constrainWidth: false,
            onOpenEnd: null
        });
    }else{
            $('.dropdown-trigger').dropdown({ 
                onCloseEnd: null,
                inDuration:	250
            });
        // comCollapse.dataset.target = '';
        // comCollapse.classList.remove('dropdown-trigger');
    }
});

$(".simple-dropdown").dropdown(
    {
        'closeOnClick': true,
        'hover': true
    }
);