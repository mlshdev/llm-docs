> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/delegate-swift.protocol/tabbarcontroller(_:sidebar:willbegindisplaying:)

# tabBarController(\_:sidebar:willBeginDisplaying:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Notifies the delegate when the sidebar is about to display the row representing the specified `tab`

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, sidebar: UITabBarController.Sidebar, willBeginDisplaying tab: UITab)
```

# tabBarController:sidebar:willBeginDisplayingTab: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Notifies the delegate when the sidebar is about to display the row representing the specified `tab`

## Declaration

```objectivec
- (void) tabBarController:(UITabBarController *) tabBarController sidebar:(UITabBarControllerSidebar *) sidebar willBeginDisplayingTab:(UITab *) tab;
```
