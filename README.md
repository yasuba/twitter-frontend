#Twitter (ish)

The Friday Challenge at Maker's Academy for week 7 was to recreate the Twitter:

Reimplement the Twitter.com feed page as close as possible to the real look and feel. You will need a Twitter account to do this task because you'll be inspecting the structure of the real Twitter feed to understand how it's done.

The goal of this exercise is to test your front-end skills. Don't worry about the backend at all. You are expected to produce only HTML, CSS and JS files. Do not build a Sinatra application. The resulting file should look as close to the real Twitter feed as possible.

Goal 1. Make sure it looks good on the desktop. As a minimum you should have the header and the list of tweets.

Tip: You don't have to use exactly the same CSS techniques as Twitter developers did. For example the home icon in the header is loaded as a sprite but it may be easier to do it using just an img tag.

Another tip: play with the page a lot before starting coding it. Notice how the header stays in a  fixed position as you scroll the page. Notice that there's no footer because of infinite scrolling.

Goal 2. Add JavaScript for infinite scrolling (using dummy data, no server-side at all), expanding the tweet input box on focus and, if you're feeling adventurous, a popup to add a new tweet.

##View the design

To see the design, type this into the command line:

    git clone git@github.com:ysauba/twitter-frontend.git
    cd twitter-frontend
    open twitter.html

##Screenshot

![A screenshot of my front-end version of Twitter](/public/images/screenshot.png)
