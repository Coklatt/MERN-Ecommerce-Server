const mongoose = require('mongoose');
try {
    console.log(process.env.MONGO_URL);
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
    console.log('Database Connected Successfully');
} catch (err) {
    console.log('Database Not Connected');
}
