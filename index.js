const btn = document.querySelector('#openModalButton');
const modal =document.querySelector('#modal');
const modalContent=document.getElementById('modalContent');
function openModal(){
    btn.addEventListener('click', ()=>{
        modal.style.display = "flex";
       
    })
}
openModal()

function closeModal(){
    modal.addEventListener('click', ()=>{
        modal.style.display = 'none';
    })
}
closeModal()

modalContent.addEventListener('click', (e)=>{
    e.preventDefault()
    e.stopPropagation()
})

// function openModal(){
   
//     modal.style.display = "flex";
   
// }
// btn.addEventListener('click', openModal)



// function closeModal(){

//     modal.style.display = 'none';
// }

// modal.addEventListener('click', closeModal)