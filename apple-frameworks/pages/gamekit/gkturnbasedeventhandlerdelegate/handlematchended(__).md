> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventhandlerdelegate/handlematchended(_:)](https://developer.apple.com/documentation/gamekit/gkturnbasedeventhandlerdelegate/handlematchended(_:))

# handleMatchEnded(\_:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 6.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Sent to the delegate when a match the local player is participating in has ended.

## Declaration

```swift
optional func handleMatchEnded(_ match: GKTurnBasedMatch)
```

## Parameters

- `match`: The match that just ended.

<a id="Discussion"></a>

## Discussion

When your delegate receives this message, it should display the match’s final results to the player and allow the player the option of saving or removing the match data from Game Center.

## See Also

### Receiving Turn-based Events

- [handleInvite(fromGameCenter:)](handleinvite%28fromgamecenter_%29.md): Deprecated. Sent to the delegate when the local player receives an invitation to join a new turn-based match.
- [handleTurnEvent(for:)](handleturnevent%28for_%29.md): Deprecated. Sent to the delegate when it is the local player’s turn to act in a turn-based match.
- [handleTurnEvent(for:didBecomeActive:)](handleturnevent%28for_didbecomeactive_%29.md): Deprecated. Sent to the delegate when it is the local player’s turn to act in a turn-based match.

# handleMatchEnded: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ (deprecated in 7.0) · iPadOS 6.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Sent to the delegate when a match the local player is participating in has ended.

## Declaration

```objectivec
- (void) handleMatchEnded:(GKTurnBasedMatch *) match;
```

## Parameters

- `match`: The match that just ended.

<a id="Discussion"></a>

## Discussion

When your delegate receives this message, it should display the match’s final results to the player and allow the player the option of saving or removing the match data from Game Center.

## See Also

### Receiving Turn-based Events

- [handleInviteFromGameCenter:](handleinvite%28fromgamecenter_%29.md): Deprecated. Sent to the delegate when the local player receives an invitation to join a new turn-based match.
- [handleTurnEventForMatch:](handleturnevent%28for_%29.md): Deprecated. Sent to the delegate when it is the local player’s turn to act in a turn-based match.
- [handleTurnEventForMatch:didBecomeActive:](handleturnevent%28for_didbecomeactive_%29.md): Deprecated. Sent to the delegate when it is the local player’s turn to act in a turn-based match.
