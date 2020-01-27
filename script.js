/*$.ajax({
    beforeSend: function() {  }, //Show spinner

            complete: function(){        },

            type: 'GET',
            url: "https://jsonplaceholder.typicode.com/users",
            dataType: 'JSON',
            success: function(data){
                console.log(data);
                $.each(data, function(i, val){
                    //console.log(val);
                 
                   // $('.print').append(Object.values(val.id));
                    
                   $('.print').append(Object.values(val.name));
                   $('.print').append(Object.values(val.username));

                 //$('#view').appendchild(document.writeln("</td></tr>"));

                 
                });
                $( "display_name" ).promise().done(function() {
                    alert("Show");
                  });
            }});


$.ajax({
    complete: function(){},
        type:'GET',
        url:"https://api.myjson.com/bins/oru4y",
        dataType:'JSON',
        success: function(data){
         
            for(val in data){
                const sect=document.getElementById("demo");
                const para=document.createElement("p");
                para.textContent()
            }
           
          
         console.log(data.Data[1].Softdrinks[1]);
        
        }
    
});*/

function select(){
    var a=document.querySelectorAll("select").textContent;
    console.log(a);

}
function Toggle() { 
    var temp = document.getElementById("password"); 
    if (temp.type === "password") { 
        temp.type = "text"; 
    } 
    else { 
        temp.type = "password"; 
    } 
} 