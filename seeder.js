require("dotenv").config();
const mongoose = require("mongoose");
const Sector = require("./models/Sector");
const sectorsData = require("./data/sector-data"); 

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

(async () => {
    try {
        await Sector.deleteMany();
        const savedSectors = await Sector.create(sectorsData);
        console.log("Sectors saved:", savedSectors);
    } catch (error) {
        console.error("Error seeding sectors:", error);
    } finally {
        mongoose.disconnect();
    }
})();
