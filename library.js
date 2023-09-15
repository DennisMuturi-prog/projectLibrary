const books=[];
class Book{
    constructor(author,title,pages,status){
        this.author=author;
        this.title=title;
        this.pages=pages;
        this.status=status;
    }
}
let book0=new Book('Reuben','Ps5andPC',150,'unread');
let book1=new Book('Dennis','Kenya',190,'read');
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
        let i='_'+(books.indexOf(librarybook));
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
 books.push(book1);
 for(let book of books){
    createBook(book);
 }

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
    const book2=new Book();
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