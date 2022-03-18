import { FlatList, ScrollView, View, Text, Image } from "react-native";
import Post from "./Post";
import PostStyles from "./CSSRoutes";

export default function Feed({ feedFactory }) {
  
  const createListOfPosts = () => {

    // The attributes for post below are temporary
    // bc props for Post probably are going to change
    // change in the future
    //PLACE HOLDER async Function for PostData call
    /* const postData = FEED; feedFactory.getFeed(); add back in when function is built*/

    let post = {
      username: "Emmanuel007",
      profileImg: 'https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/99247284_112192983841397_2650530713291456512_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=AaH9L8WMwgkAX8QfOQg&tn=s87eJZUFrT0lUneX&_nc_ht=scontent-hou1-1.xx&oh=00_AT_3hcU5XRd4lCkzl-6H8hg63eK2WGFrXpQWap3Z8dGzUg&oe=625AEB60',
      msgContent: "“Fine I’ll do it myself.”"
    }

    let Image_URL = {uri: post.profileImg};

    const FEED = (
      <Post
        userName={post.username}
        profileImg={<Image source={Image_URL} style = {{height: 200, resizeMode : 'stretch', margin: 5 }} />}
        msgContent={post.msgContent}
      />
    );
    return FEED;
  };



  return (
    //ScrollView works as just a wrapper. FlatList has better performance
    //but requires props and data objects to work. I will try to upgrade later. ~eman
    <>
      {/*SoundByte Feed Section:
        - utilizes element varible created above
        - need to add onPress functionality  
      */}
      <View style={PostStyles.rootContainer}>
        {console.log(createListOfPosts())}
        {createListOfPosts()}
      </View>
    </>
  );
}