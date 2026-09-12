> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontrollerdelegate](https://developer.apple.com/documentation/uikit/uipageviewcontrollerdelegate)

# UIPageViewControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The delegate of a page view controller must adopt the [UIPageViewControllerDelegate](uipageviewcontrollerdelegate.md) protocol. These methods allow the delegate to receive a notification when the device orientation changes and when the user navigates to a new page. For page-curl style transitions, the delegate can provide a different spine location in response to a change in the interface orientation.

## Declaration

```swift
@MainActor protocol UIPageViewControllerDelegate : NSObjectProtocol
```

## Topics

### Responding to Page View Controller Events

- [pageViewController(\_:willTransitionTo:)](uipageviewcontrollerdelegate/pageviewcontroller%28__willtransitionto_%29.md): Called before a gesture-driven transition begins.
- [pageViewController(\_:didFinishAnimating:previousViewControllers:transitionCompleted:)](uipageviewcontrollerdelegate/pageviewcontroller%28__didfinishanimating_previousviewcontrollers_transitioncompleted_%29.md): Called after a gesture-driven transition completes.
- [pageViewController(\_:spineLocationFor:)](uipageviewcontrollerdelegate/pageviewcontroller%28__spinelocationfor_%29.md): Returns the spine location for the given orientation.

### Overriding View Rotation Settings

- [pageViewControllerSupportedInterfaceOrientations(\_:)](uipageviewcontrollerdelegate/pageviewcontrollersupportedinterfaceorientations%28__%29.md): Returns the complete set of supported interface orientations for the page view controller, as determined by the delegate.
- [pageViewControllerPreferredInterfaceOrientationForPresentation(\_:)](uipageviewcontrollerdelegate/pageviewcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Returns the preferred orientation for presentation of the page view controller, as determined by the delegate.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the Page View Behavior

- [delegate](uipageviewcontroller/delegate.md): The delegate object.

# UIPageViewControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The delegate of a page view controller must adopt the [UIPageViewControllerDelegate](uipageviewcontrollerdelegate.md) protocol. These methods allow the delegate to receive a notification when the device orientation changes and when the user navigates to a new page. For page-curl style transitions, the delegate can provide a different spine location in response to a change in the interface orientation.

## Declaration

```objectivec
@protocol UIPageViewControllerDelegate <NSObject>
```

## Topics

### Responding to Page View Controller Events

- [pageViewController:willTransitionToViewControllers:](uipageviewcontrollerdelegate/pageviewcontroller%28__willtransitionto_%29.md): Called before a gesture-driven transition begins.
- [pageViewController:didFinishAnimating:previousViewControllers:transitionCompleted:](uipageviewcontrollerdelegate/pageviewcontroller%28__didfinishanimating_previousviewcontrollers_transitioncompleted_%29.md): Called after a gesture-driven transition completes.
- [pageViewController:spineLocationForInterfaceOrientation:](uipageviewcontrollerdelegate/pageviewcontroller%28__spinelocationfor_%29.md): Returns the spine location for the given orientation.

### Overriding View Rotation Settings

- [pageViewControllerSupportedInterfaceOrientations:](uipageviewcontrollerdelegate/pageviewcontrollersupportedinterfaceorientations%28__%29.md): Returns the complete set of supported interface orientations for the page view controller, as determined by the delegate.
- [pageViewControllerPreferredInterfaceOrientationForPresentation:](uipageviewcontrollerdelegate/pageviewcontrollerpreferredinterfaceorientationforpresentation%28__%29.md): Returns the preferred orientation for presentation of the page view controller, as determined by the delegate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the Page View Behavior

- [delegate](uipageviewcontroller/delegate.md): The delegate object.
