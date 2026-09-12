> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/findmatch(for:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/findmatch(for:withcompletionhandler:))

# findMatch(for:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Initiates a request to find players for a peer-to-peer match.

## Declaration

```swift
func findMatch(for request: GKMatchRequest, withCompletionHandler completionHandler: (@Sendable (GKMatch?, (any Error)?) -> Void)? = nil)
```

```swift
func findMatch(for request: GKMatchRequest) async throws -> GKMatch
```

## Parameters

- `request`: The configuration for the match.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`match`**: The match that the players join. If unsuccessful, this parameter is `nil`.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

To find players using matchmaking rules, set the rules-related properties in `request` ([queueName](../gkmatchrequest/queuename.md) and optionally, [properties](../gkmatchrequest/properties.md)) before you call this method. For more information, see [Matchmaking rules](../matchmaking-rules.md).

## See Also

### Matching players

- [findPlayers(forHostedRequest:withCompletionHandler:)](findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [findMatchedPlayers(\_:withCompletionHandler:)](findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [GKMatchedPlayers](../gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [addPlayers(to:matchRequest:completionHandler:)](addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [finishMatchmaking(for:)](finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel()](cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInvite(to:)](cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.

# findMatchForRequest:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Initiates a request to find players for a peer-to-peer match.

## Declaration

```objectivec
- (void) findMatchForRequest:(GKMatchRequest *) request withCompletionHandler:(void (^)(GKMatch *match, NSError *error)) completionHandler;
```

## Parameters

- `request`: The configuration for the match.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`match`**: The match that the players join. If unsuccessful, this parameter is `nil`.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Finding multiple players for a game](../finding-multiple-players-for-a-game.md)
- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

To find players using matchmaking rules, set the rules-related properties in `request` ([queueName](../gkmatchrequest/queuename.md) and optionally, [properties](../gkmatchrequest/properties.md)) before you call this method. For more information, see [Matchmaking rules](../matchmaking-rules.md).

## See Also

### Matching players

- [findPlayersForHostedRequest:withCompletionHandler:](findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [findMatchedPlayers:withCompletionHandler:](findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [GKMatchedPlayers](../gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [addPlayersToMatch:matchRequest:completionHandler:](addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [finishMatchmakingForMatch:](finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel](cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInviteToPlayer:](cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.
