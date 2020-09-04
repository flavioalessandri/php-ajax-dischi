
// new function ------------------------------------------
function getAjaxData(){
  $.ajax(
    {
      url:"http://localhost/www/php-dischi/datajs.php",
      method:"GET",
      success: function (state,data) {
        console.log("state",state);
        console.log("data",data);
        if(data == "success"){

          var datas = state['response'];
          console.log(datas);

          var template = $("#template").html();
          var compiled = Handlebars.compile(template);
          var target = $('#container');
          console.log("template",template);


          for (var i = 0; i < datas.length; i++) {

            var compileHTML = compiled(datas[i]);
            target.append(compileHTML);
          }
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
      url:"http://localhost/www/php-dischi/datajs.php" ,
      method:"GET",
      success: function (state,data) {
        console.log("state",state);
        console.log("data",data);

        if(data == "success"){

          var datas = state['response'];

          var template = $("#template").html();
          var compiled = Handlebars.compile(template);
          var target = $('#container');
          console.log("template",template);

          for (var i = 0; i < datas.length; i++) {

            if(datas[i]["genre"]==genre){
              var compileHTML = compiled(datas[i]);
              target.append(compileHTML);
            }
            else if (genre.length==0) {
              var compileHTML = compiled(datas[i]);
              target.append(compileHTML);
            }

          }
        }

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


  console.log("hello world");

}

$(document).ready(init);
