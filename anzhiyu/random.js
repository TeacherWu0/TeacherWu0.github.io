var posts=["2025/02/04/英语/动词一/","2025/02/06/英语/动词二/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };