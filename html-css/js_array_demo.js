/**
 *  @description javascript 参考手册
 *  @link https://www.w3school.com.cn/js
 * */ 

// 数组方法
// join() 方法也可将所有数组元素结合为一个字符串。它的行为类似 toString()，但是您还可以规定分隔符：
var persons = ["zhangsan", "lisi", "wangwu", "zhaoliu"];
console.log(persons.join('-'));

// pop() 删除最后一个元素并返回  push() 在数组结尾处添加一个新元素 并返回 新数组的长度
var pop_item = persons.pop();
console.log(pop_item);
console.log(persons)

var length = persons.push("wanger");
console.log(length);
console.log(persons);

// 拼接数组
// splice()  attr_1 添加新元素的其实位置 attr_2 删除几个元素  其他参数 待添加的元素 
persons.splice(2,1, "zhangzhang", "panpan");
console.log(persons);
persons.splice(0, 1); // 删除 第一个元素
console.log(persons);

// concat() 连接多个数组 返回新的数组
// slice()  裁剪数组 返回新的数组

// 数组排序
// sort() 排序， 默认按字符大小排序 也可以传入自定义的比较函数
// reverse() 反转数组
var numbers = [2, 1, 4, 7, 3, 5, 8, 6]
numbers.sort();
console.log(numbers)
numbers.reverse();
console.log(numbers);

var numbers1 = [2, 1, 4, 7, 3, 5, 8, 6]
numbers1.sort(function(a, b){
    return b - a;
});
console.log(numbers1);

// 数组迭代
// Array.forEach() 方法为每个数组元素调用一次函数（回调函数）。完整参数有三个(项目值， 项目索引， 数组本身))
function eachFunction(value, index, array){
    console.log(index + " : " + value)
}
var numbers2 = [2, 1, 4, 7, 3, 5, 8, 6];
numbers2.forEach(eachFunction);
numbers2.forEach(function(value){
    console.log(value);
})

// Array.map  方法通过对每个数组元素执行函数来创建新数组。方法不会更改原始数组。
var numbers3 = numbers2.map(function(val){
    return val * 2;
});
console.log(numbers3);

//Array.filter() 方法创建一个包含通过测试的数组元素的新数组。
var over5 = numbers2.filter(function(val){
    return val > 5;
});
console.log(over5);

// Array.reduce() 方法在每个数组元素上运行函数，以生成（减少它）单个值。方法在数组中从左到右工作
// 回调函数四个参数(总数（初始值/先前返回的值， 项目值， 项目索引， 数组本身)
var sum = numbers2.reduce(function(total, val){
    return total + val;
});
console.log(sum);

// Array.every() 方法检查 所有 数组值是否通过测试。
var allOver5 = numbers2.every(function (val) { return val > 5  });
console.log(allOver5);

// Array.some() 方法检查 某些 数组值是否通过了测试。
var someOver5 = numbers2.some(function (val) { return val > 5  });
console.log(someOver5)

// Array.indexOf() Array.lastIndexOf()

// Array.find() 方法返回通过测试函数的 第一个 数组元素的 值。 findIndex()
var firstOver5 = numbers2.find(function (val) { return val > 5  });
console.log(firstOver5);