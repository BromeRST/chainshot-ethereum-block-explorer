export default function Navbar({setAddress, url, setUrl, setBlock}) {

    function handleChange(event) {
        setUrl(event.target.value)
        setBlock([])
    }

    return (
        <nav>
            <input type="text" id="address" name="address" onChange={e => setAddress(e.target.value)} placeholder="ethereum address" />
            <select value={url} onChange={handleChange}>
                <option value="https://eth-rinkeby.alchemyapi.io/v2/VroPR9Iigwfn-aPM6sqvAS2XeEAJVrNN">rinkeby testnet</option>
                <option value="https://eth-mainnet.alchemyapi.io/v2/GeepTcW8EGQDN3DOp1sVbxoI6mCA0YTA">ethereum mainnet</option>
            </select>
        </nav>
    )
}