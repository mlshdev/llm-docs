> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/transitionstyle-swift.property](https://developer.apple.com/documentation/uikit/uipageviewcontroller/transitionstyle-swift.property)

# transitionStyle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The style used to transition between view controllers.

## Declaration

```swift
var transitionStyle: UIPageViewController.TransitionStyle { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is set when the page view controller is initialized, and cannot be changed.

## See Also

### Display Options

- [navigationOrientation](navigationorientation-swift.property.md): The direction along which navigation occurs.
- [UIPageViewController.NavigationOrientation](navigationorientation-swift.enum.md): Orientations for page-turn transitions.
- [spineLocation](spinelocation-swift.property.md): The location of the spine.
- [UIPageViewController.SpineLocation](spinelocation-swift.enum.md): Locations for the spine.
- [UIPageViewController.TransitionStyle](transitionstyle-swift.enum.md): Styles for the page-turn transition.
- [isDoubleSided](isdoublesided.md): A Boolean value that indicates whether content appears on the back of pages.

# transitionStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The style used to transition between view controllers.

## Declaration

```objectivec
@property (nonatomic, readonly) UIPageViewControllerTransitionStyle transitionStyle;
```

<a id="Discussion"></a>

## Discussion

The value of this property is set when the page view controller is initialized, and cannot be changed.

## See Also

### Display Options

- [navigationOrientation](navigationorientation-swift.property.md): The direction along which navigation occurs.
- [UIPageViewControllerNavigationOrientation](navigationorientation-swift.enum.md): Orientations for page-turn transitions.
- [spineLocation](spinelocation-swift.property.md): The location of the spine.
- [UIPageViewControllerSpineLocation](spinelocation-swift.enum.md): Locations for the spine.
- [UIPageViewControllerTransitionStyle](transitionstyle-swift.enum.md): Styles for the page-turn transition.
- [doubleSided](isdoublesided.md): A Boolean value that indicates whether content appears on the back of pages.
