document.addEventListener('DOMContentLoaded', function () {
    const inicioLink = document.querySelector('#inicio-link');
    const QueLink = document.querySelector('#qes-link');
    const TelefLink = document.querySelector('#telef-link');
    const CnserLink = document.querySelector('#cnser-link');
    const PrevLink = document.querySelector('#prev-link');
    const sidebarMenu = document.querySelector('.sidebar_menu');

    function contraerMenu() {
        sidebarMenu.classList.remove('open');
    }

    inicioLink.addEventListener('click', function () {
        document.getElementById('inicio').style.display = 'flex';
        document.getElementById('que-content').style.display = 'none';
        document.getElementById('telef-content').style.display = 'none';
        document.getElementById('cnser-content').style.display = 'none';
        document.getElementById('prevenciones-content').style.display = 'none';
        contraerMenu();
    });

    QueLink.addEventListener('click', function () {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('que-content').style.display = 'flex';
        document.getElementById('telef-content').style.display = 'none';
        document.getElementById('cnser-content').style.display = 'none';
        document.getElementById('prevenciones-content').style.display = 'none';
        contraerMenu();
    });

    TelefLink.addEventListener('click', function () {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('que-content').style.display = 'none';
        document.getElementById('telef-content').style.display = 'flex';
        document.getElementById('cnser-content').style.display = 'none';
        document.getElementById('prevenciones-content').style.display = 'none';
        contraerMenu();
    });

    CnserLink.addEventListener('click', function () {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('que-content').style.display = 'none';
        document.getElementById('telef-content').style.display = 'none';
        document.getElementById('cnser-content').style.display = 'flex';
        document.getElementById('prevenciones-content').style.display = 'none';
        contraerMenu();
    });

    PrevLink.addEventListener('click', function () {
        document.getElementById('inicio').style.display = 'none';
        document.getElementById('que-content').style.display = 'none';
        document.getElementById('telef-content').style.display = 'none';
        document.getElementById('cnser-content').style.display = 'none';
        document.getElementById('prevenciones-content').style.display = 'flex';
        contraerMenu();
    });

});

