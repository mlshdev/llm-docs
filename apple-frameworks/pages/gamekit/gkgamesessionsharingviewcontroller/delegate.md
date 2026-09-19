> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamekit/gkgamesessionsharingviewcontroller/delegate

# delegate (Swift)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+ (deprecated in 12.0)

The delegate for the sharing view controller.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```swift
weak var delegate: (any GKGameSessionSharingViewControllerDelegate)? { get set }
```

## See Also

### Accessing Share View Controller Properties

- [GKGameSessionSharingViewControllerDelegate](../gkgamesessionsharingviewcontrollerdelegate.md): Deprecated. A protocol you implement to respond to changes to a sharing user interface.
- [session](session.md): Deprecated. The game session associated with the view controller.

# delegate (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+ (deprecated in 12.0)

The delegate for the sharing view controller.

> For real-time matches, use GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<GKGameSessionSharingViewControllerDelegate> delegate;
```

## See Also

### Accessing Share View Controller Properties

- [GKGameSessionSharingViewControllerDelegate](../gkgamesessionsharingviewcontrollerdelegate.md): Deprecated. A protocol you implement to respond to changes to a sharing user interface.
- [session](session.md): Deprecated. The game session associated with the view controller.
