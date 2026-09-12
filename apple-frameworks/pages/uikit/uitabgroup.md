> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabgroup](https://developer.apple.com/documentation/uikit/uitabgroup)

# UITabGroup (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object that manages a collection of tab objects.

## Declaration

```swift
@MainActor class UITabGroup
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="overview"></a>

## Overview

Use tab groups to create a rich hierarchy of tab items. On iPad, the system displays the tab group as a section in the sidebar. For more information, see [Elevating your iPad app with a tab bar and sidebar](elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md).

## Topics

### Creating tab groups

- [init(title:image:identifier:children:viewControllerProvider:)](uitabgroup/init%28title_image_identifier_children_viewcontrollerprovider_%29.md): Creates a tab group.

### Accessing tabs

- [children](uitabgroup/children.md): The tabs within a tab group.
- [tab(forIdentifier:)](uitabgroup/tab%28foridentifier_%29.md): Returns a tab with a matching identifier, if any.
- [defaultChildIdentifier](uitabgroup/defaultchildidentifier.md): The identifier for the default subitem.
- [selectedChild](uitabgroup/selectedchild.md): The currently selected tab.

### Configuring a tab group

- [sidebarAppearance](uitabgroup/sidebarappearance-swift.property.md): The appearance of a tab group’s section in a sidebar.
- [UITabGroup.SidebarAppearance](uitabgroup/sidebarappearance-swift.enum.md): The appearance of a section in a sidebar.
- [managingNavigationController](uitabgroup/managingnavigationcontroller.md): The controller that manages navigation for items in a sidebar.

### Managing customization

- [allowsReordering](uitabgroup/allowsreordering.md): A Boolean value that indicates people can reorder subitems in the sidebar.
- [displayOrderIdentifiers](uitabgroup/displayorderidentifiers.md): An array that contains the identifiers of subitems in their display order.
- [displayOrder](uitabgroup/displayorder.md): An array that contains instances of subitems in their display order.

### Assigning actions

- [sidebarActions](uitabgroup/sidebaractions.md): An array of actions that appear in a section in a sidebar.

### Instance Properties

- [isCollapsedByDefault](uitabgroup/iscollapsedbydefault.md): Whether the group is initially displayed in a collapsed state in the sidebar.
- [isSidebarDestination](uitabgroup/issidebardestination.md): Determines if the tab group itself can be selected as a destination in the sidebar.

## Relationships

### Inherits From

- [UITab](uitab.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)
- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md)

## See Also

### Container view controllers

- [Creating a custom container view controller](creating-a-custom-container-view-controller.md): Create a composite interface by combining content from one or more view controllers with other custom views.
- [UISplitViewController](uisplitviewcontroller.md): A container view controller that implements a hierarchical interface.
- [UINavigationController](uinavigationcontroller.md): A container view controller that defines a stack-based scheme for navigating hierarchical content.
- [UINavigationBar](uinavigationbar.md): Navigational controls that display in a bar along the top of the screen, usually in conjunction with a navigation controller.
- [UINavigationItem](uinavigationitem.md): The items that a navigation bar displays when the associated view controller is visible.
- [UITabBarController](uitabbarcontroller.md): A container view controller that manages a multiselection interface, where the selection determines which child view controller to display.
- [UITabBar](uitabbar.md): A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
- [UITabBarItem](uitabbaritem.md): An object that describes an item in a tab bar.
- [UITab](uitab.md): An object that manages a tab in a tab bar.
- [UITabAccessory](uitabaccessory.md)
- [UISearchTab](uisearchtab.md): A tab subclass that represents the system’s search tab.
- [UIPageViewController](uipageviewcontroller.md): A container view controller that manages navigation between pages of content, where a subview controller manages each page.

# UITabGroup (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object that manages a collection of tab objects.

## Declaration

```objectivec
@interface UITabGroup : UITab
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="overview"></a>

## Overview

Use tab groups to create a rich hierarchy of tab items. On iPad, the system displays the tab group as a section in the sidebar. For more information, see [Elevating your iPad app with a tab bar and sidebar](elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md).

## Topics

### Creating tab groups

- [initWithTitle:image:identifier:children:viewControllerProvider:](uitabgroup/init%28title_image_identifier_children_viewcontrollerprovider_%29.md): Creates a tab group.

### Accessing tabs

- [children](uitabgroup/children.md): The tabs within a tab group.
- [tabForIdentifier:](uitabgroup/tab%28foridentifier_%29.md): Returns a tab with a matching identifier, if any.
- [defaultChildIdentifier](uitabgroup/defaultchildidentifier.md): The identifier for the default subitem.
- [selectedChild](uitabgroup/selectedchild.md): The currently selected tab.

### Configuring a tab group

- [sidebarAppearance](uitabgroup/sidebarappearance-swift.property.md): The appearance of a tab group’s section in a sidebar.
- [UITabGroupSidebarAppearance](uitabgroup/sidebarappearance-swift.enum.md): The appearance of a section in a sidebar.
- [managingNavigationController](uitabgroup/managingnavigationcontroller.md): The controller that manages navigation for items in a sidebar.

### Managing customization

- [allowsReordering](uitabgroup/allowsreordering.md): A Boolean value that indicates people can reorder subitems in the sidebar.
- [displayOrderIdentifiers](uitabgroup/displayorderidentifiers.md): An array that contains the identifiers of subitems in their display order.
- [displayOrder](uitabgroup/displayorder.md): An array that contains instances of subitems in their display order.

### Assigning actions

- [sidebarActions](uitabgroup/sidebaractions.md): An array of actions that appear in a section in a sidebar.

### Instance Properties

- [collapsedByDefault](uitabgroup/iscollapsedbydefault.md): Whether the group is initially displayed in a collapsed state in the sidebar.
- [isSidebarDestination](uitabgroup/issidebardestination.md): Determines if the tab group itself can be selected as a destination in the sidebar.

## Relationships

### Inherits From

- [UITab](uitab.md)

## See Also

### Container view controllers

- [Creating a custom container view controller](creating-a-custom-container-view-controller.md): Create a composite interface by combining content from one or more view controllers with other custom views.
- [UISplitViewController](uisplitviewcontroller.md): A container view controller that implements a hierarchical interface.
- [UINavigationController](uinavigationcontroller.md): A container view controller that defines a stack-based scheme for navigating hierarchical content.
- [UINavigationBar](uinavigationbar.md): Navigational controls that display in a bar along the top of the screen, usually in conjunction with a navigation controller.
- [UINavigationItem](uinavigationitem.md): The items that a navigation bar displays when the associated view controller is visible.
- [UITabBarController](uitabbarcontroller.md): A container view controller that manages a multiselection interface, where the selection determines which child view controller to display.
- [UITabBar](uitabbar.md): A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
- [UITabBarItem](uitabbaritem.md): An object that describes an item in a tab bar.
- [UITab](uitab.md): An object that manages a tab in a tab bar.
- [UITabAccessory](uitabaccessory.md)
- [UISearchTab](uisearchtab.md): A tab subclass that represents the system’s search tab.
- [UIPageViewController](uipageviewcontroller.md): A container view controller that manages navigation between pages of content, where a subview controller manages each page.
