> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitoolbar](https://developer.apple.com/documentation/uikit/uitoolbar)

# UIToolbar (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A control that displays one or more buttons along an edge of your interface.

## Declaration

```swift
@MainActor class UIToolbar
```

<a id="overview"></a>

## Overview

To create toolbar items, use the [UIBarButtonItem](uibarbuttonitem.md) class. To add toolbar items to a toolbar, use the [setItems(\_:animated:)](uitoolbar/setitems%28__animated_%29.md) method.

Toolbar images that represent normal and highlighted states of an item derive from the image you set using the inherited [image](uibaritem/image.md) property from the [UIBarItem](uibaritem.md) class. The toolbar’s [tintColor](uitoolbar/tintcolor.md) colors the image.

If you need radio button style controls, use the [UITabBar](uitabbar.md) class instead of [UIToolbar](uitoolbar.md).

When the system presents the toolbar with Liquid Glass:

- Don’t apply custom backgrounds or appearances to [UIToolbar](uitoolbar.md). Instead, let the system determine the background appearance.
- Don’t use `UIToolbar` directly when you present your view controller with a [UINavigationController](uinavigationcontroller.md). Instead, set [toolbarItems](uiviewcontroller/toolbaritems.md) to get system-provided transitions and animations in your toolbar.

> **Note**

> In iOS 18 and earlier, you use the methods listed in [Customizing appearance](uitoolbar.md#Customizing-appearance) to customize the appearance of toolbars. You send the setter messages to the appearance proxy (`UIToolbar.appearance()` in Swift or `[UIToolbar appearance]` in Objective-C) to customize all toolbars, or to a specific `UIToolbar` instance. If a property is dependent on the bar metrics, specify a value for [UIBarMetrics.default](uibarmetrics/default.md) as well as for [UIBarMetrics.compact](uibarmetrics/compact.md).

<a id="Split-the-toolbars-shared-background"></a>

### Split the toolbar’s shared background

By default, the system organizes all of the buttons you provide into one grouping that shares a background in the toolbar. To split buttons into different groupings with separate shared backgrounds, add [fixedSpace()](uibarbuttonitem/fixedspace%28%29.md) between buttons to indicate where you want to split the shared background.

For a button that finalizes or completes a task, set the button’s style to [UIBarButtonItem.Style.prominent](uibarbuttonitem/style-swift.enum/prominent.md) so that the system can avoid visually grouping the button with other buttons.

## Topics

### Managing toolbar changes

- [delegate](uitoolbar/delegate.md): The toolbar’s delegate object.
- [UIToolbarDelegate](uitoolbardelegate.md): The interface that toolbar delegate objects implement to manage the toolbar behavior.

### Configuring toolbar items

- [items](uitoolbar/items.md): The items displayed on the toolbar.
- [setItems(\_:animated:)](uitoolbar/setitems%28__animated_%29.md): Sets the items on the toolbar by animating the changes.

### Customizing appearance

- [standardAppearance](uitoolbar/standardappearance.md): The appearance settings to use for a standard-height toolbar.
- [compactAppearance](uitoolbar/compactappearance.md): The appearance settings to use for a compact-height toolbar.
- [scrollEdgeAppearance](uitoolbar/scrolledgeappearance.md): The appearance settings for a standard-height toolbar when the edge of scrollable content aligns with the edge of the toolbar.
- [compactScrollEdgeAppearance](uitoolbar/compactscrolledgeappearance.md): The appearance settings for a compact-height toolbar when the edge of any scrollable content aligns with the edge of a compact-height toolbar.
- [isTranslucent](uitoolbar/istranslucent.md): A Boolean value that indicates whether the toolbar is translucent.
- [Legacy customizations](uitoolbar-legacy-customizations.md): Customize appearance information directly on the toolbar object.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearance](uiappearance.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UIBarPositioning](uibarpositioning.md)
- [UICoordinateSpace](uicoordinatespace.md)
- [UIDynamicItem](uidynamicitem.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIFocusItem](uifocusitem.md)
- [UIFocusItemContainer](uifocusitemcontainer.md)
- [UILargeContentViewerItem](uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Bars

- [UIBarItem](uibaritem.md): An abstract superclass for items that you can add to a bar that appears at the bottom of the screen.
- [UIBarButtonItem](uibarbuttonitem.md): A specialized button for placement on a toolbar, navigation bar, or shortcuts bar.
- [UIBarButtonItemGroup](uibarbuttonitemgroup.md): A group of one or more bar button items for placement on a navigation bar or shortcuts bar.
- [UIBarButtonItemVisibilityPriority](uibarbuttonitemvisibilitypriority.md)
- [UINavigationBar](uinavigationbar.md): Navigational controls that display in a bar along the top of the screen, usually in conjunction with a navigation controller.
- [UISearchBar](uisearchbar.md): A specialized view for receiving search-related information from the user.
- [UITabBar](uitabbar.md): A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
- [UITabBarItem](uitabbaritem.md): An object that describes an item in a tab bar.
- [UIBarPositioning](uibarpositioning.md): A set of methods for defining the positioning of bars in iOS apps.
- [UIBarPositioningDelegate](uibarpositioningdelegate.md): A set of methods that support the positioning of a bar that conforms to the [UIBarPositioning](uibarpositioning.md) protocol.
- [UIBarMinimization](uibarminimization-swift.struct.md)

# UIToolbar (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A control that displays one or more buttons along an edge of your interface.

## Declaration

```objectivec
@interface UIToolbar : UIView
```

<a id="overview"></a>

## Overview

To create toolbar items, use the [UIBarButtonItem](uibarbuttonitem.md) class. To add toolbar items to a toolbar, use the [setItems:animated:](uitoolbar/setitems%28__animated_%29.md) method.

Toolbar images that represent normal and highlighted states of an item derive from the image you set using the inherited [image](uibaritem/image.md) property from the [UIBarItem](uibaritem.md) class. The toolbar’s [tintColor](uitoolbar/tintcolor.md) colors the image.

If you need radio button style controls, use the [UITabBar](uitabbar.md) class instead of [UIToolbar](uitoolbar.md).

When the system presents the toolbar with Liquid Glass:

- Don’t apply custom backgrounds or appearances to [UIToolbar](uitoolbar.md). Instead, let the system determine the background appearance.
- Don’t use `UIToolbar` directly when you present your view controller with a [UINavigationController](uinavigationcontroller.md). Instead, set [toolbarItems](uiviewcontroller/toolbaritems.md) to get system-provided transitions and animations in your toolbar.

> **Note**

> In iOS 18 and earlier, you use the methods listed in [Customizing appearance](uitoolbar.md#Customizing-appearance) to customize the appearance of toolbars. You send the setter messages to the appearance proxy (`UIToolbar.appearance()` in Swift or `[UIToolbar appearance]` in Objective-C) to customize all toolbars, or to a specific `UIToolbar` instance. If a property is dependent on the bar metrics, specify a value for [UIBarMetricsDefault](uibarmetrics/default.md) as well as for [UIBarMetricsCompact](uibarmetrics/compact.md).

<a id="Split-the-toolbars-shared-background"></a>

### Split the toolbar’s shared background

By default, the system organizes all of the buttons you provide into one grouping that shares a background in the toolbar. To split buttons into different groupings with separate shared backgrounds, add [fixedSpaceItem](uibarbuttonitem/fixedspace%28%29.md) between buttons to indicate where you want to split the shared background.

For a button that finalizes or completes a task, set the button’s style to [UIBarButtonItemStyleProminent](uibarbuttonitem/style-swift.enum/prominent.md) so that the system can avoid visually grouping the button with other buttons.

## Topics

### Managing toolbar changes

- [delegate](uitoolbar/delegate.md): The toolbar’s delegate object.
- [UIToolbarDelegate](uitoolbardelegate.md): The interface that toolbar delegate objects implement to manage the toolbar behavior.

### Configuring toolbar items

- [items](uitoolbar/items.md): The items displayed on the toolbar.
- [setItems:animated:](uitoolbar/setitems%28__animated_%29.md): Sets the items on the toolbar by animating the changes.

### Customizing appearance

- [standardAppearance](uitoolbar/standardappearance.md): The appearance settings to use for a standard-height toolbar.
- [compactAppearance](uitoolbar/compactappearance.md): The appearance settings to use for a compact-height toolbar.
- [scrollEdgeAppearance](uitoolbar/scrolledgeappearance.md): The appearance settings for a standard-height toolbar when the edge of scrollable content aligns with the edge of the toolbar.
- [compactScrollEdgeAppearance](uitoolbar/compactscrolledgeappearance.md): The appearance settings for a compact-height toolbar when the edge of any scrollable content aligns with the edge of a compact-height toolbar.
- [translucent](uitoolbar/istranslucent.md): A Boolean value that indicates whether the toolbar is translucent.
- [Legacy customizations](uitoolbar-legacy-customizations.md): Customize appearance information directly on the toolbar object.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [UIBarPositioning](uibarpositioning.md)

## See Also

### Bars

- [UIBarItem](uibaritem.md): An abstract superclass for items that you can add to a bar that appears at the bottom of the screen.
- [UIBarButtonItem](uibarbuttonitem.md): A specialized button for placement on a toolbar, navigation bar, or shortcuts bar.
- [UIBarButtonItemGroup](uibarbuttonitemgroup.md): A group of one or more bar button items for placement on a navigation bar or shortcuts bar.
- [UIBarButtonItemVisibilityPriority](uibarbuttonitemvisibilitypriority.md)
- [UINavigationBar](uinavigationbar.md): Navigational controls that display in a bar along the top of the screen, usually in conjunction with a navigation controller.
- [UISearchBar](uisearchbar.md): A specialized view for receiving search-related information from the user.
- [UITabBar](uitabbar.md): A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
- [UITabBarItem](uitabbaritem.md): An object that describes an item in a tab bar.
- [UIBarPositioning](uibarpositioning.md): A set of methods for defining the positioning of bars in iOS apps.
- [UIBarPositioningDelegate](uibarpositioningdelegate.md): A set of methods that support the positioning of a bar that conforms to the [UIBarPositioning](uibarpositioning.md) protocol.
