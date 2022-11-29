/*do{
        respuesta =
        prompt('Responde si la siguiente lista muestra los productos que quieres comprar: \nBikini Palm \nBikini Shell \nBikini Tie Dye \nResponde: \nsi : Si es correcta \nno : No son los productos que selecioné')
        
    } while (respuesta === 'si' && respuesta === 'no'){
        if (respuesta === 'si'){
            alert('Tu total a pagar es de $13200 \nMuchas Gracias por tu compra en Zöld!')
        } else if (respuesta === 'no'){
            alert('Disculpe las molestias')
        } else{
            alert('Ingrese una respuesta válida')
        }
    }
*/
/*
'Elije qué producto te gustaria llevarte! \n Responde con el numero como aparece \n01.Bikini Palm\n02.Bikini Tie Dye\n03.Bikini Shell\n04.Bikini Fruit\n05.Bikini Leaves\n06.Bikini Sea\n07.Bikini Orange\n08.Bikini Ethnic\n09.Body Birds\n10.Body Flower Blue Green\n11.Body Flower Pink\n12.Body Green\n13.Body Jungle\n14.Body Leaves\n15.Body Sea\n16.Body Shell\n17.Body Tie Dye\n18.Conjunto Maui\n19.Conjunto Trevo\n20.Conjunto Waikiki\n21.Conjunto Miniki\n22.Conjunto Vinca'
*/
/*
do{
        respuesta = parseInt(prompt('Bienvenida/o!! \n¿Te gustaria comprar 1 o +1 producto hoy? \nResponde: \n01: Solo quieres comprar un producto. \n02: Si quieres comprar +1 producto.'));
    } while (respuesta === 01 && respuesta === 02){
        if (respuesta === 01){
            respuesta = unProducto = seleccionUnProducto();
        } else if (respuesta === 02 ){
            respuesta = masProductos = sumaDeProductos();
        } else{
            alert('Ingrese una respuesta válida')
        }
    }
*/

//Declaracion de clase
class Producto {
    constructor ( id, nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    }
}
//Declaracion de array y objetos
const producto1 = new Producto (01, "Biniki Palm",4400);
const producto2 = new Producto (02, "Bikini Tie Dye", 4400);
const producto3 = new Producto (03, "Bikini Shell", 4400);
const producto4 = new Producto (04, "Bikini Fruit", 4400);
const producto5 = new Producto (05, "Bikini Leaves", 4400);
const producto6 = new Producto (06, "Bikini Sea", 4400);
const producto7 = new Producto (07, "Body Orange", 5500);
const producto8 = new Producto (08, "Body Ethnic", 5500);
const producto9 = new Producto (09, "Body Birds", 5500);
const producto10 = new Producto (10, "Body Flower Blue Green", 5500);
const producto11 = new Producto (11, "Body Flower Pink", 5500);
const producto12 = new Producto (12, "Body Green", 5500);
const producto13 = new Producto (13, "Body Jungle", 5500);
const producto14 = new Producto (14, "Body Leaves", 5500);
const producto15 = new Producto (15, "Body Sea", 5500);
const producto16 = new Producto (16, "Body Shell", 5500);
const producto17 = new Producto (17, "Body Tie Dye", 5500);
const producto18 = new Producto (18, "Conjunto Maui", 6000);
const producto19 = new Producto (19, "Conjunto Trevo", 6000);
const producto20 = new Producto (20, "Conjunto Waikiki", 6000);
const producto21 = new Producto (21,"Conjunto Miniki", 6000);
const producto22 = new Producto (22, "Conjunto Vinca", 6000);
const producto23 = new Producto (23, "Conjunto Kauai", 6000);

const arrayProducto = [];
arrayProducto.push(producto1);
arrayProducto.push(producto2);
arrayProducto.push(producto3);
arrayProducto.push(producto4);
arrayProducto.push(producto5);
arrayProducto.push(producto6);
arrayProducto.push(producto7);
arrayProducto.push(producto8);
arrayProducto.push(producto9);
arrayProducto.push(producto10);
arrayProducto.push(producto11);
arrayProducto.push(producto12);
arrayProducto.push(producto13);
arrayProducto.push(producto14);
arrayProducto.push(producto15);
arrayProducto.push(producto16);
arrayProducto.push(producto17);
arrayProducto.push(producto18);
arrayProducto.push(producto19);
arrayProducto.push(producto20);
arrayProducto.push(producto21);
arrayProducto.push(producto22);
arrayProducto.push(producto23);

//variable donde se va a almacenar las respuestas
let unProducto;
let masProductos;
let seleccionPrimerProd;
let segundoProducto;
let precio1;
let precio2;

//funciones
function comienzo(respuesta){
    respuesta = parseInt(prompt('Bienvenida/o!! \n¿Te gustaria comprar 1 o +1 producto hoy? \nResponde: \n01: Solo quieres comprar un producto. \n02: Si quieres comprar +1 producto.'));
    switch (respuesta){
        case 1:
            seleccionUnProducto();
            break;
        case 2:
            segundaOpcion();
            break;
    }
}
function seleccionUnProducto (unProducto){
    do{
        unProducto = parseInt(prompt('Elije qué producto te gustaria llevarte! \n Responde con el numero como aparece \n01.Bikini Palm\n02.Bikini Tie Dye\n03.Bikini Shell\n04.Bikini Fruit\n05.Bikini Leaves\n06.Bikini Sea\n07.Bikini Orange\n08.Bikini Ethnic\n09.Body Birds\n10.Body Flower Blue Green\n11.Body Flower Pink\n12.Body Green\n13.Body Jungle\n14.Body Leaves\n15.Body Sea\n16.Body Shell\n17.Body Tie Dye\n18.Conjunto Maui\n19.Conjunto Trevo\n20.Conjunto Waikiki\n21.Conjunto Miniki\n22.Conjunto Vinca'));
    } while(unProducto <=06 , unProducto <= 17 , unProducto >=23){
        if(unProducto <= 06){
            alert('Esperamos que disfrutes tu bikini este verano! \nEl total de tu compra es de $4400')
        }else if(unProducto >= 07, unProducto <= 17){
            alert('Esperamos que disfrutes tu Body este verano! \nEl total de tu compra es de $5500')
        }else if(unProducto >= 17, unProducto < 23){
            alert('Esperamos que disfrutes tu Conjunto Deportivo! \nEl total de tu compra es de $6000')
        }else{
            alert('Ingrese una respuesta válida')
        }
    }
}
function segundaOpcion(){
    do{
        
        seleccionPrimerProd = parseInt(prompt('Elije qué producto te gustaria llevarte! \n Responde con el numero como aparece \n01.Bikini Palm\n02.Bikini Tie Dye\n03.Bikini Shell\n04.Bikini Fruit\n05.Bikini Leaves\n06.Bikini Sea\n07.Bikini Orange\n08.Bikini Ethnic\n09.Body Birds\n10.Body Flower Blue Green\n11.Body Flower Pink\n12.Body Green\n13.Body Jungle\n14.Body Leaves\n15.Body Sea\n16.Body Shell\n17.Body Tie Dye\n18.Conjunto Maui\n19.Conjunto Trevo\n20.Conjunto Waikiki\n21.Conjunto Miniki\n22.Conjunto Vinca'));
    } while(seleccionPrimerProd <=06 , seleccionPrimerProd <= 17 , seleccionPrimerProd >=23){
        if(seleccionPrimerProd <= 06){
            seleccionPrimerProd = precio1 = 4400;
        }else if(seleccionPrimerProd >= 07, seleccionPrimerProd <= 17){
            seleccionPrimerProd = precio1 = 5500;
        }else if(seleccionPrimerProd >= 17, seleccionPrimerProd < 23){
            seleccionPrimerProd = precio1 = 6000;
        }else{
            alert('Ingrese una respuesta válida')
        }
    }
    console.log(precio1)
    do{
        segundoProducto = parseInt(prompt('Elije qué producto te gustaria llevarte! \n Responde con el numero como aparece \n01.Bikini Palm\n02.Bikini Tie Dye\n03.Bikini Shell\n04.Bikini Fruit\n05.Bikini Leaves\n06.Bikini Sea\n07.Bikini Orange\n08.Bikini Ethnic\n09.Body Birds\n10.Body Flower Blue Green\n11.Body Flower Pink\n12.Body Green\n13.Body Jungle\n14.Body Leaves\n15.Body Sea\n16.Body Shell\n17.Body Tie Dye\n18.Conjunto Maui\n19.Conjunto Trevo\n20.Conjunto Waikiki\n21.Conjunto Miniki\n22.Conjunto Vinca'));
    }while(segundoProducto <=06 , segundoProducto <= 17 , segundoProducto >=23){
        if(segundoProducto <= 06){
            segundoProducto = precio2 = 4400;
        }else if(segundoProducto >= 07, segundoProducto <= 17){
                segundoProducto = precio2 = 5500;
        }else if(segundoProducto >= 17, segundoProducto < 23){
            segundoProducto = precio2 = 6000;
        }else{
            alert('Ingrese una respuesta válida')
        }
    }
    console.log(precio2);
    while(precio1 <= 6000 && precio2 <= 6000){
        let suma = precio1 + precio2;
        if(suma <= 12000){
            alert("Su total es de $" + suma );
        }
        break;
    }
}

/*function seleccionPrimerProd (primerProducto, precio1){
    do{
        primerProducto = parseInt(prompt('Elije qué producto te gustaria llevarte! \n Responde con el numero como aparece \n01.Bikini Palm\n02.Bikini Tie Dye\n03.Bikini Shell\n04.Bikini Fruit\n05.Bikini Leaves\n06.Bikini Sea\n07.Bikini Orange\n08.Bikini Ethnic\n09.Body Birds\n10.Body Flower Blue Green\n11.Body Flower Pink\n12.Body Green\n13.Body Jungle\n14.Body Leaves\n15.Body Sea\n16.Body Shell\n17.Body Tie Dye\n18.Conjunto Maui\n19.Conjunto Trevo\n20.Conjunto Waikiki\n21.Conjunto Miniki\n22.Conjunto Vinca'));
    } while(primerProducto <=06 , primerProducto <= 17 , primerProducto >=23){
        if(primerProducto <= 06){
            primerPrecio = precio1 = 4400;
        }else if(primerProducto >= 07, primerProducto <= 17){
            primerPrecio = precio1 = 5500;
        }else if(primerProducto >= 17, primerProducto < 23){
            primerPrecio = precio1 = 6000;
        }else{
            alert('Ingrese una respuesta válida')
        }
        console.log(precio1)
    }
    return precio1;
}
function seleccionSegundoProd (segundoProducto, precio2){
    do{
        segundoProducto = parseInt(prompt('Elije qué producto te gustaria llevarte! \n Responde con el numero como aparece \n01.Bikini Palm\n02.Bikini Tie Dye\n03.Bikini Shell\n04.Bikini Fruit\n05.Bikini Leaves\n06.Bikini Sea\n07.Bikini Orange\n08.Bikini Ethnic\n09.Body Birds\n10.Body Flower Blue Green\n11.Body Flower Pink\n12.Body Green\n13.Body Jungle\n14.Body Leaves\n15.Body Sea\n16.Body Shell\n17.Body Tie Dye\n18.Conjunto Maui\n19.Conjunto Trevo\n20.Conjunto Waikiki\n21.Conjunto Miniki\n22.Conjunto Vinca'));
    } while(segundoProducto <=06 , segundoProducto <= 17 , segundoProducto >=23){
        if(segundoProducto <= 06){
            segundoProducto = precio2 = 4400;
        }else if(segundoProducto >= 07, segundoProducto <= 17){
            segundoProducto = precio2 = 5500;
        }else if(segundoProducto >= 17, segundoProducto < 23){
            segundoProducto = precio2 = 6000;
        }else{
            alert('Ingrese una respuesta válida')
        }
        console.log(precio2);
    }
    return precio2
}
function suma( precio1, precio2, total){
    total = precio1 + precio2;
    console.log(total);
}*/
//console.log(suma);
/*let respuesta = comienzo();
switch(respuesta){
    case 1:
        seleccionUnProducto();
        break;
    case 2:
        seleccionMasProductos();
        break;
}
*/
/*
let respuesta1  
function numeroProducto(arrayProducto){
    for (let i = 0; i < arrayProducto.length ; i++){
        let primerProducto = parseInt(prompt('Elije qué producto te gustaria llevarte! \n Responde con el numero como aparece \n01.Bikini Palm\n02.Bikini Tie Dye\n03.Bikini Shell\n04.Bikini Fruit\n05.Bikini Leaves\n06.Bikini Sea\n07.Bikini Orange\n08.Bikini Ethnic\n09.Body Birds\n10.Body Flower Blue Green\n11.Body Flower Pink\n12.Body Green\n13.Body Jungle\n14.Body Leaves\n15.Body Sea\n16.Body Shell\n17.Body Tie Dye\n18.Conjunto Maui\n19.Conjunto Trevo\n20.Conjunto Waikiki\n21.Conjunto Miniki\n22.Conjunto Vinca'));
        respuesta1 = primerProducto;
        if(arrayProducto.id[i] === respuesta1){
            id = arrayProducto.find((Producto) => Producto.id === i);
        }
    }   
}
console.log(numeroProducto)
arrayProducto.length
*/
/*id = arrayProducto.find((Producto) => Producto.id === 1);
console.log(id)*/
/*console.log(producto1)
const a = producto19[producto1.length - 1];
console.log(a)
*/
