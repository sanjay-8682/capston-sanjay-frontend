import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import {gmLogo} from '../Constants/constant'
import { Input,Button,styled} from  '@mui/material';
import {axios} from 'react'
import { useNavigate } from "react-router-dom";


//import  "./mix.css";
const LoginButton =styled(Button)({
  background:'#0B57D0',
  color:'#fff',
  fontWeight:500,
  textTransform:'none',
  borderRadius:18,
  width:100
});


const Login = () => {

  const navigate = useNavigate();

   const [inpval,setInpval]=useState({
       email:"",
       password:""
   });


   //console.log(inpval);
   const setVal =(e)=>{
       //console.log(e.target.value);
   const {name,value}=e.target;

   setInpval(()=>{
      return{
          ...inpval,
          [name]:value
      }
   })
  };

  //Login and Validaton
  
  const loginUser=async(e)=>{
     

     e.preventDefault();


     const {email,password}=inpval

     if(email===""){
       alert("pleas put your email");
     }else if(!email.includes("@")){
       alert("enter valid email");
     }else if(password===""){
       alert("pleas enter passwoed")
     }else if(password.length<8){
       alert("password must be 8 charecters");
     }else{
        
        
       const data=await fetch("https://gmailclone-6c3i.onrender.com/api/gmail/login",{
         method:"POST",Mode:"cors",
         headers:{
             "Content-Type":"application/json"
            
         },
         body:JSON.stringify({
             email,password
         })
        });

        const res = await data.json();
        console.log(res);
         
        // Authorization for Users while Login

       if(res.token){
        localStorage.setItem("token", res.token);
        alert("user login successfully");
        navigate("/Home");
       }else{
        alert("Incorrect email or password")
       }

     }
     
  }

  return (
    <>
        <section className='container' style={{width:500,marginLeft:355, boxShadow:3}}>  
       <div className="form_data">
           <div className="form_heading">
           <img src={gmLogo} alt='Logo' style={{width:110, marginLeft:10}} />
           </div>
           <form>
               <div className="form_input">
                   <lable htmlFor="email"></lable>
                   <Input type="email" value={inpval.email} onChange={setVal} name="email"  placeholder='Email'/>
               </div>
               <div className="form_input">
                   <lable htmlFor="password"></lable>
                   <div className='two'>
                   <Input type="password" value={inpval.password} onChange={setVal} name="password"  placeholder='Password'/>
                    
                   </div>
               </div>
                <LoginButton  onClick={loginUser}>Login</LoginButton>
                <p>Don't have an Account? <NavLink to="/register">SignUp</NavLink></p>
                 
           </form>
       </div>
     </section>
    </>
  )
}

export default Login