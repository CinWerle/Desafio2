class ProductManager {
    constructor() {
        this.products = [];
    }
static id = 0

addProduct(title, description, price, thumnail, code, stock){
    for(let i = 0; i < this.products.length; i++) {
        if(this.products[i].code === code ) {
            console.log(`El codigo ${code} esta repetido`);
            break;
        }
    } 

    ProductManager.id++
    this.products.push({title, description, price, thumnail, code, stock, id:ProductManager.id});
}

getProduct(){
   return this.products;
 }

existe (id) {
    return this.products.find((producto) => producto.id === id)
}

getProductById(id){
    if(!this.existe(id)) {
   console.log("Not Found"); }
   else {
    console.log(this.existe(id));
   }
 }
}

const productos = new ProductManager();
//Primera llamada = arreglo vacio
console.log(productos.getProduct());

//Agrego producto
productos.addProduct("hamburguesa1", "hamburguesa con queso1", 1500, "imagen1", "burger123", 15);
productos.addProduct("hamburguesa2", "hamburguesa con queso2", 1500, "imagen2", "burger1234", 15);

//Segunda llamada = arreglo con producto
console.log(productos.getProduct());

//Prueba codigo repetido
productos.addProduct("hamburguesa2", "hamburguesa con queso2", 1500, "imagen2", "burger1234", 15);

productos.getProductById(6);
