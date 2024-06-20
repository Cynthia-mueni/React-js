const UserCard = ({image,fullName,email,age,gender,address})=>{
    return(
        <div className="details">
            <img src={image} alt={`${fullName} profile`}/>
            <h2>{fullName}</h2>
            <h3>{email}</h3>
            <p>{age}</p>
            <p>{gender}</p>
            <p>{address}</p>
        </div>
    )
}
export default UserCard