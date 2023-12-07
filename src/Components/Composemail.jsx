import React from 'react';
import {useState} from 'react'
import {Dialog,Box,Typography,styled,InputBase,TextField,Button} from '@mui/material';
import {Close,DeleteOutline} from '@mui/icons-material';
//import {NavLink} from "react-router-dom";

//Style Sheet{

const dialogStyle = {
    height:'90%',
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    borderRadius: '10px 10px 0 0'
}

const Header =styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    background:'#f2f6fc',
    '& > p':{
        fontSize:14,
        fontWeight:548,
    
    }

})

const ReceipientWrapper=styled(Box)({
     display:'flex',
     flexDirection:'column',
     padding:'0 15px',
     '& > div':{
        fontSize:14,
        borderBottom:'1px solid #F5F5F5',
        marginTop:10
     }
})

const Footer = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    alignItems:'center'
})

const SendButton =styled(Button)({
    background:'#0B57D0',
    color:'#fff',
    fontWeight:500,
    textTransform:'none',
    borderRadius:18,
    width:100
})

//}

const Composemail = ({openDialog,setOpenDialog}) => {
    const [data, setData] = useState({});

    const [email,setEmail]=useState("");
    
    const [subject,setSubject]=useState("");

    const [Text,setText]=useState("");

    const closeComposemail = (e) => {
        e.preventDefault();

        setOpenDialog(false);
    }

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value});
        console.log(data);

    }

    const sendMail = async(e) => {
        e.preventDefault();

        setOpenDialog(false);

      console.log(data);
        const res1=await fetch("http://localhost:4000/api/gmail/sendmail",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            },
            body:JSON.stringify(data)
         });
         const res=await res1.json();
         console.log(res);
         if(res.status==200){
            setEmail();
            setSubject();
            setText();
         }
 }

        

    return (
        <Dialog
          open={openDialog}
          PaperProps={{sx: dialogStyle}}
        >
        <Header>
             <Typography>New Message</Typography>
             <Close fontSize='small' onClick={(e) => closeComposemail(e)}/>
        </Header>
        <ReceipientWrapper>
          <InputBase placeholder='Receipient' name="email" onChange={(e) => onValueChange(e)}/>
          <InputBase placeholder='Subject' name="subject" onChange={(e) => onValueChange(e)}/>
        </ReceipientWrapper>
        <TextField
           placeholder='Compose email'
           multiline
           rows={13}
           sx={{'& .MuiOutlinedInput-notchedOutline':{border:'none'}}}
           onChange={(e) => onValueChange(e)}
           name="Text"
        />
        <Footer>
           <SendButton onClick={(e) => sendMail(e)}>SEND</SendButton>
           <DeleteOutline onClick={() => setOpenDialog(false)}/>
        </Footer>
        </Dialog>
     );
};

export default Composemail;