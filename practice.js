var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    },
];
var findNameOfTallestMountain = function (mountainArray) {
    var tallestMountain = mountainArray[0];
    for (var i = 0; i < mountainArray.length; i++) {
        if (tallestMountain.height < mountainArray[i].height) {
            tallestMountain = mountainArray[i];
        }
    }
    return tallestMountain.name;
};
var bigMountain = findNameOfTallestMountain(mountains);
var products = [
    {
        name: "Shirt",
        price: 78
    },
    {
        name: "Pants",
        price: 108
    },
    {
        name: "Sweater",
        price: 98
    },
];
var calcAverageProductPrice = function (productArray) {
    var productsTotal = 0;
    for (var i = 0; i < productArray.length; i++) {
        productsTotal += productArray[i].price;
    }
    return parseFloat((productsTotal / productArray.length).toFixed(2));
};
var averageProductPrice = calcAverageProductPrice(products);
console.log(averageProductPrice);
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    }, {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];
var calcInventoryValue = function (itemArray) {
    var total = 0;
    itemArray.forEach(function (item) {
        total += item.product.price * item.quantity;
    });
    return total;
};
var value = calcInventoryValue(inventory);
console.log(value);
