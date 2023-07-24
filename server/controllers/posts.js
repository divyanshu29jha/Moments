import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();  // mongoose methods are applied on the model PostMessage
        res.status(200).json(postMessages);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);  // newPost is a document(record) of the model(collection) PostMessage

    try {
        // await newPost.saved();
        // res.status(201).json(newPost);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}