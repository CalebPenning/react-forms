import { useState } from "react"
import reactDom from "react-dom"

const SimpleForm = () => {
    const initalState = {
        email: ""
    }

    const [formData, setFormData] = useState(initalState)
    const [isInvalid, setIsInvalid] = useState(true)
    const [isTouched, setIsTouched] = useState(false)
    const handleChange = e => {
        setIsTouched(true)
        const { name, value } = e.target
        value === '' ? setIsInvalid(true) : setIsInvalid(false)

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { email } = formData
        if (!isInvalid) {
            alert(`Added you to mailing list, ${email}`)
        setFormData(initalState)
        }
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
            {isInvalid && isTouched && <span style={{color: "red"}}>Email cannot be blank!</span>}
            <button>Add me to list!</button>
        </form>
    )
}

export default SimpleForm