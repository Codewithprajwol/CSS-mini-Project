document.addEventListener('mousemove',(e)=>{
    console.log(e)
    document.querySelectorAll('.slide').forEach((elem)=>{
       const value=elem.getAttribute('value');
       console.log(value)
       const X=(window.innerWidth-e.clientX*value)/50;
        elem.style.transform=`translateX(${X}px)`
    })
   
})
// document.body.addEventListener('mouseleave',(e)=>{
//     console.log(e)
//     document.querySelectorAll('.slide').forEach((elem)=>{
//        const value=elem.getAttribute('value');
//        const X=(e.clientX+window.innerWidth+value)/2;
//         elem.style.transform=`translateX(${0}px)`
//     })
   
// })