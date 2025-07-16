import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "./Button";
import Card from "./Card";

function filterTasks(tasks, filter) {
  if (filter === "active") return tasks.filter(t => !t.completed);
  if (filter === "completed") return tasks.filter(t => t.completed);
  return tasks;
}

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([{ id: Date.now(), text: input, completed: false }, ...tasks]);
    setInput("");
  };

  const toggleTask = id => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = id => setTasks(tasks.filter(t => t.id !== id));

  const filtered = filterTasks(tasks, filter);

  return (
    <Card className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 border p-2 rounded"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task..."
          onKeyDown={e => e.key === "Enter" && addTask()}
        />
        <Button onClick={addTask}>Add</Button>
      </div>
      <div className="flex gap-2 mb-4">
        <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>All</Button>
        <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>Active</Button>
        <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")}>Completed</Button>
      </div>
      <ul className="space-y-2">
        {filtered.length ? filtered.map(task => (
          <li key={task.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className={task.completed ? "line-through text-gray-400" : ""}>{task.text}</span>
            <Button variant="danger" className="ml-auto" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        )) : <li className="text-gray-500">No tasks found.</li>}
      </ul>
    </Card>
  );
}