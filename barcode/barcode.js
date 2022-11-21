
$('#generate-btn').click(function(){
    var users = document.getElementById("input").value;
    $("#download").show();
    JsBarcode("#barcode", users, {format: "CODE128A"});

                         
}); 


    function downloadsvg() {
    var e = document.createElement('script');
    e.setAttribute('src', 'https://nytimes.github.io/svg-crowbar/svg-crowbar.js'); 
    e.setAttribute('class', 'svg-crowbar');
    document.body.appendChild(e);
    }



