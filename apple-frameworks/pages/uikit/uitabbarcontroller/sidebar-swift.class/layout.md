> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/sidebar-swift.class/layout](https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/layout)

# UITabBarController.Sidebar.Layout (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```swift
enum Layout
```

## Topics

### Enumeration Cases

- [UITabBarController.Sidebar.Layout.automatic](layout/automatic.md)
- [UITabBarController.Sidebar.Layout.overlap](layout/overlap.md): When the sidebar is displayed, it will overlap the selected view controller, allowing the selected view controller to render underneath the sidebar. Anchor the view’s content to the `layoutMarginsGuide` or `safeAreaLayoutGuide` to avoid being occluded by the sidebar.
- [UITabBarController.Sidebar.Layout.tile](layout/tile.md): When the sidebar is displayed, the selected view controller is resized and shifted to display alongside the sidebar. The selected view controller is not occluded by the sidebar, cannot render underneath the sidebar.

### Initializers

- [init(rawValue:)](layout/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing customization

- [isHidden](ishidden.md): Determines if the sidebar is currently hidden.
- [preferredLayout](preferredlayout.md): The preferred layout for how the sidebar lays out with the tab bar controller’s content. Default is `.automatic`
- [reconfigureItem(for:)](reconfigureitem%28for_%29.md): Requests the sidebar reconfigure the item representing the specified tab. This method has no effect if the `tab` is not currently displayed in the sidebar.

# UITabBarControllerSidebarLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

## Declaration

```objectivec
enum UITabBarControllerSidebarLayout : NSInteger;
```

## Topics

### Enumeration Cases

- [UITabBarControllerSidebarLayoutAutomatic](layout/automatic.md)
- [UITabBarControllerSidebarLayoutOverlap](layout/overlap.md): When the sidebar is displayed, it will overlap the selected view controller, allowing the selected view controller to render underneath the sidebar. Anchor the view’s content to the `layoutMarginsGuide` or `safeAreaLayoutGuide` to avoid being occluded by the sidebar.
- [UITabBarControllerSidebarLayoutTile](layout/tile.md): When the sidebar is displayed, the selected view controller is resized and shifted to display alongside the sidebar. The selected view controller is not occluded by the sidebar, cannot render underneath the sidebar.

## See Also

### Managing customization

- [hidden](ishidden.md): Determines if the sidebar is currently hidden.
- [preferredLayout](preferredlayout.md): The preferred layout for how the sidebar lays out with the tab bar controller’s content. Default is `.automatic`
- [reconfigureItemForTab:](reconfigureitem%28for_%29.md): Requests the sidebar reconfigure the item representing the specified tab. This method has no effect if the `tab` is not currently displayed in the sidebar.
