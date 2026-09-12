> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller(_:playerquitfor:)](https://developer.apple.com/documentation/gamekit/gkturnbasedmatchmakerviewcontrollerdelegate/turnbasedmatchmakerviewcontroller(_:playerquitfor:))

# turnBasedMatchmakerViewController(\_:playerQuitFor:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.11) · visionOS 1.0+ (deprecated in 1.0)

Handles when a player quits the match.

> Use [GKTurnBasedEventListener](../gkturnbasedeventlistener.md) method [player(\_:wantsToQuitMatch:)](../gkturnbasedeventlistener/player%28__wantstoquitmatch_%29.md) instead.

## Declaration

```swift
optional func turnBasedMatchmakerViewController(_ viewController: GKTurnBasedMatchmakerViewController, playerQuitFor match: GKTurnBasedMatch)
```

## Parameters

- `viewController`: The view controller with which the player interacts.
- `match`: The match that the player quits.

<a id="Discussion"></a>

## Discussion

When GameKit invokes this method, the player forfeits the match without taking their turn. Implement this method to dismiss the view controller, set an outcome for the player, and then call the match’s [participantQuitInTurn(with:nextParticipants:turnTimeout:match:completionHandler:)](../gkturnbasedmatch/participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md) method.

## See Also

### Deprecated Methods

- [turnBasedMatchmakerViewController(\_:didFind:)](turnbasedmatchmakerviewcontroller%28__didfind_%29.md): Deprecated. Handles when the view controller finds participants for a turn-based match.

# turnBasedMatchmakerViewController:playerQuitForMatch: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 9.0) · iPadOS 5.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.11) · visionOS 1.0+ (deprecated in 1.0)

Handles when a player quits the match.

> Use [GKTurnBasedEventListener](../gkturnbasedeventlistener.md) method [player:wantsToQuitMatch:](../gkturnbasedeventlistener/player%28__wantstoquitmatch_%29.md) instead.

## Declaration

```objectivec
- (void) turnBasedMatchmakerViewController:(GKTurnBasedMatchmakerViewController *) viewController playerQuitForMatch:(GKTurnBasedMatch *) match;
```

## Parameters

- `viewController`: The view controller with which the player interacts.
- `match`: The match that the player quits.

<a id="Discussion"></a>

## Discussion

When GameKit invokes this method, the player forfeits the match without taking their turn. Implement this method to dismiss the view controller, set an outcome for the player, and then call the match’s [participantQuitInTurnWithOutcome:nextParticipants:turnTimeout:matchData:completionHandler:](../gkturnbasedmatch/participantquitinturn%28with_nextparticipants_turntimeout_match_completionhandler_%29.md) method.

## See Also

### Deprecated Methods

- [turnBasedMatchmakerViewController:didFindMatch:](turnbasedmatchmakerviewcontroller%28__didfind_%29.md): Deprecated. Handles when the view controller finds participants for a turn-based match.
