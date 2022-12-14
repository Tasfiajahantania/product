import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const handleLogin = (data) => {
        setLoginError('');
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                toast.success("successful login");
                console.log(user);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    };
    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-96 p-7 shadow-lg">
                <h2 className="flex justify-center text-3xl font-bold">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {" "}
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            {...register("email", {
                                required: "Email Address is required",
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && (
                            <p className="text-red-600">{errors.email?.message}</p>
                        )}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {" "}
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be 6 characters or longer",
                                },
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.password && (
                            <p className="text-red-600">{errors.password?.message}</p>
                        )}
                        <label className="label">
                            {" "}
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    <input
                        className="btn btn-accent w-full"
                        value="Login"
                        type="submit"
                    />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>

                    <Link className="text-secondary" to="/signup">
                        Create new Account
                    </Link>
                </p>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
