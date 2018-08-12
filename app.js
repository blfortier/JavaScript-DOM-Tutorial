const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', function(e) {
  if(e.target.className == 'delete') {
      const li = e.target.parentElement;
      list.removeChild(li);
  } 
    
});

// add book-list
const addForm = document.forms['add-book'];

// attach eventListener to form
addForm.addEventListener('submit', function(e) {
   e.preventDefault();
   const value = addForm.querySelector('input[type="text"]').value;
   console.log(value);
    
});