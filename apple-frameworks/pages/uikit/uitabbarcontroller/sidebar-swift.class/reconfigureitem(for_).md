> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/sidebar-swift.class/reconfigureitem(for:)](https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/reconfigureitem(for:))

# reconfigureItem(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Requests the sidebar reconfigure the item representing the specified tab. This method has no effect if the `tab` is not currently displayed in the sidebar.

## Declaration

```swift
func reconfigureItem(for tab: UITab)
```

## See Also

### Managing customization

- [isHidden](ishidden.md): Determines if the sidebar is currently hidden.
- [preferredLayout](preferredlayout.md): The preferred layout for how the sidebar lays out with the tab bar controller’s content. Default is `.automatic`
- [UITabBarController.Sidebar.Layout](layout.md)

# reconfigureItemForTab: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Requests the sidebar reconfigure the item representing the specified tab. This method has no effect if the `tab` is not currently displayed in the sidebar.

## Declaration

```objectivec
- (void) reconfigureItemForTab:(UITab *) tab;
```

## See Also

### Managing customization

- [hidden](ishidden.md): Determines if the sidebar is currently hidden.
- [preferredLayout](preferredlayout.md): The preferred layout for how the sidebar lays out with the tab bar controller’s content. Default is `.automatic`
- [UITabBarControllerSidebarLayout](layout.md)
