> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:shouldselect:)](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:shouldselect:))

# tabBarController(\_:shouldSelect:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate whether the specified view controller should be made active.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, shouldSelect viewController: UIViewController) -> Bool
```

## Parameters

- `tabBarController`: The tab bar controller containing `viewController`.
- `viewController`: The view controller belonging to the tab that was tapped by the user.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view controller’s tab should be selected or [false](https://developer.apple.com/documentation/swift/false) if the current tab should remain active.

<a id="Discussion"></a>

## Discussion

The tab bar controller calls this method in response to the user tapping a tab bar item. You can use this method to dynamically decide whether a given tab should be made the active tab.

## See Also

### Managing tab bar selections

- [tabBarController(\_:didSelect:)](tabbarcontroller%28__didselect_%29.md): Tells the delegate that the user selected an item in the tab bar.

# tabBarController:shouldSelectViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate whether the specified view controller should be made active.

## Declaration

```objectivec
- (BOOL) tabBarController:(UITabBarController *) tabBarController shouldSelectViewController:(UIViewController *) viewController;
```

## Parameters

- `tabBarController`: The tab bar controller containing `viewController`.
- `viewController`: The view controller belonging to the tab that was tapped by the user.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view controller’s tab should be selected or [false](https://developer.apple.com/documentation/swift/false) if the current tab should remain active.

<a id="Discussion"></a>

## Discussion

The tab bar controller calls this method in response to the user tapping a tab bar item. You can use this method to dynamically decide whether a given tab should be made the active tab.

## See Also

### Managing tab bar selections

- [tabBarController:didSelectViewController:](tabbarcontroller%28__didselect_%29.md): Tells the delegate that the user selected an item in the tab bar.
