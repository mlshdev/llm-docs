> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbarcontroller/mode-swift.enum/automatic](https://developer.apple.com/documentation/uikit/uitabbarcontroller/mode-swift.enum/automatic)

# UITabBarController.Mode.automatic (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The system sets the display mode based on the tab’s content.

## Declaration

```swift
case automatic
```

<a id="Discussion"></a>

## Discussion

Different platforms handle the mode differently:

- On iPad, If the [tabs](../tabs.md) array contains one or more [UITabGroup](../../uitabgroup.md) items, the system displays the content as either a tab bar or a sidebar, depending on the context. Otherwise, it only displays the content only as a tab bar.
- On Mac Catalyst, the system displays a sidebar if the [tabs](../tabs.md) array contains one or more [UITabGroup](../../uitabgroup.md) items. Otherwise, it displays a tab bar.
- On iPhone and Apple TV, the system displays the platform’s regular tab bar.
- In visionOS, the system displays the platform’s regular tabs, but a [UITabGroup](../../uitabgroup.md) can display a sidebar when it displays the group’s view controller.

For more information, see [Elevating your iPad app with a tab bar and sidebar](../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md).

## See Also

### Setting modes

- [UITabBarController.Mode.tabBar](tabbar.md): The system displays the content only as a tab bar.
- [UITabBarController.Mode.tabSidebar](tabsidebar.md): The system displays the content as either a tab bar or a sidebar, depending on the context.

# UITabBarControllerModeAutomatic (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

The system sets the display mode based on the tab’s content.

## Declaration

```objectivec
UITabBarControllerModeAutomatic
```

<a id="Discussion"></a>

## Discussion

Different platforms handle the mode differently:

- On iPad, If the [tabs](../tabs.md) array contains one or more [UITabGroup](../../uitabgroup.md) items, the system displays the content as either a tab bar or a sidebar, depending on the context. Otherwise, it only displays the content only as a tab bar.
- On Mac Catalyst, the system displays a sidebar if the [tabs](../tabs.md) array contains one or more [UITabGroup](../../uitabgroup.md) items. Otherwise, it displays a tab bar.
- On iPhone and Apple TV, the system displays the platform’s regular tab bar.
- In visionOS, the system displays the platform’s regular tabs, but a [UITabGroup](../../uitabgroup.md) can display a sidebar when it displays the group’s view controller.

For more information, see [Elevating your iPad app with a tab bar and sidebar](../../elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md).

## See Also

### Setting modes

- [UITabBarControllerModeTabBar](tabbar.md): The system displays the content only as a tab bar.
- [UITabBarControllerModeTabSidebar](tabsidebar.md): The system displays the content as either a tab bar or a sidebar, depending on the context.
