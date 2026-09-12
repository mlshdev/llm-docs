> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:didendcustomizing:changed:)](https://developer.apple.com/documentation/uikit/uitabbarcontrollerdelegate/tabbarcontroller(_:didendcustomizing:changed:))

# tabBarController(\_:didEndCustomizing:changed:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the tab bar customization sheet was dismissed.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, didEndCustomizing viewControllers: [UIViewController], changed: Bool)
```

## Parameters

- `tabBarController`: The tab bar controller that is being customized.
- `viewControllers`: The view controllers of the tab bar controller. The arrangement of the controllers in the array represents the new display order within the tab bar.
- `changed`: A Boolean value indicating whether items changed on the tab bar. [true](https://developer.apple.com/documentation/swift/true) if items changed or [false](https://developer.apple.com/documentation/swift/false) if they did not.

<a id="Discussion"></a>

## Discussion

You can use this method to respond to changes to the order of tabs in the tab bar.

## See Also

### Managing tab bar customizations

- [tabBarController(\_:willBeginCustomizing:)](tabbarcontroller%28__willbegincustomizing_%29.md): Tells the delegate that the tab bar customization sheet is about to be displayed.
- [tabBarController(\_:willEndCustomizing:changed:)](tabbarcontroller%28__willendcustomizing_changed_%29.md): Tells the delegate that the tab bar customization sheet is about to be dismissed.

# tabBarController:didEndCustomizingViewControllers:changed: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Tells the delegate that the tab bar customization sheet was dismissed.

## Declaration

```objectivec
- (void) tabBarController:(UITabBarController *) tabBarController didEndCustomizingViewControllers:(NSArray<__kindof UIViewController *> *) viewControllers changed:(BOOL) changed;
```

## Parameters

- `tabBarController`: The tab bar controller that is being customized.
- `viewControllers`: The view controllers of the tab bar controller. The arrangement of the controllers in the array represents the new display order within the tab bar.
- `changed`: A Boolean value indicating whether items changed on the tab bar. [true](https://developer.apple.com/documentation/swift/true) if items changed or [false](https://developer.apple.com/documentation/swift/false) if they did not.

<a id="Discussion"></a>

## Discussion

You can use this method to respond to changes to the order of tabs in the tab bar.

## See Also

### Managing tab bar customizations

- [tabBarController:willBeginCustomizingViewControllers:](tabbarcontroller%28__willbegincustomizing_%29.md): Tells the delegate that the tab bar customization sheet is about to be displayed.
- [tabBarController:willEndCustomizingViewControllers:changed:](tabbarcontroller%28__willendcustomizing_changed_%29.md): Tells the delegate that the tab bar customization sheet is about to be dismissed.
