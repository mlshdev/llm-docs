> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/toolbaritems](https://developer.apple.com/documentation/uikit/uiviewcontroller/toolbaritems)

# toolbarItems (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The toolbar items associated with the view controller.

## Declaration

```swift
var toolbarItems: [UIBarButtonItem]? { get set }
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [UIBarButtonItem](../uibarbuttonitem.md) objects and works in conjunction with a [UINavigationController](../uinavigationcontroller.md) object. If this view controller is embedded inside a navigation controller interface, and the navigation controller displays a toolbar, this property identifies the items to display in that toolbar.

You can set the value of this property explicitly or use the [setToolbarItems(\_:animated:)](settoolbaritems%28__animated_%29.md) method to animate changes to the visible set of toolbar items.

## See Also

### Configuring a navigation interface

- [navigationItem](navigationitem.md): The navigation item used to represent the view controller in a parent’s navigation bar.
- [hidesBottomBarWhenPushed](hidesbottombarwhenpushed.md): A Boolean value indicating whether the toolbar at the bottom of the screen is hidden when the view controller is pushed on to a navigation controller.
- [setToolbarItems(\_:animated:)](settoolbaritems%28__animated_%29.md): Sets the toolbar items to be displayed along with the view controller.

# toolbarItems (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

The toolbar items associated with the view controller.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSArray<__kindof UIBarButtonItem *> * toolbarItems;
```

<a id="Discussion"></a>

## Discussion

This property contains an array of [UIBarButtonItem](../uibarbuttonitem.md) objects and works in conjunction with a [UINavigationController](../uinavigationcontroller.md) object. If this view controller is embedded inside a navigation controller interface, and the navigation controller displays a toolbar, this property identifies the items to display in that toolbar.

You can set the value of this property explicitly or use the [setToolbarItems:animated:](settoolbaritems%28__animated_%29.md) method to animate changes to the visible set of toolbar items.

## See Also

### Configuring a navigation interface

- [navigationItem](navigationitem.md): The navigation item used to represent the view controller in a parent’s navigation bar.
- [hidesBottomBarWhenPushed](hidesbottombarwhenpushed.md): A Boolean value indicating whether the toolbar at the bottom of the screen is hidden when the view controller is pushed on to a navigation controller.
- [setToolbarItems:animated:](settoolbaritems%28__animated_%29.md): Sets the toolbar items to be displayed along with the view controller.
