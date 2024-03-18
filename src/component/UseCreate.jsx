

const UseCreatDate = () => {

    const dateobj = new Date();
    const month = dateobj.getMonth()
    let mothName;

    switch (month) {
        case 0: mothName = 'jan'
        break;

        case 1: mothName = 'feb'
        break;

        case 2: mothName = 'mar'
        break;

        case 3: mothName = 'apr'
        break;

        case 4: mothName = 'may'
        break;

        case 5: mothName = 'jun'
        break;

        case 6: mothName = 'jul'       
        break;

        case 7: mothName = 'aug'       
        break;

        case 8: mothName = 'sep'       
        break;

        case 9: mothName = 'oct'
        break;

        case 10: mothName = 'nov'
        break;

        case 11: mothName = 'Dec'
        break;

    
        
    }

    const date = `${mothName} ${dateobj.getDate()}, ${dateobj.getFullYear()}[
        ${dateobj.getHours()}:${dateobj.getMinutes()}
    ]`;
    return date
    
}

export default UseCreatDate