import {Link} from 'react-router-dom'

const Nav=() => {
    return (
        <div className ="nav">
<Link to='/About'>
    <div>About</div>
</Link>
<Link to='/stocks'>
    <div>Home</div>
</Link>

        </div>
    )
}
export default Nav;
