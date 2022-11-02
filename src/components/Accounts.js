// import the account logo into the component
import logo from "../assets/account-logo.jpeg";
import { Link } from "react-router-dom";

const Accounts = () => {
    return (
        <section className="accountPage">
            <p className="title">Who's watching</p>
            <Link to="/catalogue">
                <img src={logo} alt="The G.O.A.T" />
                <p>TIGER</p>
            </Link>
        </section>
    )
}

export default Accounts;