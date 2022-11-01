

const Profile = (props) =>{

    let user = props.user;

    return(
        <div>
            <div>
                <h2>{user.name}</h2>
            </div>
            <div>
                <h2>{user.nickname}</h2>
            </div>
            <div>
                <img src={user.picture} alt={user.nickname} />
            </div>
            <div>
                <h2>{user.email}</h2>
            </div>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>

        </div>
    )
}

export default Profile;