> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/sidebar-swift.class/delegate-swift.protocol/tabbarcontroller(_:sidebar:trailingswipeactionsconfigurationfor:)](https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/delegate-swift.protocol/tabbarcontroller(_:sidebar:trailingswipeactionsconfigurationfor:))

# tabBarController(\_:sidebar:trailingSwipeActionsConfigurationFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Called when the sidebar is about to show trailing swipe actions for a particular tab. Return either a UISwipeActionsConfiguration object or nil if this tab does not show swipe actions.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, sidebar: UITabBarController.Sidebar, trailingSwipeActionsConfigurationFor tab: UITab) -> UISwipeActionsConfiguration?
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

# tabBarController:sidebar:trailingSwipeActionsConfigurationForTab: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Called when the sidebar is about to show trailing swipe actions for a particular tab. Return either a UISwipeActionsConfiguration object or nil if this tab does not show swipe actions.

## Declaration

```objectivec
- (UISwipeActionsConfiguration *) tabBarController:(UITabBarController *) tabBarController sidebar:(UITabBarControllerSidebar *) sidebar trailingSwipeActionsConfigurationForTab:(UITab *) tab;
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)
