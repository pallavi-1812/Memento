import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        boxShadow: '5px 5px 5px 0px #edc0f6',
        marginBottom: '5rem'
    },
    loginButton: {
        backgroundColor: '#8539f2',
        color: '#fff',
        borderRadius: 15,
        '&:hover': {
            backgroundColor: '#8569f9',
        },
        marginLeft: 15
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    heading: {
        color: '#fa5a66',
        textDecoration: 'none'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px'
    },
    profile: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText('#8569f9'),
        backgroundColor: '#8569f9',
    },
}));