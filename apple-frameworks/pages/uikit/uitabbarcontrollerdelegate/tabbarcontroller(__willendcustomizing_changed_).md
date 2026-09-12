> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:willendcustomizing:changed:)](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:willendcustomizing:changed:))

# tabBarController(\_:willEndCustomizing:changed:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

Tells the delegate that the tab bar customization sheet is about to be dismissed.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, willEndCustomizing viewControllers: [UIViewController], changed: Bool)
```

## Parameters

- `tabBarController`: The tab bar controller that is being customized.
- `viewControllers`: The view controllers of the tab bar controller. The arrangement of the controllers in the array represents the new display order within the tab bar.
- `changed`: A Boolean value indicating whether items changed on the tab bar. [true](https://developer.apple.com/documentation/swift/true) if items changed or [false](https://developer.apple.com/documentation/swift/false) if they did not.

<a id="Discussion"></a>

## Discussion

This method is called in response to the user tapping the Done button on the sheet but before the sheet is dismissed.

## See Also

### Managing tab bar customizations

- [tabBarController(\_:willBeginCustomizing:)](tabbarcontroller%28__willbegincustomizing_%29.md): Tells the delegate that the tab bar customization sheet is about to be displayed.
- [tabBarController(\_:didEndCustomizing:changed:)](tabbarcontroller%28__didendcustomizing_changed_%29.md): Tells the delegate that the tab bar customization sheet was dismissed.

# tabBarController:willEndCustomizingViewControllers:changed: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

Tells the delegate that the tab bar customization sheet is about to be dismissed.

## Declaration

```objectivec
- (void) tabBarController:(UITabBarController *) tabBarController willEndCustomizingViewControllers:(NSArray<__kindof UIViewController *> *) viewControllers changed:(BOOL) changed;
```

## Parameters

- `tabBarController`: The tab bar controller that is being customized.
- `viewControllers`: The view controllers of the tab bar controller. The arrangement of the controllers in the array represents the new display order within the tab bar.
- `changed`: A Boolean value indicating whether items changed on the tab bar. [true](https://developer.apple.com/documentation/swift/true) if items changed or [false](https://developer.apple.com/documentation/swift/false) if they did not.

<a id="Discussion"></a>

## Discussion

This method is called in response to the user tapping the Done button on the sheet but before the sheet is dismissed.

## See Also

### Managing tab bar customizations

- [tabBarController:willBeginCustomizingViewControllers:](tabbarcontroller%28__willbegincustomizing_%29.md): Tells the delegate that the tab bar customization sheet is about to be displayed.
- [tabBarController:didEndCustomizingViewControllers:changed:](tabbarcontroller%28__didendcustomizing_changed_%29.md): Tells the delegate that the tab bar customization sheet was dismissed.
