import {promises as fs} from "fs";

class ProductManager {
    constructor(){
        this.patch = "./productos.txt"
        this.products= [];
    }
    static id = 0;

    addProduct = async (title, description, price, imagen, code, stock) =>{

        ProductManager.id++;

        let newProduct = {
            title,
            description,
            price,
            imagen,
            code,
            stock,
            id: ProductManager.id,   
        };

        console.log(newProduct);

  this.products.push(newProduct);        

await fs.writeFile(this.patch, JSON.stringify(this.products));
    };

    readProducts = async () => {
    let respuesta = await fs.readFile(this.patch, "utf-8"); 
    return JSON.parse(respuesta); };


    getProducts = async () => {
        let respuesta2 = await this.readProducts()
        return console.log(respuesta2);
    }

    getProductsById = async () => {
        

    }
   deleteProductsById = async (id) => {
    let respuesta3 = await this.readProducts();
    let productFilter = respuesta3.filter((products) => products.id != id);
    await fs.writeFile(this.patch, JSON.stringify(productFilter));
    console.log("Producto Eliminado");
   };

   updateProducts = async ({id, ...producto}) => {
    await this.deleteProductsById(id);
    let productsOld = await this.readProducts();
    let productsModif = [{...producto, id}, ...productsOld];
    await fs.writeFile(this.patch, JSON.stringify(productsModif));
   }

}

//const productos = new ProductManager();

/* productos.addProduct("producto prueba1", "Este es un producto prueba1", 200, "Sin imagen", "abc111", 25);  
productos.addProduct("producto prueba2", "Este es un producto prueba2", 1000, "Sin imagen", "abc222", 25);  
productos.addProduct("producto prueba3", "Este es un producto prueba3", 1200, "Sin imagen", "abc333", 25);
productos.addProduct("producto prueba4", "Este es un producto prueba4", 200, "Sin imagen", "abc444", 25);  
productos.addProduct("producto prueba5", "Este es un producto prueba5", 1000, "Sin imagen", "abc555", 25);  
productos.addProduct("producto prueba6", "Este es un producto prueba6", 1200, "Sin imagen", "abc666", 25);
productos.addProduct("producto prueba7", "Este es un producto prueba7", 200, "Sin imagen", "abc777", 25);  
productos.addProduct("producto prueba8", "Este es un producto prueba8", 1000, "Sin imagen", "abc888", 25);  
productos.addProduct("producto prueba9", "Este es un producto prueba9", 1200, "Sin imagen", "abc999", 25);
productos.addProduct("producto prueba10", "Este es un producto prueba10", 1200, "Sin imagen", "abc1010", 25); */

//productos.getProducts();

//productos.getProductById(3);

//productos.deleteProductsById(2);

/* productos.updateProducts({
    title:"producto prueba3",
    description: "Este es un producto prueba3",
    price: 1200,
    imagen: "Sin imagen",
    code: "abc333",
    stock: 25,
    id:3,
}); */

export default ProductManager;