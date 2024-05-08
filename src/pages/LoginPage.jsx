import { useState  } from "react"
import {  useNavigate } from "react-router-dom"
import axios from "axios";



function LoginPage() {
   const navigate = useNavigate();
   const [userName,setUserName] = useState('')
   const [password,setPassword] = useState('')
   const [isValid , setIsValid] = useState(true)

 

   const loginData = async () =>  {
      try {
      const response = await axios.post('https://cc17-assessment-api.onrender.com/auth/login', {
          "email": userName,
          "password": password
      })
      console.log(response)
      if(response.data.status === 'success'){
          navigate('/main')}
      } catch (error) {
      setIsValid(false)
      console.log(error)
      
  }
}
   const handleUsername = (event) => {
      setIsValid(true)
       setUserName(event.target.value)
   }

   const handlePassword = (event) => {
      setIsValid(true)
       setPassword(event.target.value)
   }

   const handleLoginSubmit = (event) => {
      loginData();
      event.preventDefault();
      
   }

  return (
    <div className='login'>
      <div className='login__box'>
         <form className="login__Detail" onSubmit={handleLoginSubmit}>
            <h1>Welcome</h1>
            <label> E-mail</label>
            <input type="text" className={!isValid ? 'invalid_Input' : 'valid_Input' } onChange={handleUsername} />
            <label> Password </label>
            <input type="password" className={!isValid ? 'invalid_Input' : 'valid_Input' } onChange={handlePassword} />
            {!isValid ? <p className="login__Detail_invalid"> wrong email or password <br /> Hint : user: user7@mail.com / pw: asdf</p> : null}
            <button type="submit"> Login </button>
         </form>
      </div>
    </div>
  )
}

export default LoginPage