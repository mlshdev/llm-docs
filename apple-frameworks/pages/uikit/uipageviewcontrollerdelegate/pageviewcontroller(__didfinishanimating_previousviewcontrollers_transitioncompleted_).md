> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontrollerdelegate/pageviewcontroller(_:didfinishanimating:previousviewcontrollers:transitioncompleted:)](https://developer.apple.com/documentation/uikit/uipageviewcontrollerdelegate/pageviewcontroller(_:didfinishanimating:previousviewcontrollers:transitioncompleted:))

# pageViewController(\_:didFinishAnimating:previousViewControllers:transitionCompleted:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Called after a gesture-driven transition completes.

## Declaration

```swift
optional func pageViewController(_ pageViewController: UIPageViewController, didFinishAnimating finished: Bool, previousViewControllers: [UIViewController], transitionCompleted completed: Bool)
```

## Parameters

- `pageViewController`: The page view controller.
- `finished`: [true](https://developer.apple.com/documentation/swift/true) if the animation finished; otherwise, [false](https://developer.apple.com/documentation/swift/false).
- `previousViewControllers`: The view controllers prior to the transition.
- `completed`: [true](https://developer.apple.com/documentation/swift/true) if the user completed the page-turn gesture; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use the `completed` parameter to distinguish between a transition that completed (the page was turned) and a transition that the user aborted (the page was not turned).

The value of the `previousViewControllers` parameter is the same as what the [viewControllers](../uipageviewcontroller/viewcontrollers.md) method would have returned prior to the page turn.

## See Also

### Responding to Page View Controller Events

- [pageViewController(\_:willTransitionTo:)](pageviewcontroller%28__willtransitionto_%29.md): Called before a gesture-driven transition begins.
- [pageViewController(\_:spineLocationFor:)](pageviewcontroller%28__spinelocationfor_%29.md): Returns the spine location for the given orientation.

# pageViewController:didFinishAnimating:previousViewControllers:transitionCompleted: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Called after a gesture-driven transition completes.

## Declaration

```objectivec
- (void) pageViewController:(UIPageViewController *) pageViewController didFinishAnimating:(BOOL) finished previousViewControllers:(NSArray<UIViewController *> *) previousViewControllers transitionCompleted:(BOOL) completed;
```

## Parameters

- `pageViewController`: The page view controller.
- `finished`: [true](https://developer.apple.com/documentation/swift/true) if the animation finished; otherwise, [false](https://developer.apple.com/documentation/swift/false).
- `previousViewControllers`: The view controllers prior to the transition.
- `completed`: [true](https://developer.apple.com/documentation/swift/true) if the user completed the page-turn gesture; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Use the `completed` parameter to distinguish between a transition that completed (the page was turned) and a transition that the user aborted (the page was not turned).

The value of the `previousViewControllers` parameter is the same as what the [viewControllers](../uipageviewcontroller/viewcontrollers.md) method would have returned prior to the page turn.

## See Also

### Responding to Page View Controller Events

- [pageViewController:willTransitionToViewControllers:](pageviewcontroller%28__willtransitionto_%29.md): Called before a gesture-driven transition begins.
- [pageViewController:spineLocationForInterfaceOrientation:](pageviewcontroller%28__spinelocationfor_%29.md): Returns the spine location for the given orientation.
