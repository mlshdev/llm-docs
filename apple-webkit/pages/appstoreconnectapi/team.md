> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/team](https://developer.apple.com/documentation/appstoreconnectapi/team)

# Team

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Article

A team that you add to a rule set.

<a id="overview"></a>

## Overview

Use a `Team` object in the expression of a matchmaking rule to access the players that Game Center assigns to a team.

<a id="Properties"></a>

### Properties

-`maxPlayers: The maximum number of players on the team. -`minPlayers: The minimum number of players on the team. -`name: The name for the team that's unique within the scope of its rule set.  -`players: An array of [Player](player.md) objects representing the players that Game Center assigns to the team.

## See Also

### Objects

- [Request](request.md): An object that represents a match request in a queue.
- [Player](player.md): An object that represents a player associated with a match request.
