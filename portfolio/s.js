//header toggle

let menubtn=document.getElementById('MenuBtn');

menubtn.addEventListener('click',function(e){
    // console.log(menubtn)
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')

   
})
let typed=new Typed('.auto-input',{
   strings:['Front-End Developer!','Freelancer!'],
   typeSpeed:100,
   backSpeed:100,
   bacDelay:2000,
   loop:true,

})


