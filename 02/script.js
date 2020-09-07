// new function ------------------------------------------
function printData(data){

  var template = $("#template").html();
  var compiled = Handlebars.compile(template);
  var target = $('#container');

  for (var i = 0; i < data.length; i++) {
    var compileHTML = compiled(data[i]);
    target.append(compileHTML);
  }
}

// new function ------------------------------------------
function getAjaxData(){
  $.ajax(
    {
      url:"disks.php",

      method:"GET",

      success: function (data,state) {

        if(state == "success"){
          var data = data['response'];
          printData(data);
        }
      },

      error: function(err){
        console.log("errore",err);
      }
  });
}

// new function ------------------------------------------
function getCardsByGenre(){
  $('#container').html("");
  var input = $("#input").val();
  const genre = input.charAt(0).toUpperCase() + input.slice(1);
  $("#input").val("");

  $.ajax(
    {
      url:"diskByGenre.php" ,

      method:"GET",

      data: {
        "genre" : genre
      },

      success: function (data) {

        console.log("RISULTATI DATA:", data);

        printData(data);

      },
      error: function(err){
        console.log("errore",err);
      }
  });
}

// new function ------------------------------------------
function init(){

  var btn = $("#btn");
  getAjaxData();
  btn.click(getCardsByGenre);

}

$(document).ready(init);
