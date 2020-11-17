import mongoosse from "mongoose";

const userSchema = new mongoosse.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps: true});

const User = mongoosse.model("User", userSchema);

export default User;