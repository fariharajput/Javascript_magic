const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '186', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '156', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '156', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

// Exercises

// 1) Get a list of the orders for the customer with the ID 156 that have not been delivered.
let orderList = []
const unDelivered = orders.forEach((order) => {
    if (order.customerId == '156' && order.delivered !== true) {
        orderList.push(order)
    }
});

console.log(orderList);


// 2) Create a new property on each order with the total price of items ordered.

const total = orders.forEach((order) => {
    let sum = 0
        order.items.forEach(p => {
        sum += p.price;
    })
    order.totalPrice = sum  
});

console.log(orders)


// 3) Have all the orders been delivered?
let deliveredList = []
const delivered = orders.forEach((order) => {
    if (order.delivered === true) {
        deliveredList.push(order)
    }
});

console.log(deliveredList);


// 4) Has the customer with ID '123' made any orders? //return true or false
const hasOrder = orders.find(order => {
    return order.customerId === '123'
})

if (hasOrder) {
    console.log(true)
} else {
    console.log(false)
}

// 5) Have any products with an id=186 been sold? //check if someone ordered products with id = 186

const hasFound = orders.find(order => {
    order.items.forEach(element => {
        if(element.productId === '186'){
            console.log(`customer id: ${order.customerId}`)
        } 
    });
})

