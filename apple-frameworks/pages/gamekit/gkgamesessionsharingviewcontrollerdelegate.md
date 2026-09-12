> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesessionsharingviewcontrollerdelegate](https://developer.apple.com/documentation/gamekit/gkgamesessionsharingviewcontrollerdelegate)

# GKGameSessionSharingViewControllerDelegate (Swift)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** tvOS 10.0+ (deprecated in 12.0)

A protocol you implement to respond to changes to a sharing user interface.

> For real-time matches, use GKMatchmakerViewControllerDelegate to receive notifications from the GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewControllerDelegate and GKLocalPlayerListener to receive notifications from the GKTurnBasedMatchmakerViewController.

## Declaration

```swift
protocol GKGameSessionSharingViewControllerDelegate : NSObjectProtocol
```

## Topics

### Dismissing a Sharing View Controller

- [sharingViewController(\_:didFinishWithError:)](gkgamesessionsharingviewcontrollerdelegate/sharingviewcontroller%28__didfinishwitherror_%29.md): Deprecated. Indicates the sharing view controller is ready to be dismissed.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing Share View Controller Properties

- [delegate](gkgamesessionsharingviewcontroller/delegate.md): Deprecated. The delegate for the sharing view controller.
- [session](gkgamesessionsharingviewcontroller/session.md): Deprecated. The game session associated with the view controller.

# GKGameSessionSharingViewControllerDelegate (Objective-C)

**Framework:** GameKit  
**Kind:** Protocol  
**Availability:** tvOS 10.0+ (deprecated in 12.0)

A protocol you implement to respond to changes to a sharing user interface.

> For real-time matches, use GKMatchmakerViewControllerDelegate to receive notifications from the GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewControllerDelegate and GKLocalPlayerListener to receive notifications from the GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
@protocol GKGameSessionSharingViewControllerDelegate <NSObject>
```

## Topics

### Dismissing a Sharing View Controller

- [sharingViewController:didFinishWithError:](gkgamesessionsharingviewcontrollerdelegate/sharingviewcontroller%28__didfinishwitherror_%29.md): Deprecated. Indicates the sharing view controller is ready to be dismissed.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing Share View Controller Properties

- [delegate](gkgamesessionsharingviewcontroller/delegate.md): Deprecated. The delegate for the sharing view controller.
- [session](gkgamesessionsharingviewcontroller/session.md): Deprecated. The game session associated with the view controller.
