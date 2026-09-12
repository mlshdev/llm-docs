> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/find(for:withcompletionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/find(for:withcompletionhandler:))

# find(for:withCompletionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a new match or finds an existing match that needs a player.

## Declaration

```swift
class func find(for request: GKMatchRequest, withCompletionHandler completionHandler: @escaping @Sendable (GKTurnBasedMatch?, (any Error)?) -> Void)
```

```swift
class func find(for request: GKMatchRequest) async throws -> GKTurnBasedMatch
```

## Parameters

- `request`: The configuration for the turn-based match.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***match***: A new or existing match, or `nil` if an error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

When you provide a custom interface for managing matches, use this method to programmatically create or find a turn-based match on behalf of the local player. The local player is always the current participant in the match object GameKit passes to the completion handler. Therefore, implement the completion handler to show the gameplay interface and let the local player take their turn.

To be consistent with older servers and earlier versions of iOS, GameKit sets the minimum number of players specified by the `GKMatchRequest` object to be equal to the maximum number of players when looking for a match.

## See Also

### Creating a Match

- [acceptInvite(completionHandler:)](acceptinvite%28completionhandler_%29.md): Accepts an invitation for the local player to join a turn-based match.
- [declineInvite(completionHandler:)](declineinvite%28completionhandler_%29.md): Declines an invitation for the local player to join a turn-based match.
- [rematch(completionHandler:)](rematch%28completionhandler_%29.md): Creates a new turn-based match with the same participants from an existing match.

# findMatchForRequest:withCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a new match or finds an existing match that needs a player.

## Declaration

```objectivec
+ (void) findMatchForRequest:(GKMatchRequest *) request withCompletionHandler:(void (^)(GKTurnBasedMatch *match, NSError *error)) completionHandler;
```

## Parameters

- `request`: The configuration for the turn-based match.
- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***match***: A new or existing match, or `nil` if an error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

When you provide a custom interface for managing matches, use this method to programmatically create or find a turn-based match on behalf of the local player. The local player is always the current participant in the match object GameKit passes to the completion handler. Therefore, implement the completion handler to show the gameplay interface and let the local player take their turn.

To be consistent with older servers and earlier versions of iOS, GameKit sets the minimum number of players specified by the `GKMatchRequest` object to be equal to the maximum number of players when looking for a match.

## See Also

### Creating a Match

- [acceptInviteWithCompletionHandler:](acceptinvite%28completionhandler_%29.md): Accepts an invitation for the local player to join a turn-based match.
- [declineInviteWithCompletionHandler:](declineinvite%28completionhandler_%29.md): Declines an invitation for the local player to join a turn-based match.
- [rematchWithCompletionHandler:](rematch%28completionhandler_%29.md): Creates a new turn-based match with the same participants from an existing match.
