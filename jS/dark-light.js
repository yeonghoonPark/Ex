    function nightMode(){
    let linkText = document.querySelectorAll('a');
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('h1').style.color = 'white';
    document.querySelector('h1').style.borderBottom = '5px solid white';
    document.querySelector('h2').style.color = 'white';
    document.querySelector('p').style.color = 'white';
    document.querySelector('div').style.borderLeft = '5px solid white';
    document.querySelector('ol').style.color = 'white';
    linkText[0].style.color = 'lightblue';
    linkText[1].style.color = 'lightblue';
    linkText[2].style.color = 'lightblue';
    }
    
    function daylightMode(){
    let linkText = document.querySelectorAll('a');
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('h1').style.color = 'black';
    document.querySelector('h1').style.borderBottom = '5px solid black';
    document.querySelector('h2').style.color = 'black';
    document.querySelector('p').style.color = 'black';
    document.querySelector('div').style.borderLeft = '5px solid black';
    document.querySelector('ol').style.color = 'black';
    linkText[0].style.color = 'pink';
    linkText[1].style.color = 'pink';
    linkText[2].style.color = 'pink';
    }