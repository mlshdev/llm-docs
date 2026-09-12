> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/sidebar-swift.class/delegate-swift.protocol/tabbarcontroller(_:sidebar:leadingswipeactionsconfigurationfor:)](https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/delegate-swift.protocol/tabbarcontroller(_:sidebar:leadingswipeactionsconfigurationfor:))

# tabBarController(\_:sidebar:leadingSwipeActionsConfigurationFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Called when the sidebar is about to show leading swipe actions for the specified `tab`. Return either a concrete `UISwipeActionsConfiguration` or nil if the tab does not show swipe actions.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, sidebar: UITabBarController.Sidebar, leadingSwipeActionsConfigurationFor tab: UITab) -> UISwipeActionsConfiguration?
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

# tabBarController:sidebar:leadingSwipeActionsConfigurationForTab: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Called when the sidebar is about to show leading swipe actions for the specified `tab`. Return either a concrete `UISwipeActionsConfiguration` or nil if the tab does not show swipe actions.

## Declaration

```objectivec
- (UISwipeActionsConfiguration *) tabBarController:(UITabBarController *) tabBarController sidebar:(UITabBarControllerSidebar *) sidebar leadingSwipeActionsConfigurationForTab:(UITab *) tab;
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)
