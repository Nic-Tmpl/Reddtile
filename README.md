# Reddtile

An app that queries the Reddit JSON API to display image posts and comments.

 ### Features
1. A loading animation utilizing react-spinners.
2. A search function to look for specific posts by title.
3. A subreddit button that displays the current top 25 subreddits in a sidebar.
4. An initial page view of the most popular posts on Reddit.
5. A modal view of pictures or comments on click.
6. Responsive css layout for desktop or mobile view.

## Tech Stack
+ [React](https://reactjs.org) is used for UI.
+ [react-burger-menu](https://negomi.github.io/react-burger-menu/) is used to create the sidebar menu.
+ [react-spinners](https://www.davidhu.io/react-spinners/) is used for the loading animation

### Website
https://reddtile.netlify.app

### Repo
https://github.com/Nic-Tmpl/Reddtile


### Upcoming Revisions
There is still some refactoring and bug fixes I would like to finish before I consider the app complete.
1. Move some state slices and associated functions from App.js to a separate file to control state.
2. Fix a small bug in mobile css that loads the searchbar slightly over-size.
