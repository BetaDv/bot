const { Schema, model } = require("mongoose")
let scheama = new Schema({
userId: { type: String, required: true },
guildId: { type: String, required: true },
tags: Object,
})
module.exports = model("tags", scheama)