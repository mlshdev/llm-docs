> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/spinelocation-swift.property](https://developer.apple.com/documentation/uikit/uipageviewcontroller/spinelocation-swift.property)

# spineLocation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The location of the spine.

## Declaration

```swift
var spineLocation: UIPageViewController.SpineLocation { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set with the [spineLocation](optionskey/spinelocation.md) key when the page view controller is initialized, and can be changed by returning the new value from the [pageViewController(\_:spineLocationFor:)](../uipageviewcontrollerdelegate/pageviewcontroller%28__spinelocationfor_%29.md) method of the delegate.

## See Also

### Display Options

- [navigationOrientation](navigationorientation-swift.property.md): The direction along which navigation occurs.
- [UIPageViewController.NavigationOrientation](navigationorientation-swift.enum.md): Orientations for page-turn transitions.
- [UIPageViewController.SpineLocation](spinelocation-swift.enum.md): Locations for the spine.
- [transitionStyle](transitionstyle-swift.property.md): The style used to transition between view controllers.
- [UIPageViewController.TransitionStyle](transitionstyle-swift.enum.md): Styles for the page-turn transition.
- [isDoubleSided](isdoublesided.md): A Boolean value that indicates whether content appears on the back of pages.

# spineLocation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The location of the spine.

## Declaration

```objectivec
@property (nonatomic, readonly) UIPageViewControllerSpineLocation spineLocation;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set with the [UIPageViewControllerOptionSpineLocationKey](optionskey/spinelocation.md) key when the page view controller is initialized, and can be changed by returning the new value from the [pageViewController:spineLocationForInterfaceOrientation:](../uipageviewcontrollerdelegate/pageviewcontroller%28__spinelocationfor_%29.md) method of the delegate.

## See Also

### Display Options

- [navigationOrientation](navigationorientation-swift.property.md): The direction along which navigation occurs.
- [UIPageViewControllerNavigationOrientation](navigationorientation-swift.enum.md): Orientations for page-turn transitions.
- [UIPageViewControllerSpineLocation](spinelocation-swift.enum.md): Locations for the spine.
- [transitionStyle](transitionstyle-swift.property.md): The style used to transition between view controllers.
- [UIPageViewControllerTransitionStyle](transitionstyle-swift.enum.md): Styles for the page-turn transition.
- [doubleSided](isdoublesided.md): A Boolean value that indicates whether content appears on the back of pages.
