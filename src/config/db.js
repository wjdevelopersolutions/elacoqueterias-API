import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {

  const conn = await mongoose.connect( 'mongodb://localhost:27017/devcoqueterias', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`MongoDB Connected to: ${conn.connection.host }`.cyan.underline.bold);
}

export default connectDB;