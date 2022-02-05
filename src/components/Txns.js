export default function Txns({block, myTransaction, setMyTransaction}) {

    function goBack() {
        setMyTransaction(false)
    }

    return (
        <div className="tx--container">
            {block.map(b => {
                if (b.number === myTransaction) {
                    return b.transactions.map((tx, i) => {
                        return (
                        <div className="tx" key={i}>
                            <div className="tx--prop">
                                <p>txn hash:</p>
                                <p className="tx--prop--second">{tx.hash}</p>
                            </div>
                            <div className="tx--prop">
                                <p>from:</p>
                                <p className="tx--prop--second">{tx.from}</p>
                            </div>
                            <div className="tx--prop">
                                <p>to:</p>
                                <p className="tx--prop--second">{tx.to}</p>
                            </div>
                        </div>
                        )
                    })
                }
            })}
            <button className="button" onClick={goBack}>go back</button>
        </div>
    )
}