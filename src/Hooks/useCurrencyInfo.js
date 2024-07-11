import React, { useEffect ,useState} from 'react'

function useCurrencyInfo() {
 
  const [currenciesData,setData] = useState([])

  useEffect(()=>{
    fetch(`https://gist.githubusercontent.com/ibrahimhajjaj/a0e39e7330aebf0feb49912f1bf9062f/raw/d160e7d3b0e11ea3912e97a1b3b25b359746c86a/currencies-with-flags.json`)
    .then((res) => res.json())
    .then((res) => {
      
      console.log("Currencies  ==> ",res)
      setData(res)
    })
    .catch((err)=>console.log("Error fetching data in useCurrencyInfo Hook => ",err))
        
  },[])
  return {currenciesData};

}

export default useCurrencyInfo