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

  this.products.push(newProduct);        

await fs.writeFile(this.patch, JSON.stringify(this.products));
    };

    readProducts = async () => {
    let respuesta = await fs.readFile(this.patch, "utf-8"); 
    return JSON.parse(respuesta); };


    getProducts = async () => {
        //return JSON.parse();
    }

    getProductsById = async (id) => {
        //return JSON.parse();

    }
   deleteProductsById = async (id) => {
    let respuesta3 = await this.readProducts();
    let productFilter = respuesta3.filter((products) => products.id != id);
    await fs.writeFile(this.patch, JSON.stringify(productFilter));
    console.log("Producto Eliminado");
   };

   updateProducts = async ({id, ...producto}) => {
    await this.deleteProductsById(id);
    let productOld = await this.readProducts();
    let productsModif = [{...producto, id}, ...productOld];
    await fs.writeFile(this.patch, JSON.stringify(productsModif));
   }

}

const productos = new ProductManager();

/* productos.addProduct("producto prueba1", "Este es un producto prueba1", 200, "Sin imagen", "abc111", 25);  
productos.addProduct("producto prueba2", "Este es un producto prueba2", 1000, "Sin imagen", "abc222", 25);  
productos.addProduct("producto prueba3", "Este es un producto prueba3", 1200, "Sin imagen", "abc223", 25); */

//productos.getProducts();

//productos.getProductById(3);

//productos.deleteProductsById(2);

productos.updateProducts({
    title:"Titulo3",
    description: "Descripcion3",
    price: 4500,
    imagen: "Imagen3",
    code: "abc125",
    stock: 15,
    id:3,
});