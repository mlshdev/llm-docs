> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/sidebar-swift.class/ishidden](https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/ishidden)

# isHidden (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Determines if the sidebar is currently hidden.

## Declaration

```swift
var isHidden: Bool { get set }
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

## See Also

### Managing customization

- [preferredLayout](preferredlayout.md): The preferred layout for how the sidebar lays out with the tab bar controller’s content. Default is `.automatic`
- [UITabBarController.Sidebar.Layout](layout.md)
- [reconfigureItem(for:)](reconfigureitem%28for_%29.md): Requests the sidebar reconfigure the item representing the specified tab. This method has no effect if the `tab` is not currently displayed in the sidebar.

# hidden (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Determines if the sidebar is currently hidden.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isHidden) BOOL hidden;
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

## See Also

### Managing customization

- [preferredLayout](preferredlayout.md): The preferred layout for how the sidebar lays out with the tab bar controller’s content. Default is `.automatic`
- [UITabBarControllerSidebarLayout](layout.md)
- [reconfigureItemForTab:](reconfigureitem%28for_%29.md): Requests the sidebar reconfigure the item representing the specified tab. This method has no effect if the `tab` is not currently displayed in the sidebar.
