   
   let $div = document.getElementById('contenedor'); 
   let todosLosPersonajes = [];
   
   function usarFetch (numeroPagina) {
      fetch(`https://rickandmortyapi.com/api/character/?page=${numeroPagina}`)
 .then((data)=>{
   return data.json();
 })
 .then((data)=>{
     todosLosPersonajes = data.results;
    mostrar(todosLosPersonajes);

     });
   };
 
   

function mostrar (array){
    $div.innerHTML = ''
for(let i=0; i<array.length; i++){
     $div.innerHTML += `<div id="cards">
                        <div><img  id="img-card" src="${array[i].image}"></div>
                        <p> Nombre:${array[i].name}</p>
                        <p>Género: ${array[i].gender}</p>
                        <p>Especies: ${array[i].species}</p>
                        <p>Estado: ${array[i].status}</p>
                        <p>Origen: ${array[i].origin.name}</p>
                       <p>Locación:${array[i].location.name}</p>

                        <br>
                        <br>
                        <hr>
                        <div>
                       <a href="#" id="arcor"> VER MAS... </a>
                       

                        </div>
                        
                     </div>`
}}

// .catch((error) => {
//     console.log(error)
// })


// Botones de filtro 
// Todos 
 let $todosB = document.getElementById('todos')
 function mostrartodos(){
    let resultado = todosLosPersonajes.filter((personaje)=>{
        return todosLosPersonajes
        })
        mostrar(resultado);
         };
 $todosB.addEventListener('click',mostrartodos)        


 // Mujer
 let $mujeresB = document.getElementById('mujeres')
 function mostrarmujeres (){
 let resultado = todosLosPersonajes.filter((personaje)=>{
 return personaje.gender === 'Female'
 })
 mostrar(resultado);
 };

 $mujeresB.addEventListener('click',mostrarmujeres)


// Hombre
 let $hombresB = document.getElementById('hombres')
 function mostrarhombres(){
    let resultado = todosLosPersonajes.filter ((personaje)=>{
        return personaje.gender === 'Male'
 })
 mostrar(resultado);
 };
 $hombresB.addEventListener('click',mostrarhombres)

//  sin genero 
let $sinGeneroB = document.getElementById ('singenero')
function mostrarsingenero(){
    let resultado = todosLosPersonajes.filter ((personaje)=>{
        return personaje.gender === 'Genderless'
    })
    mostrar(resultado);
};
$sinGeneroB.addEventListener('click',mostrarsingenero)

// unknown
let $generodesconocido = document.getElementById ('generodesconocido')
function mostrardesconocido(){
    let resultado = todosLosPersonajes.filter ((personaje)=>{
        return personaje.gender === 'unknown'
    })
    mostrar(resultado);
};
$generodesconocido.addEventListener('click',mostrardesconocido)



// paginado
let pagina = 1;
usarFetch(pagina);
// Primera pagina 
let $primeraB = document.getElementById('primera')
function primeraPagina(){
    usarFetch(1)
    $primeraB.disabled = true
   $anteriorB.disabled = true
   
  if(pagina ===1){
    $siguienteB.disabled = false
    $ultimaB.disabled = false
  } 
};
$primeraB.addEventListener('click',primeraPagina)

// Pagina Anterior
let $anteriorB = document.getElementById('anterior')
function anteriorPagina (){
    pagina--;
    if(pagina === 1){
        $anteriorB.disabled = true
        $primeraB.disabled = true
    } else{
        $anteriorB.disabled = false
        $primeraB.disabled = false
        $siguienteB.disabled = false
        $ultimaB.disabled = false
    }

    usarFetch(pagina)
};
$anteriorB.addEventListener('click',anteriorPagina)

// Siguiente Pagina


let $siguienteB = document.getElementById('siguiente')
function siguientePagina (){
    pagina++;
    if(pagina === 42){
        $siguienteB.disabled = true
        $ultimaB.disabled = true
    } else {
        $siguienteB.disabled = false
        $ultimaB.disabled = false
        $anteriorB.disabled = false
        $primeraB.disabled = false
    }
    usarFetch(pagina)
};

$siguienteB.addEventListener('click',siguientePagina)

// Ultima pagina
let $ultimaB = document.getElementById('ultima')
function ultimaPagina(){
      usarFetch(42)
    $siguienteB.disabled = true
    $ultimaB.disabled = true
    if(pagina ===42){
        $primeraB.disabled = false
        $anteriorB.disabled = false
    }
    
};
$ultimaB.addEventListener('click',ultimaPagina)














    




