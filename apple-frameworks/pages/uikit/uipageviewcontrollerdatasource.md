> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontrollerdatasource](https://developer.apple.com/documentation/uikit/uipageviewcontrollerdatasource)

# UIPageViewControllerDataSource (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The [UIPageViewControllerDataSource](uipageviewcontrollerdatasource.md) protocol is adopted by an object that provides view controllers to the page view controller on an as-needed basis, in response to navigation gestures.

## Declaration

```swift
@MainActor protocol UIPageViewControllerDataSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The data source implementation is free to handle this responsibility in any way that is appropriate for your application. In many cases, it should look at the view controller passed to it, determine what content to display, and create the view controllers as they are needed. You may find it helpful to include information such as the page number in the view controller, to simplify the task of determining what content to display.

If both of the methods in Supporting a Page Indicator are implemented and the page view controller’s transition style is [UIPageViewController.TransitionStyle.scroll](uipageviewcontroller/transitionstyle-swift.enum/scroll.md), a page indicator is visible. Both of these methods are called after the [setViewControllers(\_:direction:animated:completion:)](uipageviewcontroller/setviewcontrollers%28__direction_animated_completion_%29.md) method is called. After gesture-driven navigation, these methods are not called. The index is updated automatically and the number of view controllers is expected to remain constant.

## Topics

### Providing View Controllers

- [pageViewController(\_:viewControllerBefore:)](uipageviewcontrollerdatasource/pageviewcontroller%28__viewcontrollerbefore_%29.md): Returns the view controller before the given view controller.
- [pageViewController(\_:viewControllerAfter:)](uipageviewcontrollerdatasource/pageviewcontroller%28__viewcontrollerafter_%29.md): Returns the view controller after the given view controller.

### Supporting a Page Indicator

- [presentationCount(for:)](uipageviewcontrollerdatasource/presentationcount%28for_%29.md): Returns the number of items to be reflected in the page indicator.
- [presentationIndex(for:)](uipageviewcontrollerdatasource/presentationindex%28for_%29.md): Returns the index of the selected item to be reflected in the page indicator.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Providing the Page Content

- [dataSource](uipageviewcontroller/datasource.md): The object that provides view controllers.

# UIPageViewControllerDataSource (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The [UIPageViewControllerDataSource](uipageviewcontrollerdatasource.md) protocol is adopted by an object that provides view controllers to the page view controller on an as-needed basis, in response to navigation gestures.

## Declaration

```objectivec
@protocol UIPageViewControllerDataSource <NSObject>
```

<a id="overview"></a>

## Overview

The data source implementation is free to handle this responsibility in any way that is appropriate for your application. In many cases, it should look at the view controller passed to it, determine what content to display, and create the view controllers as they are needed. You may find it helpful to include information such as the page number in the view controller, to simplify the task of determining what content to display.

If both of the methods in Supporting a Page Indicator are implemented and the page view controller’s transition style is [UIPageViewControllerTransitionStyleScroll](uipageviewcontroller/transitionstyle-swift.enum/scroll.md), a page indicator is visible. Both of these methods are called after the [setViewControllers:direction:animated:completion:](uipageviewcontroller/setviewcontrollers%28__direction_animated_completion_%29.md) method is called. After gesture-driven navigation, these methods are not called. The index is updated automatically and the number of view controllers is expected to remain constant.

## Topics

### Providing View Controllers

- [pageViewController:viewControllerBeforeViewController:](uipageviewcontrollerdatasource/pageviewcontroller%28__viewcontrollerbefore_%29.md): Returns the view controller before the given view controller.
- [pageViewController:viewControllerAfterViewController:](uipageviewcontrollerdatasource/pageviewcontroller%28__viewcontrollerafter_%29.md): Returns the view controller after the given view controller.

### Supporting a Page Indicator

- [presentationCountForPageViewController:](uipageviewcontrollerdatasource/presentationcount%28for_%29.md): Returns the number of items to be reflected in the page indicator.
- [presentationIndexForPageViewController:](uipageviewcontrollerdatasource/presentationindex%28for_%29.md): Returns the index of the selected item to be reflected in the page indicator.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Providing the Page Content

- [dataSource](uipageviewcontroller/datasource.md): The object that provides view controllers.
