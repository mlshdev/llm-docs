> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/navigationdirection](https://developer.apple.com/documentation/uikit/uipageviewcontroller/navigationdirection)

# UIPageViewController.NavigationDirection (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Directions for page-turn transitions.

## Declaration

```swift
enum NavigationDirection
```

<a id="overview"></a>

## Overview

For horizontal navigation, pages turn from the right side of the screen to the left as you navigate forward.

For vertical navigation, pages turn from the bottom of the screen to the top as you navigate forward.

## Topics

### Constants

- [UIPageViewController.NavigationDirection.forward](navigationdirection/forward.md): Navigation to the next page.
- [UIPageViewController.NavigationDirection.reverse](navigationdirection/reverse.md): Navigation to the previous page.

### Initializers

- [init(rawValue:)](navigationdirection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing Content

- [setViewControllers(\_:direction:animated:completion:)](setviewcontrollers%28__direction_animated_completion_%29.md): Sets the view controllers to be displayed.
- [viewControllers](viewcontrollers.md): The view controllers displayed by the page view controller.
- [gestureRecognizers](gesturerecognizers.md): An array of [UIGestureRecognizer](../uigesturerecognizer.md) objects that are configured to handle user interaction.

# UIPageViewControllerNavigationDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Directions for page-turn transitions.

## Declaration

```objectivec
enum UIPageViewControllerNavigationDirection : NSInteger;
```

<a id="overview"></a>

## Overview

For horizontal navigation, pages turn from the right side of the screen to the left as you navigate forward.

For vertical navigation, pages turn from the bottom of the screen to the top as you navigate forward.

## Topics

### Constants

- [UIPageViewControllerNavigationDirectionForward](navigationdirection/forward.md): Navigation to the next page.
- [UIPageViewControllerNavigationDirectionReverse](navigationdirection/reverse.md): Navigation to the previous page.

## See Also

### Providing Content

- [setViewControllers:direction:animated:completion:](setviewcontrollers%28__direction_animated_completion_%29.md): Sets the view controllers to be displayed.
- [viewControllers](viewcontrollers.md): The view controllers displayed by the page view controller.
- [gestureRecognizers](gesturerecognizers.md): An array of [UIGestureRecognizer](../uigesturerecognizer.md) objects that are configured to handle user interaction.
