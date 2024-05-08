const normalBtns=document.querySelectorAll('.normalBtn');
const inputField=document.querySelector('input');
const ACBtn=document.querySelector('.ACBtn');
const submitBtn=document.querySelector('.submitBtn');

normalBtns.forEach(btn=>{
    btn.addEventListener('click',(ev)=>{
        console.log(ev.target.value);
        console.log(inputField.value)
        inputField.value+=ev.target.value;
    })
})

ACBtn.addEventListener('click',(ev)=>{
    inputField.value="";
})

submitBtn.addEventListener('click',(ev)=>{
    ev.preventDefault();
    let str=inputField.value;
    const ans=eval(str);
    inputField.value=ans;
})