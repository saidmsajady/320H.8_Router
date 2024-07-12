import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({firstName: '', lastName: ''});

    const nav = useNavigate()

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        nav(`/welcome/${formData.firstName}/${formData.lastName}`);
    }

  return (
    <>
        <form action='' onSubmit={handleSubmit}>
            <input placeholder='First Name' type='text' name='firstName' onChange={handleChange}/>
            <input placeholder='Last Name' type='text' name='lastName' onChange={handleChange} />
            <input type='submit' />
        </form>
    </>
  )
}

export default SignUp