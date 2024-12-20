const productos =[
  {
    nombre:"Albahaca",
    imagen:"imagenes/Albahaca.jpg",
    precio:20
  },
  {
    nombre:"Aji Picante",
    imagen:"imagenes/Aji-Picante.jpg",
    precio:20
  },
  {
    nombre:"Aloe Vera",
    imagen:"imagenes/Aloe-vera.jpg",
    precio:20
  },
  {
    nombre:"Limonero",
    imagen:"imagenes/Limonero.jpg",
    precio:70
  },
  {
    nombre:"Menta",
    imagen:"imagenes/Menta.jpg",
    precio:20
  },
  {
    nombre:"Nispero",
    imagen:"imagenes/Nispero.jpg",
    precio:70
  },
  {
    nombre:"Palta",
    imagen:"imagenes/Palta.jpg",
    precio:70
  },
  {
    nombre:"Romero",
    imagen:"imagenes/Romero.jpg",
    precio:70
  },
  {
    nombre:"Ruda",
    imagen:"imagenes/Ruda.jpg",
    precio:20
  },
  {
    nombre:"Sansevieria",
    imagen:"imagenes/Sansevieria.jpg",
    precio:20
  },
]

let plantasHTML ="";

for (let i = 0; i < productos.length; i++) {
  plantasHTML +=`
            <div class="card producto__conteiner" >
                <img src=${productos[i].imagen} class="card-img-top producto__img" alt="Plata de Albahaca">
                <div class="card-body producto__info">
                    <p class="producto__info--titulo">${productos[i].nombre}</p>
                    <p class="card-text producto__info--precio">${productos[i].precio}</p>
                    <a  class="btn btn-light producto__info--boton">Agregar al carrito</a>
                </div>
            </div>
                
`;
};



const contenedorPlantas = document.getElementById("contenedorPlantas");
contenedorPlantas.innerHTML = plantasHTML;
const btnAgregar = document.querySelectorAll(".btn");
const listaCarrito = document.querySelector("#carrito ul");
const totalCarrito = document.querySelector("#carrito p");
const botonPagar = document.querySelector("#boton-pagar");
const botonborrar = document.querySelector("#boton-borrar")
const mensajePagarCarrito = document.querySelector("#mensaje-pagar")

botonborrar.addEventListener("click", borrarCarrito);
botonPagar.addEventListener("click", irAPagar);


let totalApagar= 0;

for (let i = 0; i < btnAgregar.length; i++) {
  function agregarElementoCarrito(){
    const elementoLi = document.createElement("li");
    elementoLi.innerText = `Planta:${productos[i].nombre}  $${productos[i].precio}`;

    listaCarrito.appendChild(elementoLi);
    totalApagar += productos[i].precio;

    totalCarrito.innerText = `Total a pagar $${totalApagar}`;
    
    mensajePagarCarrito.innerText = "";


  }

  btnAgregar[i].addEventListener("click", agregarElementoCarrito);
  
}




function borrarCarrito(){
  listaCarrito.innerHTML= "";
  totalCarrito.innerHTML= "Total a apagar: $0";
  totalApagar = 0;
  mensajePagarCarrito.innerText = "";

}






function irAPagar(){
  if (listaCarrito.innerText === "") {
    mensajePagarCarrito.innerText = "Ingresar un producto";
  }else{
    window.location.href="/pagos.html";
  }

  
};
