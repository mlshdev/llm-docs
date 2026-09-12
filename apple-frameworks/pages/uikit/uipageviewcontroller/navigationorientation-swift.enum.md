> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/navigationorientation-swift.enum](https://developer.apple.com/documentation/uikit/uipageviewcontroller/navigationorientation-swift.enum)

# UIPageViewController.NavigationOrientation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Orientations for page-turn transitions.

## Declaration

```swift
enum NavigationOrientation
```

## Topics

### Constants

- [UIPageViewController.NavigationOrientation.horizontal](navigationorientation-swift.enum/horizontal.md): Horizontal orientation, with pages turning left and right.
- [UIPageViewController.NavigationOrientation.vertical](navigationorientation-swift.enum/vertical.md): Vertical orientation, with pages turning up and down.

### Initializers

- [init(rawValue:)](navigationorientation-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Display Options

- [navigationOrientation](navigationorientation-swift.property.md): The direction along which navigation occurs.
- [spineLocation](spinelocation-swift.property.md): The location of the spine.
- [UIPageViewController.SpineLocation](spinelocation-swift.enum.md): Locations for the spine.
- [transitionStyle](transitionstyle-swift.property.md): The style used to transition between view controllers.
- [UIPageViewController.TransitionStyle](transitionstyle-swift.enum.md): Styles for the page-turn transition.
- [isDoubleSided](isdoublesided.md): A Boolean value that indicates whether content appears on the back of pages.

# UIPageViewControllerNavigationOrientation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Orientations for page-turn transitions.

## Declaration

```objectivec
enum UIPageViewControllerNavigationOrientation : NSInteger;
```

## Topics

### Constants

- [UIPageViewControllerNavigationOrientationHorizontal](navigationorientation-swift.enum/horizontal.md): Horizontal orientation, with pages turning left and right.
- [UIPageViewControllerNavigationOrientationVertical](navigationorientation-swift.enum/vertical.md): Vertical orientation, with pages turning up and down.

## See Also

### Display Options

- [navigationOrientation](navigationorientation-swift.property.md): The direction along which navigation occurs.
- [spineLocation](spinelocation-swift.property.md): The location of the spine.
- [UIPageViewControllerSpineLocation](spinelocation-swift.enum.md): Locations for the spine.
- [transitionStyle](transitionstyle-swift.property.md): The style used to transition between view controllers.
- [UIPageViewControllerTransitionStyle](transitionstyle-swift.enum.md): Styles for the page-turn transition.
- [doubleSided](isdoublesided.md): A Boolean value that indicates whether content appears on the back of pages.
