// taking displayArea & button on variables
let display = document.getElementById('display-area');
let buttons = document.querySelectorAll('button');

let ttl_value = '';
let operator_count = 0;

//make button(NodeList) to array
let buttons_arr = Array.from(buttons);

/*!!!!!!! ...... FUNCTIONS .......!!!!!!!! */
function calculation(per_button_value){
    if(per_button_value === 'AC'){
        ttl_value = '';
        display.value = '';
        operator_count = 0;
    }
    else if(per_button_value === 'DEL'){
        if(isNaN(ttl_value.slice(-1))){
            operator_count = 0;
        }
        ttl_value = ttl_value.substring(0, (ttl_value.length - 1));
        display.value = ttl_value;
    }
    else if(per_button_value === '='){
        if(ttl_value.length==0 || (ttl_value.length==1 && ttl_value[0]=='-')){
            //do nothing
        }
        else{
            if(isNaN(ttl_value.slice(-1))){
                ttl_value = ttl_value.substring(0, (ttl_value.length - 1));
            }
            ttl_value = '' + eval(ttl_value);
            display.value = ttl_value;
        }
    }
    else if(isNaN(per_button_value) && ttl_value.length==0 && per_button_value!='-'){
        //do nothing
    }
    else{
        if(isNaN(per_button_value)){
            operator_count++;
        }
        else{
            operator_count = 0;
        }
        if(operator_count <= 1){
            ttl_value += per_button_value;
            display.value = ttl_value ;
        }
        
    }
}



// apply for each loop
buttons_arr.forEach(function(btn) {
    btn.addEventListener('click', function(event){
        let per_button_value = event.target.innerText;
        calculation(per_button_value);
    })
});