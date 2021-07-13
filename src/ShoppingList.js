import { useState } from "react";
import NewItemForm from "./NewItemForm";
import Item from "./Item";
import {v4 as uuidv4} from "uuid"

const ShoppingList = () => {
    const INITIAL_STATE = [
        {id: uuidv4(), name: 'peanut butter', qty: 2},
        {id: uuidv4(), name: 'oat milk', qty: 3}
    ]

    const [items, setItems] = useState(INITIAL_STATE)

    const addItem = (name, qty) => {
        setItems(items => [...items, { id: uuidv4(), name, qty }])
    }

    return (
        <div>
            <h3>Shopping List</h3>
            <NewItemForm addItem={addItem} />
            <div>
                {items.map((el) => <Item name={el.name} qty={el.qty} key={el.id} />)}
            </div>
        </div>
    )
}

export default ShoppingList