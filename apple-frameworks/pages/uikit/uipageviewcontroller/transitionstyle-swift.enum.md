> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/transitionstyle-swift.enum](https://developer.apple.com/documentation/uikit/uipageviewcontroller/transitionstyle-swift.enum)

# UIPageViewController.TransitionStyle (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Styles for the page-turn transition.

## Declaration

```swift
enum TransitionStyle
```

## Topics

### Constants

- [UIPageViewController.TransitionStyle.pageCurl](transitionstyle-swift.enum/pagecurl.md): Page curl transition style.
- [UIPageViewController.TransitionStyle.scroll](transitionstyle-swift.enum/scroll.md): Scrolling transition style.

### Initializers

- [init(rawValue:)](transitionstyle-swift.enum/init%28rawvalue_%29.md)

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
- [UIPageViewController.NavigationOrientation](navigationorientation-swift.enum.md): Orientations for page-turn transitions.
- [spineLocation](spinelocation-swift.property.md): The location of the spine.
- [UIPageViewController.SpineLocation](spinelocation-swift.enum.md): Locations for the spine.
- [transitionStyle](transitionstyle-swift.property.md): The style used to transition between view controllers.
- [isDoubleSided](isdoublesided.md): A Boolean value that indicates whether content appears on the back of pages.

# UIPageViewControllerTransitionStyle (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Styles for the page-turn transition.

## Declaration

```objectivec
enum UIPageViewControllerTransitionStyle : NSInteger;
```

## Topics

### Constants

- [UIPageViewControllerTransitionStylePageCurl](transitionstyle-swift.enum/pagecurl.md): Page curl transition style.
- [UIPageViewControllerTransitionStyleScroll](transitionstyle-swift.enum/scroll.md): Scrolling transition style.

## See Also

### Display Options

- [navigationOrientation](navigationorientation-swift.property.md): The direction along which navigation occurs.
- [UIPageViewControllerNavigationOrientation](navigationorientation-swift.enum.md): Orientations for page-turn transitions.
- [spineLocation](spinelocation-swift.property.md): The location of the spine.
- [UIPageViewControllerSpineLocation](spinelocation-swift.enum.md): Locations for the spine.
- [transitionStyle](transitionstyle-swift.property.md): The style used to transition between view controllers.
- [doubleSided](isdoublesided.md): A Boolean value that indicates whether content appears on the back of pages.
