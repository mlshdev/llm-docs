> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchrequest](https://developer.apple.com/documentation/gamekit/gkmatchrequest)

# GKMatchRequest (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

An object that encapsulates the parameters to create a real-time or turn-based match.

## Declaration

```swift
class GKMatchRequest
```

## Mentioned In

- [Finding multiple players for a game](finding-multiple-players-for-a-game.md)
- [Finding players using matchmaking rules](finding-players-using-matchmaking-rules.md)
- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md)
- [Finding players for custom server-based games](finding-players-for-custom-server-based-games.md)
- [Assigning players to teams using rules](assigning-players-to-teams-using-rules.md)
- [Finding players with similar skill levels](finding-players-with-similar-skill-levels.md)
- [Troubleshooting matchmaking rules using metrics](troubleshooting-matchmaking-rules-using-metrics.md)

<a id="overview"></a>

## Overview

To request a match, set the properties of the match request, such as the number of players, the invitation message, and whether to use automatch to fill the player slots. You’re required to set the minimum and maximum number of players allowed in the match. Then, pass the match request to the appropriate class, depending on the type of game and whether you implement your own user interface.

To use the matchmaking user interface that GameKit provides, pass the match request to the [GKMatchmakerViewController](gkmatchmakerviewcontroller.md) class for real-time games, or the [GKTurnBasedMatchmakerViewController](gkturnbasedmatchmakerviewcontroller.md) class for turn-based games. GameKit sends messages to the delegates of these classes when players receive and accept invitations to the match.

If you implement your own interface for finding players, pass the match request to the [GKMatchmaker](gkmatchmaker.md) class for real-time games, or the [GKTurnBasedMatch](gkturnbasedmatch.md) class for turn-based games. If the player selects the other players to invite in your interface, set the [recipients](gkmatchrequest/recipients.md), the [inviteMessage](gkmatchrequest/invitemessage.md), and the [recipientResponseHandler](gkmatchrequest/recipientresponsehandler.md) properties before creating the match.

<a id="Matchmaking-using-rules"></a>

### Matchmaking using rules

You can refine the match results and reduce player wait times by configuring matchmaking before you present an interface. You can either find players using matchmaking rules you set up on the server, or find players from a subset of players you specify in the game.

To use matchmaking rules, set the [queueName](gkmatchrequest/queuename.md) property to the queue name that you configure in App Store Connect. Optionally, set [properties](gkmatchrequest/properties.md) and [recipientProperties](gkmatchrequest/recipientproperties.md) to game-specific criteria. Players in the [recipientProperties](gkmatchrequest/recipientproperties.md) property need to also be in the [recipients](gkmatchrequest/recipients.md) property — that is, be a recipient of an invitation. When using matchmaking rules, Game Center ignores the subset that you specify using the [playerGroup](gkmatchrequest/playergroup.md) and [playerAttributes](gkmatchrequest/playerattributes.md) properties.

If you set the request’s [minPlayers](gkmatchrequest/minplayers.md) and [maxPlayers](gkmatchrequest/maxplayers.md) properties, use values that are in the rule set’s player range. Otherwise, the default values for these properties are the rule set’s `minPlayers` and `maxPlayers` fields (see [Create a Rule Set](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecentermatchmakingrulesets)).

If you don’t use matchmaking rules, you can restrict finding players to a subset of players. Set the [queueName](gkmatchrequest/queuename.md) property to `nil`, and set the [playerGroup](gkmatchrequest/playergroup.md) and [playerAttributes](gkmatchrequest/playerattributes.md) properties to specify the subset. Then matchmaking ignores the rules-based [properties](gkmatchrequest/properties.md) and [recipientProperties](gkmatchrequest/recipientproperties.md) properties.

For more information, see [Finding players using matchmaking rules](finding-players-using-matchmaking-rules.md).

> **Important**

>  Matchmaking rules are only available for peer-to-peer ([GKMatchType.peerToPeer](gkmatchtype/peertopeer.md)) and hosted ([GKMatchType.hosted](gkmatchtype/hosted.md)) match requests.

## Topics

### Restricting the number of players

- [maxPlayersAllowedForMatch(of:)](gkmatchrequest/maxplayersallowedformatch%28of_%29.md): Returns the maximum number of players allowed in the match request for a given match type.
- [GKMatchType](gkmatchtype.md): The kind of match managed by Game Center.
- [minPlayers](gkmatchrequest/minplayers.md): The minimum number of players that can join the match.
- [maxPlayers](gkmatchrequest/maxplayers.md): The maximum number of players that can join the match.
- [defaultNumberOfPlayers](gkmatchrequest/defaultnumberofplayers.md): The default number of players for the match.

### Inviting players

- [inviteMessage](gkmatchrequest/invitemessage.md): The message sent to other players when the local player invites them to join a match.
- [recipients](gkmatchrequest/recipients.md): The players to invite to the match.
- [recipientResponseHandler](gkmatchrequest/recipientresponsehandler.md): A method that handles when a player responds to an invitation to join a match.
- [GKInviteRecipientResponse](gkinviterecipientresponse.md): A player’s response to an invitation to join a match.

### Matching players using rules

- [queueName](gkmatchrequest/queuename.md): The name of the queue that Game Center places the match request in.
- [properties](gkmatchrequest/properties.md): The criteria for the local player that Game Center uses to find other players when using matchmaking rules.
- [recipientProperties](gkmatchrequest/recipientproperties.md): The criteria for recipients of the match request that Game Center uses to find other players when using matchmaking rules.

### Matching specific players

- [playerGroup](gkmatchrequest/playergroup.md): A number identifying a subset of players invited to join a match.
- [playerAttributes](gkmatchrequest/playerattributes.md): A mask that specifies the role that the local player would like to play in the game.

### Deprecated methods and properties

- [inviteeResponseHandler](gkmatchrequest/inviteeresponsehandler.md): Deprecated. Handles when a player responds to an invitation.
- [GKInviteeResponse](gkinviteeresponse.md): Deprecated. Possible responses from an invitation to a remote player.
- [playersToInvite](gkmatchrequest/playerstoinvite.md): Deprecated. A list of player identifiers for players to invite to the match.
- [restrictToAutomatch](gkmatchrequest/restricttoautomatch.md): Deprecated. A Boolean value that determines whether a game uses automatch to find players or the local player invites players.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Real-time games

- [Creating real-time games](creating-real-time-games.md): Develop games where multiple players interact in real time.
- [Finding multiple players for a game](finding-multiple-players-for-a-game.md): Discover and invite other players to participate in a real-time game.
- [Exchanging data between players in real-time games](exchanging-data-between-players-in-real-time-games.md): Send data between players in a real-time multiplayer game.
- [Adding voice chat to multiplayer games](adding-voice-chat-to-multiplayer-games.md): Enable players to voice chat with all, or groups of, players in a multiplayer game.
- [Finding players for custom server-based games](finding-players-for-custom-server-based-games.md): Connect players to your custom server-hosted games by creating game sessions with hosted matches.
- [Matchmaking rules](matchmaking-rules.md): Game Center applies different type of rules you create in a particular order to find the best matches.
- [GKMatchmaker](gkmatchmaker.md): An object that creates matches with other players without presenting an interface to the players.
- [GKMatchmakerViewController](gkmatchmakerviewcontroller.md): An interface that allows a player to invite other players to a real-time game and automatch to fill any empty slots.
- [GKInviteEventListener](gkinviteeventlistener.md): A protocol that handles invite events from Game Center.
- [GKInvite](gkinvite.md): An invitation to join a match sent to the local player from another player.
- [GKMatch](gkmatch.md): A peer-to-peer network between a group of players that sign into Game Center.

# GKMatchRequest (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

An object that encapsulates the parameters to create a real-time or turn-based match.

## Declaration

```objectivec
@interface GKMatchRequest : NSObject
```

## Mentioned In

- [Finding multiple players for a game](finding-multiple-players-for-a-game.md)
- [Finding players using matchmaking rules](finding-players-using-matchmaking-rules.md)
- [Starting turn-based matches and passing turns between players](starting-turn-based-matches-and-passing-turns-between-players.md)
- [Finding players for custom server-based games](finding-players-for-custom-server-based-games.md)
- [Assigning players to teams using rules](assigning-players-to-teams-using-rules.md)
- [Finding players with similar skill levels](finding-players-with-similar-skill-levels.md)
- [Troubleshooting matchmaking rules using metrics](troubleshooting-matchmaking-rules-using-metrics.md)

<a id="overview"></a>

## Overview

To request a match, set the properties of the match request, such as the number of players, the invitation message, and whether to use automatch to fill the player slots. You’re required to set the minimum and maximum number of players allowed in the match. Then, pass the match request to the appropriate class, depending on the type of game and whether you implement your own user interface.

To use the matchmaking user interface that GameKit provides, pass the match request to the [GKMatchmakerViewController](gkmatchmakerviewcontroller.md) class for real-time games, or the [GKTurnBasedMatchmakerViewController](gkturnbasedmatchmakerviewcontroller.md) class for turn-based games. GameKit sends messages to the delegates of these classes when players receive and accept invitations to the match.

If you implement your own interface for finding players, pass the match request to the [GKMatchmaker](gkmatchmaker.md) class for real-time games, or the [GKTurnBasedMatch](gkturnbasedmatch.md) class for turn-based games. If the player selects the other players to invite in your interface, set the [recipients](gkmatchrequest/recipients.md), the [inviteMessage](gkmatchrequest/invitemessage.md), and the [recipientResponseHandler](gkmatchrequest/recipientresponsehandler.md) properties before creating the match.

<a id="Matchmaking-using-rules"></a>

### Matchmaking using rules

You can refine the match results and reduce player wait times by configuring matchmaking before you present an interface. You can either find players using matchmaking rules you set up on the server, or find players from a subset of players you specify in the game.

To use matchmaking rules, set the [queueName](gkmatchrequest/queuename.md) property to the queue name that you configure in App Store Connect. Optionally, set [properties](gkmatchrequest/properties.md) and [recipientProperties](gkmatchrequest/recipientproperties.md) to game-specific criteria. Players in the [recipientProperties](gkmatchrequest/recipientproperties.md) property need to also be in the [recipients](gkmatchrequest/recipients.md) property — that is, be a recipient of an invitation. When using matchmaking rules, Game Center ignores the subset that you specify using the [playerGroup](gkmatchrequest/playergroup.md) and [playerAttributes](gkmatchrequest/playerattributes.md) properties.

If you set the request’s [minPlayers](gkmatchrequest/minplayers.md) and [maxPlayers](gkmatchrequest/maxplayers.md) properties, use values that are in the rule set’s player range. Otherwise, the default values for these properties are the rule set’s `minPlayers` and `maxPlayers` fields (see [Create a Rule Set](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-gamecentermatchmakingrulesets)).

If you don’t use matchmaking rules, you can restrict finding players to a subset of players. Set the [queueName](gkmatchrequest/queuename.md) property to `nil`, and set the [playerGroup](gkmatchrequest/playergroup.md) and [playerAttributes](gkmatchrequest/playerattributes.md) properties to specify the subset. Then matchmaking ignores the rules-based [properties](gkmatchrequest/properties.md) and [recipientProperties](gkmatchrequest/recipientproperties.md) properties.

For more information, see [Finding players using matchmaking rules](finding-players-using-matchmaking-rules.md).

> **Important**

>  Matchmaking rules are only available for peer-to-peer ([GKMatchTypePeerToPeer](gkmatchtype/peertopeer.md)) and hosted ([GKMatchTypeHosted](gkmatchtype/hosted.md)) match requests.

## Topics

### Restricting the number of players

- [maxPlayersAllowedForMatchOfType:](gkmatchrequest/maxplayersallowedformatch%28of_%29.md): Returns the maximum number of players allowed in the match request for a given match type.
- [GKMatchType](gkmatchtype.md): The kind of match managed by Game Center.
- [minPlayers](gkmatchrequest/minplayers.md): The minimum number of players that can join the match.
- [maxPlayers](gkmatchrequest/maxplayers.md): The maximum number of players that can join the match.
- [defaultNumberOfPlayers](gkmatchrequest/defaultnumberofplayers.md): The default number of players for the match.

### Inviting players

- [inviteMessage](gkmatchrequest/invitemessage.md): The message sent to other players when the local player invites them to join a match.
- [recipients](gkmatchrequest/recipients.md): The players to invite to the match.
- [recipientResponseHandler](gkmatchrequest/recipientresponsehandler.md): A method that handles when a player responds to an invitation to join a match.
- [GKInviteRecipientResponse](gkinviterecipientresponse.md): A player’s response to an invitation to join a match.

### Matching players using rules

- [queueName](gkmatchrequest/queuename.md): The name of the queue that Game Center places the match request in.
- [properties](gkmatchrequest/properties.md): The criteria for the local player that Game Center uses to find other players when using matchmaking rules.
- [recipientProperties](gkmatchrequest/recipientproperties.md): The criteria for recipients of the match request that Game Center uses to find other players when using matchmaking rules.
- [GKMatchProperties](gkmatchproperties.md): A type for game-specific properties that Game Center uses to find players when using matchmaking rules.

### Matching specific players

- [playerGroup](gkmatchrequest/playergroup.md): A number identifying a subset of players invited to join a match.
- [playerAttributes](gkmatchrequest/playerattributes.md): A mask that specifies the role that the local player would like to play in the game.

### Deprecated methods and properties

- [inviteeResponseHandler](gkmatchrequest/inviteeresponsehandler.md): Deprecated. Handles when a player responds to an invitation.
- [GKInviteeResponse](gkinviteeresponse.md): Deprecated. Possible responses from an invitation to a remote player.
- [playersToInvite](gkmatchrequest/playerstoinvite.md): Deprecated. A list of player identifiers for players to invite to the match.
- [restrictToAutomatch](gkmatchrequest/restricttoautomatch.md): Deprecated. A Boolean value that determines whether a game uses automatch to find players or the local player invites players.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Real-time games

- [Creating real-time games](creating-real-time-games.md): Develop games where multiple players interact in real time.
- [Finding multiple players for a game](finding-multiple-players-for-a-game.md): Discover and invite other players to participate in a real-time game.
- [Exchanging data between players in real-time games](exchanging-data-between-players-in-real-time-games.md): Send data between players in a real-time multiplayer game.
- [Adding voice chat to multiplayer games](adding-voice-chat-to-multiplayer-games.md): Enable players to voice chat with all, or groups of, players in a multiplayer game.
- [Finding players for custom server-based games](finding-players-for-custom-server-based-games.md): Connect players to your custom server-hosted games by creating game sessions with hosted matches.
- [Matchmaking rules](matchmaking-rules.md): Game Center applies different type of rules you create in a particular order to find the best matches.
- [GKMatchmaker](gkmatchmaker.md): An object that creates matches with other players without presenting an interface to the players.
- [GKMatchmakerViewController](gkmatchmakerviewcontroller.md): An interface that allows a player to invite other players to a real-time game and automatch to fill any empty slots.
- [GKInviteEventListener](gkinviteeventlistener.md): A protocol that handles invite events from Game Center.
- [GKInvite](gkinvite.md): An invitation to join a match sent to the local player from another player.
- [GKMatch](gkmatch.md): A peer-to-peer network between a group of players that sign into Game Center.
