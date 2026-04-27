const express = require('express');
const router = express.Router();

// Fake DB
let posts = [
  { id: 1, title: "First Post", content: "Hello world" }
];

let currentId = 2;

// GET all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// GET one post
router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.json(post);
});

// POST create post
router.post('/', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content required" });
  }

  const newPost = {
    id: currentId++,
    title,
    content
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT update post
router.put('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  const { title, content } = req.body;

  if (title) post.title = title;
  if (content) post.content = content;

  res.json(post);
});

// DELETE post
router.delete('/:id', (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Post not found" });
  }

  const deleted = posts.splice(index, 1);
  res.json(deleted);
});

module.exports = router;