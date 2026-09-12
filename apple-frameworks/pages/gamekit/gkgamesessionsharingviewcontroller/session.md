> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesessionsharingviewcontroller/session](https://developer.apple.com/documentation/gamekit/gkgamesessionsharingviewcontroller/session)

# session (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+ (deprecated in 12.0)

The game session associated with the view controller.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
var session: GKGameSession { get }
```

## See Also

### Accessing Share View Controller Properties

- [delegate](delegate.md): Deprecated. The delegate for the sharing view controller.
- [GKGameSessionSharingViewControllerDelegate](../gkgamesessionsharingviewcontrollerdelegate.md): Deprecated. A protocol you implement to respond to changes to a sharing user interface.

# session (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+ (deprecated in 12.0)

The game session associated with the view controller.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) GKGameSession * session;
```

## See Also

### Accessing Share View Controller Properties

- [delegate](delegate.md): Deprecated. The delegate for the sharing view controller.
- [GKGameSessionSharingViewControllerDelegate](../gkgamesessionsharingviewcontrollerdelegate.md): Deprecated. A protocol you implement to respond to changes to a sharing user interface.
