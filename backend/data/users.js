import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("12345", 10),
        isAdmin: true
    },
    {
        name: "Sagar Patkar",
        email: "sagar@example.com",
        password: bcrypt.hashSync("12345", 10)
    },
    {
        name: "Yash Patkar",
        email: "yash@example.com",
        password: bcrypt.hashSync("12345", 10)
    },
]

export default users;