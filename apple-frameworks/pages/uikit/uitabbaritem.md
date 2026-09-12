> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitabbaritem](https://developer.apple.com/documentation/uikit/uitabbaritem)

# UITabBarItem (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that describes an item in a tab bar.

## Declaration

```swift
@MainActor class UITabBarItem
```

<a id="overview"></a>

## Overview

A tab bar item is a segment of a tab bar that represents a specific section of your app. A tab bar displays one or more items that allow the user to switch between the different sections. The user can select one item at a time.

The most common approach for displaying a tab bar is to use a tab bar controller. The controller’s tab bar displays an item for each view controller you provide when you set the [viewControllers](uitabbarcontroller/viewcontrollers.md) property or call the [setViewControllers(\_:animated:)](uitabbarcontroller/setviewcontrollers%28__animated_%29.md) method. You’re responsible for supplying the tab bar items. Do this by setting each view controller’s [tabBarItem](uiviewcontroller/tabbaritem.md) property. When the user selects an item, the tab bar controller displays its view controller. For more information, see [UITabBarController](uitabbarcontroller.md).

You can also use a tab bar independent of a tab bar controller. After creating a tab bar, add it to your view hierarchy. Provide the items by setting the tab bar’s [items](uitabbar/items.md) property or by using the [setItems(\_:animated:)](uitabbar/setitems%28__animated_%29.md) method. In this configuration, you’re responsible for updating the view hierarchy to display the correct content. Use [UITabBarDelegate](uitabbardelegate.md) to know when the selection changes. For more information, see [UITabBar](uitabbar.md).

The system provides several tab bar items for common use cases. If you need a custom item, create one with a title and an image. You can further customize the item by providing an alternate image that appears when the user selects it. By default, the item doesn’t display the images you provide. Instead, it generates new images from the alpha values of your images and tints them. To prevent this, provide images that use the [UIImage.RenderingMode.alwaysOriginal](uiimage/renderingmode-swift.enum/alwaysoriginal.md) rendering mode.

An item can adjust its appearance when in certain conditions. For example, you can specify different appearances for inline and compact inline layouts or for when the item’s state changes. To do this, set the item’s [standardAppearance](uitabbaritem/standardappearance.md) property. If you don’t want this behavior, you can set the individual properties on the item instead.

A tab bar item can display a supplementary value in a badge that provides extra information to the user. For example, the Phone app uses a badge’s value to display the number of missed calls. You can customize the badge’s appearance, including its background color and text attributes.

## Topics

### Creating a tab bar item

- [init(tabBarSystemItem:tag:)](uitabbaritem/init%28tabbarsystemitem_tag_%29.md): Creates a tab bar item using a system-provided configuration.
- [init(title:image:tag:)](uitabbaritem/init%28title_image_tag_%29.md): Creates a tab bar item that displays a title and an image.
- [init(title:image:selectedImage:)](uitabbaritem/init%28title_image_selectedimage_%29.md): Creates a tab bar item that toggles the image it displays when its selected state changes.
- [init()](uitabbaritem/init%28%29.md): Creates a tab bar item with a default configuration.
- [init(coder:)](uitabbaritem/init%28coder_%29.md): Creates a tab bar item from a serialized instance.
- [UITabBarItem.SystemItem](uitabbaritem/systemitem.md): Constants that represent the system tab bar items.

### Configuring the item’s appearance

- [selectedImage](uitabbaritem/selectedimage.md): The source image the item uses to generate its selected image.
- [standardAppearance](uitabbaritem/standardappearance.md): The appearance settings for a tab bar.
- [scrollEdgeAppearance](uitabbaritem/scrolledgeappearance.md): The appearance settings for the tab bar when the edge of scrollable content aligns with the edge of the tab bar.
- [titlePositionAdjustment](uitabbaritem/titlepositionadjustment.md): The offset to apply to the title’s position.

### Configuring the item’s badge

- [badgeValue](uitabbaritem/badgevalue.md): The text that the item’s badge displays.
- [badgeColor](uitabbaritem/badgecolor.md): The background color of the item’s badge.
- [setBadgeTextAttributes(\_:for:)](uitabbaritem/setbadgetextattributes%28__for_%29.md): Registers text attributes that the badge uses for the specified state.
- [badgeTextAttributes(for:)](uitabbaritem/badgetextattributes%28for_%29.md): Returns the badge’s text attributes for the specified state.

## Relationships

### Inherits From

- [UIBarItem](uibaritem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIAppearance](uiappearance.md)
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
- [UITab](uitab.md): An object that manages a tab in a tab bar.
- [UITabAccessory](uitabaccessory.md)
- [UISearchTab](uisearchtab.md): A tab subclass that represents the system’s search tab.
- [UITabGroup](uitabgroup.md): An object that manages a collection of tab objects.
- [UIPageViewController](uipageviewcontroller.md): A container view controller that manages navigation between pages of content, where a subview controller manages each page.

# UITabBarItem (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that describes an item in a tab bar.

## Declaration

```objectivec
@interface UITabBarItem : UIBarItem
```

<a id="overview"></a>

## Overview

A tab bar item is a segment of a tab bar that represents a specific section of your app. A tab bar displays one or more items that allow the user to switch between the different sections. The user can select one item at a time.

The most common approach for displaying a tab bar is to use a tab bar controller. The controller’s tab bar displays an item for each view controller you provide when you set the [viewControllers](uitabbarcontroller/viewcontrollers.md) property or call the [setViewControllers:animated:](uitabbarcontroller/setviewcontrollers%28__animated_%29.md) method. You’re responsible for supplying the tab bar items. Do this by setting each view controller’s [tabBarItem](uiviewcontroller/tabbaritem.md) property. When the user selects an item, the tab bar controller displays its view controller. For more information, see [UITabBarController](uitabbarcontroller.md).

You can also use a tab bar independent of a tab bar controller. After creating a tab bar, add it to your view hierarchy. Provide the items by setting the tab bar’s [items](uitabbar/items.md) property or by using the [setItems:animated:](uitabbar/setitems%28__animated_%29.md) method. In this configuration, you’re responsible for updating the view hierarchy to display the correct content. Use [UITabBarDelegate](uitabbardelegate.md) to know when the selection changes. For more information, see [UITabBar](uitabbar.md).

The system provides several tab bar items for common use cases. If you need a custom item, create one with a title and an image. You can further customize the item by providing an alternate image that appears when the user selects it. By default, the item doesn’t display the images you provide. Instead, it generates new images from the alpha values of your images and tints them. To prevent this, provide images that use the [UIImageRenderingModeAlwaysOriginal](uiimage/renderingmode-swift.enum/alwaysoriginal.md) rendering mode.

An item can adjust its appearance when in certain conditions. For example, you can specify different appearances for inline and compact inline layouts or for when the item’s state changes. To do this, set the item’s [standardAppearance](uitabbaritem/standardappearance.md) property. If you don’t want this behavior, you can set the individual properties on the item instead.

A tab bar item can display a supplementary value in a badge that provides extra information to the user. For example, the Phone app uses a badge’s value to display the number of missed calls. You can customize the badge’s appearance, including its background color and text attributes.

## Topics

### Creating a tab bar item

- [initWithTabBarSystemItem:tag:](uitabbaritem/init%28tabbarsystemitem_tag_%29.md): Creates a tab bar item using a system-provided configuration.
- [initWithTitle:image:tag:](uitabbaritem/init%28title_image_tag_%29.md): Creates a tab bar item that displays a title and an image.
- [initWithTitle:image:selectedImage:](uitabbaritem/init%28title_image_selectedimage_%29.md): Creates a tab bar item that toggles the image it displays when its selected state changes.
- [init](uitabbaritem/init%28%29.md): Creates a tab bar item with a default configuration.
- [initWithCoder:](uitabbaritem/init%28coder_%29.md): Creates a tab bar item from a serialized instance.
- [UITabBarSystemItem](uitabbaritem/systemitem.md): Constants that represent the system tab bar items.

### Configuring the item’s appearance

- [selectedImage](uitabbaritem/selectedimage.md): The source image the item uses to generate its selected image.
- [standardAppearance](uitabbaritem/standardappearance.md): The appearance settings for a tab bar.
- [scrollEdgeAppearance](uitabbaritem/scrolledgeappearance.md): The appearance settings for the tab bar when the edge of scrollable content aligns with the edge of the tab bar.
- [titlePositionAdjustment](uitabbaritem/titlepositionadjustment.md): The offset to apply to the title’s position.

### Configuring the item’s badge

- [badgeValue](uitabbaritem/badgevalue.md): The text that the item’s badge displays.
- [badgeColor](uitabbaritem/badgecolor.md): The background color of the item’s badge.
- [setBadgeTextAttributes:forState:](uitabbaritem/setbadgetextattributes%28__for_%29.md): Registers text attributes that the badge uses for the specified state.
- [badgeTextAttributesForState:](uitabbaritem/badgetextattributes%28for_%29.md): Returns the badge’s text attributes for the specified state.

### Deprecated

- [finishedSelectedImage](uitabbaritem/finishedselectedimage.md): Deprecated. Returns the finished selected image.
- [finishedUnselectedImage](uitabbaritem/finishedunselectedimage.md): Deprecated. Returns the finished unselected image.
- [setFinishedSelectedImage:withFinishedUnselectedImage:](uitabbaritem/setfinishedselectedimage_withfinishedunselectedimage_.md): Deprecated. Sets the finished selected and unselected images.

## Relationships

### Inherits From

- [UIBarItem](uibaritem.md)

### Conforms To

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
- [UITab](uitab.md): An object that manages a tab in a tab bar.
- [UITabAccessory](uitabaccessory.md)
- [UISearchTab](uisearchtab.md): A tab subclass that represents the system’s search tab.
- [UITabGroup](uitabgroup.md): An object that manages a collection of tab objects.
- [UIPageViewController](uipageviewcontroller.md): A container view controller that manages navigation between pages of content, where a subview controller manages each page.
