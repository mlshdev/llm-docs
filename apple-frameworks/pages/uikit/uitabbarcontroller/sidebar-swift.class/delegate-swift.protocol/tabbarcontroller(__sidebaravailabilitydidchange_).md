> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/delegate-swift.protocol/tabbarcontroller(_:sidebaravailabilitydidchange:)

# tabBarController(\_:sidebarAvailabilityDidChange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Notifies the delegate when `UITabBarController.Sidebar.isAvailable` changes.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, sidebarAvailabilityDidChange sidebar: UITabBarController.Sidebar)
```

# tabBarController:sidebarAvailabilityDidChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

Notifies the delegate when `UITabBarController.Sidebar.isAvailable` changes.

## Declaration

```objectivec
- (void) tabBarController:(UITabBarController *) tabBarController sidebarAvailabilityDidChange:(UITabBarControllerSidebar *) sidebar;
```
