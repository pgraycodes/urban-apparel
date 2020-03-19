import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const  addItem = item => ({

  type: CartActionTypes.ADD_ITEM,
  payload: item

})

//functionality to click the x at checkout
export  const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item

})

// remove item using arrow keys in quantity section 
export const removeItem = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item 

})