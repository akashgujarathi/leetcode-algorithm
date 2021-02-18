/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let score = []
    ops.forEach((op)=>{
        if(op === 'C'){
            score.pop()
        }else if(op === 'D'){
            score.push(score[score.length-1]*2)
        }else if(op === '+'){
            score.push(score[score.length-1] + score[score.length-2])
        }
        else{
            score.push(Number(op))
        }
    })
    return score.reduce((a,b)=>{
        return a+b
    }, 0)
};
