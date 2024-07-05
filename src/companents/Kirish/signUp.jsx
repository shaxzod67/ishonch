import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase";
import { AuthContext } from "../../contex/AuthContext";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  
 const {dispatch} = useContext(AuthContext);

    const handleSubmit =  () => {
      createUserWithEmailAndPassword(auth , email ,password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch({type:"LOGIN" , payload:user })
          navigate('/')
          console.log(user);
        })   
        .catch((error)=>{
          console.log('xato' , error);
        })
    };

    return (
        <div  >
            
            <section className=  "text-gray-400 w-[100%] h-[100vh] bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Ro'yhatdan o'tish</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
    </div>
    <div className="input_sign">
    <div className="relative sm:mb-0 flex-grow w-full">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative sm:mb-0 flex-grow w-full">
        <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
    
      <div className="button_sign">
      <button onClick={handleSubmit} type="submit" className="button1" >Jo'natish</button>
      <button type="submit" className="button2" ><Link className="link" to="/signin">Login</Link> </button>

      </div>
    </div>
       
  </div>
</section>
         
            
        </div>
    );
}




            // <form onSubmit={handleSubmit}>
            //     <h2>
            //        Ro'yhatdan otish
            //     </h2>
            //     <label htmlFor="email">
            //         E-mail:
            //         <input type="text" onChange={(e) => setEmail(e.target.value)} />
            //     </label>
            //     <label htmlFor="password">
            //         Password
            //         <input type="password" onChange={(e) => setPassword(e.target.value)} />
            //     </label>
            //     <button type="submit">Jonatish</button>
            //     <p>
            //         <Link to="/login">Login</Link>
            //     </p>
            // </form>






























// import { Link } from "react-router-dom"
// import  auth  from 'firebase/compat/app'; // adjust the import path for Firebase v9+
// import { createUserWithEmailAndPassword } from 'firebase/compat/auth'; // adjust the import path for Firebase v9+
// import { useState } from "react";

// function Signup() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
    

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await createUserWithEmailAndPassword(auth, email, password);
//             console.log('Malumot jonatildi');
//         } catch (error) {
//             console.log(error);
//         }
//     };
    
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <h2>
//                     Sign Up
//                 </h2>
//                 <label htmlFor="email">
//                     E-mail:
//                     <input type="text" onChange={(e) => setEmail(e.target.value)} />
//                 </label>
//                 <label htmlFor="password">
//                     Password
//                     <input type="password" onChange={(e) => setPassword(e.target.value)} />
//                 </label>
//                 <button type="submit">Submit</button>
//                 <p>
//                     <Link to="/login">Login</Link>
//                 </p>
//             </form>
//         </div>
//     )
// }

// export default Signup