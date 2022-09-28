// write your code here
//request data to get all the ramen object
//display the image for each in the "ramen-menu" div
//should also display the name and rest. name

//get ramen data
const newRamenForm = document.getElementById('new-ramen')
newRamenForm.addEventListener('submit', (e) => createNewRamen(e))


function createNewRamen(e) {
    e.preventDefault()
    let newRamen = {
        name : newRamenForm.name.value,
        restaurant : newRamenForm.restaurant.value,
        image: newRamenForm.image.value,
        rating: newRamenForm.rating.value,
        comment: newRamenForm['new-comment'].value
    }
   renderingRamenImage(newRamen)

   newRamenForm.requestFullscreen()
}

const getRamenMainInfo = () => {
    fetch('http://localhost:3000/ramens/') 
    .then(resp => resp.json())
    .then(ramenData => renderingRamen(ramenData))
}
getRamenMainInfo()

//render the ramen data
const renderingRamen = ramenData => {
    ramenData.forEach(ramen => renderingRamenImage(ramen))
}
//render the ramen images to the "ramen-menu" div
//add event listener for when an image is clicked to display ramen details
const renderingRamenImage = ramen => {
    const ramenMenu = document.getElementById('ramen-menu')
    const img = document.createElement('img')
    img.src = ramen.image
    img.addEventListener('click', () => showRamenDetails(ramen))

    ramenMenu.appendChild(img)
}

const showRamenDetails = ramen => {
    
    const ramenImage = document.getElementById('ramen-img')
    ramenImage.src = ramen.image
    
    const ramenName = document.getElementById('ramen-name')
    ramenName.textContent = ramen.name

    const ramenRestaurant = document.getElementById('ramen-restaurant')
    ramenRestaurant.textContent = ramen.restaurant

    const ramenRating = document.getElementById('rating-display')
    ramenRating.textContent = ramen.rating

    const ramenComment = document.getElementById('comment-display')
    ramenComment.textContent =ramen.comment

}

//create a new form called 'new-ramen'
//should be appended to the 'ramen-menu' div
//does not need to persist 

