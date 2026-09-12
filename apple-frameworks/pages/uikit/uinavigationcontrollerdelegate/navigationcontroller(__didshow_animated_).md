> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontrollerdelegate/navigationcontroller(_:didshow:animated:)](https://developer.apple.com/documentation/uikit/uinavigationcontrollerdelegate/navigationcontroller(_:didshow:animated:))

# navigationController(\_:didShow:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the delegate after the navigation controller displays a view controller’s view and navigation item properties.

## Declaration

```swift
optional func navigationController(_ navigationController: UINavigationController, didShow viewController: UIViewController, animated: Bool)
```

## Parameters

- `navigationController`: The navigation controller that is showing the view and properties of a view controller.
- `viewController`: The view controller whose view and navigation item properties are being shown.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)

## See Also

### Responding to a view controller being shown

- [navigationController(\_:willShow:animated:)](navigationcontroller%28__willshow_animated_%29.md): Notifies the delegate before the navigation controller displays a view controller’s view and navigation item properties.

# navigationController:didShowViewController:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Notifies the delegate after the navigation controller displays a view controller’s view and navigation item properties.

## Declaration

```objectivec
- (void) navigationController:(UINavigationController *) navigationController didShowViewController:(UIViewController *) viewController animated:(BOOL) animated;
```

## Parameters

- `navigationController`: The navigation controller that is showing the view and properties of a view controller.
- `viewController`: The view controller whose view and navigation item properties are being shown.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to animate the transition; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## Mentioned In

- [Enhancing your app with fluid transitions](../enhancing-your-app-with-fluid-transitions.md)

## See Also

### Responding to a view controller being shown

- [navigationController:willShowViewController:animated:](navigationcontroller%28__willshow_animated_%29.md): Notifies the delegate before the navigation controller displays a view controller’s view and navigation item properties.
