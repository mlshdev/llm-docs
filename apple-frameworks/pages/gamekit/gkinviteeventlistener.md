> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkinviteeventlistener](https://developer.apple.com/documentation/gamekit/gkinviteeventlistener)

# GKInviteEventListener (Swift)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A protocol that handles invite events from Game Center.

## Declaration

```swift
protocol GKInviteEventListener
```

## Mentioned In

- [Finding multiple players for a game](finding-multiple-players-for-a-game.md)

<a id="overview"></a>

## Overview

Implement the methods in the [GKInviteEventListener](gkinviteeventlistener.md) protocol to accept invitations from other players or handle when other players accept invitations from the local player.

Adopt the [GKLocalPlayerListener](gklocalplayerlistener.md) protocol to listen for and handle a variety of Game Center events for player accounts instead of the individual [GKChallengeListener](gkchallengelistener.md), [GKInviteEventListener](gkinviteeventlistener.md), [GKSavedGameListener](gksavedgamelistener.md), and [GKTurnBasedEventListener](gkturnbasedeventlistener.md) protocols.

For details, see [Finding multiple players for a game](finding-multiple-players-for-a-game.md).

## Topics

### Starting a New Match

- [player(\_:didAccept:)](gkinviteeventlistener/player%28__didaccept_%29.md): Handles the event when the local player accepts an invitation from another player.
- [player(\_:didRequestMatchWithRecipients:)](gkinviteeventlistener/player%28__didrequestmatchwithrecipients_%29.md): Handles the event when the local player sends other players an invitation to join a match.
- [player(\_:didRequestMatchWithPlayers:)](gkinviteeventlistener/player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles the event when the local player sends other players an invitation to join a match.

## Relationships

### Inherited By

- [GKLocalPlayerListener](gklocalplayerlistener.md)

## See Also

### Real-time games

- [Creating real-time games](creating-real-time-games.md): Develop games where multiple players interact in real time.
- [Finding multiple players for a game](finding-multiple-players-for-a-game.md): Discover and invite other players to participate in a real-time game.
- [Exchanging data between players in real-time games](exchanging-data-between-players-in-real-time-games.md): Send data between players in a real-time multiplayer game.
- [Adding voice chat to multiplayer games](adding-voice-chat-to-multiplayer-games.md): Enable players to voice chat with all, or groups of, players in a multiplayer game.
- [Finding players for custom server-based games](finding-players-for-custom-server-based-games.md): Connect players to your custom server-hosted games by creating game sessions with hosted matches.
- [Matchmaking rules](matchmaking-rules.md): Game Center applies different type of rules you create in a particular order to find the best matches.
- [GKMatchRequest](gkmatchrequest.md): An object that encapsulates the parameters to create a real-time or turn-based match.
- [GKMatchmaker](gkmatchmaker.md): An object that creates matches with other players without presenting an interface to the players.
- [GKMatchmakerViewController](gkmatchmakerviewcontroller.md): An interface that allows a player to invite other players to a real-time game and automatch to fill any empty slots.
- [GKInvite](gkinvite.md): An invitation to join a match sent to the local player from another player.
- [GKMatch](gkmatch.md): A peer-to-peer network between a group of players that sign into Game Center.

# GKInviteEventListener (Objective-C)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A protocol that handles invite events from Game Center.

## Declaration

```objectivec
@protocol GKInviteEventListener
```

## Mentioned In

- [Finding multiple players for a game](finding-multiple-players-for-a-game.md)

<a id="overview"></a>

## Overview

Implement the methods in the [GKInviteEventListener](gkinviteeventlistener.md) protocol to accept invitations from other players or handle when other players accept invitations from the local player.

Adopt the [GKLocalPlayerListener](gklocalplayerlistener.md) protocol to listen for and handle a variety of Game Center events for player accounts instead of the individual [GKChallengeListener](gkchallengelistener.md), [GKInviteEventListener](gkinviteeventlistener.md), [GKSavedGameListener](gksavedgamelistener.md), and [GKTurnBasedEventListener](gkturnbasedeventlistener.md) protocols.

For details, see [Finding multiple players for a game](finding-multiple-players-for-a-game.md).

## Topics

### Starting a New Match

- [player:didAcceptInvite:](gkinviteeventlistener/player%28__didaccept_%29.md): Handles the event when the local player accepts an invitation from another player.
- [player:didRequestMatchWithRecipients:](gkinviteeventlistener/player%28__didrequestmatchwithrecipients_%29.md): Handles the event when the local player sends other players an invitation to join a match.
- [player:didRequestMatchWithPlayers:](gkinviteeventlistener/player%28__didrequestmatchwithplayers_%29.md): Deprecated. Handles the event when the local player sends other players an invitation to join a match.

## Relationships

### Inherited By

- [GKLocalPlayerListener](gklocalplayerlistener.md)

## See Also

### Real-time games

- [Creating real-time games](creating-real-time-games.md): Develop games where multiple players interact in real time.
- [Finding multiple players for a game](finding-multiple-players-for-a-game.md): Discover and invite other players to participate in a real-time game.
- [Exchanging data between players in real-time games](exchanging-data-between-players-in-real-time-games.md): Send data between players in a real-time multiplayer game.
- [Adding voice chat to multiplayer games](adding-voice-chat-to-multiplayer-games.md): Enable players to voice chat with all, or groups of, players in a multiplayer game.
- [Finding players for custom server-based games](finding-players-for-custom-server-based-games.md): Connect players to your custom server-hosted games by creating game sessions with hosted matches.
- [Matchmaking rules](matchmaking-rules.md): Game Center applies different type of rules you create in a particular order to find the best matches.
- [GKMatchRequest](gkmatchrequest.md): An object that encapsulates the parameters to create a real-time or turn-based match.
- [GKMatchmaker](gkmatchmaker.md): An object that creates matches with other players without presenting an interface to the players.
- [GKMatchmakerViewController](gkmatchmakerviewcontroller.md): An interface that allows a player to invite other players to a real-time game and automatch to fill any empty slots.
- [GKInvite](gkinvite.md): An invitation to join a match sent to the local player from another player.
- [GKMatch](gkmatch.md): A peer-to-peer network between a group of players that sign into Game Center.
