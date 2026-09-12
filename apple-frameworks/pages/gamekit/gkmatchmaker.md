> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker](https://developer.apple.com/documentation/gamekit/gkmatchmaker)

# GKMatchmaker (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An object that creates matches with other players without presenting an interface to the players.

## Declaration

```swift
class GKMatchmaker
```

## Mentioned In

- [Creating activities for your game](creating-activities-for-your-game.md)
- [Finding multiple players for a game](finding-multiple-players-for-a-game.md)
- [Finding players with similar skill levels](finding-players-with-similar-skill-levels.md)

<a id="overview"></a>

## Overview

Use the `GKMatchmaker` class to auto-match players for a quicker game start, programmatically invite specific players, or implement your own interface for players to invite other players. If you want to present a familiar matchmaking GameKit interface to players, instead use either the [GKMatchmakerViewController](gkmatchmakerviewcontroller.md) or [GKTurnBasedMatchmakerViewController](gkturnbasedmatchmakerviewcontroller.md) class.

If you host a game on your own server, you can also use this class to find Game Center players. That is, you implement the networking and communication between the players through your own servers not Game Center.

To find players using this class, create a [GKMatchRequest](gkmatchrequest.md) object and configure it according to the parameters of your game. Then, pass the match request and a handler using the [findMatch(for:withCompletionHandler:)](gkmatchmaker/findmatch%28for_withcompletionhandler_%29.md) method, or the [findPlayers(forHostedMatchRequest:withCompletionHandler:)](gkmatchmaker/findplayers%28forhostedmatchrequest_withcompletionhandler_%29.md) method for hosted games, to the shared `GKMatchmaker` object.

GameKit calls the handler when players accept their invitations. Implement the handler to set the delegate of the [GKMatch](gkmatch.md) object that GameKit sends and start the game when there are enough players.

If the match doesn’t have enough players (for example, some players decline their invitations), you can create another match request and call the [addPlayers(to:matchRequest:completionHandler:)](gkmatchmaker/addplayers%28to_matchrequest_completionhandler_%29.md) method repeatedly until the match’s [expectedPlayerCount](gkmatch/expectedplayercount.md) property is zero. When you have enough players to start the match, call the [finishMatchmaking(for:)](gkmatchmaker/finishmatchmaking%28for_%29.md) method to end the matchmaking process.

If you provide a SharePlay interface for inviting players, use the [startGroupActivity(playerHandler:)](gkmatchmaker/startgroupactivity%28playerhandler_%29.md) and [stopGroupActivity()](gkmatchmaker/stopgroupactivity%28%29.md) methods to create a group activity on behalf of the player.

## Topics

### Retrieving the shared matchmaker

- [shared()](gkmatchmaker/shared%28%29.md): Returns the singleton matchmaker instance.

### Receiving invitations from other players

- [match(for:completionHandler:)](gkmatchmaker/match%28for_completionhandler_%29.md): Creates a match from an invitation that the local player accepts.

### Matching players

- [findMatch(for:withCompletionHandler:)](gkmatchmaker/findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findPlayers(forHostedRequest:withCompletionHandler:)](gkmatchmaker/findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [findMatchedPlayers(\_:withCompletionHandler:)](gkmatchmaker/findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [GKMatchedPlayers](gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [addPlayers(to:matchRequest:completionHandler:)](gkmatchmaker/addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [finishMatchmaking(for:)](gkmatchmaker/finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel()](gkmatchmaker/cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInvite(to:)](gkmatchmaker/cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.

### Finding players who request matches

- [queryActivity(completionHandler:)](gkmatchmaker/queryactivity%28completionhandler_%29.md): Finds the number of players, across player groups, who recently requested a match.
- [queryPlayerGroupActivity(\_:withCompletionHandler:)](gkmatchmaker/queryplayergroupactivity%28__withcompletionhandler_%29.md): Finds the number of players in a player group who recently requested a match.
- [queryQueueActivity(\_:withCompletionHandler:)](gkmatchmaker/queryqueueactivity%28__withcompletionhandler_%29.md): Finds the number of players in a specific queue who recently requested a match.

### Looking for nearby players

- [startBrowsingForNearbyPlayers(handler:)](gkmatchmaker/startbrowsingfornearbyplayers%28handler_%29.md): Finds nearby players through Bluetooth or WiFi on the same subnet.
- [stopBrowsingForNearbyPlayers()](gkmatchmaker/stopbrowsingfornearbyplayers%28%29.md): Stops finding nearby players.

### Starting matches using SharePlay

- [startGroupActivity(playerHandler:)](gkmatchmaker/startgroupactivity%28playerhandler_%29.md): Begins a SharePlay activity for your game when a FaceTime call is active.
- [stopGroupActivity()](gkmatchmaker/stopgroupactivity%28%29.md): Ends a SharePlay activity for the entire group, which the local player activates.

### Deprecated

- [Deprecated Symbols](gkmatchmaker-deprecated-symbols.md)

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
- [GKMatchRequest](gkmatchrequest.md): An object that encapsulates the parameters to create a real-time or turn-based match.
- [GKMatchmakerViewController](gkmatchmakerviewcontroller.md): An interface that allows a player to invite other players to a real-time game and automatch to fill any empty slots.
- [GKInviteEventListener](gkinviteeventlistener.md): A protocol that handles invite events from Game Center.
- [GKInvite](gkinvite.md): An invitation to join a match sent to the local player from another player.
- [GKMatch](gkmatch.md): A peer-to-peer network between a group of players that sign into Game Center.

# GKMatchmaker (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An object that creates matches with other players without presenting an interface to the players.

## Declaration

```objectivec
@interface GKMatchmaker : NSObject
```

## Mentioned In

- [Creating activities for your game](creating-activities-for-your-game.md)
- [Finding multiple players for a game](finding-multiple-players-for-a-game.md)
- [Finding players with similar skill levels](finding-players-with-similar-skill-levels.md)

<a id="overview"></a>

## Overview

Use the `GKMatchmaker` class to auto-match players for a quicker game start, programmatically invite specific players, or implement your own interface for players to invite other players. If you want to present a familiar matchmaking GameKit interface to players, instead use either the [GKMatchmakerViewController](gkmatchmakerviewcontroller.md) or [GKTurnBasedMatchmakerViewController](gkturnbasedmatchmakerviewcontroller.md) class.

If you host a game on your own server, you can also use this class to find Game Center players. That is, you implement the networking and communication between the players through your own servers not Game Center.

To find players using this class, create a [GKMatchRequest](gkmatchrequest.md) object and configure it according to the parameters of your game. Then, pass the match request and a handler using the [findMatchForRequest:withCompletionHandler:](gkmatchmaker/findmatch%28for_withcompletionhandler_%29.md) method, or the [findPlayersForHostedMatchRequest:withCompletionHandler:](gkmatchmaker/findplayers%28forhostedmatchrequest_withcompletionhandler_%29.md) method for hosted games, to the shared `GKMatchmaker` object.

GameKit calls the handler when players accept their invitations. Implement the handler to set the delegate of the [GKMatch](gkmatch.md) object that GameKit sends and start the game when there are enough players.

If the match doesn’t have enough players (for example, some players decline their invitations), you can create another match request and call the [addPlayersToMatch:matchRequest:completionHandler:](gkmatchmaker/addplayers%28to_matchrequest_completionhandler_%29.md) method repeatedly until the match’s [expectedPlayerCount](gkmatch/expectedplayercount.md) property is zero. When you have enough players to start the match, call the [finishMatchmakingForMatch:](gkmatchmaker/finishmatchmaking%28for_%29.md) method to end the matchmaking process.

If you provide a SharePlay interface for inviting players, use the [startGroupActivityWithPlayerHandler:](gkmatchmaker/startgroupactivity%28playerhandler_%29.md) and [stopGroupActivity](gkmatchmaker/stopgroupactivity%28%29.md) methods to create a group activity on behalf of the player.

## Topics

### Retrieving the shared matchmaker

- [sharedMatchmaker](gkmatchmaker/shared%28%29.md): Returns the singleton matchmaker instance.

### Receiving invitations from other players

- [matchForInvite:completionHandler:](gkmatchmaker/match%28for_completionhandler_%29.md): Creates a match from an invitation that the local player accepts.

### Matching players

- [findMatchForRequest:withCompletionHandler:](gkmatchmaker/findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findPlayersForHostedRequest:withCompletionHandler:](gkmatchmaker/findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [findMatchedPlayers:withCompletionHandler:](gkmatchmaker/findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [GKMatchedPlayers](gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [addPlayersToMatch:matchRequest:completionHandler:](gkmatchmaker/addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [finishMatchmakingForMatch:](gkmatchmaker/finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel](gkmatchmaker/cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInviteToPlayer:](gkmatchmaker/cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.

### Finding players who request matches

- [queryActivityWithCompletionHandler:](gkmatchmaker/queryactivity%28completionhandler_%29.md): Finds the number of players, across player groups, who recently requested a match.
- [queryPlayerGroupActivity:withCompletionHandler:](gkmatchmaker/queryplayergroupactivity%28__withcompletionhandler_%29.md): Finds the number of players in a player group who recently requested a match.
- [queryQueueActivity:withCompletionHandler:](gkmatchmaker/queryqueueactivity%28__withcompletionhandler_%29.md): Finds the number of players in a specific queue who recently requested a match.

### Looking for nearby players

- [startBrowsingForNearbyPlayersWithHandler:](gkmatchmaker/startbrowsingfornearbyplayers%28handler_%29.md): Finds nearby players through Bluetooth or WiFi on the same subnet.
- [stopBrowsingForNearbyPlayers](gkmatchmaker/stopbrowsingfornearbyplayers%28%29.md): Stops finding nearby players.

### Starting matches using SharePlay

- [startGroupActivityWithPlayerHandler:](gkmatchmaker/startgroupactivity%28playerhandler_%29.md): Begins a SharePlay activity for your game when a FaceTime call is active.
- [stopGroupActivity](gkmatchmaker/stopgroupactivity%28%29.md): Ends a SharePlay activity for the entire group, which the local player activates.

### Deprecated

- [Deprecated Symbols](gkmatchmaker-deprecated-symbols.md)

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
- [GKMatchRequest](gkmatchrequest.md): An object that encapsulates the parameters to create a real-time or turn-based match.
- [GKMatchmakerViewController](gkmatchmakerviewcontroller.md): An interface that allows a player to invite other players to a real-time game and automatch to fill any empty slots.
- [GKInviteEventListener](gkinviteeventlistener.md): A protocol that handles invite events from Game Center.
- [GKInvite](gkinvite.md): An invitation to join a match sent to the local player from another player.
- [GKMatch](gkmatch.md): A peer-to-peer network between a group of players that sign into Game Center.
