import { pool } from "../db.js";

export const getTodos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users ORDER BY id DESC");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const addTodo = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: "Title required" });

    const [result] = await pool.query("INSERT INTO todos (title) VALUES (?)", [title]);
    const id = result.insertId;
    res.status(201).json({ id, title, message: "Todo added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM todos WHERE id = ?", [id]);
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
