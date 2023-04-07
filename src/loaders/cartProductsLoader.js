import { getShoppingCart } from "../utilities/fakedb";

// useEffect(() =>{
//     fetch('products.json')
//     .then(res => res.json())
//     .then(data => setProducts(data))
// }, []);

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();


    // if cart data is in database, you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];
    // console.log(storedCart);


    //step: 1 get id of the addedProduct
    for(const id in storedCart){
        // step: 2 get product from products state by using id 
        const addedProduct = products.find(pd => pd.id === id);

        if(addedProduct){
             // step : 3 add quantity 
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
              // step: 4 add the added product to the saved cart 
              savedCart.push(addedProduct);
        }
    }

    // //if you need to send two things
    // return[products, savedCart];
    // //another options
    // return{products, cart: savedCart}

    return savedCart;
}
export default cartProductsLoader;