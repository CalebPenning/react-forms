import { useState } from "react"

const UserForm = () => {
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const [username, setUsername] = useState("testuser")
    return (
        <form>
            <input type="text" placeholder="username" value={username}  onChange={handleChange} />
            <button>Submit</button>
        </form>
    )
}

export default UserForm