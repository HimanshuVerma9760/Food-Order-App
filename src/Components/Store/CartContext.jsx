import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (id) => {},
  removeItem: (id) => {},
});

function CartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // add item to the cart...
    const exsistingItemIndex = state.items.finIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (exsistingItemIndex > -1) {
      // updatedItems[exsistingItemIndex].quantity++;
      const updatedItem = {
        ...state.items[exsistingItemIndex],
        quantity: state.items[exsistingItemIndex].quantity + 1,
      };
      updatedItems[exsistingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.items, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    // remove item from cart....

    const exsistingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const updatedItems = [...state.items];

    if (
      exsistingItemIndex > -1 &&
      updatedItems[exsistingItemIndex].quantity > 1
    ) {
      const updatedItem = {
        ...state.items[exsistingItemIndex],
        quantity: state.items[exsistingItemIndex].quantity - 1,
      };
      updatedItems[exsistingItemIndex] = updatedItem;
    } else if (updatedItems[exsistingItemIndex].quantity === 1) {
      updatedItems.splice(exsistingItemIndex, 1);
    }
    return { ...state, items: updatedItems };
  }
  return state;
}

export default function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
