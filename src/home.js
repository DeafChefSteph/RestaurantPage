export function displayHome(){
    
    const content = document.querySelector('#content');

    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'homeMain');
    content.appendChild(mainDiv);

    const subheader = document.createElement('h2');
    subheader.textContent = 'Why us?';
    mainDiv.appendChild(subheader);

    const para1 = document.createElement('p');
    para1.textContent = "This fictive restaurant is well regard in his area. We acomplish that by that with high quality food, in combination with fair prices, a nice ambiente and friendly personal. ";
    mainDiv.appendChild(para1); 

    const para2 = document.createElement('p');
    para2.textContent = "Our Restaurant offers a wide varity on different food. Pizza? Fish? Meat? Burger? We have it all. ";
    mainDiv.appendChild(para2); 

}

export function removeHome(){
    
    const homeMain = document.querySelector('#homeMain');
    if (typeof(homeMain) != 'undefined' && homeMain != null)
    {
        homeMain.remove(); 
    }
}

