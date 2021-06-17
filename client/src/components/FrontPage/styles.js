import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    gridContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
    },
    headline: {
        color: '#303e5f',
        fontWeight: '700'
    },
    subHead: {
        color: '#3a3368'
    },
    button: {
        color: '#fff',
        backgroundColor: '#863af2',
        marginTop: '20px',
        borderRadius: 15,
        '&:hover': {
            backgroundColor: '#8569f9',
        }
    }
}));