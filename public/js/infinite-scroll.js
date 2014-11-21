var tweets = "";
  var tweet_data = [
     {
       txt: "I don't know why but I'm really really belly laughing at that last Limmy RT",
       username: "CharlieBrooker",
       handle: "@charltonbrooker"
      },
     {
        txt: "Yesterday we flooded the streets. Today we took over the front pages!",
        username: "Avaaz",
        handle: "@avaaz"
      },
      {
        txt: "Well I have to be honest here, peeps, I'm not actually playing - @ElliottGSpencer is. Seems to be doing well. Ellie FTW #TheLastOfUs",
        username: "Stephen Fry",
        handle: "@stephenfry",
      },
      {
        txt: "Wu Killa Bee 'Cilvaringz' debut album is today's driving cd #cilvaringz #wukillabee #dephectclothing… http://instagram.com/p/taKYcJLxGZ/",
        username: "Dephect Clothing",
        handle: "@DephectCrew"
    }];
  for (var i = 0; i < 20; i++) {
    tweets += tweet(tweet_data[i % tweet_data.length]);
  }
  function tweet(tweet_data) {
    return '<li><img src="egg.png" width="48" height="48"><span class="name">' + tweet_data.username + '</span> ‏<span class="handle">' + tweet_data.handle + '  56m</span><p>' + tweet_data.txt + '</p>  <span class="tweet-options">Reply Retweet Favorite More</span></li>';
  }
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('#tweets ul').append(tweets);
     }
  });