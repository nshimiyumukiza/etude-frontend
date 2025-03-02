import { useState } from "react"
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",

  });

  const handleChange = (e) =>{
    const {name,value} =e.target;
    setFormData({...formData,[name]:value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4550/user",formData);
    alert(response.data.message);
    console.log(response.data.message)
  }

  return (
    <div className='bg-gray-100'>
      <h1 className='p-10 text-green-500 text-center text-2xl font-bold'>Wellcome To My Webpage</h1>
      <div className='flex justify-center mt-4 '>
        <form onSubmit={handleSubmit} className='space-y-4' action="submit">
          <label className='flex flex-col' htmlFor="">
            <span>Name</span>
            <input className='px-3 py-1.5 border rounded-md outline-none bg-gray-50' type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Enter Your Name' />
          </label>
          <label className='flex flex-col' htmlFor="">
            <span>Email</span>
            <input className='px-3 py-1.5 border rounded-md outline-none bg-gray-50' type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter Your Email' />
          </label>
          <label className='flex flex-col' htmlFor="">
            <span>Password</span>
            <input className='px-3 py-1.5 border rounded-md outline-none bg-gray-50' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter Your Password' />
          </label>
          <button onClick={handleSubmit} className='border rounded-md px-3 py-2 bg-black text-white hover:bg-blue-600'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Register