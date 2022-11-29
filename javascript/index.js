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
*/
/*
do{
        respuesta = parseInt(prompt('Bienvenida/o!! \n¿Te gustaria comprar 1 o +1 producto hoy? \nResponde: \n01: Solo quieres comprar un producto. \n02: Si quieres comprar +1 producto.'));
    } while (respuesta === 01 && respuesta === 02){
        if (respuesta === 01){
            respuesta = unProducto;
        } else if (respuesta === 02 ){
            respuesta = masProductos;
        } else{
            alert('Ingrese una respuesta válida')
        }
    }
*/

//Declaracion de array y objetos
const producto1 = [01, "Biniki Palm",4400];
const producto2 = [02, "Bikini Tie Dye", 4400];
const producto3 = [03, "Bikini Shell", 4400];
const producto4 = [04, "Bikini Fruit", 4400];
const producto5 = [05, "Bikini Leaves", 4400];
const producto6 = [06, "Bikini Sea", 4400];
const producto7 = [07, "Body Orange", 5500];
const producto8 = [08, "Body Ethnic", 5500];
const producto9 = [09, "Body Birds", 5500];
const producto10 = [10, "Body Flower Blue Green", 5500];
const producto11 = [11, "Body Flower Pink", 5500];
const producto12 = [12, "Body Green", 5500];
const producto13 = [13, "Body Jungle", 5500];
const producto14 = [14, "Body Leaves", 5500];
const producto15 = [15, "Body Sea", 5500];
const producto16 = [16, "Body Shell", 5500];
const producto17 = [17, "Body Tie Dye", 5500];
const producto18 = [18, "Conjunto Maui", 6000];
const producto19 = [19, "Conjunto Trevo", 6000];
const producto20 = [20, "Conjunto Waikiki", 6000];
const producto21 = [21,"Conjunto Miniki", 6000];
const producto22 = [22, "Conjunto Vinca", 6000];
const producto23 = [23, "Conjunto Kauai", 6000];

//variable donde se va a almacenar las respuestas
let respuesta;
let unProducto;
let masProductos;

//funciones
function comienzo(){
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
function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    }
}
function sumaDeProductos (masProductos){
    do{
        masProductos = parseInt(prompt('Elije qué producto te gustaria llevarte! \n Responde con el numero como aparece \n01.Bikini Palm\n02.Bikini Tie Dye\n03.Bikini Shell\n04.Bikini Fruit\n05.Bikini Leaves\n06.Bikini Sea\n07.Bikini Orange\n08.Bikini Ethnic\n09.Body Birds\n10.Body Flower Blue Green\n11.Body Flower Pink\n12.Body Green\n13.Body Jungle\n14.Body Leaves\n15.Body Sea\n16.Body Shell\n17.Body Tie Dye\n18.Conjunto Maui\n19.Conjunto Trevo\n20.Conjunto Waikiki\n21.Conjunto Miniki\n22.Conjunto Vinca'));
    } while(unProducto <=06 , unProducto <= 17 , unProducto >=23){
        if(unProducto <= 06){
            
        }else if(unProducto >= 07, unProducto <= 17){
            alert('Esperamos que disfrutes tu Body este verano! \nEl total de tu compra es de $5500')
        }else if(unProducto >= 17, unProducto < 23){
            alert('Esperamos que disfrutes tu Conjunto Deportivo! \nEl total de tu compra es de $6000')
        }else{
            alert('Ingrese una respuesta válida')
        }
    }
}
function numeroProducto(){
    parseInt(prompt('Elije qué producto te gustaria llevarte! \n Responde con el numero como aparece \n01.Bikini Palm\n02.Bikini Tie Dye\n03.Bikini Shell\n04.Bikini Fruit\n05.Bikini Leaves\n06.Bikini Sea\n07.Bikini Orange\n08.Bikini Ethnic\n09.Body Birds\n10.Body Flower Blue Green\n11.Body Flower Pink\n12.Body Green\n13.Body Jungle\n14.Body Leaves\n15.Body Sea\n16.Body Shell\n17.Body Tie Dye\n18.Conjunto Maui\n19.Conjunto Trevo\n20.Conjunto Waikiki\n21.Conjunto Miniki\n22.Conjunto Vinca'));
    
}
console.log(producto1)
const a = producto19[producto1.length - 1];
console.log(a)