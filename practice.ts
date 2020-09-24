// Tallest Mountain
interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    {
        name: "Kilimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
]

const findNameOfTallestMountain = (mountainArray: Mountain[]):string => {
    let tallestMountain:Mountain = mountainArray[0];
    for(let i=0; i < mountainArray.length; i++) {
        if (tallestMountain.height < mountainArray[i].height) {
            tallestMountain = mountainArray[i]
        }
    }
    return tallestMountain.name;
}
let bigMountain: string = findNameOfTallestMountain(mountains);
// console.log(bigMountain);

//Products
interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    {
        name: "Shirt",
        price: 78,
    },
    {
        name: "Pants",
        price: 108,
    },
    {
        name: "Sweater",
        price: 98,
    },
]

const calcAverageProductPrice = (productArray: Product[]):number => {
    let productsTotal:number = 0;
    for(let i = 0; i < productArray.length; i++) {
        productsTotal += productArray[i].price;
    }
    return parseFloat((productsTotal / productArray.length).toFixed(2));
    
}
const averageProductPrice:number = calcAverageProductPrice(products);
console.log(averageProductPrice);

//Inventory
interface InventoryItem {
    product: Product;
    quantity: number;
}
const inventory: InventoryItem[] = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10,
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4,
    },   {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20,
    }
]


const calcInventoryValue = (itemArray:InventoryItem[]):number => {
    let total = 0;
    itemArray.forEach((item) => {
        total += item.product.price * item.quantity;
    })
    return total;
}

const value = calcInventoryValue(inventory);
console.log(value);