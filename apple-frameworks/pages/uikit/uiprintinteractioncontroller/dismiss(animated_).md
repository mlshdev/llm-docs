> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiprintinteractioncontroller/dismiss(animated:)](https://developer.apple.com/documentation/uikit/uiprintinteractioncontroller/dismiss(animated:))

# dismiss(animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Dismisses the printing-options sheet or popover.

## Declaration

```swift
func dismiss(animated: Bool)
```

## Parameters

- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You should dismiss the printing options when they are presented in a sheet or animated from a rectangle *and* the user changes the orientation of the device. (This, of course, assumes your application responds to orientation changes.) You should then present the printing options again once the new orientation takes effect. You can observe the [willChangeStatusBarOrientationNotification](../uiapplication/willchangestatusbarorientationnotification.md) notification to find out when the device orientation is about to change.

## See Also

### Presenting the printing user interface

- [present(animated:completionHandler:)](present%28animated_completionhandler_%29.md): Presents the iPhone printing user interface in a sheet, optionally animating it to slide up from the bottom of the screen.
- [present(from:animated:completionHandler:)](present%28from_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from a bar-button item.
- [present(from:in:animated:completionHandler:)](present%28from_in_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from any area in a view.

# dismissAnimated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Dismisses the printing-options sheet or popover.

## Declaration

```objectivec
- (void) dismissAnimated:(BOOL) animated;
```

## Parameters

- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You should dismiss the printing options when they are presented in a sheet or animated from a rectangle *and* the user changes the orientation of the device. (This, of course, assumes your application responds to orientation changes.) You should then present the printing options again once the new orientation takes effect. You can observe the [UIApplicationWillChangeStatusBarOrientationNotification](../uiapplication/willchangestatusbarorientationnotification.md) notification to find out when the device orientation is about to change.

## See Also

### Presenting the printing user interface

- [presentAnimated:completionHandler:](present%28animated_completionhandler_%29.md): Presents the iPhone printing user interface in a sheet, optionally animating it to slide up from the bottom of the screen.
- [presentFromBarButtonItem:animated:completionHandler:](present%28from_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from a bar-button item.
- [presentFromRect:inView:animated:completionHandler:](present%28from_in_animated_completionhandler_%29.md): Presents the iPad printing user interface in a popover view, optionally animating it from any area in a view.
