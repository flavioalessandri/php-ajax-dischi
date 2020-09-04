


function init(){


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


  console.log("hello world");

  getAjaxData();
}

$(document).ready(init);
