> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller(_:didfind:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller(_:didfind:))

# turnBasedMatchmakerViewController(\_:didFind:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.11) · visionOS 1.0+ (deprecated in 1.0)

Handles when the view controller finds participants for a turn-based match.

> Use [GKTurnBasedEventListener](../gkturnbasedeventlistener.md) method [player(\_:receivedTurnEventFor:didBecomeActive:)](../gkturnbasedeventlistener/player%28__receivedturneventfor_didbecomeactive_%29.md)  instead.

## Declaration

```swift
optional func turnBasedMatchmakerViewController(_ viewController: GKTurnBasedMatchmakerViewController, didFind match: GKTurnBasedMatch)
```

## Parameters

- `viewController`: The view controller that finds participants for the match.
- `match`: The match that the participants join.

<a id="Discussion"></a>

## Discussion

When the participants accept their invitations to join a turn-based match, GameKit invokes this method in the game instances for all participants in the match, including the local player who initiates the match. Implement this method to dismiss the view controller and start gameplay that allows the local player to take their turn. Use the match object to show information about the other participants in the match.

## See Also

### Deprecated Methods

- [turnBasedMatchmakerViewController(\_:playerQuitFor:)](turnbasedmatchmakerviewcontroller%28__playerquitfor_%29.md): Deprecated. Handles when a player quits the match.

# turnBasedMatchmakerViewController:didFindMatch: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.11) · visionOS 1.0+ (deprecated in 1.0)

Handles when the view controller finds participants for a turn-based match.

> Use [GKTurnBasedEventListener](../gkturnbasedeventlistener.md) method [player:receivedTurnEventForMatch:didBecomeActive:](../gkturnbasedeventlistener/player%28__receivedturneventfor_didbecomeactive_%29.md)  instead.

## Declaration

```objectivec
- (void) turnBasedMatchmakerViewController:(GKTurnBasedMatchmakerViewController *) viewController didFindMatch:(GKTurnBasedMatch *) match;
```

## Parameters

- `viewController`: The view controller that finds participants for the match.
- `match`: The match that the participants join.

<a id="Discussion"></a>

## Discussion

When the participants accept their invitations to join a turn-based match, GameKit invokes this method in the game instances for all participants in the match, including the local player who initiates the match. Implement this method to dismiss the view controller and start gameplay that allows the local player to take their turn. Use the match object to show information about the other participants in the match.

## See Also

### Deprecated Methods

- [turnBasedMatchmakerViewController:playerQuitForMatch:](turnbasedmatchmakerviewcontroller%28__playerquitfor_%29.md): Deprecated. Handles when a player quits the match.
