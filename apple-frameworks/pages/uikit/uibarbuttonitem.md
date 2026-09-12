> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem](https://developer.apple.com/documentation/uikit/uibarbuttonitem)

# UIBarButtonItem (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A specialized button for placement on a toolbar, navigation bar, or shortcuts bar.

## Declaration

```swift
@MainActor class UIBarButtonItem
```

## Mentioned In

- [Getting the user’s attention with alerts and action sheets](getting-the-user-s-attention-with-alerts-and-action-sheets.md)

<a id="overview"></a>

## Overview

You typically use Interface Builder to create and configure bar button items. However, you can customize the appearance of buttons by sending the setter messages to [UIBarButtonItemAppearance](uibarbuttonitemappearance.md) to customize all buttons, or to a specific [UIBarButtonItem](uibarbuttonitem.md) instance. You can use customized buttons in standard places in a [UINavigationItem](uinavigationitem.md) object or a [UIToolbar](uitoolbar.md) instance.

In general, specify a value for the normal state so that other states without a custom value set can use it. Similarly, when a property depends on the bar metrics (for instance, on the iPhone in landscape orientation, bars have a different height from the standard), specify a value of [UIBarMetrics.default](uibarmetrics/default.md).

## Topics

### Creating items

- [init(title:image:primaryAction:menu:)](uibarbuttonitem/init%28title_image_primaryaction_menu_%29.md): Creates a plain-style item using the specified title, image, primary action, and context menu.
- [init(title:image:target:action:menu:)](uibarbuttonitem/init%28title_image_target_action_menu_%29.md): Creates a plain-style item using the specified title, image, target, action, and context menu.
- [init()](uibarbuttonitem/init%28%29.md): Initializes the item to its default state.
- [init(coder:)](uibarbuttonitem/init%28coder_%29.md): Creates an item from data in an unarchiver.

### Creating items of a specific style

- [init(title:style:target:action:)](uibarbuttonitem/init%28title_style_target_action_%29.md): Creates an item using the specified title, style, target, and action.
- [init(image:style:target:action:)](uibarbuttonitem/init%28image_style_target_action_%29.md): Creates an item using the specified image, style, target, and action.
- [init(image:landscapeImagePhone:style:target:action:)](uibarbuttonitem/init%28image_landscapeimagephone_style_target_action_%29.md): Creates an item using the specified images, style, target, and action.

### Creating system items

- [init(systemItem:primaryAction:menu:)](uibarbuttonitem/init%28systemitem_primaryaction_menu_%29.md): Creates an item using the specified system item, primary action, and context menu.
- [init(barButtonSystemItem:target:action:)](uibarbuttonitem/init%28barbuttonsystemitem_target_action_%29.md): Creates an item using the specified system item, target, and action.
- [UIBarButtonItem.SystemItem](uibarbuttonitem/systemitem.md): Constants that define system-supplied images for bar button items.

### Creating custom items

- [init(customView:)](uibarbuttonitem/init%28customview_%29.md): Creates an item using the specified custom view.

### Creating space items

- [fixedSpace(\_:)](uibarbuttonitem/fixedspace%28__%29.md): Creates a new fixed-width space item.
- [fixedSpace()](uibarbuttonitem/fixedspace%28%29.md): Creates a new fixed space item of zero width.
- [flexibleSpace()](uibarbuttonitem/flexiblespace%28%29.md): Creates a new flexible-width space item.

### Creating groups

- [creatingOptionalGroup(customizationIdentifier:isInDefaultCustomization:)](uibarbuttonitem/creatingoptionalgroup%28customizationidentifier_isindefaultcustomization_%29.md): Places the item in an optional group that a person can move, add to, or remove from the navigation bar during layout customization.
- [creatingFixedGroup()](uibarbuttonitem/creatingfixedgroup%28%29.md): Places the item in a fixed group that a person can’t move or remove from the navigation bar during layout customization.
- [creatingMovableGroup(customizationIdentifier:)](uibarbuttonitem/creatingmovablegroup%28customizationidentifier_%29.md): Places the item in a movable group that a person can move but can’t remove from the navigation bar during layout customization.

### Managing the custom view

- [customView](uibarbuttonitem/customview.md): A custom view representing the item.

### Managing the action

- [primaryAction](uibarbuttonitem/primaryaction.md): The action associated with the item.
- [changesSelectionAsPrimaryAction](uibarbuttonitem/changesselectionasprimaryaction.md): A Boolean value that indicates whether the button represents an action or selection.
- [action](uibarbuttonitem/action.md): The selector defining the action message to send to the target object when the user taps this bar button item.
- [target](uibarbuttonitem/target.md): The object that receives an action when the user selects the item.

### Managing the context menu

- [menu](uibarbuttonitem/menu.md): The context menu for this button.
- [preferredMenuElementOrder](uibarbuttonitem/preferredmenuelementorder.md): The preferred menu-element ordering strategy for the menu.

### Customizing item appearance

- [style](uibarbuttonitem/style-swift.property.md): The style of the item.
- [UIBarButtonItem.Style](uibarbuttonitem/style-swift.enum.md): Constants that specify the style of an item.
- [tintColor](uibarbuttonitem/tintcolor.md): The tint color to apply to the button item.
- [isHidden](uibarbuttonitem/ishidden.md): A Boolean that determines the visibility of the item.
- [isSelected](uibarbuttonitem/isselected.md): A Boolean value that indicates whether the button is in a selected state.
- [width](uibarbuttonitem/width.md): The width of the item.
- [possibleTitles](uibarbuttonitem/possibletitles.md): The set of possible titles to display on the bar button.

### Customizing the Back button

- [backButtonBackgroundImage(for:barMetrics:)](uibarbuttonitem/backbuttonbackgroundimage%28for_barmetrics_%29.md): Returns the back button background image for a specified control state and bar metrics.
- [setBackButtonBackgroundImage(\_:for:barMetrics:)](uibarbuttonitem/setbackbuttonbackgroundimage%28__for_barmetrics_%29.md): Sets the back button background image for a specified control state and bar metrics.
- [backButtonTitlePositionAdjustment(for:)](uibarbuttonitem/backbuttontitlepositionadjustment%28for_%29.md): Returns the back button title offset for specified bar metrics.
- [setBackButtonTitlePositionAdjustment(\_:for:)](uibarbuttonitem/setbackbuttontitlepositionadjustment%28__for_%29.md): Sets the back button title offset for specified bar metrics.
- [backButtonBackgroundVerticalPositionAdjustment(for:)](uibarbuttonitem/backbuttonbackgroundverticalpositionadjustment%28for_%29.md): Returns the back button vertical position offset for specified bar metrics.
- [setBackButtonBackgroundVerticalPositionAdjustment(\_:for:)](uibarbuttonitem/setbackbuttonbackgroundverticalpositionadjustment%28__for_%29.md): Sets the back button vertical position offset for specified bar metrics.

### Customizing the background

- [backgroundVerticalPositionAdjustment(for:)](uibarbuttonitem/backgroundverticalpositionadjustment%28for_%29.md): Returns the background vertical position offset for specified bar metrics.
- [setBackgroundVerticalPositionAdjustment(\_:for:)](uibarbuttonitem/setbackgroundverticalpositionadjustment%28__for_%29.md): Sets the background vertical position offset for specified bar metrics.
- [backgroundImage(for:barMetrics:)](uibarbuttonitem/backgroundimage%28for_barmetrics_%29.md): Returns the background image for a specified state and bar metrics.
- [setBackgroundImage(\_:for:barMetrics:)](uibarbuttonitem/setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for a specified state and bar metrics.
- [backgroundImage(for:style:barMetrics:)](uibarbuttonitem/backgroundimage%28for_style_barmetrics_%29.md): Returns the background image for the specified state, style, and metrics.
- [setBackgroundImage(\_:for:style:barMetrics:)](uibarbuttonitem/setbackgroundimage%28__for_style_barmetrics_%29.md): Sets the background image for the specified state, style, and metrics.

### Customizing the title placement

- [titlePositionAdjustment(for:)](uibarbuttonitem/titlepositionadjustment%28for_%29.md): Returns the title offset for specified bar metrics.
- [setTitlePositionAdjustment(\_:for:)](uibarbuttonitem/settitlepositionadjustment%28__for_%29.md): Sets the title offset for specified bar metrics.

### Configuring symbol effects

- [isSymbolAnimationEnabled](uibarbuttonitem/issymbolanimationenabled.md): A Boolean value that indicates whether symbol effects animate.
- [addSymbolEffect(\_:options:animated:)](uibarbuttonitem/addsymboleffect%28__options_animated_%29-3iew0.md): Adds an indefinite symbol effect to the bar button item with the specified options and animation.
- [addSymbolEffect(\_:options:animated:)](uibarbuttonitem/addsymboleffect%28__options_animated_%29-6jx3e.md): Adds a discrete, indefinite symbol effect to the bar button item with the specified options and animation.
- [addSymbolEffect(\_:options:animated:)](uibarbuttonitem/addsymboleffect%28__options_animated_%29-9dytr.md): Adds a discrete symbol effect to the bar button item with the specified options and animation.
- [setSymbolImage(\_:contentTransition:options:)](uibarbuttonitem/setsymbolimage%28__contenttransition_options_%29.md): Sets a symbol image using the specified content-transition effect and options.
- [removeSymbolEffect(ofType:options:animated:)](uibarbuttonitem/removesymboleffect%28oftype_options_animated_%29-214pl.md): Removes the symbol effect that matches the specified indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:)](uibarbuttonitem/removesymboleffect%28oftype_options_animated_%29-7m567.md): Removes the symbol effect that matches the specified discrete, indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:)](uibarbuttonitem/removesymboleffect%28oftype_options_animated_%29-8zc4d.md): Removes the symbol effect that matches the specified discrete effect type, using the specified options and animation setting.
- [removeAllSymbolEffects(options:animated:)](uibarbuttonitem/removeallsymboleffects%28options_animated_%29.md): Removes all symbol effects from the bar button item, using the specified options and animation setting.

### Getting the group

- [buttonGroup](uibarbuttonitem/buttongroup.md): The group that the button belongs to.

### Representing the item in a menu

- [menuRepresentation](uibarbuttonitem/menurepresentation.md): A menu element that represents the item when it appears in a menu.

### Adding a badge

- [badge](uibarbuttonitem/badge-4sz3f.md)
- [UIBarButtonItem.Badge](uibarbuttonitem/badge-swift.struct.md)

### Customizing placement in a toolbar

- [hidesSharedBackground](uibarbuttonitem/hidessharedbackground.md): A boolean value indicating whether the background this item may share with other items in the bar should be hidden.
- [sharesBackground](uibarbuttonitem/sharesbackground.md): A boolean value indicating whether this bar button item can share a background with other items in a navigation bar or a toolbar.

### Instance Properties

- [identifier](uibarbuttonitem/identifier.md): An identifier used to match bar button items across transitions in a navigation bar or toolbar.
- [isPaddingRemoved](uibarbuttonitem/ispaddingremoved.md): Whether the standard padding around the item should be removed. Default: NO
- [visibilityPriority](uibarbuttonitem/visibilitypriority.md): Visibility priority for this item when placed in a button bar.

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

### Bars

- [UIBarItem](uibaritem.md): An abstract superclass for items that you can add to a bar that appears at the bottom of the screen.
- [UIBarButtonItemGroup](uibarbuttonitemgroup.md): A group of one or more bar button items for placement on a navigation bar or shortcuts bar.
- [UIBarButtonItemVisibilityPriority](uibarbuttonitemvisibilitypriority.md)
- [UINavigationBar](uinavigationbar.md): Navigational controls that display in a bar along the top of the screen, usually in conjunction with a navigation controller.
- [UISearchBar](uisearchbar.md): A specialized view for receiving search-related information from the user.
- [UIToolbar](uitoolbar.md): A control that displays one or more buttons along an edge of your interface.
- [UITabBar](uitabbar.md): A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
- [UITabBarItem](uitabbaritem.md): An object that describes an item in a tab bar.
- [UIBarPositioning](uibarpositioning.md): A set of methods for defining the positioning of bars in iOS apps.
- [UIBarPositioningDelegate](uibarpositioningdelegate.md): A set of methods that support the positioning of a bar that conforms to the [UIBarPositioning](uibarpositioning.md) protocol.
- [UIBarMinimization](uibarminimization-swift.struct.md)

# UIBarButtonItem (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A specialized button for placement on a toolbar, navigation bar, or shortcuts bar.

## Declaration

```objectivec
@interface UIBarButtonItem : UIBarItem
```

## Mentioned In

- [Getting the user’s attention with alerts and action sheets](getting-the-user-s-attention-with-alerts-and-action-sheets.md)

<a id="overview"></a>

## Overview

You typically use Interface Builder to create and configure bar button items. However, you can customize the appearance of buttons by sending the setter messages to [UIBarButtonItemAppearance](uibarbuttonitemappearance.md) to customize all buttons, or to a specific [UIBarButtonItem](uibarbuttonitem.md) instance. You can use customized buttons in standard places in a [UINavigationItem](uinavigationitem.md) object or a [UIToolbar](uitoolbar.md) instance.

In general, specify a value for the normal state so that other states without a custom value set can use it. Similarly, when a property depends on the bar metrics (for instance, on the iPhone in landscape orientation, bars have a different height from the standard), specify a value of [UIBarMetricsDefault](uibarmetrics/default.md).

## Topics

### Creating items

- [initWithPrimaryAction:menu:](uibarbuttonitem/initwithprimaryaction_menu_.md): Creates a plain-style item using the specified primary action and context menu.
- [initWithPrimaryAction:](uibarbuttonitem/initwithprimaryaction_.md): Creates a plain-style item using the specified primary action.
- [initWithTitle:image:target:action:menu:](uibarbuttonitem/initwithtitle_image_target_action_menu_.md): Creates a plain-style item the specified title, image, target, action, and context menu.
- [initWithTitle:menu:](uibarbuttonitem/initwithtitle_menu_.md): Creates a plain-style item using the specified title and menu.
- [initWithImage:menu:](uibarbuttonitem/initwithimage_menu_.md): Creates a plain-style item using the specified image and context menu.
- [init](uibarbuttonitem/init%28%29.md): Initializes the item to its default state.
- [initWithCoder:](uibarbuttonitem/init%28coder_%29.md): Creates an item from data in an unarchiver.

### Creating items of a specific style

- [initWithTitle:style:target:action:](uibarbuttonitem/init%28title_style_target_action_%29.md): Creates an item using the specified title, style, target, and action.
- [initWithImage:style:target:action:](uibarbuttonitem/init%28image_style_target_action_%29.md): Creates an item using the specified image, style, target, and action.
- [initWithImage:landscapeImagePhone:style:target:action:](uibarbuttonitem/init%28image_landscapeimagephone_style_target_action_%29.md): Creates an item using the specified images, style, target, and action.

### Creating system items

- [initWithBarButtonSystemItem:primaryAction:menu:](uibarbuttonitem/initwithbarbuttonsystemitem_primaryaction_menu_.md): Creates an item using the specified system item, primary action, and context menu.
- [initWithBarButtonSystemItem:primaryAction:](uibarbuttonitem/initwithbarbuttonsystemitem_primaryaction_.md): Creates an item using the specified system item and primary action.
- [initWithBarButtonSystemItem:menu:](uibarbuttonitem/initwithbarbuttonsystemitem_menu_.md): Creates an item using the specified system item and context menu.
- [initWithBarButtonSystemItem:target:action:](uibarbuttonitem/init%28barbuttonsystemitem_target_action_%29.md): Creates an item using the specified system item, target, and action.
- [UIBarButtonSystemItem](uibarbuttonitem/systemitem.md): Constants that define system-supplied images for bar button items.

### Creating custom items

- [initWithCustomView:](uibarbuttonitem/init%28customview_%29.md): Creates an item using the specified custom view.

### Creating space items

- [fixedSpaceItemOfWidth:](uibarbuttonitem/fixedspace%28__%29.md): Creates a new fixed-width space item.
- [fixedSpaceItem](uibarbuttonitem/fixedspace%28%29.md): Creates a new fixed space item of zero width.
- [flexibleSpaceItem](uibarbuttonitem/flexiblespace%28%29.md): Creates a new flexible-width space item.

### Creating groups

- [creatingFixedGroup](uibarbuttonitem/creatingfixedgroup%28%29.md): Places the item in a fixed group that a person can’t move or remove from the navigation bar during layout customization.
- [creatingMovableGroupWithCustomizationIdentifier:](uibarbuttonitem/creatingmovablegroup%28customizationidentifier_%29.md): Places the item in a movable group that a person can move but can’t remove from the navigation bar during layout customization.
- [creatingOptionalGroupWithCustomizationIdentifier:inDefaultCustomization:](uibarbuttonitem/creatingoptionalgroupwithcustomizationidentifier_indefaultcustomization_.md): Places the item in an optional group that a person can move, add to, or remove from the navigation bar during layout customization.

### Managing the custom view

- [customView](uibarbuttonitem/customview.md): A custom view representing the item.

### Managing the action

- [primaryAction](uibarbuttonitem/primaryaction.md): The action associated with the item.
- [changesSelectionAsPrimaryAction](uibarbuttonitem/changesselectionasprimaryaction.md): A Boolean value that indicates whether the button represents an action or selection.
- [action](uibarbuttonitem/action.md): The selector defining the action message to send to the target object when the user taps this bar button item.
- [target](uibarbuttonitem/target.md): The object that receives an action when the user selects the item.

### Managing the context menu

- [menu](uibarbuttonitem/menu.md): The context menu for this button.
- [preferredMenuElementOrder](uibarbuttonitem/preferredmenuelementorder.md): The preferred menu-element ordering strategy for the menu.

### Customizing item appearance

- [style](uibarbuttonitem/style-swift.property.md): The style of the item.
- [UIBarButtonItemStyle](uibarbuttonitem/style-swift.enum.md): Constants that specify the style of an item.
- [tintColor](uibarbuttonitem/tintcolor.md): The tint color to apply to the button item.
- [hidden](uibarbuttonitem/ishidden.md): A Boolean that determines the visibility of the item.
- [selected](uibarbuttonitem/isselected.md): A Boolean value that indicates whether the button is in a selected state.
- [width](uibarbuttonitem/width.md): The width of the item.
- [possibleTitles](uibarbuttonitem/possibletitles.md): The set of possible titles to display on the bar button.

### Customizing the Back button

- [backButtonBackgroundImageForState:barMetrics:](uibarbuttonitem/backbuttonbackgroundimage%28for_barmetrics_%29.md): Returns the back button background image for a specified control state and bar metrics.
- [setBackButtonBackgroundImage:forState:barMetrics:](uibarbuttonitem/setbackbuttonbackgroundimage%28__for_barmetrics_%29.md): Sets the back button background image for a specified control state and bar metrics.
- [backButtonTitlePositionAdjustmentForBarMetrics:](uibarbuttonitem/backbuttontitlepositionadjustment%28for_%29.md): Returns the back button title offset for specified bar metrics.
- [setBackButtonTitlePositionAdjustment:forBarMetrics:](uibarbuttonitem/setbackbuttontitlepositionadjustment%28__for_%29.md): Sets the back button title offset for specified bar metrics.
- [backButtonBackgroundVerticalPositionAdjustmentForBarMetrics:](uibarbuttonitem/backbuttonbackgroundverticalpositionadjustment%28for_%29.md): Returns the back button vertical position offset for specified bar metrics.
- [setBackButtonBackgroundVerticalPositionAdjustment:forBarMetrics:](uibarbuttonitem/setbackbuttonbackgroundverticalpositionadjustment%28__for_%29.md): Sets the back button vertical position offset for specified bar metrics.

### Customizing the background

- [backgroundVerticalPositionAdjustmentForBarMetrics:](uibarbuttonitem/backgroundverticalpositionadjustment%28for_%29.md): Returns the background vertical position offset for specified bar metrics.
- [setBackgroundVerticalPositionAdjustment:forBarMetrics:](uibarbuttonitem/setbackgroundverticalpositionadjustment%28__for_%29.md): Sets the background vertical position offset for specified bar metrics.
- [backgroundImageForState:barMetrics:](uibarbuttonitem/backgroundimage%28for_barmetrics_%29.md): Returns the background image for a specified state and bar metrics.
- [setBackgroundImage:forState:barMetrics:](uibarbuttonitem/setbackgroundimage%28__for_barmetrics_%29.md): Sets the background image for a specified state and bar metrics.
- [backgroundImageForState:style:barMetrics:](uibarbuttonitem/backgroundimage%28for_style_barmetrics_%29.md): Returns the background image for the specified state, style, and metrics.
- [setBackgroundImage:forState:style:barMetrics:](uibarbuttonitem/setbackgroundimage%28__for_style_barmetrics_%29.md): Sets the background image for the specified state, style, and metrics.

### Customizing the title placement

- [titlePositionAdjustmentForBarMetrics:](uibarbuttonitem/titlepositionadjustment%28for_%29.md): Returns the title offset for specified bar metrics.
- [setTitlePositionAdjustment:forBarMetrics:](uibarbuttonitem/settitlepositionadjustment%28__for_%29.md): Sets the title offset for specified bar metrics.

### Configuring symbol effects

- [symbolAnimationEnabled](uibarbuttonitem/issymbolanimationenabled.md): A Boolean value that indicates whether symbol effects animate.
- [addSymbolEffect:](uibarbuttonitem/addsymboleffect_.md): Adds a symbol effect to the bar button item with default options and animation.
- [addSymbolEffect:options:](uibarbuttonitem/addsymboleffect_options_.md): Adds a symbol effect to the bar button item with the specified options and default animation.
- [addSymbolEffect:options:animated:](uibarbuttonitem/addsymboleffect_options_animated_.md): Adds a symbol effect to the bar button item with the specified options and animation.
- [setSymbolImage:withContentTransition:](uibarbuttonitem/setsymbolimage_withcontenttransition_.md): Sets a symbol image using the specified content-transition effect.
- [setSymbolImage:withContentTransition:options:](uibarbuttonitem/setsymbolimage_withcontenttransition_options_.md): Sets a symbol image using the specified content-transition effect and options.
- [removeSymbolEffectOfType:](uibarbuttonitem/removesymboleffectoftype_.md): Removes the symbol effect that matches the specified effect type.
- [removeSymbolEffectOfType:options:](uibarbuttonitem/removesymboleffectoftype_options_.md): Removes the symbol effect that matches the specified effect type, using the specified options.
- [removeSymbolEffectOfType:options:animated:](uibarbuttonitem/removesymboleffectoftype_options_animated_.md): Removes the symbol effect that matches the specified effect type, using the specified options and animation setting.
- [removeAllSymbolEffects](uibarbuttonitem/removeallsymboleffects.md): Removes all symbol effects from the bar button item.
- [removeAllSymbolEffectsWithOptions:](uibarbuttonitem/removeallsymboleffectswithoptions_.md): Removes all symbol effects from the bar button item, using the specified options.
- [removeAllSymbolEffectsWithOptions:animated:](uibarbuttonitem/removeallsymboleffectswithoptions_animated_.md): Removes all symbol effects from the bar button item, using the specified options and animation setting.

### Getting the group

- [buttonGroup](uibarbuttonitem/buttongroup.md): The group that the button belongs to.

### Representing the item in a menu

- [menuRepresentation](uibarbuttonitem/menurepresentation.md): A menu element that represents the item when it appears in a menu.

### Adding a badge

- [badge](uibarbuttonitem/badge-1zzen.md): Sets a badge on the bar button item. Supported in navigation bars and toolbars.
- [UIBarButtonItemBadge](uibarbuttonitembadge.md): A badge to be rendered on a bar button item.

### Customizing placement in a toolbar

- [hidesSharedBackground](uibarbuttonitem/hidessharedbackground.md): A boolean value indicating whether the background this item may share with other items in the bar should be hidden.
- [sharesBackground](uibarbuttonitem/sharesbackground.md): A boolean value indicating whether this bar button item can share a background with other items in a navigation bar or a toolbar.

### Instance Properties

- [identifier](uibarbuttonitem/identifier.md): An identifier used to match bar button items across transitions in a navigation bar or toolbar.
- [paddingRemoved](uibarbuttonitem/ispaddingremoved.md): Whether the standard padding around the item should be removed. Default: NO
- [visibilityPriority](uibarbuttonitem/visibilitypriority.md): Visibility priority for this item when placed in a button bar.

## Relationships

### Inherits From

- [UIBarItem](uibaritem.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)
- [UISpringLoadedInteractionSupporting](uispringloadedinteractionsupporting.md)

## See Also

### Bars

- [UIBarItem](uibaritem.md): An abstract superclass for items that you can add to a bar that appears at the bottom of the screen.
- [UIBarButtonItemGroup](uibarbuttonitemgroup.md): A group of one or more bar button items for placement on a navigation bar or shortcuts bar.
- [UIBarButtonItemVisibilityPriority](uibarbuttonitemvisibilitypriority.md)
- [UINavigationBar](uinavigationbar.md): Navigational controls that display in a bar along the top of the screen, usually in conjunction with a navigation controller.
- [UISearchBar](uisearchbar.md): A specialized view for receiving search-related information from the user.
- [UIToolbar](uitoolbar.md): A control that displays one or more buttons along an edge of your interface.
- [UITabBar](uitabbar.md): A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
- [UITabBarItem](uitabbaritem.md): An object that describes an item in a tab bar.
- [UIBarPositioning](uibarpositioning.md): A set of methods for defining the positioning of bars in iOS apps.
- [UIBarPositioningDelegate](uibarpositioningdelegate.md): A set of methods that support the positioning of a bar that conforms to the [UIBarPositioning](uibarpositioning.md) protocol.
