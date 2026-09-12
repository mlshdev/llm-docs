> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/addplayers(to:matchrequest:completionhandler:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/addplayers(to:matchrequest:completionhandler:))

# addPlayers(to:matchRequest:completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Invites additional players to an existing match.

## Declaration

```swift
func addPlayers(to match: GKMatch, matchRequest: GKMatchRequest, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func addPlayers(to match: GKMatch, matchRequest: GKMatchRequest) async throws
```

## Parameters

- `match`: The match to which GameKit adds the players.
- `matchRequest`: The configuration for the match.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

Use this method to add more players to an existing match that doesn’t have enough players.

> **Important**

>  Invoke this method for only one player connected to the match.

## See Also

### Matching players

- [findMatch(for:withCompletionHandler:)](findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findPlayers(forHostedRequest:withCompletionHandler:)](findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [findMatchedPlayers(\_:withCompletionHandler:)](findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [GKMatchedPlayers](../gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [finishMatchmaking(for:)](finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel()](cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInvite(to:)](cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.

# addPlayersToMatch:matchRequest:completionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Invites additional players to an existing match.

## Declaration

```objectivec
- (void) addPlayersToMatch:(GKMatch *) match matchRequest:(GKMatchRequest *) matchRequest completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `match`: The match to which GameKit adds the players.
- `matchRequest`: The configuration for the match.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

Use this method to add more players to an existing match that doesn’t have enough players.

> **Important**

>  Invoke this method for only one player connected to the match.

## See Also

### Matching players

- [findMatchForRequest:withCompletionHandler:](findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findPlayersForHostedRequest:withCompletionHandler:](findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [findMatchedPlayers:withCompletionHandler:](findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [GKMatchedPlayers](../gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [finishMatchmakingForMatch:](finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel](cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInviteToPlayer:](cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.
