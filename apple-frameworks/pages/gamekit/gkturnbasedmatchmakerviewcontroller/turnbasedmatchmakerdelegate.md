> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkturnbasedmatchmakerviewcontroller/turnbasedmatchmakerdelegate](https://developer.apple.com/documentation/gamekit/gkturnbasedmatchmakerviewcontroller/turnbasedmatchmakerdelegate)

# turnBasedMatchmakerDelegate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The object that handles turn-based matchmaker view controller changes.

## Declaration

```swift
weak var turnBasedMatchmakerDelegate: (any GKTurnBasedMatchmakerViewControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

You must set the delegate for GameKit to notify you when players cancel matchmaking or an error occurs.

## See Also

### Setting the Delegate

- [GKTurnBasedMatchmakerViewControllerDelegate](../gkturnbasedmatchmakerviewcontrollerdelegate.md): A protocol that handles when the status of turn-based matchmaking changes.

# turnBasedMatchmakerDelegate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The object that handles turn-based matchmaker view controller changes.

## Declaration

```objectivec
@property (nonatomic, weak, readwrite, nullable) id<GKTurnBasedMatchmakerViewControllerDelegate> turnBasedMatchmakerDelegate;
```

<a id="Discussion"></a>

## Discussion

You must set the delegate for GameKit to notify you when players cancel matchmaking or an error occurs.

## See Also

### Setting the Delegate

- [GKTurnBasedMatchmakerViewControllerDelegate](../gkturnbasedmatchmakerviewcontrollerdelegate.md): A protocol that handles when the status of turn-based matchmaking changes.
