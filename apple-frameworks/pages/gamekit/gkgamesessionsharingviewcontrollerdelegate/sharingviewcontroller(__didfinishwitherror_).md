> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkgamesessionsharingviewcontrollerdelegate/sharingviewcontroller(_:didfinishwitherror:)](https://developer.apple.com/documentation/gamekit/gkgamesessionsharingviewcontrollerdelegate/sharingviewcontroller(_:didfinishwitherror:))

# sharingViewController(\_:didFinishWithError:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+ (deprecated in 12.0)

Indicates the sharing view controller is ready to be dismissed.

> For real-time matches, use GKMatchmakerViewControllerDelegate to receive notifications from the GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewControllerDelegate and GKLocalPlayerListener to receive notifications from the GKTurnBasedMatchmakerViewController.

## Declaration

```swift
func sharingViewController(_ viewController: GKGameSessionSharingViewController, didFinishWithError error: (any Error)?)
```

## Parameters

- `viewController`: The sharing view controller to be dismissed.
- `error`: An optional GameKit error. This parameter is `nil` if the sharing view controller is successfully dismissed.

# sharingViewController:didFinishWithError: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+ (deprecated in 12.0)

Indicates the sharing view controller is ready to be dismissed.

> For real-time matches, use GKMatchmakerViewControllerDelegate to receive notifications from the GKMatchmakerViewController. For turn-based matches, use GKTurnBasedMatchmakerViewControllerDelegate and GKLocalPlayerListener to receive notifications from the GKTurnBasedMatchmakerViewController.

## Declaration

```objectivec
- (void) sharingViewController:(GKGameSessionSharingViewController *) viewController didFinishWithError:(NSError *) error;
```

## Parameters

- `viewController`: The sharing view controller to be dismissed.
- `error`: An optional GameKit error. This parameter is `nil` if the sharing view controller is successfully dismissed.
