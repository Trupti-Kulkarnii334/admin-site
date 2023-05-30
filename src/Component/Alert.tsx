interface Props{
    childern : 'string';
}

const Alert = (props : Props) => {
    return (
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
        <h1>Please Enter the Valid Username and Password</h1>
        </div>
    );
}
export default Alert;