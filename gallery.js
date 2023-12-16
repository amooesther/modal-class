

const imageList=[
    {
        imageName:"imageOne",
        imageLink:"https://images.pexels.com/photos/19410472/pexels-photo-19410472/free-photo-of-a-car-by-a-christmas-decoration.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    {
        imageName:"imageTwo",
        imageLink:"https://images.pexels.com/photos/19137934/pexels-photo-19137934/free-photo-of-woman-in-lace-white-top-sitting-on-step-by-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        imageName:"imageThree",
        imageLink:"https://images.pexels.com/photos/17414711/pexels-photo-17414711/free-photo-of-woman-in-a-red-dress-sitting-on-the-steps.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        imageName:"imageFour",
        imageLink:"https://images.pexels.com/photos/17984670/pexels-photo-17984670/free-photo-of-model-in-a-white-blouse-and-gray-long-skirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        imageName:"imageFive",
        imageLink:"https://images.pexels.com/photos/17825357/pexels-photo-17825357/free-photo-of-model-in-lace-cropped-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        imageName:"imageSix",
        imageLink:"https://images.pexels.com/photos/11634665/pexels-photo-11634665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
]

const gallery= document.getElementById("gallery");
function fillGallery(){
imageList.forEach((img)=>{
    const li=document.createElement("li");
    li.innerHTML=` <div class="card">
    <aside class="imageWrapper">
        <img src="${img.imageLink}">
    </aside>
    <span class="imageDetail">${img.imageName}</span>
</div>`;
gallery.appendChild(li)
})
}
fillGallery()