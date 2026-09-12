> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/cancelpendinginvite(to:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/cancelpendinginvite(to:))

# cancelPendingInvite(to:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Cancels a pending invitation to another player.

## Declaration

```swift
func cancelPendingInvite(to player: GKPlayer)
```

## Parameters

- `player`: The player that GameKit sends the invitation to.

## See Also

### Matching players

- [findMatch(for:withCompletionHandler:)](findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findPlayers(forHostedRequest:withCompletionHandler:)](findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [findMatchedPlayers(\_:withCompletionHandler:)](findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [GKMatchedPlayers](../gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [addPlayers(to:matchRequest:completionHandler:)](addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [finishMatchmaking(for:)](finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel()](cancel%28%29.md): Cancels a matchmaking request.

# cancelPendingInviteToPlayer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Cancels a pending invitation to another player.

## Declaration

```objectivec
- (void) cancelPendingInviteToPlayer:(GKPlayer *) player;
```

## Parameters

- `player`: The player that GameKit sends the invitation to.

## See Also

### Matching players

- [findMatchForRequest:withCompletionHandler:](findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findPlayersForHostedRequest:withCompletionHandler:](findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [findMatchedPlayers:withCompletionHandler:](findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [GKMatchedPlayers](../gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [addPlayersToMatch:matchRequest:completionHandler:](addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [finishMatchmakingForMatch:](finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel](cancel%28%29.md): Cancels a matchmaking request.
