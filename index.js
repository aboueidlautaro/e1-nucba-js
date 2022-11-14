const pizzas = [
  {
    id: 1,
    name: "Pepperoni",
    toppings: [
      "Queso mozzarella",
      "Pepperoni",
      "Tomate",
      "Albahaca",
      "Orégano",
    ],
    price: 500,
  },
  {
    id: 2,
    name: "Hawaiana",
    toppings: ["Queso mozzarella", "Jamón", "Piña", "Tomate", "Albahaca"],
    price: 800,
  },
  {
    id: 3,
    name: "Vegetariana",
    toppings: [
      "Queso mozzarella",
      "Champiñones",
      "Pimiento rojo",
      "Pimiento verde",
      "Tomate",
    ],
    price: 1000,
  },
  {
    id: 4,
    name: "4 Quesos",
    toppings: [
      "Queso mozzarella",
      "Queso parmesano",
      "Queso azul",
      "Queso de cabra",
      "Tomate",
      "Pesto",
    ],
    price: 600,
  },
  {
    id: 5,
    name: "Carbonara",
    toppings: [
      "Queso parmesano",
      "Bacon",
      "Cebolla",
      "Pimienta",
      "Nata",
      "Champiñones",
    ],
    price: 1400,
  },
  {
    id: 6,
    name: "Barbacoa",
    toppings: [
      "Queso parmesano",
      "Carne picada",
      "Cebolla",
      "Pimiento rojo",
      "Pimiento verde",
      "Tomate",
      "Salsa barbacoa",
      "Bacon",
    ],
    price: 1200,
  },
]

console.warn("------ a) -------")
console.log(
  "%c" + "Pizass con id impar:",
  "color: #C785C8; font-size: 15px; font-weight: bold;"
)

pizzas.forEach((pizza) => {
  if (!(pizza.id % 2 == 0)) {
    console.log(`(${pizza.id}) Pizza ${pizza.name} `)
  }
})

console.warn("------ b) -------")
console.log(
  "%c" + "Pizass por menos de $600:",
  "color: #C785C8; font-size: 15px; font-weight: bold;"
)

pizzas.forEach((pizza) => {
  if (pizza.price <= 600) {
    console.log(`Pizza ${pizza.name} $${pizza.price}`)
  }
})

console.warn("------ c) -------")
console.log(
  "%c" + "Pizzas disponibles: ",
  "color: #C785C8; font-size: 15px; font-weight: bold;"
)

pizzas.forEach((pizza) => {
  console.log(`Pizza ${pizza.name} $${pizza.price}`)
})

console.warn("------ d) -------")
console.log(
  "%c" + "Ingredientes: ",
  "color: #C785C8; font-size: 15px; font-weight: bold;"
)

pizzas.forEach((pizza) => {
  console.log("%c" + "Pizza " + pizza.name, "color: #f7df1e; font-size: 13px;")

  pizza.toppings.forEach((topping) => console.log("-", topping))
})
