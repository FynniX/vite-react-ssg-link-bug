import {Link} from "react-router-dom";

export function B() {
    return (
        <>
            B
            <br />
            <Link to={'/a'}>Link A</Link>
        </>
    )
}