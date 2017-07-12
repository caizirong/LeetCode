/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var a = [];
    for(var i=0;i < nums.length;i++){
        var temp = target - nums[i];
        if(a[temp]!== undefined) return [a[temp],i];
        a[nums[i]] = i;
    }
};
