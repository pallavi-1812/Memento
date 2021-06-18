import { Card, CardActions, CardContent, CardMedia, CardHeader, Avatar, Button, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post.likes.length > 0) {
            return (
                (post.likes.find((like) => (like === (user?.result?.googleId || user?.result?._id)))) ?
                    (
                        <>
                            <FavoriteIcon fontSize="small" />
                            {post.likes.length}
                        </>
                    ) :
                    (
                        <><FavoriteBorder fontSize="small" />{post.likes.length}</>
                    )
            )
        }
        return <><FavoriteBorder fontSize="small" />&nbsp;</>;
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar className={classes.purple}>{post?.name.charAt(0)}</Avatar>
                }
                action={
                    (user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                        <Button size="small" onClick={() => { setCurrentId(post._id) }}><MoreVertIcon fontSize="default" /></Button>
                    )
                }
                title={post.name}
                subheader={moment(post.createdAt).fromNow()}
            />
            <CardMedia
                className={classes.media}
                image={post.selectedFile}
                title={post.title}
            />
            <CardContent>
                <Typography className={classes.title} variant="h6" gutterBottom>{post.title} </Typography>
                <Typography color="textSecondary" variant="subtitle1" gutterBottom>{post.message} </Typography>
                <Typography variant="subtitle2" style={{ color: 'blue' }} className={classes.tags}> {post.tags.map((tag) => `#${tag} `)} </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" style={{ color: '#ff5775' }} disabled={!user?.result} onClick={() => { dispatch(likePost(post._id)) }}>
                    <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                    <Button size="small" style={{ color: '#6a799f' }} onClick={() => { dispatch(deletePost(post._id)) }}>
                        <DeleteIcon fontSize="small" />
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default Post;