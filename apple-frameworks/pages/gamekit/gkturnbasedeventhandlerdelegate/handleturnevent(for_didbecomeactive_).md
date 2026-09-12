> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventhandlerdelegate/handleturnevent(for:didbecomeactive:)](https://developer.apple.com/documentation/gamekit/gkturnbasedeventhandlerdelegate/handleturnevent(for:didbecomeactive:))

# handleTurnEvent(for:didBecomeActive:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 6.0+ (deprecated in 7.0) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Sent to the delegate when it is the local player’s turn to act in a turn-based match.

## Declaration

```swift
func handleTurnEvent(for match: GKTurnBasedMatch, didBecomeActive: Bool)
```

## Parameters

- `match`: A match object containing the current state of the match.
- `didBecomeActive`: [true](https://developer.apple.com/documentation/swift/true) if the game was launched or brought to the foreground to handle the event.

<a id="Discussion"></a>

## Discussion

When your delegate receives this message, the player has accepted a push notification for a match already in progress. Your game should end whatever task it was performing and switch to the match information provided by the match object.

## See Also

### Receiving Turn-based Events

- [handleInvite(fromGameCenter:)](handleinvite%28fromgamecenter_%29.md): Deprecated. Sent to the delegate when the local player receives an invitation to join a new turn-based match.
- [handleTurnEvent(for:)](handleturnevent%28for_%29.md): Deprecated. Sent to the delegate when it is the local player’s turn to act in a turn-based match.
- [handleMatchEnded(\_:)](handlematchended%28__%29.md): Deprecated. Sent to the delegate when a match the local player is participating in has ended.

# handleTurnEventForMatch:didBecomeActive: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Sent to the delegate when it is the local player’s turn to act in a turn-based match.

## Declaration

```objectivec
- (void) handleTurnEventForMatch:(GKTurnBasedMatch *) match didBecomeActive:(BOOL) didBecomeActive;
```

## Parameters

- `match`: A match object containing the current state of the match.
- `didBecomeActive`: [true](https://developer.apple.com/documentation/swift/true) if the game was launched or brought to the foreground to handle the event.

<a id="Discussion"></a>

## Discussion

When your delegate receives this message, the player has accepted a push notification for a match already in progress. Your game should end whatever task it was performing and switch to the match information provided by the match object.

## See Also

### Receiving Turn-based Events

- [handleInviteFromGameCenter:](handleinvite%28fromgamecenter_%29.md): Deprecated. Sent to the delegate when the local player receives an invitation to join a new turn-based match.
- [handleTurnEventForMatch:](handleturnevent%28for_%29.md): Deprecated. Sent to the delegate when it is the local player’s turn to act in a turn-based match.
- [handleMatchEnded:](handlematchended%28__%29.md): Deprecated. Sent to the delegate when a match the local player is participating in has ended.
