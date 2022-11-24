import React, { useContext } from "react";
// import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";


const SocialLogin = () => {
    const { googleSinIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSinIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.error(error));
    };
    return (
        <div className="mx-auto">
            <button
                onClick={handleGoogleSignIn}
                className=" btn btn-outline w-full bg-pink-400 px-36 py-3  text-white" >
                CONTINUE WITH GOOGLE
                {/* <FaGoogle /> */} </button>
        </div>
    );
};

export default SocialLogin;
