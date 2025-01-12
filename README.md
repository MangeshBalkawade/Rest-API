

```markdown
🌐 Simple REST API

A lightweight and easy-to-use REST API built with **Node.js** and **Express**. This project demonstrates fundamental REST API concepts, including data retrieval, creation, and aggregation.

---

🚀 Features

- 📥 Create Data: Add new entries to the system.
- 📤 Retrieve Data: Fetch existing data using GET endpoints.
- 📊 Aggregate Data : Perform operations like counting or grouping.

---

📁 File Structure

```
simple-rest-api/
│
├── server.js           # Main server file
├── data.json           # Mock database to store data
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

---

📦 Installation & Setup

1. Clone the Repository:
   ```bash
   git clone https://github.com/your-username/simple-rest-api.git
   cd simple-rest-api
   ```

2. Install Dependencies:
   ```bash
   npm install
   ```

3. Start the Server:
   ```bash
   node server.js
   ```
   The server will run on `http://localhost:3000`.

---

📋 API Endpoints

 🔹 GET /tasks
**Description**: Retrieve all tasks from the data store.  
**Response**:
```json
[
  { "id": 1, "userId": 1, "status": "completed" },
  { "id": 2, "userId": 1, "status": "pending" },
  { "id": 3, "userId": 2, "status": "completed" }
]
```

---

 🔹 POST /tasks
Description: Add a new task to the data store.  
Payload:
```json
{
  "id": 4,
  "userId": 3,
  "status": "in-progress"
}
```
Response:
- `201 Created`: Task successfully added.
- `400 Bad Request`: Missing or invalid fields.

---

 🔹 GET /tasks/stats
Description: Get aggregated data about tasks.  
Response:
```json
{
  "totalTasks": 3,
  "tasksByStatus": {
    "completed": 2,
    "pending": 1
  },
  "tasksByUser": {
    "1": 2,
    "2": 1
  }
}
```

---

🛠️ Technology Stack

- Node.js: JavaScript runtime environment.
- Express.js: Web application framework.
- File System (fs): Handle JSON file storage.

---

🌟 Usage Examples

1️⃣ Retrieve All Tasks
```bash
curl -X GET http://localhost:3000/tasks
```

2️⃣ Add a New Task
```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{"id": 4, "userId": 3, "status": "in-progress"}'
```

3️⃣ Get Task Statistics
```bash
curl -X GET http://localhost:3000/tasks/stats
```



Task Aggregation:
![Task Aggregation](https://via.placeholder.com/800x400?text=Task+Stats+Response)

🔄 Future Enhancements

- Add database integration (e.g., MongoDB).
- Implement user authentication and authorization.
- Add pagination for large datasets.


📜 License

This project is licensed under the [MIT License](LICENSE).

👤 Author

Intern43-Harsh
[![GitHub followers](https://img.shields.io/github/followers/your-username?style=social)](https://github.com/your-username)  
[![Twitter Follow](https://img.shields.io/twitter/follow/your-twitter-handle?style=social)](https://twitter.com/your-twitter-handle)  

⭐️ Support

If you find this project useful, please ⭐️ the repository and share it with others!

[![Star on GitHub](https://img.shields.io/github/stars/your-username/simple-rest-api.svg?style=social)](https://github.com/your-username/simple-rest-api)


Steps to Use

1. Replace placeholders like `your-username`, `your-twitter-handle`, and any links or descriptions with your own details.
2. Add real screenshots or API examples under the `📸 Screenshots` section.
3. If you’re using a different license or structure, update the corresponding sections.
