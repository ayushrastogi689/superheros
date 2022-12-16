const mongoose = require(mongoose);

const HeroSchema = new mongoose.Schema({
    superHero:{
        type: String,
        required: [true, "Please name the hero"],
        unique: true,
        trim: true
    },
    realName:{
        type: String,
        required: true,
        maxlength: [200, "Please keep the real name short"]
    }
})

module.export = mongoose.models.Hero || mongoose.model("Hero", HeroSchema);