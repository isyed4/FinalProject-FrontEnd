import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {connect} from 'react-redux';
import {login} from '../actions/auth';



const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData;

    const onChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault()

        login(email, password);
    }

    // Is the user authenticated?
    // Redirect them to the home page
    if (isAuthenticated) {
        return <Navigate to='/'/>
    }

    return(
        <div className="container_mt-5">
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <hr/>
            <form onSubmit={e => onSubmit(e)}>
                 <div className="form-group">
                     <input 
                     className="form-control"
                     type="email" 
                     placeholder="Email"
                     name="email"
                     value={email}
                     onChange={e => onChange(e)}
                     required
                     />
                </div>
                <div className="form-group">
                     <input 
                     className="form-control"
                     type="password" 
                     placeholder="Password"
                     name="password"
                     value={password}
                     onChange={onChange}
                     minLength='6'
                     required
                     />
                </div>
                <button className='btn btn-primary' type="submit">Login</button>
        </form>
        <p className="mt-3">
            Don't have an account? <Link to='/signup'>Sign Up</Link>
        </p>
        <p className="mt-3">
            Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
        </p>
        </div>
    )
}

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

