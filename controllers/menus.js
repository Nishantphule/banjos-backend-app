const menuRouter = require("express").Router();
const Menu = require("../models/menu")
require("dotenv").config();

menuRouter.get("/burger", async (req, res) => {
    const menuVeg = await Menu.find({ type: "burger", tag: "veg" }).sort({ price: 1 })
    const menuNonVeg = await Menu.find({ type: "burger", tag: "non veg" }).sort({ price: -1 })
    res.status(200).json({ veg: menuVeg, nonVeg: menuNonVeg });
})

menuRouter.get("/banjos", async (req, res) => {
    const menu = await Menu.find({ type: "banjos" })
    res.status(200).json({ menu });
})

menuRouter.get("/pasta", async (req, res) => {
    const menu = await Menu.find({ type: "Pasta" })
    res.status(200).json({ menu });
})

menuRouter.get("/sandwiches", async (req, res) => {
    const menu = await Menu.find({ type: "sandwiches" })
    res.status(200).json({ menu });
})

menuRouter.get("/pizza", async (req, res) => {
    const menu = await Menu.find({ type: "pizza" })
    res.status(200).json({ menu });
})

menuRouter.get("/momos", async (req, res) => {
    const menu = await Menu.find({ type: "momos" })
    res.status(200).json({ menu });
})

menuRouter.get("/maggi", async (req, res) => {
    const menu = await Menu.find({ type: "maggi" })
    res.status(200).json({ menu });
})

menuRouter.get("/salad", async (req, res) => {
    const menu = await Menu.find({ type: "salad" })
    res.status(200).json({ menu });
})

menuRouter.get("/tastyBites", async (req, res) => {
    const menu = await Menu.find({ type: "tastyBites" })
    res.status(200).json({ menu });
})

menuRouter.get("/rolls", async (req, res) => {
    const menu = await Menu.find({ type: "rolls" })
    res.status(200).json({ menu });
})

menuRouter.get("/fries", async (req, res) => {
    const menu = await Menu.find({ type: "fries" })
    res.status(200).json({ menu });
})

menuRouter.get("/beverages", async (req, res) => {
    const menu = await Menu.find({ type: "beverages" }).sort({ price: 1 })
    res.status(200).json({ menu });
})

menuRouter.get("/deserts", async (req, res) => {
    const menu = await Menu.find({ type: "deserts" })
    res.status(200).json({ menu });
})

menuRouter.post("/add", async (req, res) => {
    const body = req.body;

    const newItem = await new Menu(body);
    await newItem.save()


    res.status(201).json({ message: 'Item added', newItem });
})

module.exports = menuRouter;

