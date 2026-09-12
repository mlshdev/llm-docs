> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:didselect:)](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:didselect:))

# tabBarController(\_:didSelect:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the user selected an item in the tab bar.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, didSelect viewController: UIViewController)
```

## Parameters

- `tabBarController`: The tab bar controller containing `viewController`.
- `viewController`: The view controller that the user selected. In iOS v3.0 and later, this could be the same view controller that was already selected.

<a id="Discussion"></a>

## Discussion

In iOS v3.0 and later, the tab bar controller calls this method regardless of whether the selected view controller changed. In addition, it is called only in response to user taps in the tab bar and is not called when your code changes the tab bar contents programmatically.

In versions of iOS prior to version 3.0, this method is called only when the selected view controller actually changes. In other words, it is not called when the same view controller is selected. In addition, the method was called for both programmatic and user-initiated changes to the selected view controller.

## See Also

### Managing tab bar selections

- [tabBarController(\_:shouldSelect:)](tabbarcontroller%28__shouldselect_%29.md): Asks the delegate whether the specified view controller should be made active.

# tabBarController:didSelectViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate that the user selected an item in the tab bar.

## Declaration

```objectivec
- (void) tabBarController:(UITabBarController *) tabBarController didSelectViewController:(UIViewController *) viewController;
```

## Parameters

- `tabBarController`: The tab bar controller containing `viewController`.
- `viewController`: The view controller that the user selected. In iOS v3.0 and later, this could be the same view controller that was already selected.

<a id="Discussion"></a>

## Discussion

In iOS v3.0 and later, the tab bar controller calls this method regardless of whether the selected view controller changed. In addition, it is called only in response to user taps in the tab bar and is not called when your code changes the tab bar contents programmatically.

In versions of iOS prior to version 3.0, this method is called only when the selected view controller actually changes. In other words, it is not called when the same view controller is selected. In addition, the method was called for both programmatic and user-initiated changes to the selected view controller.

## See Also

### Managing tab bar selections

- [tabBarController:shouldSelectViewController:](tabbarcontroller%28__shouldselect_%29.md): Asks the delegate whether the specified view controller should be made active.
