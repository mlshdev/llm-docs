> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipageviewcontroller/init(transitionstyle:navigationorientation:options:)](https://developer.apple.com/documentation/uikit/uipageviewcontroller/init(transitionstyle:navigationorientation:options:))

# init(transitionStyle:navigationOrientation:options:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a newly created page view controller.

## Declaration

```swift
init(transitionStyle style: UIPageViewController.TransitionStyle, navigationOrientation: UIPageViewController.NavigationOrientation, options: [UIPageViewController.OptionsKey : Any]? = nil)
```

## Parameters

- `style`: The style for transitions between pages.
- `navigationOrientation`: The orientation of the page-by-page navigation.
- `options`: A dictionary of options. For keys, see [UIPageViewController.OptionsKey](optionskey.md).

<a id="return-value"></a>

## Return Value

The initialized page view controller.

<a id="Discussion"></a>

## Discussion

After initialization, use the [setViewControllers(\_:direction:animated:completion:)](setviewcontrollers%28__direction_animated_completion_%29.md) method to set the initial view controllers.

## See Also

### Creating a page view controller

- [init(coder:)](init%28coder_%29.md): Creates a page view controller from data in an unarchiver.
- [UIPageViewController.OptionsKey](optionskey.md): Keys for creating the page view controller.

# initWithTransitionStyle:navigationOrientation:options: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes a newly created page view controller.

## Declaration

```objectivec
- (instancetype) initWithTransitionStyle:(UIPageViewControllerTransitionStyle) style navigationOrientation:(UIPageViewControllerNavigationOrientation) navigationOrientation options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `style`: The style for transitions between pages.
- `navigationOrientation`: The orientation of the page-by-page navigation.
- `options`: A dictionary of options. For keys, see [UIPageViewControllerOptionsKey](optionskey.md).

<a id="return-value"></a>

## Return Value

The initialized page view controller.

<a id="Discussion"></a>

## Discussion

After initialization, use the [setViewControllers:direction:animated:completion:](setviewcontrollers%28__direction_animated_completion_%29.md) method to set the initial view controllers.

## See Also

### Creating a page view controller

- [initWithCoder:](init%28coder_%29.md): Creates a page view controller from data in an unarchiver.
- [UIPageViewControllerOptionsKey](optionskey.md): Keys for creating the page view controller.
