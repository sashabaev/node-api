import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = Schema(
  {
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: false,
      trim: true
    },
    isbn:  {
      type: Number,
      required: false
    },
    title:{
      type: String,
      required: true,
      trim: true
    },
    subtitle: {
      type: String,
      required: false,
      trim: true
    },
    author: {
      type: String,
      required: true,
      trim: true
    },
    published:{
      type: Date,
      required: true,
      trim: true
    },
    publisher:{
      type: String,
      required: true,
      trim: true
    },
    pages: {
      type: Number,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    website: {
      type: String,
      required: false
    },
    isBooked: {
      type: Boolean,
      required: false
    },
    bookCount: {
      type: Number,
      required: false
    }
  },
  {
    timestamps: true,
    useNestedStrict: true
  }
);

export default mongoose.model("Book", BookSchema);
