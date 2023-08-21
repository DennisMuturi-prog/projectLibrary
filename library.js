const books=[];
const book={
    author:'example',
    title:'example',
    pages:0,
    read:true
}
let book1=Object.create(book);
book1.author='Dennis';
book1.title='Kenya';
book1.pages=190;
book1.read=true;
books.push(book1);
const mydiv=document.querySelector('.books');
const bookdiv=document.createElement('div');
//bookdiv.textContent=books[0].title+' by '+books[0].author+' '+books[0].pages+' pages';
for(let book of books){
    for(let x in book){
        const p=document.createElement('p');
        const label=document.createElement('label');  
        const span=document.createElement('span');
        p.appendChild(label);
        p.appendChild(span);
        label.textContent=x+':';
        span.textContent=book[x]; 
        bookdiv.appendChild(p);
    }
}
let i=books.length-1;
i+='';
const myButton=document.createElement('button');
myButton.textContent='remove';
myButton.setAttribute('data',i);
bookdiv.appendChild(myButton);
bookdiv.setAttribute('id',i);
mydiv.appendChild(bookdiv);
myButton.addEventListener('click',function(){
    let text=this.getAttribute('data');
    
    const element=document.getElementById(text);
    element.remove();

})

const addbutton=document.querySelector('#addbook');
const mydialog=document.querySelector('dialog');
addbutton.addEventListener('click',function(){
    mydialog.showModal();
})
const confirmBtn=document.querySelector('#confirm');
const authorinput=document.querySelector('#author');
const titleinput=document.querySelector('#title');
const pagesinput=document.querySelector('#pages');
const readinput=document.querySelector('#read');
const form=document.querySelector('form');
function addBook(){
    const book2=Object.create(book);
    book2.author=authorinput.value;
    book2.title=titleinput.value;
    book2.pages=pagesinput.value;
    book2.read=readinput.value;
    books.push(book2);
    const newbook=document.createElement('div');
    for(let x in book2){
        const newp=document.createElement('p');
        const newlabel=document.createElement('label');  
        const newspan=document.createElement('span');
        newp.appendChild(newlabel);
        newp.appendChild(newspan);
        newlabel.textContent=x+':';
        newspan.textContent=book2[x]; 
        newbook.appendChild(newp);
    }
    let j=books.length-1;
    j+='';
    const newbutton=document.createElement('button');
    newbutton.setAttribute('data',j);
    newbutton.textContent='remove';
    newbook.setAttribute('id',j);
    newbook.appendChild(newbutton);
    mydiv.appendChild(newbook);
    newbutton.addEventListener('click',function(){
        const confirmation=confirm('are you sure?');
        if(confirmation){
            let text=this.getAttribute('data');
            const element=document.getElementById(text);
            element.remove();
        }
       
    })

}
confirmBtn.addEventListener('click',function(){
    addBook();
    mydialog.close();
    form.reset();
});






