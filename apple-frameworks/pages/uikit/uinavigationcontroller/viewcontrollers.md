> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/viewcontrollers](https://developer.apple.com/documentation/uikit/uinavigationcontroller/viewcontrollers)

# viewControllers (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controllers currently on the navigation stack.

## Declaration

```swift
var viewControllers: [UIViewController] { get set }
```

<a id="Discussion"></a>

## Discussion

The root view controller is at index `0` in the array, the back view controller is at index `n-2`, and the top controller is at index `n-1`, where `n` is the number of items in the array.

Assigning a new array of view controllers to this property is equivalent to calling the [setViewControllers(\_:animated:)](setviewcontrollers%28__animated_%29.md) method with the `animated` parameter set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing items on the navigation stack

- [topViewController](topviewcontroller.md): The view controller at the top of the navigation stack.
- [visibleViewController](visibleviewcontroller.md): The view controller associated with the currently visible view in the navigation interface.
- [setViewControllers(\_:animated:)](setviewcontrollers%28__animated_%29.md): Replaces the view controllers currently managed by the navigation controller with the specified items.

# viewControllers (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The view controllers currently on the navigation stack.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<__kindof UIViewController *> * viewControllers;
```

<a id="Discussion"></a>

## Discussion

The root view controller is at index `0` in the array, the back view controller is at index `n-2`, and the top controller is at index `n-1`, where `n` is the number of items in the array.

Assigning a new array of view controllers to this property is equivalent to calling the [setViewControllers:animated:](setviewcontrollers%28__animated_%29.md) method with the `animated` parameter set to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing items on the navigation stack

- [topViewController](topviewcontroller.md): The view controller at the top of the navigation stack.
- [visibleViewController](visibleviewcontroller.md): The view controller associated with the currently visible view in the navigation interface.
- [setViewControllers:animated:](setviewcontrollers%28__animated_%29.md): Replaces the view controllers currently managed by the navigation controller with the specified items.
