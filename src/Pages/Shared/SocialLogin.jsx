import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";


const SocialLogin = () => {
    const {signInWithGoogle}=useContext(AuthContext);
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>console.error(error))
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning">Login With Google</button>
        </div>
    );
};

export default SocialLogin;