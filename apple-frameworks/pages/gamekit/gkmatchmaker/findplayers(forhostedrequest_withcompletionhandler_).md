> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/findplayers(forhostedrequest:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/findplayers(forhostedrequest:withcompletionhandler:))

# findPlayers(forHostedRequest:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Initiates a request to find players for a hosted match.

## Declaration

```swift
func findPlayers(forHostedRequest request: GKMatchRequest, withCompletionHandler completionHandler: (@Sendable ([GKPlayer]?, (any Error)?) -> Void)? = nil)
```

```swift
func findPlayers(forHostedRequest request: GKMatchRequest) async throws -> [GKPlayer]
```

## Parameters

- `request`: The configuration for the match.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`players`**: The players that join the match. If unsuccessful, this parameter is `nil`.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

To find players using matchmaking rules, set the rules-related properties in `request` ([queueName](../gkmatchrequest/queuename.md) and optionally, [properties](../gkmatchrequest/properties.md)) before you call this method. To get the properties of all players who join the match, use the [findMatchedPlayers(\_:withCompletionHandler:)](findmatchedplayers%28__withcompletionhandler_%29.md) method instead. For more information, see [Matchmaking rules](../matchmaking-rules.md).

## See Also

### Matching players

- [findMatch(for:withCompletionHandler:)](findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findMatchedPlayers(\_:withCompletionHandler:)](findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [GKMatchedPlayers](../gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [addPlayers(to:matchRequest:completionHandler:)](addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [finishMatchmaking(for:)](finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel()](cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInvite(to:)](cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.

# findPlayersForHostedRequest:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Initiates a request to find players for a hosted match.

## Declaration

```objectivec
- (void) findPlayersForHostedRequest:(GKMatchRequest *) request withCompletionHandler:(void (^)(NSArray<GKPlayer *> *players, NSError *error)) completionHandler;
```

## Parameters

- `request`: The configuration for the match.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`players`**: The players that join the match. If unsuccessful, this parameter is `nil`.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

To find players using matchmaking rules, set the rules-related properties in `request` ([queueName](../gkmatchrequest/queuename.md) and optionally, [properties](../gkmatchrequest/properties.md)) before you call this method. To get the properties of all players who join the match, use the [findMatchedPlayers:withCompletionHandler:](findmatchedplayers%28__withcompletionhandler_%29.md) method instead. For more information, see [Matchmaking rules](../matchmaking-rules.md).

## See Also

### Matching players

- [findMatchForRequest:withCompletionHandler:](findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findMatchedPlayers:withCompletionHandler:](findmatchedplayers%28__withcompletionhandler_%29.md): Initiates a request to find players for a hosted match that uses matchmaking rules.
- [GKMatchedPlayers](../gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [addPlayersToMatch:matchRequest:completionHandler:](addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [finishMatchmakingForMatch:](finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel](cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInviteToPlayer:](cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.
