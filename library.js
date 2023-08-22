const books=[];
const book={
    author:'example',
    title:'example',
    pages:0,
    status:true
}
let book0=Object.create(book);
let book1=Object.create(book);
book0.author='Reuben';
book0.title='Ps5andPC';
book0.pages=150;
book0.status='unread';
book1.author='Dennis';
book1.title='Kenya';
book1.pages=190;
book1.status='read';
const mydiv=document.querySelector('.books');
function createBook(librarybook){
        const bookdiv=document.createElement('div');
        for(let x in librarybook){
            const p=document.createElement('p');
            const label=document.createElement('label');  
            const span=document.createElement('span');
            p.appendChild(label);
            p.appendChild(span);
            label.textContent=x+':';
            span.textContent=librarybook[x]; 
            bookdiv.appendChild(p);
        }
        let i='_'+(books.length-1);
        console.log(books.length);
    const removeButton=document.createElement('button');
    const readCheck=document.createElement('input');
    readCheck.setAttribute('type','checkbox');
    if(librarybook.status=='read'){
        readCheck.checked=true;
    }
    else{
        readCheck.checked=false;
    }
    
    removeButton.textContent='remove';
    removeButton.setAttribute('data',i);
    bookdiv.appendChild(removeButton);
    bookdiv.appendChild(readCheck);
    bookdiv.setAttribute('id',i);
    mydiv.appendChild(bookdiv);
    removeButton.addEventListener('click',function(){
        const confirmation=confirm('are you sure?');
        if(confirmation){
            let text=this.getAttribute('data');
            const element=document.getElementById(text);
            element.remove();
        }
       
    })
    const span1=document.querySelector('#'+i+'>p:nth-child(4)>span');
    readCheck.addEventListener('change',function(){
        if(librarybook.status=='read'){
            librarybook.status='unread'; 
            span1.textContent='unread';
        }
        else if(librarybook.status=='unread'){
            librarybook.status='read';
            span1.textContent='read';
        }
    })
    
}
 books.push(book0);
 createBook(book0);
 books.push(book1);
 createBook(book1);

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
    if(readinput.checked){
        book2.status='read'
    }
    else{
        book2.status='unread'
    }
    books.push(book2);
    createBook(book2);
}
confirmBtn.addEventListener('click',function(){
    addBook();
    mydialog.close();
    form.reset();
});