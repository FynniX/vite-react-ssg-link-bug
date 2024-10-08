import { Link } from 'react-router-dom'

export function A() {
    return (
        <>
            A
            <br />
            <Link to={'/b'}>Link B</Link>
        </>
    )
}