var posts=["2025/03/12/学成在线/","2025/03/12/二分查找/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };