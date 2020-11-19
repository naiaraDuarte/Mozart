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
    
var empresa = document.querySelector('.collapsible.empresa');
var instanceEmpresa = M.Collapsible.init(empresa, {
  accordion: false
});

var clientes = document.querySelector('.collapsible.clientes');
var instanceClientes = M.Collapsible.init(clientes, {
  accordion: false
});

$("#empresa").click(function() {
    var menu = document.getElementById('nav-bar');
    if(menu.className == 'l-navbar'){
        instanceEmpresa.close();
    }else{
        $('.dropdown-trigger').dropdown({ 
            onCloseEnd: null,
            inDuration:	250
        });
    }
});

$("#clientes").click(function() {
    var menu = document.getElementById('nav-bar');
    if(menu.className == 'l-navbar'){
        instanceClientes.close();
    }else{
        $('.dropdown-trigger').dropdown({ 
            onCloseEnd: null,
            inDuration:	250
        });
    }
});

$("#btnFechaMenu").click(function(){
    var menu = document.getElementById('nav-bar');
    var logo = document.getElementById('logo');
    var logo_nome = document.getElementById('logo_nome');
    if(menu.className == 'l-navbar'){
        logo.classList.remove('maior');
        logo_nome.style.display = 'none';
        $('.dropdown-trigger').dropdown({ 
            hover: true,
            inDuration:	500,
            coverTrigger: false, 
            alignment: 'left',
            constrainWidth: false,
            onOpenEnd: null
        });
    }else{
        logo.classList.add('maior');
        logo_nome.style.display = 'block';
        $('.dropdown-trigger').dropdown({ 
            onCloseEnd: null,
            inDuration:	250
        });
    }
});

$(".simple-dropdown").dropdown(
    {
        'closeOnClick': true,
        'hover': true
    }
);