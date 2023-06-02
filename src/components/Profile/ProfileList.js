import Profile from "./Profile";

export default function ProfileList({ user }) {

   const { username, tag, location, avatar, stats: { followers, views, likes } } = user

   return (
      <Profile
         username={username}
         tag={tag}
         location={location}
         avatar={avatar}
         followers={followers}
         views={views}
         likes={likes}
      />
   );
}
