function curriedAdd(total) {
    console.log('total is', total)
    if (!total) {
        console.log('returning this total', total)
        //if there is no number passed in, then return sum of all numbers
        return total || 0;
    } else {
        //return function with the total
        return function addAgain(num) {
            console.log('num is', num)
            if (!num) {
                return total
            } else {
                total = total + num
            }
            return addAgain
        }
    }
}

module.exports = { curriedAdd };
