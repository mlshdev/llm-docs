> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/setviewcontrollers(_:animated:)](https://developer.apple.com/documentation/uikit/uitabbarcontroller/setviewcontrollers(_:animated:))

# setViewControllers(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the root view controllers of the tab bar controller.

## Declaration

```swift
func setViewControllers(_ viewControllers: [UIViewController]?, animated: Bool)
```

## Parameters

- `viewControllers`: The array of custom view controllers to display in the tab bar interface. The order of the view controllers in this array corresponds to the display order in the tab bar, with the controller at index 0 representing the left-most tab, the controller at index 1 the next tab to the right, and so on.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the tab bar items for the view controllers are animated into position. If [false](https://developer.apple.com/documentation/swift/false), changes to the tab bar items are reflected immediately.

<a id="Discussion"></a>

## Discussion

When you assign a new set of view controllers at runtime, the tab bar controller removes all of the old view controllers before installing the new ones. When changing the view controllers, the tab bar controller remembers the view controller object that was previously selected and attempts to reselect it. If the selected view controller is no longer present, it attempts to select the view controller at the same index in the array as the previous selection. If that index is invalid, it selects the view controller at index 0.

This method also sets the value of the [customizableViewControllers](customizableviewcontrollers.md) property to the contents of the `viewControllers` parameter.

## See Also

### Managing the view controllers

- [viewControllers](viewcontrollers.md): An array of the root view controllers displayed by the tab bar interface.
- [customizableViewControllers](customizableviewcontrollers.md): The subset of view controllers managed by this tab bar controller that can be customized.
- [moreNavigationController](morenavigationcontroller.md): The view controller that manages the More navigation interface.

# setViewControllers:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sets the root view controllers of the tab bar controller.

## Declaration

```objectivec
- (void) setViewControllers:(NSArray<__kindof UIViewController *> *) viewControllers animated:(BOOL) animated;
```

## Parameters

- `viewControllers`: The array of custom view controllers to display in the tab bar interface. The order of the view controllers in this array corresponds to the display order in the tab bar, with the controller at index 0 representing the left-most tab, the controller at index 1 the next tab to the right, and so on.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the tab bar items for the view controllers are animated into position. If [false](https://developer.apple.com/documentation/swift/false), changes to the tab bar items are reflected immediately.

<a id="Discussion"></a>

## Discussion

When you assign a new set of view controllers at runtime, the tab bar controller removes all of the old view controllers before installing the new ones. When changing the view controllers, the tab bar controller remembers the view controller object that was previously selected and attempts to reselect it. If the selected view controller is no longer present, it attempts to select the view controller at the same index in the array as the previous selection. If that index is invalid, it selects the view controller at index 0.

This method also sets the value of the [customizableViewControllers](customizableviewcontrollers.md) property to the contents of the `viewControllers` parameter.

## See Also

### Managing the view controllers

- [viewControllers](viewcontrollers.md): An array of the root view controllers displayed by the tab bar interface.
- [customizableViewControllers](customizableviewcontrollers.md): The subset of view controllers managed by this tab bar controller that can be customized.
- [moreNavigationController](morenavigationcontroller.md): The view controller that manages the More navigation interface.
