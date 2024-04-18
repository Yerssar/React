import "./Style.css"

function ProfileCard() {
  const user = {
    avatar: 'https://img.freepik.com/premium-photo/developer-hacker-player-is-seen-from-back-dark-sweatshirt-neon-background_277041-822.jpg?w=826',
    firstName: 'Alex',
    lastName: 'Anderson',
    profession: 'frontend developer',
    hobbies: 'coding',
  };

  return (
    <div className="profile-card">
      <img src={user.avatar} />
      <h2>{user.firstName} {user.lastName}</h2>
      <p>Profession: {user.profession}</p>
      <p>Hobbies: {user.hobbies}</p>
    </div>
  );
}

export default ProfileCard;
