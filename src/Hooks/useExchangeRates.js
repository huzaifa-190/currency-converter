import React, { useEffect, useState } from 'react'

function useExchangeRates(currency) {
    
    const [exchangeRates,setData] = useState({})
    const curr = currency.tolowercase
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => {
            
            console.log("Currency Rates in Hook ==> ",res)
            setData(res[currency])
        })
        .catch((err)=>console.log(err))
            
    
    
    },[currency])
    return { exchangeRates};
}

export default useExchangeRates