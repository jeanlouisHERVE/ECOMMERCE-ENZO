const INITIAL_STATE = {
    cart: []
}

export default function cartReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADDITEM": 

        // le produit ajouté dans le panier existe-t-il déjà ?
        const indexItemAdd = state.card.findIndex(obj => obj.id === action.payload.id)
        
        if (indexItemAdd !== -1) {

            const updatedQuantity =  {
                ...state.cart[indexItemAdd],
                quantity: state.cart[indexItemAdd].quantity +
                action.payload.quantity
            }

            const newArr = [...state.cart]
            newArr.splice(indexItemAdd, 1, updatedQuantity)

            return {
                cart: newArr
            }


        } else {
            const newArr = [...state.cart]
            newArr.push(action.payload)
            return {
                cart: newArr
            }
        }
        case "UPDATEITEM": 
        return {

        }

        default: 
        console.log("")
    }

    return state;
}