> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchedplayers](https://developer.apple.com/documentation/gamekit/gkmatchedplayers)

# GKMatchedPlayers (Swift)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+

An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.

## Declaration

```swift
class GKMatchedPlayers
```

<a id="overview"></a>

## Overview

If the [properties](gkmatchedplayers/properties.md) and `playersProperties` properties are `nil`, Game Center didn’t use matchmaking rules to find the players. For more information, see [Matchmaking rules](matchmaking-rules.md).

## Topics

### Getting players

- [players](gkmatchedplayers/players.md): The players that join the match.

### Matchmaking using rules

- [properties](gkmatchedplayers/properties.md): The local player’s properties that matchmaking rules uses to find the players, with some additions.
- [playerProperties](gkmatchedplayers/playerproperties.md): The properties for other players that matchmaking rules uses to find players, with some additions.

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

### Matching players

- [findMatch(for:withCompletionHandler:)](gkmatchmaker/findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findPlayers(forHostedRequest:withCompletionHandler:)](gkmatchmaker/findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [findMatchedPlayers(\_:withCompletionHandler:)](gkmatchmaker/findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [addPlayers(to:matchRequest:completionHandler:)](gkmatchmaker/addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [finishMatchmaking(for:)](gkmatchmaker/finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel()](gkmatchmaker/cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInvite(to:)](gkmatchmaker/cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.

# GKMatchedPlayers (Objective-C)

**Framework:** GameKit  
**Kind:** Class  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+

An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.

## Declaration

```objectivec
@interface GKMatchedPlayers : NSObject
```

<a id="overview"></a>

## Overview

If the [properties](gkmatchedplayers/properties.md) and `playersProperties` properties are `nil`, Game Center didn’t use matchmaking rules to find the players. For more information, see [Matchmaking rules](matchmaking-rules.md).

## Topics

### Getting players

- [players](gkmatchedplayers/players.md): The players that join the match.

### Matchmaking using rules

- [properties](gkmatchedplayers/properties.md): The local player’s properties that matchmaking rules uses to find the players, with some additions.
- [playerProperties](gkmatchedplayers/playerproperties.md): The properties for other players that matchmaking rules uses to find players, with some additions.
- [GKMatchProperties](gkmatchproperties.md): A type for game-specific properties that Game Center uses to find players when using matchmaking rules.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Matching players

- [findMatchForRequest:withCompletionHandler:](gkmatchmaker/findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findPlayersForHostedRequest:withCompletionHandler:](gkmatchmaker/findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [findMatchedPlayers:withCompletionHandler:](gkmatchmaker/findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [addPlayersToMatch:matchRequest:completionHandler:](gkmatchmaker/addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [finishMatchmakingForMatch:](gkmatchmaker/finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel](gkmatchmaker/cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInviteToPlayer:](gkmatchmaker/cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.
