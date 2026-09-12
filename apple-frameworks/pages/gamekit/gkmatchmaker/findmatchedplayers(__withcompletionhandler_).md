> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkmatchmaker/findmatchedplayers(_:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkmatchmaker/findmatchedplayers(_:withcompletionhandler:))

# findMatchedPlayers(\_:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+

Initiates a request to find players for a hosted match that uses matchmaking rules.

## Declaration

```swift
func findMatchedPlayers(_ request: GKMatchRequest, withCompletionHandler completionHandler: @escaping @Sendable (GKMatchedPlayers?, (any Error)?) -> Void)
```

```swift
func findMatchedPlayers(_ request: GKMatchRequest) async throws -> GKMatchedPlayers
```

## Parameters

- `request`: The configuration for the match.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`matchedPlayers`**: The players that join the match, including their properties that matchmaking rules uses. If unsuccessful, this parameter is `nil`.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

To find players using matchmaking rules, set the rules-related properties in `request` ([queueName](../gkmatchrequest/queuename.md) and optionally, [properties](../gkmatchrequest/properties.md)) before you call this method. For more information, see [Matchmaking rules](../matchmaking-rules.md).

## See Also

### Matching players

- [findMatch(for:withCompletionHandler:)](findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findPlayers(forHostedRequest:withCompletionHandler:)](findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [GKMatchedPlayers](../gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [addPlayers(to:matchRequest:completionHandler:)](addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [finishMatchmaking(for:)](finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel()](cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInvite(to:)](cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.

# findMatchedPlayers:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.1+

Initiates a request to find players for a hosted match that uses matchmaking rules.

## Declaration

```objectivec
- (void) findMatchedPlayers:(GKMatchRequest *) request withCompletionHandler:(void (^)(GKMatchedPlayers *matchedPlayers, NSError *error)) completionHandler;
```

## Parameters

- `request`: The configuration for the match.
- `completionHandler`: The block that GameKit calls when it completes the request.

  This block receives the following parameters:

  - **`matchedPlayers`**: The players that join the match, including their properties that matchmaking rules uses. If unsuccessful, this parameter is `nil`.
  - **`error`**: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Finding players for custom server-based games](../finding-players-for-custom-server-based-games.md)

<a id="Discussion"></a>

## Discussion

To find players using matchmaking rules, set the rules-related properties in `request` ([queueName](../gkmatchrequest/queuename.md) and optionally, [properties](../gkmatchrequest/properties.md)) before you call this method. For more information, see [Matchmaking rules](../matchmaking-rules.md).

## See Also

### Matching players

- [findMatchForRequest:withCompletionHandler:](findmatch%28for_withcompletionhandler_%29.md): Initiates a request to find players for a peer-to-peer match.
- [findPlayersForHostedRequest:withCompletionHandler:](findplayers%28forhostedrequest_withcompletionhandler_%29.md): Initiates a request to find players for a hosted match.
- [GKMatchedPlayers](../gkmatchedplayers.md): An object that represents matchmaking results, including the players that join the match and their properties that matchmaking rules uses.
- [addPlayersToMatch:matchRequest:completionHandler:](addplayers%28to_matchrequest_completionhandler_%29.md): Invites additional players to an existing match.
- [finishMatchmakingForMatch:](finishmatchmaking%28for_%29.md): Informs the server when programmatic matchmaking finishes.
- [cancel](cancel%28%29.md): Cancels a matchmaking request.
- [cancelPendingInviteToPlayer:](cancelpendinginvite%28to_%29.md): Cancels a pending invitation to another player.
