// Code your solution here


function findMatching(drivers, string){
    return drivers.filter((el) => 
    el.toLowerCase().includes(string.toLowerCase()));
}

function fuzzyMatch (drivers, string){
    return drivers.filter((el) => 
    el.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(driver, string){
    return driver.filter((el) => 
    el.name === string)
}
