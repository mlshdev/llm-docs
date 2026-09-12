> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem](https://developer.apple.com/documentation/appkit/nstoolbaritem)

# NSToolbarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

A single item that appears in a window’s toolbar.

## Declaration

```swift
@MainActor class NSToolbarItem
```

<a id="overview"></a>

## Overview

An [NSToolbarItem](nstoolbaritem.md) object displays an image and text string in the toolbar area of a window. You can also create toolbar items that display custom views you provide. Toolbar items provide fast access to common commands or features in the window. For example, the Finder window uses toolbar items to help someone navigate the file system.

You typically create toolbar items at the same time you create your window’s toolbar. The system provides some standard items like spacers you can include in your toolbar. It also provides items that display standard interfaces like the color panel or font panel. For any custom toolbar items you create, provide an action method to call when someone clicks the item.

You can display your toolbar item’s content using a custom view if you prefer, rather than an image and text label. If you specify an [NSSearchField](nssearchfield.md) object for the view, the system automatically adjusts the minimum and maximum size of the search field to the system-standard values.

## Topics

### Creating a toolbar item

- [init(itemIdentifier:)](nstoolbaritem/init%28itemidentifier_%29.md): Creates a toolbar item with the specified identifier.
- [init(itemIdentifier:barButtonItem:)](nstoolbaritem/init%28itemidentifier_barbuttonitem_%29.md): Creates a toolbar item with property values from the specified bar button item.

### Getting the toolbar item’s identity

- [itemIdentifier](nstoolbaritem/itemidentifier.md): The value you use to identify the toolbar item.
- [NSToolbarItem.Identifier](nstoolbaritem/identifier.md): Constants for the standard toolbar items that the system provides.

### Describing the item

- [possibleLabels](nstoolbaritem/possiblelabels.md): The set of labels that the item might display.
- [label](nstoolbaritem/label.md): The label that appears for this item in the toolbar.
- [paletteLabel](nstoolbaritem/palettelabel.md): The label that appears when the toolbar item is in the customization palette.
- [title](nstoolbaritem/title.md): The title of the toolbar item.
- [toolTip](nstoolbaritem/tooltip.md): The tooltip to display when someone hovers over the item in the toolbar.

### Getting the item’s visual appearance

- [image](nstoolbaritem/image.md): The image to display for the toolbar item.
- [backgroundTintColor](nstoolbaritem/backgroundtintcolor.md)
- [view](nstoolbaritem/view.md): The custom view you use to draw the toolbar item.

### Performing the item’s action

- [target](nstoolbaritem/target.md): The object that defines the action method the toolbar item calls when clicked.
- [action](nstoolbaritem/action.md): The action method to call when someone clicks on the toolbar item.

### Configuring the item’s menu

- [menuFormRepresentation](nstoolbaritem/menuformrepresentation.md): The menu item to use when the toolbar item is in the overflow menu.
- [itemMenuFormRepresentation](nstoolbaritem/itemmenuformrepresentation.md): The menu item to use for the toolbar item is in the overflow menu in a Mac app built with Mac Catalyst.

### Getting the item’s configuration

- [isVisible](nstoolbaritem/isvisible.md): A Boolean value that indicates whether the item is currently visible in the toolbar, and not in the overflow menu.
- [isHidden](nstoolbaritem/ishidden.md): Determines whether an item is visible in the toolbar.
- [isBordered](nstoolbaritem/isbordered.md): A Boolean value that indicates whether the toolbar item has a bordered style.
- [isNavigational](nstoolbaritem/isnavigational.md): A Boolean value that indicates whether the item behaves as a navigation item in the toolbar.
- [isEnabled](nstoolbaritem/isenabled.md): A Boolean value that indicates whether the item is enabled.
- [badge](nstoolbaritem/badge-17r3r.md): A badge that can be attached to an NSToolbarItem. This provides a way to display small visual indicators that can be used to highlight important information, such as unread notifications or status indicators.
- [NSItemBadge](nsitembadge-swift.struct.md): `NSItemBadge` represents a badge that can be attached to an `NSToolbarItem`.
- [style](nstoolbaritem/style-swift.property.md): Defines the toolbar item’s appearance. The default style is plain. Prominent style tints the background. If a background tint color is set, it uses it; otherwise, it uses the app’s or system’s accent color. If grouped with other items, it moves to its own to avoid tinting other items’ background.
- [NSToolbarItem.Style](nstoolbaritem/style-swift.enum.md)
- [visibilityPriority](nstoolbaritem/visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [NSToolbarItem.VisibilityPriority](nstoolbaritem/visibilitypriority-swift.struct.md): Constants that indicate which toolbar items to keep in the toolbar when space is limited.
- [tag](nstoolbaritem/tag.md): An integer tag you can use to identify the toolbar item.

### Getting the parent toolbar

- [toolbar](nstoolbaritem/toolbar.md): The toolbar that currently includes the item.

### Validating the item

- [autovalidates](nstoolbaritem/autovalidates.md): A Boolean value that indicates whether the toolbar automatically validates the item.
- [validate()](nstoolbaritem/validate%28%29.md): Validates the toolbar item’s menu and its ability to perfrom its action.

### Deprecated

- [allowsDuplicatesInToolbar](nstoolbaritem/allowsduplicatesintoolbar.md): Deprecated. A Boolean value that indicates whether the toolbar item can appear more than once in a toolbar.
- [minSize](nstoolbaritem/minsize.md): Deprecated. The toolbar item’s minimum size.
- [maxSize](nstoolbaritem/maxsize.md): Deprecated. The toolbar item’s maximum size.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSMenuToolbarItem](nsmenutoolbaritem.md)
- [NSSearchToolbarItem](nssearchtoolbaritem.md)
- [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md)
- [NSToolbarItemGroup](nstoolbaritemgroup.md)
- [NSTrackingSeparatorToolbarItem](nstrackingseparatortoolbaritem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSValidatedUserInterfaceItem](nsvalidateduserinterfaceitem.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIPopoverPresentationControllerSourceItem](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontrollersourceitem)

## See Also

### Items

- [NSToolbarItemGroup](nstoolbaritemgroup.md): A group of subitems in a toolbar item.
- [NSToolbarItemGroup.ControlRepresentation](nstoolbaritemgroup/controlrepresentation-swift.enum.md)
- [NSToolbarItemGroup.SelectionMode](nstoolbaritemgroup/selectionmode-swift.enum.md): A value that indicates how a grouped toolbar item selects its subitems.
- [NSMenuToolbarItem](nsmenutoolbaritem.md): A control that presents a menu in a window’s toolbar.
- [NSSearchToolbarItem](nssearchtoolbaritem.md): A toolbar item that contains a search field optimized for performing text-based searches.
- [NSTrackingSeparatorToolbarItem](nstrackingseparatortoolbaritem.md): A toolbar separator that aligns with the vertical split view in the same window.

# NSToolbarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS

A single item that appears in a window’s toolbar.

## Declaration

```objectivec
@interface NSToolbarItem : NSObject
```

<a id="overview"></a>

## Overview

An [NSToolbarItem](nstoolbaritem.md) object displays an image and text string in the toolbar area of a window. You can also create toolbar items that display custom views you provide. Toolbar items provide fast access to common commands or features in the window. For example, the Finder window uses toolbar items to help someone navigate the file system.

You typically create toolbar items at the same time you create your window’s toolbar. The system provides some standard items like spacers you can include in your toolbar. It also provides items that display standard interfaces like the color panel or font panel. For any custom toolbar items you create, provide an action method to call when someone clicks the item.

You can display your toolbar item’s content using a custom view if you prefer, rather than an image and text label. If you specify an [NSSearchField](nssearchfield.md) object for the view, the system automatically adjusts the minimum and maximum size of the search field to the system-standard values.

## Topics

### Creating a toolbar item

- [initWithItemIdentifier:](nstoolbaritem/init%28itemidentifier_%29.md): Creates a toolbar item with the specified identifier.
- [itemWithItemIdentifier:barButtonItem:](nstoolbaritem/init%28itemidentifier_barbuttonitem_%29.md): Creates a toolbar item with property values from the specified bar button item.

### Getting the toolbar item’s identity

- [itemIdentifier](nstoolbaritem/itemidentifier.md): The value you use to identify the toolbar item.
- [NSToolbarItemIdentifier](nstoolbaritem/identifier.md): Constants for the standard toolbar items that the system provides.

### Describing the item

- [possibleLabels](nstoolbaritem/possiblelabels.md): The set of labels that the item might display.
- [label](nstoolbaritem/label.md): The label that appears for this item in the toolbar.
- [paletteLabel](nstoolbaritem/palettelabel.md): The label that appears when the toolbar item is in the customization palette.
- [title](nstoolbaritem/title.md): The title of the toolbar item.
- [toolTip](nstoolbaritem/tooltip.md): The tooltip to display when someone hovers over the item in the toolbar.

### Getting the item’s visual appearance

- [image](nstoolbaritem/image.md): The image to display for the toolbar item.
- [backgroundTintColor](nstoolbaritem/backgroundtintcolor.md)
- [view](nstoolbaritem/view.md): The custom view you use to draw the toolbar item.

### Performing the item’s action

- [target](nstoolbaritem/target.md): The object that defines the action method the toolbar item calls when clicked.
- [action](nstoolbaritem/action.md): The action method to call when someone clicks on the toolbar item.

### Configuring the item’s menu

- [menuFormRepresentation](nstoolbaritem/menuformrepresentation.md): The menu item to use when the toolbar item is in the overflow menu.
- [itemMenuFormRepresentation](nstoolbaritem/itemmenuformrepresentation.md): The menu item to use for the toolbar item is in the overflow menu in a Mac app built with Mac Catalyst.

### Getting the item’s configuration

- [visible](nstoolbaritem/isvisible.md): A Boolean value that indicates whether the item is currently visible in the toolbar, and not in the overflow menu.
- [hidden](nstoolbaritem/ishidden.md): Determines whether an item is visible in the toolbar.
- [bordered](nstoolbaritem/isbordered.md): A Boolean value that indicates whether the toolbar item has a bordered style.
- [navigational](nstoolbaritem/isnavigational.md): A Boolean value that indicates whether the item behaves as a navigation item in the toolbar.
- [enabled](nstoolbaritem/isenabled.md): A Boolean value that indicates whether the item is enabled.
- [badge](nstoolbaritem/badge-2b38p.md): A badge that can be attached to an NSToolbarItem. This provides a way to display small visual indicators that can be used to highlight important information, such as unread notifications or status indicators.
- [NSItemBadge](nsitembadge-c.class.md): `NSItemBadge` represents a badge that can be attached to an `NSToolbarItem`.
- [style](nstoolbaritem/style-swift.property.md): Defines the toolbar item’s appearance. The default style is plain. Prominent style tints the background. If a background tint color is set, it uses it; otherwise, it uses the app’s or system’s accent color. If grouped with other items, it moves to its own to avoid tinting other items’ background.
- [NSToolbarItemStyle](nstoolbaritem/style-swift.enum.md)
- [visibilityPriority](nstoolbaritem/visibilitypriority-swift.property.md): The display priority associated with the toolbar item.
- [NSToolbarItemVisibilityPriority](nstoolbaritem/visibilitypriority-swift.struct.md): Constants that indicate which toolbar items to keep in the toolbar when space is limited.
- [tag](nstoolbaritem/tag.md): An integer tag you can use to identify the toolbar item.

### Getting the parent toolbar

- [toolbar](nstoolbaritem/toolbar.md): The toolbar that currently includes the item.

### Validating the item

- [autovalidates](nstoolbaritem/autovalidates.md): A Boolean value that indicates whether the toolbar automatically validates the item.
- [validate](nstoolbaritem/validate%28%29.md): Validates the toolbar item’s menu and its ability to perfrom its action.

### Deprecated

- [allowsDuplicatesInToolbar](nstoolbaritem/allowsduplicatesintoolbar.md): Deprecated. A Boolean value that indicates whether the toolbar item can appear more than once in a toolbar.
- [minSize](nstoolbaritem/minsize.md): Deprecated. The toolbar item’s minimum size.
- [maxSize](nstoolbaritem/maxsize.md): Deprecated. The toolbar item’s maximum size.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [NSMenuToolbarItem](nsmenutoolbaritem.md)
- [NSSearchToolbarItem](nssearchtoolbaritem.md)
- [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md)
- [NSToolbarItemGroup](nstoolbaritemgroup.md)
- [NSTrackingSeparatorToolbarItem](nstrackingseparatortoolbaritem.md)

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSValidatedUserInterfaceItem](nsvalidateduserinterfaceitem.md)
- [UIPopoverPresentationControllerSourceItem](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontrollersourceitem)

## See Also

### Items

- [NSToolbarItemGroup](nstoolbaritemgroup.md): A group of subitems in a toolbar item.
- [NSToolbarItemGroupControlRepresentation](nstoolbaritemgroup/controlrepresentation-swift.enum.md)
- [NSToolbarItemGroupSelectionMode](nstoolbaritemgroup/selectionmode-swift.enum.md): A value that indicates how a grouped toolbar item selects its subitems.
- [NSMenuToolbarItem](nsmenutoolbaritem.md): A control that presents a menu in a window’s toolbar.
- [NSSearchToolbarItem](nssearchtoolbaritem.md): A toolbar item that contains a search field optimized for performing text-based searches.
- [NSTrackingSeparatorToolbarItem](nstrackingseparatortoolbaritem.md): A toolbar separator that aligns with the vertical split view in the same window.
