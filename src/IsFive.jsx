import React, { useMemo, memo} from 'react'

export const IsFive = memo(({value}) => {
    const hardFun = useMemo(()=>{ // Рабатает первый счетчик на ура! теперь hardFun зависит от      value т.е от второго счетчика
        console.log('Проверка на 5')
        let i = 0
        while(i<100000000) i++
        return value === 5 ? 'Да это пять' : 'Нет это не пять'
    },[value])

  return (
    <div>
       {hardFun}
    </div>
  )
},(data,newData)=>{
    console.log(data,newData)
    return ![5, 6].includes(newData.value); // перерендер после 5 
})
