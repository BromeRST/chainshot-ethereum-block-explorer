export default function Blocks({block, setMyBlockN, setMyTransaction}) {

    function clickOnBlockNum(e) {
        setMyBlockN(parseInt(e.target.name))
    }

    function clickOnTx(e) {
        setMyTransaction(parseInt(e.target.name))
    }

    return (
        <div className="block--container">
            {block.map((b,i) => b.number!== 0 && 
            <div className="block" key={i}>
                <p>block n: <a href="#" onClick={clickOnBlockNum} name={b.number}>{b.number}</a></p>
                <p>timestamp: {b.timestamp}</p>
                <a href="#" onClick={clickOnTx} name={b.number}>{b.transactions.length} txns</a>
            </div>)}
        </div>
    )
}