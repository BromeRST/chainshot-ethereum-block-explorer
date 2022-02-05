export default function Navbar({setAddress}) {

    return (
        <nav>
            <input type="text" id="address" name="address" onChange={e => setAddress(e.target.value)} placeholder="ethereum address" />
        </nav>
    )
}