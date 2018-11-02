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
    $("ul").on('click', '.shopping-item-delete', function(event){
            this.closest("li").remove(); 
        }); 
}
function checkTarget(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        debugger;
      });
}


       
$(checkTarget); 
$(deleteTarget); 
$(clickHandle); 
