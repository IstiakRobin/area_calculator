const area_form = document.getElementById('area_form');
const type = area_form.querySelector('select');
const square = area_form.querySelector('.square');
const ractangle = area_form.querySelector('.ractangle');
const circle = area_form.querySelector('.circle');
const triangle = area_form.querySelector('.triangle');
const output = document.querySelector('p');


type.onchange = ()=>{
    if(type.value == 'square')
    {
        square.style.display = 'block';
    }
    else 
    {
        square.style.display = '';
    }
    if(type.value == 'ractangle')
    {
        ractangle.style.display = 'block';
    }
    else 
    {
        ractangle.style.display = '';
    }
    if(type.value == 'circle')
    {
        circle.style.display = 'block';
    }
    else 
    {
        circle.style.display = '';
    }
    if(type.value == 'triangle')
    {
        triangle.style.display = 'block';
    }
    else 
    {
        triangle.style.display = '';
    }
}
area_form.onsubmit=(e)=>{
    e.preventDefault();

    if (type.value=='ractangle')
    {   
        const width = area_form.querySelector('input[name="width"]').value;
        const length = area_form.querySelector('input[name="length"]').value;
        output.innerHTML=area_cal(type.value, width, length);
        console.log(width);
    }
    if (type.value=='triangle')
    {
        const width = area_form.querySelector('input[name="base"]').value;
        const length = area_form.querySelector('input[name="height"]').value;
        output.innerHTML=area_cal(type.value, width, length);
    }
    if (type.value=='circle')
    {
        const width = area_form.querySelector('input[name="radius"]').value;
        output.innerHTML=area_cal(type.value, width, length);
    }
    if (type.value=='square')
    {
        const width = area_form.querySelector('input[name="square"]').value;
        output.innerHTML=area_cal(type.value, width, length);
    }
}
