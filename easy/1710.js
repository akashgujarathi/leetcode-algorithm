/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let sorted_by_max_yeild = boxTypes.sort((a,b)=>{
        return  b[1] - a[1]
    })
    let sizeBalance = truckSize
    let max_total_units = 0

    sorted_by_max_yeild.forEach((box)=>{
        if(sizeBalance && box[0] <= sizeBalance){
            max_total_units += (box[0]*box[1])
            sizeBalance -= box[0]
        }else if(sizeBalance  > 0){
            max_total_units += (sizeBalance*box[1])
            sizeBalance = 0
        }
    });
    return max_total_units
};
