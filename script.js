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
                    <a href="#" class="btn btn-light producto__info--boton ">Comprar</a>
                </div>
            </div>
                
`;
};



const contenedorPlantas = document.getElementById("contenedorPlantas");
contenedorPlantas.innerHTML = plantasHTML;
