> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitab](https://developer.apple.com/documentation/uikit/uitab)

# UITab (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object that manages a tab in a tab bar.

## Declaration

```swift
@MainActor class UITab
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="overview"></a>

## Overview

To create a tab, call [init(title:image:identifier:viewControllerProvider:)](uitab/init%28title_image_identifier_viewcontrollerprovider_%29.md). In the closure, return the view controller your app presents when someone selects the tab. Then pass an array of tabs to your [UITabBarController](uitabbarcontroller.md) object’s tabs property.

For more information, see [Elevating your iPad app with a tab bar and sidebar](elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md).

## Topics

### Creating tabs

- [init(title:image:identifier:viewControllerProvider:)](uitab/init%28title_image_identifier_viewcontrollerprovider_%29.md): Creates a tab object.

### Accessing a tab’s appearance

- [title](uitab/title.md): A tab’s title.
- [subtitle](uitab/subtitle.md): A tab’s subtitle.
- [identifier](uitab/identifier.md): A string identifier for a tab.
- [image](uitab/image.md): A tab’s image.
- [badgeValue](uitab/badgevalue.md): A tab’s badge value.
- [viewController](uitab/viewcontroller.md): The view controller that the system presents when someone selects a tab.

### Managing customization

- [isHidden](uitab/ishidden.md): A Boolean value that indicates whether an item is hidden in a sidebar.
- [isHiddenByDefault](uitab/ishiddenbydefault.md): A Boolean value that indicates whether an item is hidden by default.
- [allowsHiding](uitab/allowshiding.md): A Boolean value that indicates whether people can hide a tab in a sidebar.
- [preferredPlacement](uitab/preferredplacement.md): The preferred placement for a tab when displayed in contexts that allow different placement.
- [UITab.Placement](uitab/placement.md): A tab’s placement when displayed in contexts that allow different placement.

### Accessing context

- [parent](uitab/parent.md): The containing tab group.
- [tabBarController](uitab/tabbarcontroller.md): The containing tab bar controller.
- [userInfo](uitab/userinfo.md): A custom object associated with the tab.

### Instance Properties

- [hasVisiblePlacement](uitab/hasvisibleplacement.md): Determines if the tab has a visible placement. Returns YES if the tab is visible in a tab bar that supports different tab placements. Otherwise returns NO.
- [isEnabled](uitab/isenabled.md): Determines if the tab is enabled. When NO, tabs will have a disabled appearance and cannot be selected by the user. Default is YES.
- [managingTabGroup](uitab/managingtabgroup.md): The managing tab group for the tab. This returns the root-most `UITabGroup` in the tab’s parent hierarchy with an active `managingNavigationController`. This can be different to `parent` if the tab is nested in multiple levels of tab groups. If the tab does not belong to a hierarchy with a managing navigation controller, then this will return nil. Default is nil.
- [selectedImage](uitab/selectedimage.md): An alternate image to display when the tab is selected. Default is nil.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UISearchTab](uisearchtab.md)
- [UITabGroup](uitabgroup.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
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
- [UITabAccessory](uitabaccessory.md)
- [UISearchTab](uisearchtab.md): A tab subclass that represents the system’s search tab.
- [UITabGroup](uitabgroup.md): An object that manages a collection of tab objects.
- [UIPageViewController](uipageviewcontroller.md): A container view controller that manages navigation between pages of content, where a subview controller manages each page.

# UITab (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

An object that manages a tab in a tab bar.

## Declaration

```objectivec
@interface UITab : NSObject
```

## Mentioned In

- [Elevating your iPad app with a tab bar and sidebar](elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md)

<a id="overview"></a>

## Overview

To create a tab, call [initWithTitle:image:identifier:viewControllerProvider:](uitab/init%28title_image_identifier_viewcontrollerprovider_%29.md). In the closure, return the view controller your app presents when someone selects the tab. Then pass an array of tabs to your [UITabBarController](uitabbarcontroller.md) object’s tabs property.

For more information, see [Elevating your iPad app with a tab bar and sidebar](elevating-your-ipad-app-with-a-tab-bar-and-sidebar.md).

## Topics

### Creating tabs

- [initWithTitle:image:identifier:viewControllerProvider:](uitab/init%28title_image_identifier_viewcontrollerprovider_%29.md): Creates a tab object.

### Accessing a tab’s appearance

- [title](uitab/title.md): A tab’s title.
- [subtitle](uitab/subtitle.md): A tab’s subtitle.
- [identifier](uitab/identifier.md): A string identifier for a tab.
- [image](uitab/image.md): A tab’s image.
- [badgeValue](uitab/badgevalue.md): A tab’s badge value.
- [viewController](uitab/viewcontroller.md): The view controller that the system presents when someone selects a tab.

### Managing customization

- [hidden](uitab/ishidden.md): A Boolean value that indicates whether an item is hidden in a sidebar.
- [hiddenByDefault](uitab/ishiddenbydefault.md): A Boolean value that indicates whether an item is hidden by default.
- [allowsHiding](uitab/allowshiding.md): A Boolean value that indicates whether people can hide a tab in a sidebar.
- [preferredPlacement](uitab/preferredplacement.md): The preferred placement for a tab when displayed in contexts that allow different placement.
- [UITabPlacement](uitab/placement.md): A tab’s placement when displayed in contexts that allow different placement.

### Accessing context

- [parent](uitab/parent.md): The containing tab group.
- [tabBarController](uitab/tabbarcontroller.md): The containing tab bar controller.
- [userInfo](uitab/userinfo.md): A custom object associated with the tab.

### Instance Properties

- [hasVisiblePlacement](uitab/hasvisibleplacement.md): Determines if the tab has a visible placement. Returns YES if the tab is visible in a tab bar that supports different tab placements. Otherwise returns NO.
- [enabled](uitab/isenabled.md): Determines if the tab is enabled. When NO, tabs will have a disabled appearance and cannot be selected by the user. Default is YES.
- [managingTabGroup](uitab/managingtabgroup.md): The managing tab group for the tab. This returns the root-most `UITabGroup` in the tab’s parent hierarchy with an active `managingNavigationController`. This can be different to `parent` if the tab is nested in multiple levels of tab groups. If the tab does not belong to a hierarchy with a managing navigation controller, then this will return nil. Default is nil.
- [selectedImage](uitab/selectedimage.md): An alternate image to display when the tab is selected. Default is nil.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UISearchTab](uisearchtab.md)
- [UITabGroup](uitabgroup.md)

### Conforms To

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
- [UITabAccessory](uitabaccessory.md)
- [UISearchTab](uisearchtab.md): A tab subclass that represents the system’s search tab.
- [UITabGroup](uitabgroup.md): An object that manages a collection of tab objects.
- [UIPageViewController](uipageviewcontroller.md): A container view controller that manages navigation between pages of content, where a subview controller manages each page.
