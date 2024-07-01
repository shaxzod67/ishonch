import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export function Login() {
    const [err, setErr] = useState('Malumot Kiriting');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Login bor');
        } catch (error) {
            setErr("Bunday malumot yoq");
        }
    };

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <section className="text-gray-400 w-[100%] h-[100vh] bg-gray-900 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Login yozib kiring</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
                        </div>
                        <div className="input_sign">
                            <div className="relative sm:mb-0 flex-grow w-full">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative sm:mb-0 flex-grow w-full">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-400">Password</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="button_sign">
                                <button type="submit" className="button1">Kirish</button>
                                <button type="submit" className="button2"><Link to="/signup">Ro'yhatdan o'tish</Link></button>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );
}
