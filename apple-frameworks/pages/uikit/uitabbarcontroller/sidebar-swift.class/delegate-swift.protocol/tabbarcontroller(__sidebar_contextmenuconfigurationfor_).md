> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/sidebar-swift.class/delegate-swift.protocol/tabbarcontroller(_:sidebar:contextmenuconfigurationfor:)](https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/delegate-swift.protocol/tabbarcontroller(_:sidebar:contextmenuconfigurationfor:))

# tabBarController(\_:sidebar:contextMenuConfigurationFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Called when the sidebar is about to display a context menu for the specified `tab`. Return either a concrete `UIContextMenuConfiguration` or nil if the tab does not show context menus.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, sidebar: UITabBarController.Sidebar, contextMenuConfigurationFor tab: UITab) -> UIContextMenuConfiguration?
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

# tabBarController:sidebar:contextMenuConfigurationForTab: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Called when the sidebar is about to display a context menu for the specified `tab`. Return either a concrete `UIContextMenuConfiguration` or nil if the tab does not show context menus.

## Declaration

```objectivec
- (UIContextMenuConfiguration *) tabBarController:(UITabBarController *) tabBarController sidebar:(UITabBarControllerSidebar *) sidebar contextMenuConfigurationForTab:(UITab *) tab;
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)
