> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/spinelocation-swift.enum](https://developer.apple.com/documentation/uikit/uipageviewcontroller/spinelocation-swift.enum)

# UIPageViewController.SpineLocation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Locations for the spine.

## Declaration

```swift
enum SpineLocation
```

<a id="overview"></a>

## Overview

To set the spine location, wrap one of these constants in an [NSNumber](../../foundation/nsnumber.md) object and set it as the value for the [spineLocation](optionskey/spinelocation.md) key in the options dictionary passed to the [init(transitionStyle:navigationOrientation:options:)](init%28transitionstyle_navigationorientation_options_%29.md) method.

## Topics

### Constants

- [UIPageViewController.SpineLocation.none](spinelocation-swift.enum/none.md): No spine.
- [UIPageViewController.SpineLocation.min](spinelocation-swift.enum/min.md): Spine at the left or top edge of the screen.
- [UIPageViewController.SpineLocation.mid](spinelocation-swift.enum/mid.md): Spine in the middle or the screen.
- [UIPageViewController.SpineLocation.max](spinelocation-swift.enum/max.md): Spine at the right or bottom edge of the screen.

### Initializers

- [init(rawValue:)](spinelocation-swift.enum/init%28rawvalue_%29.md)

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
- [transitionStyle](transitionstyle-swift.property.md): The style used to transition between view controllers.
- [UIPageViewController.TransitionStyle](transitionstyle-swift.enum.md): Styles for the page-turn transition.
- [isDoubleSided](isdoublesided.md): A Boolean value that indicates whether content appears on the back of pages.

# UIPageViewControllerSpineLocation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Locations for the spine.

## Declaration

```objectivec
enum UIPageViewControllerSpineLocation : NSInteger;
```

<a id="overview"></a>

## Overview

To set the spine location, wrap one of these constants in an [NSNumber](../../foundation/nsnumber.md) object and set it as the value for the [UIPageViewControllerOptionSpineLocationKey](optionskey/spinelocation.md) key in the options dictionary passed to the [initWithTransitionStyle:navigationOrientation:options:](init%28transitionstyle_navigationorientation_options_%29.md) method.

## Topics

### Constants

- [UIPageViewControllerSpineLocationNone](spinelocation-swift.enum/none.md): No spine.
- [UIPageViewControllerSpineLocationMin](spinelocation-swift.enum/min.md): Spine at the left or top edge of the screen.
- [UIPageViewControllerSpineLocationMid](spinelocation-swift.enum/mid.md): Spine in the middle or the screen.
- [UIPageViewControllerSpineLocationMax](spinelocation-swift.enum/max.md): Spine at the right or bottom edge of the screen.

## See Also

### Display Options

- [navigationOrientation](navigationorientation-swift.property.md): The direction along which navigation occurs.
- [UIPageViewControllerNavigationOrientation](navigationorientation-swift.enum.md): Orientations for page-turn transitions.
- [spineLocation](spinelocation-swift.property.md): The location of the spine.
- [transitionStyle](transitionstyle-swift.property.md): The style used to transition between view controllers.
- [UIPageViewControllerTransitionStyle](transitionstyle-swift.enum.md): Styles for the page-turn transition.
- [doubleSided](isdoublesided.md): A Boolean value that indicates whether content appears on the back of pages.
