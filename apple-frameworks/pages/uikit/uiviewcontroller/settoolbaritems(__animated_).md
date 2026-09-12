> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/settoolbaritems(_:animated:)](https://developer.apple.com/documentation/uikit/uiviewcontroller/settoolbaritems(_:animated:))

# setToolbarItems(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Sets the toolbar items to be displayed along with the view controller.

## Declaration

```swift
func setToolbarItems(_ toolbarItems: [UIBarButtonItem]?, animated: Bool)
```

## Parameters

- `toolbarItems`: The toolbar items to display in a built-in toolbar.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), animate the change of items in the toolbar.

<a id="Discussion"></a>

## Discussion

View controllers that are managed by a navigation controller can use this method to specify toolbar items for the navigation controller’s built-in toolbar. You can set the toolbar items for your view controller before your view controller is displayed or after it is already visible.

## See Also

### Configuring a navigation interface

- [navigationItem](navigationitem.md): The navigation item used to represent the view controller in a parent’s navigation bar.
- [hidesBottomBarWhenPushed](hidesbottombarwhenpushed.md): A Boolean value indicating whether the toolbar at the bottom of the screen is hidden when the view controller is pushed on to a navigation controller.
- [toolbarItems](toolbaritems.md): The toolbar items associated with the view controller.

# setToolbarItems:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Sets the toolbar items to be displayed along with the view controller.

## Declaration

```objectivec
- (void) setToolbarItems:(NSArray<UIBarButtonItem *> *) toolbarItems animated:(BOOL) animated;
```

## Parameters

- `toolbarItems`: The toolbar items to display in a built-in toolbar.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), animate the change of items in the toolbar.

<a id="Discussion"></a>

## Discussion

View controllers that are managed by a navigation controller can use this method to specify toolbar items for the navigation controller’s built-in toolbar. You can set the toolbar items for your view controller before your view controller is displayed or after it is already visible.

## See Also

### Configuring a navigation interface

- [navigationItem](navigationitem.md): The navigation item used to represent the view controller in a parent’s navigation bar.
- [hidesBottomBarWhenPushed](hidesbottombarwhenpushed.md): A Boolean value indicating whether the toolbar at the bottom of the screen is hidden when the view controller is pushed on to a navigation controller.
- [toolbarItems](toolbaritems.md): The toolbar items associated with the view controller.
