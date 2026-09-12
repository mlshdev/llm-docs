> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/finishmatchmaking(for:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/finishmatchmaking(for:))

# finishMatchmaking(for:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Informs the server when programmatic matchmaking finishes.

## Declaration

```swift
func finishMatchmaking(for match: GKMatch)
```

## Parameters

- `match`: The match that you are ready to start.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)

<a id="Discussion"></a>

## Discussion

If you need to call the [addPlayers(to:matchRequest:completionHandler:)](addplayers%28to_matchrequest_completionhandler_%29.md) method to fill the slots in an existing match, call the [finishMatchmaking(for:)](finishmatchmaking%28for_%29.md) method when you have enough players and before you begin the match.

## See Also

### Matching players

- [findMatch(for:withCompletionHandler:)](findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findPlayers(forHostedRequest:withCompletionHandler:)](findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [findMatchedPlayers(\_:withCompletionHandler:)](findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [GKMatchedPlayers](../gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [addPlayers(to:matchRequest:completionHandler:)](addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [cancel()](cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInvite(to:)](cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.

# finishMatchmakingForMatch: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Informs the server when programmatic matchmaking finishes.

## Declaration

```objectivec
- (void) finishMatchmakingForMatch:(GKMatch *) match;
```

## Parameters

- `match`: The match that you are ready to start.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)

<a id="Discussion"></a>

## Discussion

If you need to call the [addPlayersToMatch:matchRequest:completionHandler:](addplayers%28to_matchrequest_completionhandler_%29.md) method to fill the slots in an existing match, call the [finishMatchmakingForMatch:](finishmatchmaking%28for_%29.md) method when you have enough players and before you begin the match.

## See Also

### Matching players

- [findMatchForRequest:withCompletionHandler:](findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findPlayersForHostedRequest:withCompletionHandler:](findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [findMatchedPlayers:withCompletionHandler:](findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [GKMatchedPlayers](../gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [addPlayersToMatch:matchRequest:completionHandler:](addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [cancel](cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInviteToPlayer:](cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.
