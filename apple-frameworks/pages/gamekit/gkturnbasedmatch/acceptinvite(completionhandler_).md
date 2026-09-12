> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/acceptinvite(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/acceptinvite(completionhandler:))

# acceptInvite(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Accepts an invitation for the local player to join a turn-based match.

## Declaration

```swift
func acceptInvite(completionHandler: (@Sendable (GKTurnBasedMatch?, (any Error)?) -> Void)? = nil)
```

```swift
func acceptInvite() async throws -> GKTurnBasedMatch
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***match***: The match for the player to join, or `nil` if an error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

When you provide a custom interface for managing matches, use this method to programmatically accept an invitation on behalf of the local player.

## See Also

### Creating a Match

- [find(for:withCompletionHandler:)](find%28for_withcompletionhandler_%29.md): Creates a new match or finds an existing match that needs a player.
- [declineInvite(completionHandler:)](declineinvite%28completionhandler_%29.md): Declines an invitation for the local player to join a turn-based match.
- [rematch(completionHandler:)](rematch%28completionhandler_%29.md): Creates a new turn-based match with the same participants from an existing match.

# acceptInviteWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Accepts an invitation for the local player to join a turn-based match.

## Declaration

```objectivec
- (void) acceptInviteWithCompletionHandler:(void (^)(GKTurnBasedMatch *match, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***match***: The match for the player to join, or `nil` if an error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## Mentioned In

- [Starting turn-based matches and passing turns between players](../starting-turn-based-matches-and-passing-turns-between-players.md)

<a id="Discussion"></a>

## Discussion

When you provide a custom interface for managing matches, use this method to programmatically accept an invitation on behalf of the local player.

## See Also

### Creating a Match

- [findMatchForRequest:withCompletionHandler:](find%28for_withcompletionhandler_%29.md): Creates a new match or finds an existing match that needs a player.
- [declineInviteWithCompletionHandler:](declineinvite%28completionhandler_%29.md): Declines an invitation for the local player to join a turn-based match.
- [rematchWithCompletionHandler:](rematch%28completionhandler_%29.md): Creates a new turn-based match with the same participants from an existing match.
