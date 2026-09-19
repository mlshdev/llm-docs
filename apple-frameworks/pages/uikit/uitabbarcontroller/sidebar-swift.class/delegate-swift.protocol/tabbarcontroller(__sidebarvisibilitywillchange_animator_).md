> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/delegate-swift.protocol/tabbarcontroller(_:sidebarvisibilitywillchange:animator:)

# tabBarController(\_:sidebarVisibilityWillChange:animator:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Notifies the delegate when the visibility of the sidebar is about to change when `sidebar.isHidden` changes. Add animations to the animator to run alongside the visibility update. Alongside animations and completions will run immediately if the sidebar visibility is changed without animation.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, sidebarVisibilityWillChange sidebar: UITabBarController.Sidebar, animator: any UITabBarController.Sidebar.Animating)
```

# tabBarController:sidebarVisibilityWillChange:animator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Notifies the delegate when the visibility of the sidebar is about to change when `sidebar.isHidden` changes. Add animations to the animator to run alongside the visibility update. Alongside animations and completions will run immediately if the sidebar visibility is changed without animation.

## Declaration

```objectivec
- (void) tabBarController:(UITabBarController *) tabBarController sidebarVisibilityWillChange:(UITabBarControllerSidebar *) sidebar animator:(id<UITabBarControllerSidebarAnimating>) animator;
```
