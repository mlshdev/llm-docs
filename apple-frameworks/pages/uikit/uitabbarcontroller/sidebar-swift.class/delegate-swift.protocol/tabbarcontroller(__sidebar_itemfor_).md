> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/delegate-swift.protocol/tabbarcontroller(_:sidebar:itemfor:)

# tabBarController(\_:sidebar:itemFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Return a `UITabSidebarItem` for the specified item request. When created, the item will be preconfigured to the appropriate defaults for its given content. If this method is not implemented, a default sidebar item will be provided for the request.

## Declaration

```swift
optional func tabBarController(_ tabBarController: UITabBarController, sidebar: UITabBarController.Sidebar, itemFor request: UITabSidebarItem.Request) -> UITabSidebarItem
```

# tabBarController:sidebar:itemForRequest: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Return a `UITabSidebarItem` for the specified item request. When created, the item will be preconfigured to the appropriate defaults for its given content. If this method is not implemented, a default sidebar item will be provided for the request.

## Declaration

```objectivec
- (UITabSidebarItem *) tabBarController:(UITabBarController *) tabBarController sidebar:(UITabBarControllerSidebar *) sidebar itemForRequest:(UITabSidebarItemRequest *) request;
```
