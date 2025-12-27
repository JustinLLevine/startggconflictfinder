# Start.gg Conflict Finder
Start.gg Conflict Finder is a Firefox and Chrome browser extension that runs whenever the user opens a start.gg bracket page as a tournament organizer. The extension checks each player who's still in that bracket, and if the player is currently playing a set in another bracket, that player's name will turn red on the current page. This way, tournament organizers can quickly see if a player is busy before they call their set, without having to check the pages for every other bracket or look around the room.

## Setup

### Adding your own access token
You need to insert your own access token. This allows the extension to communicate with start.gg's API and get information about the other brackets.
**Do not give this token to other users!**

- Go to start.gg's [Developer Settings](https://start.gg/admin/profile/developer)
- Click "Create new token" ![Create new token](https://imgur.com/Xx4LNIN.png)
- Enter any description for the token ![Enter a description](https://imgur.com/b2russ6.png)
- Click "Save" ![Save](https://imgur.com/nEycaZA.png)
- Copy the token

Next, you need to give the extension your access token.

- In your browser, click the puzzle piece in the top right to open your extensions ![Extensions](https://imgur.com/j5Bno5T.png)
- Click StartGGConflicts
- Copy the access token from earlier and click Submit

The extension is now configured properly!

## To Do
- Support other browsers (Opera, etc)