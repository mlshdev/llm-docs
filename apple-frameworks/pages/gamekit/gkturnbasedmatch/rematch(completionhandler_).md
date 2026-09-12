> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatch/rematch(completionhandler:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatch/rematch(completionhandler:))

# rematch(completionHandler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a new turn-based match with the same participants from an existing match.

## Declaration

```swift
func rematch(completionHandler: (@Sendable (GKTurnBasedMatch?, (any Error)?) -> Void)? = nil)
```

```swift
func rematch() async throws -> GKTurnBasedMatch
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***match***: A new match, or `nil` if an error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## See Also

### Creating a Match

- [find(for:withCompletionHandler:)](find%28for_withcompletionhandler_%29.md): Creates a new match or finds an existing match that needs a player.
- [acceptInvite(completionHandler:)](acceptinvite%28completionhandler_%29.md): Accepts an invitation for the local player to join a turn-based match.
- [declineInvite(completionHandler:)](declineinvite%28completionhandler_%29.md): Declines an invitation for the local player to join a turn-based match.

# rematchWithCompletionHandler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a new turn-based match with the same participants from an existing match.

## Declaration

```objectivec
- (void) rematchWithCompletionHandler:(void (^)(GKTurnBasedMatch *match, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: The block that GameKit calls when it completes the request.

  The block receives the following parameters:

  - ***match***: A new match, or `nil` if an error occurs.
  - ***error***: Describes an error if it occurs, or `nil` if the operation completes.

## See Also

### Creating a Match

- [findMatchForRequest:withCompletionHandler:](find%28for_withcompletionhandler_%29.md): Creates a new match or finds an existing match that needs a player.
- [acceptInviteWithCompletionHandler:](acceptinvite%28completionhandler_%29.md): Accepts an invitation for the local player to join a turn-based match.
- [declineInviteWithCompletionHandler:](declineinvite%28completionhandler_%29.md): Declines an invitation for the local player to join a turn-based match.
