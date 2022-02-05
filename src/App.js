import BlockObserve from './components/BlockObserve';
import Blocks from './components/Blocks';
import Txns from './components/Txns';
import Navbar from './components/Navbar';

const ethers = require('ethers');
const { useEffect, useState } = require('react');


export default function App() {
  const [blockNumber, setBlockNumber] = useState(0)
  const [block, setBlock] = useState([])
  const [toggle, setToggle] = useState(false)
  const [myTransaction, setMyTransaction] = useState(false)
  const [myBlockN, setMyBlockN] = useState(0)
  const [address, setAddress] = useState()
  const [balance, setBalance] = useState("loading")
  const [url, setUrl] = useState("https://eth-rinkeby.alchemyapi.io/v2/VroPR9Iigwfn-aPM6sqvAS2XeEAJVrNN")

  const provider = new ethers.providers.JsonRpcProvider(url);

  const main = async () => {       
    
    let myBlockNum = await provider.getBlockNumber()
    setBlockNumber(myBlockNum)

    let myBlock = await provider.getBlockWithTransactions(myBlockNum)
    setBlock(prevBlock => [myBlock, ...prevBlock])

  }

  const changeToggle = () => {
    setToggle(prevToggle => !prevToggle)
  }

  useEffect(() => {
    main()
    setTimeout(changeToggle, 16000)
    if(block.length > 3) {
      setTimeout(() => setBlock(prevBlock => prevBlock.filter((_, i) => i !== prevBlock.length - 1)), 800)
    }
  },[toggle])

  const getAddressValue = async () => {
    if (address !== undefined && address.length === 42) {
      let myBalance = await provider.getBalance(address)
      let myBalanceEth = ethers.utils.formatEther(myBalance)
      setBalance(myBalanceEth)
      alert(`your balance is: ${myBalanceEth} Eth`)
    }
  }

  useEffect(()=> {
    getAddressValue()
  },[address])
  
  return (
    <div>
      {
        myBlockN !== 0 ?  
        <BlockObserve
          myBlockN={myBlockN}
          block={block}
          setMyBlockN={setMyBlockN} 
        /> :
        myTransaction === false ?
        <div>
          <Navbar
            setAddress={setAddress}
            url={url}
            setUrl={setUrl}
            setBlock={setBlock}
          />
          <Blocks 
            block={block}
            setMyBlockN={setMyBlockN}
            setMyTransaction={setMyTransaction}
          />
        </div> :
        <Txns
          block={block}
          myTransaction={myTransaction}
          setMyTransaction={setMyTransaction} 
        />
      }
    </div>
  )
}

