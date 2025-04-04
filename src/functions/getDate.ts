function getCurrentSem(){
    const date = new Date();
    const month = date.getMonth() + 1; 
    if (month >= 1 && month <= 4) {
        return "spring";
    } else if (month >= 5 && month <= 8) {
        return "summer";
    }
    else if (month >= 9 && month <= 12) {
        return "fall";
    }
}

export default getCurrentSem;