> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkinvite](https://developer.apple.com/documentation/gamekit/gkinvite)

# GKInvite (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An invitation to join a match sent to the local player from another player.

## Declaration

```swift
class GKInvite
```

## Mentioned In

- [Finding players for custom server-based games](finding-players-for-custom-server-based-games.md)

<a id="overview"></a>

## Overview

Your game never directly creates `GKInvite` objects. Instead, these objects are created by GameKit and delivered to your game’s matchmaking event handler. The properties of the invitation object describe the match to which another player invites the local player.

## Topics

### Getting Properties

- [sender](gkinvite/sender.md): The player who sends the invitation.
- [playerAttributes](gkinvite/playerattributes.md): The player attributes for the match.
- [playerGroup](gkinvite/playergroup.md): The player group for the match.
- [isHosted](gkinvite/ishosted.md): A Boolean value that indicates whether you host the game on your own servers.
- [inviter](gkinvite/inviter.md): Deprecated. The identifier for the player who sends the invitation.

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
- [GKMatchmaker](gkmatchmaker.md): An object that creates matches with other players without presenting an interface to the players.
- [GKMatchmakerViewController](gkmatchmakerviewcontroller.md): An interface that allows a player to invite other players to a real-time game and automatch to fill any empty slots.
- [GKInviteEventListener](gkinviteeventlistener.md): A protocol that handles invite events from Game Center.
- [GKMatch](gkmatch.md): A peer-to-peer network between a group of players that sign into Game Center.

# GKInvite (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

An invitation to join a match sent to the local player from another player.

## Declaration

```objectivec
@interface GKInvite : NSObject
```

## Mentioned In

- [Finding players for custom server-based games](finding-players-for-custom-server-based-games.md)

<a id="overview"></a>

## Overview

Your game never directly creates `GKInvite` objects. Instead, these objects are created by GameKit and delivered to your game’s matchmaking event handler. The properties of the invitation object describe the match to which another player invites the local player.

## Topics

### Getting Properties

- [sender](gkinvite/sender.md): The player who sends the invitation.
- [playerAttributes](gkinvite/playerattributes.md): The player attributes for the match.
- [playerGroup](gkinvite/playergroup.md): The player group for the match.
- [hosted](gkinvite/ishosted.md): A Boolean value that indicates whether you host the game on your own servers.
- [inviter](gkinvite/inviter.md): Deprecated. The identifier for the player who sends the invitation.

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
- [GKMatchmaker](gkmatchmaker.md): An object that creates matches with other players without presenting an interface to the players.
- [GKMatchmakerViewController](gkmatchmakerviewcontroller.md): An interface that allows a player to invite other players to a real-time game and automatch to fill any empty slots.
- [GKInviteEventListener](gkinviteeventlistener.md): A protocol that handles invite events from Game Center.
- [GKMatch](gkmatch.md): A peer-to-peer network between a group of players that sign into Game Center.
