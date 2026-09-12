> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/navigationitem](https://developer.apple.com/documentation/uikit/uiviewcontroller/navigationitem)

# navigationItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The navigation item used to represent the view controller in a parent’s navigation bar.

## Declaration

```swift
var navigationItem: UINavigationItem { get }
```

<a id="Discussion"></a>

## Discussion

This is a unique instance of [UINavigationItem](../uinavigationitem.md) created to represent the view controller when it is pushed onto a navigation controller. The first time the property is accessed, the [UINavigationItem](../uinavigationitem.md) object is created. Therefore, you should not access this property if you are not using a navigation controller to display the view controller. To ensure the navigation item is configured, you can either override this property and add code to create the bar button items when first accessed or create the items in your view controller’s initialization code.

Avoid tying the creation of bar button items in your navigation item to the creation of your view controller’s view. The navigation item of a view controller may be retrieved independently of the view controller’s view. For example, when pushing two view controllers onto a navigation stack, the topmost view controller becomes visible, but the other view controller’s navigation item may be retrieved in order to present its back button.

The default behavior is to create a navigation item that displays the view controller’s title.

## See Also

### Configuring a navigation interface

- [hidesBottomBarWhenPushed](hidesbottombarwhenpushed.md): A Boolean value indicating whether the toolbar at the bottom of the screen is hidden when the view controller is pushed on to a navigation controller.
- [setToolbarItems(\_:animated:)](settoolbaritems%28__animated_%29.md): Sets the toolbar items to be displayed along with the view controller.
- [toolbarItems](toolbaritems.md): The toolbar items associated with the view controller.

# navigationItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

The navigation item used to represent the view controller in a parent’s navigation bar.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UINavigationItem * navigationItem;
```

<a id="Discussion"></a>

## Discussion

This is a unique instance of [UINavigationItem](../uinavigationitem.md) created to represent the view controller when it is pushed onto a navigation controller. The first time the property is accessed, the [UINavigationItem](../uinavigationitem.md) object is created. Therefore, you should not access this property if you are not using a navigation controller to display the view controller. To ensure the navigation item is configured, you can either override this property and add code to create the bar button items when first accessed or create the items in your view controller’s initialization code.

Avoid tying the creation of bar button items in your navigation item to the creation of your view controller’s view. The navigation item of a view controller may be retrieved independently of the view controller’s view. For example, when pushing two view controllers onto a navigation stack, the topmost view controller becomes visible, but the other view controller’s navigation item may be retrieved in order to present its back button.

The default behavior is to create a navigation item that displays the view controller’s title.

## See Also

### Configuring a navigation interface

- [hidesBottomBarWhenPushed](hidesbottombarwhenpushed.md): A Boolean value indicating whether the toolbar at the bottom of the screen is hidden when the view controller is pushed on to a navigation controller.
- [setToolbarItems:animated:](settoolbaritems%28__animated_%29.md): Sets the toolbar items to be displayed along with the view controller.
- [toolbarItems](toolbaritems.md): The toolbar items associated with the view controller.
