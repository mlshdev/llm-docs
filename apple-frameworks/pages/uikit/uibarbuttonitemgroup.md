> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitemgroup](https://developer.apple.com/documentation/uikit/uibarbuttonitemgroup)

# UIBarButtonItemGroup (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A group of one or more bar button items for placement on a navigation bar or shortcuts bar.

## Declaration

```swift
@MainActor class UIBarButtonItemGroup
```

<a id="overview"></a>

## Overview

A group contains one or more bar button items and an optional representative item that’s displayed instead of the individual items under space constraints. You can create any number of groups and configure each group with any number of items.

When creating a group with more than one bar button item, it’s recommended that you also provide a representative item to display. The representative item must be a completely separate bar button item; it must not be one of the items already in the group. UIKit displays the representative item when there isn’t enough room to display all of the group’s items in the bar. Taps in the representative item call that item’s action method. When you don’t specify an action method, UIKit automatically displays the items in the group using a standard interface. To present your own interface, provide a custom action method and use it to display the interface you want.

<a id="Support-the-shortcuts-bar"></a>

### Support the shortcuts bar

After configuring a group, assign it to the [UITextInputAssistantItem](uitextinputassistantitem.md) object associated with one of your app’s responder objects. Your custom items are displayed only in conjunction with the system keyboard. When the keyboard is displayed, UIKit retrieves your custom groups from the text input assistant item and adds the corresponding items to the shortcuts bar. You may specify more than one group before and after the typing suggestions. UIKit tries to display as many items as possible on the shortcuts bar, falling back to the groups’ representative items as needed.

## Topics

### Creating a group

- [fixedGroup(representativeItem:items:)](uibarbuttonitemgroup/fixedgroup%28representativeitem_items_%29.md): Creates a fixed group that a person can’t move or remove from the navigation bar during layout customization.
- [movableGroup(customizationIdentifier:representativeItem:items:)](uibarbuttonitemgroup/movablegroup%28customizationidentifier_representativeitem_items_%29.md): Creates a movable group that a person can move but can’t remove from the navigation bar during layout customization.
- [optionalGroup(customizationIdentifier:isInDefaultCustomization:representativeItem:items:)](uibarbuttonitemgroup/optionalgroup%28customizationidentifier_isindefaultcustomization_representativeitem_items_%29.md): Creates an optional group that a person can move, add to, or remove from the navigation bar during layout customization.
- [init(barButtonItems:representativeItem:)](uibarbuttonitemgroup/init%28barbuttonitems_representativeitem_%29.md): Creates a fixed group with the specified items.
- [init(coder:)](uibarbuttonitemgroup/init%28coder_%29.md): Creates a bar button item group from data in an unarchiver.

### Configuring the group

- [barButtonItems](uibarbuttonitemgroup/barbuttonitems.md): The bar button items to display on the bar.
- [representativeItem](uibarbuttonitemgroup/representativeitem.md): The item to display for a group when space is constrained.
- [alwaysAvailable](uibarbuttonitemgroup/alwaysavailable.md): A Boolean value that determines whether the group is always available through the UI.

### Determining the group’s appearance

- [isDisplayingRepresentativeItem](uibarbuttonitemgroup/isdisplayingrepresentativeitem.md): A Boolean value indicating whether the representative item is showing in place of the group’s items.
- [isHidden](uibarbuttonitemgroup/ishidden.md): A Boolean that determines the visibility of the group.

### Representing the group in a menu

- [menuRepresentation](uibarbuttonitemgroup/menurepresentation.md): A menu element that represents the group when it appears in a menu.

### Type Methods

- [fixedSpace()](uibarbuttonitemgroup/fixedspace%28%29.md): Returns a new group that contains a single zero-width fixed space item inside it.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Bars

- [UIBarItem](uibaritem.md): An abstract superclass for items that you can add to a bar that appears at the bottom of the screen.
- [UIBarButtonItem](uibarbuttonitem.md): A specialized button for placement on a toolbar, navigation bar, or shortcuts bar.
- [UIBarButtonItemVisibilityPriority](uibarbuttonitemvisibilitypriority.md)
- [UINavigationBar](uinavigationbar.md): Navigational controls that display in a bar along the top of the screen, usually in conjunction with a navigation controller.
- [UISearchBar](uisearchbar.md): A specialized view for receiving search-related information from the user.
- [UIToolbar](uitoolbar.md): A control that displays one or more buttons along an edge of your interface.
- [UITabBar](uitabbar.md): A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
- [UITabBarItem](uitabbaritem.md): An object that describes an item in a tab bar.
- [UIBarPositioning](uibarpositioning.md): A set of methods for defining the positioning of bars in iOS apps.
- [UIBarPositioningDelegate](uibarpositioningdelegate.md): A set of methods that support the positioning of a bar that conforms to the [UIBarPositioning](uibarpositioning.md) protocol.
- [UIBarMinimization](uibarminimization-swift.struct.md)

# UIBarButtonItemGroup (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A group of one or more bar button items for placement on a navigation bar or shortcuts bar.

## Declaration

```objectivec
@interface UIBarButtonItemGroup : NSObject
```

<a id="overview"></a>

## Overview

A group contains one or more bar button items and an optional representative item that’s displayed instead of the individual items under space constraints. You can create any number of groups and configure each group with any number of items.

When creating a group with more than one bar button item, it’s recommended that you also provide a representative item to display. The representative item must be a completely separate bar button item; it must not be one of the items already in the group. UIKit displays the representative item when there isn’t enough room to display all of the group’s items in the bar. Taps in the representative item call that item’s action method. When you don’t specify an action method, UIKit automatically displays the items in the group using a standard interface. To present your own interface, provide a custom action method and use it to display the interface you want.

<a id="Support-the-shortcuts-bar"></a>

### Support the shortcuts bar

After configuring a group, assign it to the [UITextInputAssistantItem](uitextinputassistantitem.md) object associated with one of your app’s responder objects. Your custom items are displayed only in conjunction with the system keyboard. When the keyboard is displayed, UIKit retrieves your custom groups from the text input assistant item and adds the corresponding items to the shortcuts bar. You may specify more than one group before and after the typing suggestions. UIKit tries to display as many items as possible on the shortcuts bar, falling back to the groups’ representative items as needed.

## Topics

### Creating a group

- [fixedGroupWithRepresentativeItem:items:](uibarbuttonitemgroup/fixedgroupwithrepresentativeitem_items_.md): Creates a fixed group that a person can’t move or remove from the navigation bar during layout customization.
- [movableGroupWithCustomizationIdentifier:representativeItem:items:](uibarbuttonitemgroup/movablegroupwithcustomizationidentifier_representativeitem_items_.md): Creates a movable group that a person can move but can’t remove from the navigation bar during layout customization.
- [optionalGroupWithCustomizationIdentifier:inDefaultCustomization:representativeItem:items:](uibarbuttonitemgroup/optionalgroupwithcustomizationidentifier_indefaultcustomization_representativeitem_items_.md): Creates an optional group that a person can move, add to, or remove from the navigation bar during layout customization.
- [initWithBarButtonItems:representativeItem:](uibarbuttonitemgroup/init%28barbuttonitems_representativeitem_%29.md): Creates a fixed group with the specified items.
- [initWithCoder:](uibarbuttonitemgroup/init%28coder_%29.md): Creates a bar button item group from data in an unarchiver.

### Configuring the group

- [barButtonItems](uibarbuttonitemgroup/barbuttonitems.md): The bar button items to display on the bar.
- [representativeItem](uibarbuttonitemgroup/representativeitem.md): The item to display for a group when space is constrained.
- [alwaysAvailable](uibarbuttonitemgroup/alwaysavailable.md): A Boolean value that determines whether the group is always available through the UI.

### Determining the group’s appearance

- [displayingRepresentativeItem](uibarbuttonitemgroup/isdisplayingrepresentativeitem.md): A Boolean value indicating whether the representative item is showing in place of the group’s items.
- [hidden](uibarbuttonitemgroup/ishidden.md): A Boolean that determines the visibility of the group.

### Representing the group in a menu

- [menuRepresentation](uibarbuttonitemgroup/menurepresentation.md): A menu element that represents the group when it appears in a menu.

### Type Methods

- [groupWithFixedSpace](uibarbuttonitemgroup/fixedspace%28%29.md): Returns a new group that contains a single zero-width fixed space item inside it.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)

## See Also

### Bars

- [UIBarItem](uibaritem.md): An abstract superclass for items that you can add to a bar that appears at the bottom of the screen.
- [UIBarButtonItem](uibarbuttonitem.md): A specialized button for placement on a toolbar, navigation bar, or shortcuts bar.
- [UIBarButtonItemVisibilityPriority](uibarbuttonitemvisibilitypriority.md)
- [UINavigationBar](uinavigationbar.md): Navigational controls that display in a bar along the top of the screen, usually in conjunction with a navigation controller.
- [UISearchBar](uisearchbar.md): A specialized view for receiving search-related information from the user.
- [UIToolbar](uitoolbar.md): A control that displays one or more buttons along an edge of your interface.
- [UITabBar](uitabbar.md): A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
- [UITabBarItem](uitabbaritem.md): An object that describes an item in a tab bar.
- [UIBarPositioning](uibarpositioning.md): A set of methods for defining the positioning of bars in iOS apps.
- [UIBarPositioningDelegate](uibarpositioningdelegate.md): A set of methods that support the positioning of a bar that conforms to the [UIBarPositioning](uibarpositioning.md) protocol.
