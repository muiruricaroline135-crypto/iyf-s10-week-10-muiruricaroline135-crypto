# CommunityHub API

A simple RESTful API built with Node.js and Express that allows users to create, read, update, and delete posts.

---

## 📌 Features

* Create new posts
* View all posts
* View a single post by ID
* Update existing posts
* Delete posts
* Middleware logging for all requests
* Basic error handling

---

## 🛠️ Technologies Used

* Node.js
* Express.js

---

## 📁 Project Structure

```
iyf-s10-week-10-yourusername/
│
├── server.js
├── routes/
│   └── posts.js
├── middleware/
│   └── logger.js
```

---

## 🚀 Getting Started

### 1. Clone or download the project

```
git clone <your-repo-link>
cd iyf-s10-week-10-yourusername
```

### 2. Install dependencies

```
npm install
```

### 3. Run the server

```
node server.js
```

Server will start at:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

### GET all posts

```
GET /posts
```

---

### GET single post

```
GET /posts/:id
```

---

### POST create a new post

```
POST /posts
```

Body (JSON):

```
{
  "title": "Post title",
  "content": "Post content"
}
```

---

### PUT update a post

```
PUT /posts/:id
```

---

### DELETE a post

```
DELETE /posts/:id
```

---

## ⚠️ Error Handling

* Returns `404` if a post is not found
* Returns `400` if required fields are missing
* Returns `500` for server errors

Example:

```
{
  "message": "Post not found"
}
```

---

## 🧪 Testing

You can test the API using:

* Postman
* Thunder Client (VS Code)

---

## 📌 Notes

* Data is stored in memory (no database)
* Restarting the server resets all posts

---

## 👤 Author

Your Name Here

---
