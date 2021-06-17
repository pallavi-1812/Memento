import { Button, Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";
import HomeImg from "../../images/home_page.png";
import { Link } from "react-router-dom";

const FrontPage = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container className={classes.gridContainer} spacing={3}>
                <Grid
                    className={classes.gridItem}
                    item
                    sm={12}
                    md={6}
                >
                    <Typography className={classes.headline} variant="h2">
                        like comment and share
                    </Typography>
                    <Typography className={classes.subHead} variant="subtitle1">
                        Spread your love into social life wherever you are
                    </Typography>
                    <Button component={Link} to="/home" className={classes.button} size="large" variant="contained">
                        Start Now
                    </Button>
                </Grid>
                <Grid className={classes.gridItem} item sm={12} md={5}>
                    <img src={HomeImg} alt="A girl on phone" />
                </Grid>
            </Grid>
        </Container>
    );
};
export default FrontPage;
