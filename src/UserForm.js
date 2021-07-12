import { useState } from "react"

const UserForm = () => {

    const initialState = {  
        username: "",
        email: "",
        password: ""
    }

    // // pieces of s**** (state)

    const handleChange = e => {
        //e.target.value and e.target.name is what we utilize for generic handlers
        const { name, value } = e.target
        setFormData(data => ({
            ...data, 
            [name]: value
        }))
    }

    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        const { username, email, password } = formData
        alert(`Created user, ${username} with email ${email} & password ${password}`)
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit} >

            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                id="username"
                name="username"
                placeholder="username" 
                value={formData.username}  
                onChange={handleChange}  
            />

            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                placeholder="email" 
                id="email"
                name="email"
                value={formData.email} 
                onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input 
                type="password"
                placeholder="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />

            <button>Submit</button>
        </form>
    )
}

export default UserForm