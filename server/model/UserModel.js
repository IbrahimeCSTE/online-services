const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const UserAuth = mongoose.model("UserAuth", authSchema);
module.exports = UserAuth;
