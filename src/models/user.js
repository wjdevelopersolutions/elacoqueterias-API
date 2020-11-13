import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({

  Usr_Name: {
    type: String,
    required: true
  },
  Usr_Email: {
    type: String,
    required: true
  },
  Usr_Cart: {
    Cart_Items: [
      {
        Prod_Id: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        Item_Quantity: {
          type: Number,
          required: true
        }
      }
    ]
  }

});

usuarioSchema.methods.addToCart = function(product) {

  // devuelve la posicion en el arrglo [0,1,2,3...] de carrito en la databases
  // si el producto existe, si no existe devuelve un -1
  const cartProductIndex = this.Usr_Cart.Cart_Items.findIndex( cp => {
    return cp.Prod_Id.toString() === product._id.toString();
  }); 

  let newQuantity = 1;
  const updateCartItems = [...this.Usr_Cart.Cart_Items];
  
  // Si el producto existe en la base de datos la const sera igual a la posicion del
  // producto en el arreglo, por ende sera un numero de 0 en adelante, entramos al
  // condicional y seteamos la cantidad de este producto dentro del arreglo
  if( cartProductIndex >= 0 ){
    newQuantity = this.Usr_Cart.Cart_Items[cartProductIndex].Item_Quantity + 1;
    updateCartItems[cartProductIndex].Item_Quantity = newQuantity 
  }else {
    updateCartItems.push({ 
      Prod_Id: product._id, 
      Item_Quantity: newQuantity
    });
  }

  // Si la const es igual a -1 entonces el producto no existe 
  const updatedCart = { Cart_Items: updateCartItems };

  this.Usr_Cart = updatedCart;
  return this.save();

}


export default mongoose.model('User', usuarioSchema);

