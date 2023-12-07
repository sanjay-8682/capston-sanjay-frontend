import React,{useState} from 'react';
//import "./mix.css";
import {NavLink} from 'react-router-dom';
import {gmLogo} from '../Constants/constant'
import { Input,Button,styled } from '@mui/material';


const SubmitButton =styled(Button)({
  background:'#0B57D0',
  color:'#fff',
  fontWeight:500,
  textTransform:'none',
  borderRadius:18,
  width:100
})

  
const Register = () => {

    const [inpval,setInpval]=useState({
        fname:"",
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
    }

    //New User SignUp
    
     const addUserdata=async(e)=>{
          e.preventDefault()

          const {fname,email,password}=inpval;

          if(fname===""){
            alert("please enter your name");
          }else if(email===""){
            alert("pleas put your email");
          }else if(!email.includes("@")){
            alert("enter valid email");
          }else if(password===""){
            alert("pleas enter passwoed")
          }else if(password.length<8){
            alert("password must be 8 charecters");
          }else{
           alert("user registration successfully");
           const data=await fetch("http://localhost:4000/api/gmail/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username:fname,email,password
            })
           });

           const res = await data.json();
           console.log(res);
          }
     }

    return (
        <>
      <section className='container' style={{width:500,marginLeft:355}}>  
        <div className="form_data">
            <div className="form_heading">
            <img src={gmLogo} alt='Logo' style={{width:110, marginLeft:10}} />
            </div>
            <form>
            <div className="form_input">
                    <lable htmlFor="fname"></lable>
                    <Input type="text" onChange={setVal} value={inpval.fname} name="fname"  placeholder='Name'/>
                  
                </div>

                <div className="form_input">
                    <lable htmlFor="email"></lable>
                    <Input type="email" onChange={setVal} value={inpval.email} name="email"  placeholder='Email'/>
                </div>
                <div className="form_input">
                    <lable htmlFor="password"></lable>
                    <div className='two'>
                    <Input type="password" onChange={setVal} value={inpval.password} name="password"  placeholder='Password'/>

                    </div>
                </div>
                 <SubmitButton className='btn_2' onClick={addUserdata}>Submitt</SubmitButton>
                 <p>You have an Account? <NavLink to="/">Log in</NavLink></p>
            </form>
        </div>
      </section>
        </>
    );
};

export default Register;