> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/sidebar-swift.class/preferredplacement](https://developer.apple.com/documentation/uikit/uitabbarcontroller/sidebar-swift.class/preferredplacement)

# preferredPlacement (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The preferred placement for the tab bar controller when the sidebar and tab bar are mutually exclusive, and only one placement can be displayed.

## Declaration

```swift
var preferredPlacement: UITabBarController.Sidebar.Placement { get set }
```

<a id="discussion"></a>

## Discussion

When set to `UITabBarControllerSidebarPlacementAutomatic`, the system resolves to the platform default. On iOS, this resolves to showing the tab bar by default. This property has no effect on platforms where multiple placements are supported, like on iPadOS, where the sidebar can be minimized into the top tab bar.

Default is `UITabBarControllerSidebarPlacementAutomatic`.

# preferredPlacement (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · visionOS 27.0+

The preferred placement for the tab bar controller when the sidebar and tab bar are mutually exclusive, and only one placement can be displayed.

## Declaration

```objectivec
@property (nonatomic, assign) UITabBarControllerSidebarPlacement preferredPlacement;
```

<a id="discussion"></a>

## Discussion

When set to `UITabBarControllerSidebarPlacementAutomatic`, the system resolves to the platform default. On iOS, this resolves to showing the tab bar by default. This property has no effect on platforms where multiple placements are supported, like on iPadOS, where the sidebar can be minimized into the top tab bar.

Default is `UITabBarControllerSidebarPlacementAutomatic`.
