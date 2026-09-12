> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/mode-swift.enum](https://developer.apple.com/documentation/uikit/uitabbarcontroller/mode-swift.enum)

# UITabBarController.Mode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A tab bar’s display mode.

## Declaration

```swift
enum Mode
```

## Topics

### Setting modes

- [UITabBarController.Mode.automatic](mode-swift.enum/automatic.md): The system sets the display mode based on the tab’s content.
- [UITabBarController.Mode.tabBar](mode-swift.enum/tabbar.md): The system displays the content only as a tab bar.
- [UITabBarController.Mode.tabSidebar](mode-swift.enum/tabsidebar.md): The system displays the content as either a tab bar or a sidebar, depending on the context.

### Initializers

- [init(rawValue:)](mode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting the sidebar

- [mode](mode-swift.property.md): The display mode for a tab bar.
- [sidebar](sidebar-swift.property.md): A tab bar’s corresponding sidebar.
- [UITabBarController.Sidebar](sidebar-swift.class.md): An object for managing and configuring the sidebar.
- [UITabSidebarItem](../uitabsidebaritem.md)
- [UITabSidebarItem.Request](../uitabsidebaritem/request.md)
- [UITabBarController.Sidebar.Animating](sidebar-swift.class/animating.md)

# UITabBarControllerMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

A tab bar’s display mode.

## Declaration

```objectivec
enum UITabBarControllerMode : NSInteger;
```

## Topics

### Setting modes

- [UITabBarControllerModeAutomatic](mode-swift.enum/automatic.md): The system sets the display mode based on the tab’s content.
- [UITabBarControllerModeTabBar](mode-swift.enum/tabbar.md): The system displays the content only as a tab bar.
- [UITabBarControllerModeTabSidebar](mode-swift.enum/tabsidebar.md): The system displays the content as either a tab bar or a sidebar, depending on the context.

## See Also

### Supporting the sidebar

- [mode](mode-swift.property.md): The display mode for a tab bar.
- [sidebar](sidebar-swift.property.md): A tab bar’s corresponding sidebar.
- [UITabBarControllerSidebar](sidebar-swift.class.md): An object for managing and configuring the sidebar.
- [UITabSidebarItem](../uitabsidebaritem.md)
- [UITabSidebarScrollTarget](../uitabsidebarscrolltarget.md)
- [UITabSidebarItemRequest](../uitabsidebaritem/request.md)
- [UITabBarControllerSidebarAnimating](sidebar-swift.class/animating.md)
