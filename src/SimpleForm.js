import { useState } from "react"

const SimpleForm = () => {
    const initalState = {
        email: ""
    }

    const [formData, setFormData] = useState(initalState)
    const handleChange = e => {
        const { name, value } = e.target

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { email } = formData

        alert(`Added you to mailing list, ${email}`)
        setFormData(initalState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Simple Form</h3>
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                placeholder="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange} 
            />
            <button>Add me to list!</button>
        </form>
    )
}

export default SimpleForm