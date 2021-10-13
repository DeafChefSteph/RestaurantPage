export function displayContact(){
    const content = document.querySelector('#content');
    
    const contactMain = document.createElement('div');
    contactMain.setAttribute('id','contactMain');
    content.appendChild(contactMain);

    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('id','contactDiv');
    contactMain.appendChild(contactDiv); 

    const centerDiv = document.createElement('div');
    centerDiv.setAttribute('id','centerDiv');
    contactDiv.appendChild(centerDiv);
    
    let para = []; 

    for(let i = 0; i < 5; i++) para[i] = document.createElement('p');

    para[0].textContent = 'John Doe';
    para[1].textContent = 'DoYouThinkThisStreetExists 9';
    para[2].textContent = '42069 Fucking';
    para[3].textContent = 'Tele. 0815 6942088';
    para[4].textContent = 'Mail. doYouThinkICare@NoIRellyDont.com';

    for(let i = 0; i < 5; i++) centerDiv.appendChild(para[i]); 
}

export function removeContact (){
    const contactMain = document.querySelector('#contactMain');

    if (typeof(contactMain) != 'undefined' && contactMain != null)
    {
       contactMain.remove(); 
    }


}