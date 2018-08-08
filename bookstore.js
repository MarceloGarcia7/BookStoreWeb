
// ACA VAN LAS VARIABLES --------------------------

var book = "https://api.myjson.com/bins/1h3vb3";
var mainData;
var searchbutton = document.getElementById("searchbutton");
var search;



var app = new Vue({
  el: '#app',
  data: {
    bookStore: [],

  },
  updated: function () {
    $(".botonF").on('click', function () {
      console.log("boton fancybox");

      $.fancybox.open("<div>hOLA</div>");
    });
  }
});


// ACA VAN LAS FUNCIONES --------------------------


start(book);

function start(data) {
  console.log(1);

  var fetchConfig =
    fetch(data, {
      method: "GET",
    })
    .then(onDataFetched)
    .catch(onDataFetchFailed);
  console.log(3);
}

function onDataFetched(response) {
  response.json()

    .then(onConversionToJsonSuccessful)
    .catch(onConversionToJsonFailed);
  console.log(2);
}

function onDataFetchFailed(error) {
  console.log("I have failed in life.", error);
}

function onConversionToJsonSuccessful(json) {
  console.log("success!!!!", json);
  mainData = json;
  /*if(mainData.length == 0){
    alert("Book NOT FOUND");
  }
  else{
  app.mainBookStore = mainData["books"];
  }*/

  app.mainBookStore = mainData["books"];
  app.bookStore = app.mainBookStore;

  searchbutton.addEventListener("click", searchBook);
}

function onConversionToJsonFailed() {
  alert("Not a json mate!");
}


// ----------LLAMAR LAS FUNCIONES --------------------

function searchBook() {
  var searchResults = [];

  var search = document.getElementById("mySearch").value.toLowerCase();

  //alert("Has escogido"+" "+ search);
  //results = search;
  console.log(search);

  for (var i = 0; i < app.mainBookStore.length; i++) {
    if (app.mainBookStore[i]["descripcion"].toLowerCase().includes(search) || app.mainBookStore[i]["titulo"].toLowerCase().includes(search) == true) {
      searchResults.push(app.mainBookStore[i]);
    }
    console.log(searchResults);
    app.bookStore = searchResults;
  }

}



// --- FANCYBOX BUTTON--------------

/*$("#test").on('click', function() {

  $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');

});*/

// ---------- FUNCIONES MUESTRAS--------------------

/*
function chekB() {
  
document.getElementById("bcn").checked == true;
  alert("Hola");
start (barcelona);
}
*/
/*
var datoid = document.getElementsByName("name").value;
datoid.addEventListener("click", function () {
  alert("Has escogido" + datoid + "......")
  //start(prueba);
});*/
/*

//function searchFunction() {
  var searchbook = document.getElementById("searchbook").value;
  alert("Has escogido"+" "+ searchbook);
  results = searchbook;
  console.log(results);
  
//}*/
/*
var findBook = document.getElementById("findbook");
findBook.addEventListener("click", searchFunction);
*/
/*
var btn1 = document.getElementById("mdeo");
btn1.addEventListener("click", function () {
  alert("Has escogido Montevideo")
  start(barcelona);
});
var btn2 = document.getElementById("brno");
btn2.addEventListener("click", function () {
  alert("Has escogido Brno")
  start(brno);
});
var btn3 = document.getElementById("linz");
btn3.addEventListener("click", function () {
  alert("Has escogido Linz")
  start(linz);
});*/
/*
 var currentSelect = document.getElementById("dropbox").value;
  //alert("You selected: " + currentSelect);
  console.log(currentSelect);
  
  for (var i = 0; i < resultsParty.length; i++) {
    if (currentSelect == resultsParty[i]["state"] || currentSelect == "ALL") {
      resulDrop.push(resultsParty[i]);
    }

    //createTable(resulDrop);
    app.members = resulDrop;
  }
}

*/
/*
function fliterBooksBySearch() {
  
  for (var i = 0; i<mainData.lenght; i++){
    if(mainData[i]["descripcion"].includes(results)==true){
      app.descripcion.push(mainData[i])
    }
  }
   start(app.descripcion);
}*/
/*
////----------
function creaDrop(arrayMembers) {
  var stat = [];
  // ACA VERIFICA DUPLICADO-----
  for (var i = 0; i < arrayMembers.length; i++) {
    var currentState = arrayMembers[i]["state"]; // IGUALA UNA VARIABLE EN UNA POSI DEL ARRAY
    if (stat.includes(currentState) !== true) {
      stat.push(currentState); // SE PREGUNTA SI HAY STADOS DENTRO
    }

  }
  stat.sort();
  stat.unshift("ALL"); // PUSH EN PRIMERA POS (0)

*/
