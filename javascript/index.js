//variable donde se va a almacenar la respuesta
let respuesta;

//funcion de compra

function compra(){
    do{
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
}