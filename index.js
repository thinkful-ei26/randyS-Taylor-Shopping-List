// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button 
function clickHandle(){
    $('#js-shopping-list-form').submit(event =>  { 
        event.preventDefault(); 
        const newItem = $(".js-shopping-list-entry").val();
        const postItem = function(){
            const listItem = `<li>
            <span class="shopping-item"> ${newItem} </span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
            <span class="button-label">check</span>
            </button><button class="shopping-item-delete">
            <span class="button-label">delete</span></button></div></li>`; 
            $('.shopping-list').append(listItem); 
                    }
        postItem(); 
        console.log(newItem); 
    })

}
console.log('hi');  
// make the delete event function
function deleteTarget(){
    $('.shopping-item-delete').click(event =>{
            // const newItem = $(".js-shopping-list-entry").val();
            console.log($(".shopping-item-delete").parents());
            console.log('delete'); 
            
          
           
    })
}


       

$(deleteTarget); 
$(clickHandle); 
