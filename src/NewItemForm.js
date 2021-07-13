import { useState } from "react";

const NewItemForm = ({ addItem }) => {
    const INITAL_STATE = {
        name: "",
        qty: ""
    }
    const [formData, setFormData] = useState(INITAL_STATE)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(form => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, qty } = formData
        addItem(name, qty)
        setFormData(INITAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Product Name</label>
            <input 
                type="text"  
                name="name"
                placeholder="Item Name"
                value={formData.name}
                onChange={handleChange}
            />
            
            <label htmlFor="qty">Product Quantity: {formData.qty}</label>
            <input 
                id="qty"
                type="range"
                name="qty"
                min="1"
                max="10"
                value={formData.qty}
                onChange={handleChange}
            />

            <button>Add Item(s)</button>
        </form>
    )
}

export default NewItemForm