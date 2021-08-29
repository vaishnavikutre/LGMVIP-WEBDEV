import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(

        <div className='center'>
            <Loader
            type="TailSpin"
            color="black"
            height={180}
            width={180}
            timeout={4000}
        />
       </div>
    );
}
export default LoaderComp
