> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:willbegincustomizing:)](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:willbegincustomizing:))

# tabBarController(\_:willBeginCustomizing:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

Tells the delegate that the tab bar customization sheet is about to be displayed.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, willBeginCustomizing viewControllers: [UIViewController])
```

## Parameters

- `tabBarController`: The tab bar controller that is being customized.
- `viewControllers`: The view controllers to be displayed in the customization sheet. This list typically contains all custom view controllers you added but does not include some standard controllers, such as the one that manages the More tab.

## See Also

### Managing tab bar customizations

- [tabBarController(\_:willEndCustomizing:changed:)](tabbarcontroller%28__willendcustomizing_changed_%29.md): Tells the delegate that the tab bar customization sheet is about to be dismissed.
- [tabBarController(\_:didEndCustomizing:changed:)](tabbarcontroller%28__didendcustomizing_changed_%29.md): Tells the delegate that the tab bar customization sheet was dismissed.

# tabBarController:willBeginCustomizingViewControllers: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+

Tells the delegate that the tab bar customization sheet is about to be displayed.

## Declaration

```objectivec
- (void) tabBarController:(UITabBarController *) tabBarController willBeginCustomizingViewControllers:(NSArray<__kindof UIViewController *> *) viewControllers;
```

## Parameters

- `tabBarController`: The tab bar controller that is being customized.
- `viewControllers`: The view controllers to be displayed in the customization sheet. This list typically contains all custom view controllers you added but does not include some standard controllers, such as the one that manages the More tab.

## See Also

### Managing tab bar customizations

- [tabBarController:willEndCustomizingViewControllers:changed:](tabbarcontroller%28__willendcustomizing_changed_%29.md): Tells the delegate that the tab bar customization sheet is about to be dismissed.
- [tabBarController:didEndCustomizingViewControllers:changed:](tabbarcontroller%28__didendcustomizing_changed_%29.md): Tells the delegate that the tab bar customization sheet was dismissed.
