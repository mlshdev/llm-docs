> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedeventhandlerdelegate/handleinvite(fromgamecenter:)](https://developer.apple.com/documentation/gamekit/gkturnbasedeventhandlerdelegate/handleinvite(fromgamecenter:))

# handleInvite(fromGameCenter:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 5.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Sent to the delegate when the local player receives an invitation to join a new turn-based match.

## Declaration

```swift
func handleInvite(fromGameCenter playersToInvite: [String])
```

## Parameters

- `playersToInvite`: An array of `NSString` objects containing the player identifiers for the players to initially invite to the game.

<a id="Discussion"></a>

## Discussion

When your delegate receives this message, your game should create a new [GKMatchRequest](../gkmatchrequest.md) object and assign the `playersToInvite` parameter to the match request’s [playersToInvite](../gkmatchrequest/playerstoinvite.md) property. Then, your game can either call the [GKTurnBasedMatch](../gkturnbasedmatch.md) class method [find(for:withCompletionHandler:)](../gkturnbasedmatch/find%28for_withcompletionhandler_%29.md) to find a match programmatically or it can use the request to instantiate a new [GKTurnBasedMatchmakerViewController](../gkturnbasedmatchmakerviewcontroller.md) object to show a user interface to the player.

## See Also

### Receiving Turn-based Events

- [handleTurnEvent(for:)](handleturnevent%28for_%29.md): Deprecated. Sent to the delegate when it is the local player’s turn to act in a turn-based match.
- [handleTurnEvent(for:didBecomeActive:)](handleturnevent%28for_didbecomeactive_%29.md): Deprecated. Sent to the delegate when it is the local player’s turn to act in a turn-based match.
- [handleMatchEnded(\_:)](handlematchended%28__%29.md): Deprecated. Sent to the delegate when a match the local player is participating in has ended.

# handleInviteFromGameCenter: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Sent to the delegate when the local player receives an invitation to join a new turn-based match.

## Declaration

```objectivec
- (void) handleInviteFromGameCenter:(NSArray<NSString *> *) playersToInvite;
```

## Parameters

- `playersToInvite`: An array of `NSString` objects containing the player identifiers for the players to initially invite to the game.

<a id="Discussion"></a>

## Discussion

When your delegate receives this message, your game should create a new [GKMatchRequest](../gkmatchrequest.md) object and assign the `playersToInvite` parameter to the match request’s [playersToInvite](../gkmatchrequest/playerstoinvite.md) property. Then, your game can either call the [GKTurnBasedMatch](../gkturnbasedmatch.md) class method [findMatchForRequest:withCompletionHandler:](../gkturnbasedmatch/find%28for_withcompletionhandler_%29.md) to find a match programmatically or it can use the request to instantiate a new [GKTurnBasedMatchmakerViewController](../gkturnbasedmatchmakerviewcontroller.md) object to show a user interface to the player.

## See Also

### Receiving Turn-based Events

- [handleTurnEventForMatch:](handleturnevent%28for_%29.md): Deprecated. Sent to the delegate when it is the local player’s turn to act in a turn-based match.
- [handleTurnEventForMatch:didBecomeActive:](handleturnevent%28for_didbecomeactive_%29.md): Deprecated. Sent to the delegate when it is the local player’s turn to act in a turn-based match.
- [handleMatchEnded:](handlematchended%28__%29.md): Deprecated. Sent to the delegate when a match the local player is participating in has ended.
