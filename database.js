const store = [
    {
        id: 0,
        type: "cake",
        name: "Blueberry Cheesecake",
        price: {
            no_bundle: 1499.00,
            with_bundle: null
        },
        defaultCurrency: "PHP",
        productDescription: "This rich, velvety, and luscious cheesecake is studded with blueberries that burst with sweetness in every bite.",
        imageSource: "p1_blueberry.jpg",
        storeStock: 100
    },
    {
        id: 1,
        type: "bread&pastries",
        name: "Filled Croissant",
        price: {
            no_bundle: null,
            with_bundle: {
                box_with_6: 90.00,
                box_with_12: 160.00
            }
        },
        defaultCurrency: "PHP",
        productDescription: "A rich, buttery, crescent-shaped roll of leavened dough with its rich flavorful fillings!",
        imageSource: "p12_croissant.webp",
        storeStock: 100
    }
]

module.exports = {
    store
}