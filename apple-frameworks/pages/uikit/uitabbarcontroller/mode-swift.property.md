> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/mode-swift.property](https://developer.apple.com/documentation/uikit/uitabbarcontroller/mode-swift.property)

# mode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The display mode for a tab bar.

## Declaration

```swift
var mode: UITabBarController.Mode { get set }
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="Discussion"></a>

## Discussion

On iPad, the display mode determines whether the system can display the tab bar as a sidebar. For more information, see [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md).

## See Also

### Supporting the sidebar

- [UITabBarController.Mode](mode-swift.enum.md): A tab bar’s display mode.
- [sidebar](sidebar-swift.property.md): A tab bar’s corresponding sidebar.
- [UITabBarController.Sidebar](sidebar-swift.class.md): An object for managing and configuring the sidebar.
- [UITabSidebarItem](../uitabsidebaritem.md)
- [UITabSidebarItem.Request](../uitabsidebaritem/request.md)
- [UITabBarController.Sidebar.Animating](sidebar-swift.class/animating.md)

# mode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The display mode for a tab bar.

## Declaration

```objectivec
@property (nonatomic, assign) UITabBarControllerMode mode;
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="Discussion"></a>

## Discussion

On iPad, the display mode determines whether the system can display the tab bar as a sidebar. For more information, see [Elevating your iPad app with a tab bar and sidebar](../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md).

## See Also

### Supporting the sidebar

- [UITabBarControllerMode](mode-swift.enum.md): A tab bar’s display mode.
- [sidebar](sidebar-swift.property.md): A tab bar’s corresponding sidebar.
- [UITabBarControllerSidebar](sidebar-swift.class.md): An object for managing and configuring the sidebar.
- [UITabSidebarItem](../uitabsidebaritem.md)
- [UITabSidebarScrollTarget](../uitabsidebarscrolltarget.md)
- [UITabSidebarItemRequest](../uitabsidebaritem/request.md)
- [UITabBarControllerSidebarAnimating](sidebar-swift.class/animating.md)
