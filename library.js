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
books.push(book0);
book1.author='Dennis';
book1.title='Kenya';
book1.pages=190;
book1.status='read';
books.push(book1);
const mydiv=document.querySelector('.books');
let booksLen=0;
for(let book of books){
    const bookdiv=document.createElement('div');
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
    let i='_'+booksLen;
    booksLen++;
    console.log(books.length);
const removeButton=document.createElement('button');
const readCheck=document.createElement('input');
readCheck.setAttribute('type','checkbox');
if(book.status=='read'){
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
    if(book.status=='read'){
        book.status='unread'; 
        span1.textContent='unread';
    }
    else if(book.status=='unread'){
        book.status='read';
        span1.textContent='read';
    }
})
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
    let j='_'+(books.length-1);
    const newbutton=document.createElement('button');
    const newreadcheck=document.createElement('input');
    newreadcheck.setAttribute('type','checkbox');
    if(book2.status=='read'){
        newreadcheck.checked=true;
    }
    newbutton.setAttribute('data',j);
    newbutton.textContent='remove';
    newbook.setAttribute('id',j);
    newbook.appendChild(newbutton);
    newbook.appendChild(newreadcheck);
    mydiv.appendChild(newbook);
    newbutton.addEventListener('click',function(){
        const confirmation=confirm('are you sure?');
        if(confirmation){
            let text=this.getAttribute('data');
            const element=document.getElementById(text);
            element.remove();
        }
       
    })
    const span3=document.querySelector('#'+j+'>p:nth-child(4)>span');
    newreadcheck.addEventListener('change',function(){
        if(book2.status=='read'){
            book2.status='unread';
            span3.textContent='unread';
        }
        else if(book2.status=='unread'){
            book2.status='read';
            span3.textContent='read';
        }
    })

}
confirmBtn.addEventListener('click',function(){
    addBook();
    mydialog.close();
    form.reset();
});






