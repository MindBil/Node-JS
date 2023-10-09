const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;

const tasks = [{id: 1, title: "Learn Node.js"}];

app.get("/tasks", (req, res) => {
    res.send(tasks);
});

app.get("/tasks/:id", (req, res) => {
    const {id} = req.params;
    const foundTask = tasks.find(task => task.id === +id);
    if(foundTask) {
        res.send(foundTask);
    } else {
        res.status(404).send("Task not found");
    }
    
});

app.post("/tasks", (req, res) => {
    console.log(req.body);
    const { title } = req.body;
    const newTask = { id: Date.now(), title};
    tasks.push(newTask);
    res.send(newTask);
});

app.put("/tasks/:id", (req, res) => {
    const { id } = req.params;
    const task = req.body;
    const foundIndex = tasks.findIndex((task) => task.id === +id);

    if (foundIndex !== -1) {
        const updatedTask = { id: +id, ...task }
        tasks.splice(foundIndex, 1, updatedTask);
        res.send(updatedTask);
    } else {
        res.status(404).send({ error: "Failed to update task"});
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});