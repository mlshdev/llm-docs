> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/preferredlayout

# preferredLayout (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The preferred layout for how the sidebar lays out with the tab bar controller’s content. Default is `.automatic`

## Declaration

```swift
var preferredLayout: UITabBarController.Sidebar.Layout { get set }
```

## See Also

### Managing customization

- [isHidden](ishidden.md): Determines if the sidebar is currently hidden.
- [UITabBarController.Sidebar.Layout](layout.md)
- [reconfigureItem(for:)](reconfigureitem%28for_%29.md): Requests the sidebar reconfigure the item representing the specified tab. This method has no effect if the `tab` is not currently displayed in the sidebar.

# preferredLayout (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The preferred layout for how the sidebar lays out with the tab bar controller’s content. Default is `.automatic`

## Declaration

```objectivec
@property (nonatomic, assign) UITabBarControllerSidebarLayout preferredLayout;
```

## See Also

### Managing customization

- [hidden](ishidden.md): Determines if the sidebar is currently hidden.
- [UITabBarControllerSidebarLayout](layout.md)
- [reconfigureItemForTab:](reconfigureitem%28for_%29.md): Requests the sidebar reconfigure the item representing the specified tab. This method has no effect if the `tab` is not currently displayed in the sidebar.
