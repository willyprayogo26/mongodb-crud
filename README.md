### <u>Mongo DB</u>

#### List of basic routes:

| Route      | HTTP   | Header(s) | Body                                                         | Description                                                  |
| ---------- | ------ | --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| /books     | GET    | none      | none                                                         | Get all Books<br />success:<br />(200), example: [{"_id: String", "isbn": String, "title": String, "author": String, "category": String, "stock": Number}, {"id: String", "isbn": String, "title": String, "author": String, "category": String, "stock": Number}, etc]<br />errors:<br />(500), error |
| /books/:id | GET    | none      | none                                                         | Get book by id<br />success:<br />(200), example: {"_id: String", "isbn": String, "title": String, "author": String, "category": String, "stock": Number}<br />errors:<br />(404), example: {"message": "Book not found"}<br />(500), error |
| /books     | POST   | none      | isbn:String,<br />title:String,<br />author:String,<br />category:String,<br />stock:Number | Add a book<br />success:<br />(200), example: {"_id: String", "isbn": String, "title": String, "author": String, "category": String, "stock": Number}<br />errors:<br />(500), error |
| /books/:id | PUT    | none      | none                                                         | Update a book with new values<br />success:<br />(200), example: {"n": 1, "ok": 1}<br />errors:<br />(404), example: {"message": "Book not found"}<br />(500), error |
| /books/:id | DELETE | none      | none                                                         | Delete a book<br />success:<br />(200), example: {"n": 1, "ok": 1}<br />errors:<br />(404), example: {"message": "Book not found"}<br />(500), error |

