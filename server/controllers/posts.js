import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() });
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePosts = async (req, res) => {
    const { id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No Post with that Id');
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { ...post, id }, { new: true });
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No Post with that Id');
    }
    await PostMessage.findByIdAndRemove(id);
    res.json({ message: 'Post deleted Successfully' });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) return res.json({ message: 'Unauthenticated' }); //user is not authenticated

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send('No Post with that Id');
    }
    const post = await PostMessage.findById(id);
    //to know who liked a specific post, we loop through all the user id's which have liked that post 
    const index = post.likes.findIndex((id) => id === String(req.userId));

    if (index === -1) { // user's id doesn't exist in the lists of the id's which have liked the post
        //like the post
        post.likes.push(req.userId);
    } else { // user has already liked the post once so when he clicks again, he will dislike it
        post.likes = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true })
    res.json(updatedPost);
}