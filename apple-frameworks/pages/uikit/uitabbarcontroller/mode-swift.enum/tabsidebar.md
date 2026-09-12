> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/mode-swift.enum/tabsidebar](https://developer.apple.com/documentation/uikit/uitabbarcontroller/mode-swift.enum/tabsidebar)

# UITabBarController.Mode.tabSidebar (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The system displays the content as either a tab bar or a sidebar, depending on the context.

## Declaration

```swift
case tabSidebar
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="Discussion"></a>

## Discussion

Different platforms handle the mode differently:

- On iPad, the system displays the content as either a tab bar or a sidebar, depending on the context.
- On Mac Catalyst, the system displays a sidebar.
- On iPhone and Apple TV, the system displays the platform’s regular tab bar.
- In visionOS, the system displays the platform’s regular tabs, but a [UITabGroup](../../uitabgroup.md) can display a sidebar when it displays the group’s view controller.

For more information, see [Elevating your iPad app with a tab bar and sidebar](../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md).

## See Also

### Setting modes

- [UITabBarController.Mode.automatic](automatic.md): The system sets the display mode based on the tab’s content.
- [UITabBarController.Mode.tabBar](tabbar.md): The system displays the content only as a tab bar.

# UITabBarControllerModeTabSidebar (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

The system displays the content as either a tab bar or a sidebar, depending on the context.

## Declaration

```objectivec
UITabBarControllerModeTabSidebar
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="Discussion"></a>

## Discussion

Different platforms handle the mode differently:

- On iPad, the system displays the content as either a tab bar or a sidebar, depending on the context.
- On Mac Catalyst, the system displays a sidebar.
- On iPhone and Apple TV, the system displays the platform’s regular tab bar.
- In visionOS, the system displays the platform’s regular tabs, but a [UITabGroup](../../uitabgroup.md) can display a sidebar when it displays the group’s view controller.

For more information, see [Elevating your iPad app with a tab bar and sidebar](../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md).

## See Also

### Setting modes

- [UITabBarControllerModeAutomatic](automatic.md): The system sets the display mode based on the tab’s content.
- [UITabBarControllerModeTabBar](tabbar.md): The system displays the content only as a tab bar.
