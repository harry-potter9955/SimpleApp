import { useNavigate } from 'react-router-dom';
import '../styles/main.css'
const Main = () => {
    const navigate = useNavigate()
    return (
        <div className="background-main">
            <div className="box">
                <div className="svg"></div>
                <div className="title">Wloo Dee</div>
                <button className="btn" onClick={() => { navigate("/signup") }}>Signup</button>
            </div>
        </div>
    )
}
export default Main