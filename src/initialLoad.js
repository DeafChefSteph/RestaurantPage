export function initalLoad (){
    const content = document.querySelector('#content');
    const navbarDiv = document.createElement('div'); 
    navbarDiv.setAttribute('id', 'navbar');
    content.appendChild(navbarDiv);

    const unorderdList = document.createElement('ul'); 
    navbarDiv.appendChild(unorderdList);

    let listItem = [];
    for(let i = 0;i < 3; i++)
    {
        listItem[i] = document.createElement('li');
        unorderdList.appendChild(listItem[i]);
    }

    const homeButton = document.createElement('button');
    homeButton.setAttribute('id','navbarHome');
    homeButton.textContent = 'Home';
    listItem[0].appendChild(homeButton); 

    const menuButton = document.createElement('button');
    menuButton.setAttribute('id','navbarMenu');
    menuButton.textContent = 'Menu';
    listItem[1].appendChild(menuButton); 
 
    const contactButton = document.createElement('button');
    contactButton.setAttribute('id','navbarContact');
    contactButton.textContent = 'Conatct';
    listItem[2].appendChild(contactButton);

    const divHeader = document.createElement('div');
    divHeader.setAttribute('id', 'divHeader');
    content.appendChild(divHeader);

    const header = document.createElement('h1');
    header.textContent = 'Ficitve Restaurant';
    divHeader.appendChild(header);

    /*const span = document.createElement('span');
    span.textContent = 'Fictive Restaurant';
    header.appendChild(span);*/

}

export function displayFooter(){
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    div.setAttribute('id','footer');
    content.appendChild(div);
    const para1 = document.createElement('p');
    para1.textContent = 'Website created by DeafChefSteph';
    div.appendChild(para1);
    const para2 = document.createElement('p');
    para2.textContent = 'All Icons from https://icons8.com/';
    div.appendChild(para2);
}



export function clearFooter(){
    const footer = document.querySelector('#footer');
    if (typeof(footer) != 'undefined' && footer != null)
    footer.remove();

}