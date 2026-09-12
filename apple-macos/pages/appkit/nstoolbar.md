> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar](https://developer.apple.com/documentation/appkit/nstoolbar)

# NSToolbar (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

An object that manages the space above your app’s custom content and either below or integrated with the window’s title bar.

## Declaration

```swift
@MainActor class NSToolbar
```

<a id="overview"></a>

## Overview

An [NSToolbar](nstoolbar.md) object manages the controls and views that apply to the main window’s content area. Toolbars provide convenient access to the commands and features people use most often. Toolbars are also user-configurable and support the display of an interactive customization palette.

Create and configure your toolbar programmatically or using Interface Builder. Add items to the toolbar that correspond to the commands you want to feature in your window. Each item has a corresponding [NSToolbarItem](nstoolbaritem.md) object, which you use to make changes. Each toolbar manages a unique set of items, but you can synchronize the items and state of multiple toolbars by assigning the same value to their [identifier](nstoolbar/identifier-swift.property.md) properties.

For more information about how to use toolbars, see [Integrating a Toolbar and Touch Bar into Your App](integrating-a-toolbar-and-touch-bar-into-your-app.md).

## Topics

### Creating an toolbar object

- [init(identifier:)](nstoolbar/init%28identifier_%29.md): Creates a newly allocated toolbar with the specified identifier.
- [init()](nstoolbar/init%28%29.md): Creates a new toolbar with an empty identifier string.

### Configuring the toolbar contents

- [delegate](nstoolbar/delegate.md): The object you use to customize the toolbar contents and configuration.
- [NSToolbarDelegate](nstoolbardelegate.md): A set of optional methods you use to configure the toolbar and respond to changes.

### Getting the toolbar’s identity

- [identifier](nstoolbar/identifier-swift.property.md): The value you use to identify the toolbar in your app.
- [NSToolbar.Identifier](nstoolbar/identifier-swift.typealias.md): A string value that you use to differentiate your app’s toolbars.

### Configuring the toolbar’s behavior

- [isVisible](nstoolbar/isvisible.md): A Boolean value that indicates whether the toolbar is visible.
- [displayMode](nstoolbar/displaymode-swift.property.md): A value that indicates whether the toolbar displays items using a name, icon, or combination of elements.
- [NSToolbar.DisplayMode](nstoolbar/displaymode-swift.enum.md): Constants that indicate whether the toolbar displays items using a name, icon, or combination of elements.
- [showsBaselineSeparator](nstoolbar/showsbaselineseparator.md): Deprecated. A Boolean value that indicates whether the toolbar shows the separator between the toolbar and the main window contents.
- [allowsUserCustomization](nstoolbar/allowsusercustomization.md): A Boolean value that indicates whether users can modify the contents of the toolbar.
- [allowsExtensionItems](nstoolbar/allowsextensionitems.md): A Boolean value that indicates whether the toolbar can add items for Action extensions.

### Managing items on the toolbar

- [items](nstoolbar/items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](nstoolbar/visibleitems.md): An array containing the toolbar’s currently visible items.
- [centeredItemIdentifiers](nstoolbar/centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [selectedItemIdentifier](nstoolbar/selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [willAddItemNotification](nstoolbar/willadditemnotification.md): Posts before the toolbar adds a new item.
- [didRemoveItemNotification](nstoolbar/didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [insertItem(withItemIdentifier:at:)](nstoolbar/insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.
- [removeItem(at:)](nstoolbar/removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.

### Autosaving the configuration

- [autosavesConfiguration](nstoolbar/autosavesconfiguration.md): A Boolean value that indicates whether the toolbar autosaves its configuration.
- [configuration](nstoolbar/configuration.md): Deprecated. A dictionary containing the current configuration details for the toolbar.
- [setConfiguration(\_:)](nstoolbar/setconfiguration%28__%29.md): Deprecated. Specifies the new configuration details for the toolbar.

### Displaying the customization palette

- [runCustomizationPalette(\_:)](nstoolbar/runcustomizationpalette%28__%29.md): Displays the toolbar’s customization palette and handles any user-initiated customizations.
- [customizationPaletteIsRunning](nstoolbar/customizationpaletteisrunning.md): A Boolean value that indicates whether the toolbar’s customization palette is in use.

### Validating visible items

- [validateVisibleItems()](nstoolbar/validatevisibleitems%28%29.md): Validates the toolbar’s visible items during a window update.

### Deprecated

- [centeredItemIdentifier](nstoolbar/centereditemidentifier.md): Deprecated. The item to display in the center of the toolbar.
- [fullScreenAccessoryView](nstoolbar/fullscreenaccessoryview.md): Deprecated. The toolbar’s full screen accessory view.
- [fullScreenAccessoryViewMinHeight](nstoolbar/fullscreenaccessoryviewminheight.md): Deprecated. The minimum height of the toolbar’s full screen accessory view.
- [fullScreenAccessoryViewMaxHeight](nstoolbar/fullscreenaccessoryviewmaxheight.md): Deprecated. The maximum height of the toolbar’s full screen accessory view, in points.
- [sizeMode](nstoolbar/sizemode-swift.property.md): Deprecated. The toolbar’s size mode.
- [NSToolbar.SizeMode](nstoolbar/sizemode-swift.enum.md): Deprecated. Constants that specify toolbar display modes.

### Structures

- [NSToolbar.DidRemoveItemMessage](nstoolbar/didremoveitemmessage.md)
- [NSToolbar.WillAddItemMessage](nstoolbar/willadditemmessage.md)

### Instance Properties

- [allowsDisplayModeCustomization](nstoolbar/allowsdisplaymodecustomization.md): Whether or not the user is allowed to change display modes at run time. This functionality is independent of customizing the order of the items themselves. Only disable when the functionality or legibility of your toolbar could not be improved by another display mode. The user’s selection will be persisted using the toolbar’s `identifier` when `autosavesConfiguration` is enabled. The default is YES for apps linked on macOS 15.0 and above.
- [itemIdentifiers](nstoolbar/itemidentifiers.md): An array of itemIdentifiers that represent the current items in the toolbar. Setting this property will set the current items in the toolbar by diffing against items that already exist. Use this with great caution if `allowsUserCustomization` is enabled as it will override any customizations the user has made. This property is key value observable.

### Instance Methods

- [removeItem(identifier:)](nstoolbar/removeitem%28identifier_%29.md): Removes the item with matching `itemIdentifier` in the receiving toolbar. If multiple items share the same identifier (as is the case with space items) all matching items will be removed. To remove only a single space item, use `-removeItemAtIndex:` instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### View

- [Integrating a Toolbar and Touch Bar into Your App](integrating-a-toolbar-and-touch-bar-into-your-app.md): Provide users quick access to your app’s features from a toolbar and corresponding Touch Bar.
- [NSToolbarItemValidation](nstoolbaritemvalidation.md): Validation of a toolbar item.

# NSToolbar (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS

An object that manages the space above your app’s custom content and either below or integrated with the window’s title bar.

## Declaration

```objectivec
@interface NSToolbar : NSObject
```

<a id="overview"></a>

## Overview

An [NSToolbar](nstoolbar.md) object manages the controls and views that apply to the main window’s content area. Toolbars provide convenient access to the commands and features people use most often. Toolbars are also user-configurable and support the display of an interactive customization palette.

Create and configure your toolbar programmatically or using Interface Builder. Add items to the toolbar that correspond to the commands you want to feature in your window. Each item has a corresponding [NSToolbarItem](nstoolbaritem.md) object, which you use to make changes. Each toolbar manages a unique set of items, but you can synchronize the items and state of multiple toolbars by assigning the same value to their [identifier](nstoolbar/identifier-swift.property.md) properties.

For more information about how to use toolbars, see [Integrating a Toolbar and Touch Bar into Your App](integrating-a-toolbar-and-touch-bar-into-your-app.md).

## Topics

### Creating an toolbar object

- [initWithIdentifier:](nstoolbar/init%28identifier_%29.md): Creates a newly allocated toolbar with the specified identifier.
- [init](nstoolbar/init%28%29.md): Creates a new toolbar with an empty identifier string.

### Configuring the toolbar contents

- [delegate](nstoolbar/delegate.md): The object you use to customize the toolbar contents and configuration.
- [NSToolbarDelegate](nstoolbardelegate.md): A set of optional methods you use to configure the toolbar and respond to changes.

### Getting the toolbar’s identity

- [identifier](nstoolbar/identifier-swift.property.md): The value you use to identify the toolbar in your app.
- [NSToolbarIdentifier](nstoolbar/identifier-swift.typealias.md): A string value that you use to differentiate your app’s toolbars.

### Configuring the toolbar’s behavior

- [visible](nstoolbar/isvisible.md): A Boolean value that indicates whether the toolbar is visible.
- [displayMode](nstoolbar/displaymode-swift.property.md): A value that indicates whether the toolbar displays items using a name, icon, or combination of elements.
- [NSToolbarDisplayMode](nstoolbar/displaymode-swift.enum.md): Constants that indicate whether the toolbar displays items using a name, icon, or combination of elements.
- [showsBaselineSeparator](nstoolbar/showsbaselineseparator.md): Deprecated. A Boolean value that indicates whether the toolbar shows the separator between the toolbar and the main window contents.
- [allowsUserCustomization](nstoolbar/allowsusercustomization.md): A Boolean value that indicates whether users can modify the contents of the toolbar.
- [allowsExtensionItems](nstoolbar/allowsextensionitems.md): A Boolean value that indicates whether the toolbar can add items for Action extensions.

### Managing items on the toolbar

- [items](nstoolbar/items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](nstoolbar/visibleitems.md): An array containing the toolbar’s currently visible items.
- [centeredItemIdentifiers](nstoolbar/centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [selectedItemIdentifier](nstoolbar/selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [NSToolbarWillAddItemNotification](nstoolbar/willadditemnotification.md): Posts before the toolbar adds a new item.
- [NSToolbarDidRemoveItemNotification](nstoolbar/didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [insertItemWithItemIdentifier:atIndex:](nstoolbar/insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.
- [removeItemAtIndex:](nstoolbar/removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.

### Autosaving the configuration

- [autosavesConfiguration](nstoolbar/autosavesconfiguration.md): A Boolean value that indicates whether the toolbar autosaves its configuration.
- [configurationDictionary](nstoolbar/configuration.md): Deprecated. A dictionary containing the current configuration details for the toolbar.
- [setConfigurationFromDictionary:](nstoolbar/setconfiguration%28__%29.md): Deprecated. Specifies the new configuration details for the toolbar.

### Displaying the customization palette

- [runCustomizationPalette:](nstoolbar/runcustomizationpalette%28__%29.md): Displays the toolbar’s customization palette and handles any user-initiated customizations.
- [customizationPaletteIsRunning](nstoolbar/customizationpaletteisrunning.md): A Boolean value that indicates whether the toolbar’s customization palette is in use.

### Validating visible items

- [validateVisibleItems](nstoolbar/validatevisibleitems%28%29.md): Validates the toolbar’s visible items during a window update.

### Deprecated

- [centeredItemIdentifier](nstoolbar/centereditemidentifier.md): Deprecated. The item to display in the center of the toolbar.
- [fullScreenAccessoryView](nstoolbar/fullscreenaccessoryview.md): Deprecated. The toolbar’s full screen accessory view.
- [fullScreenAccessoryViewMinHeight](nstoolbar/fullscreenaccessoryviewminheight.md): Deprecated. The minimum height of the toolbar’s full screen accessory view.
- [fullScreenAccessoryViewMaxHeight](nstoolbar/fullscreenaccessoryviewmaxheight.md): Deprecated. The maximum height of the toolbar’s full screen accessory view, in points.
- [sizeMode](nstoolbar/sizemode-swift.property.md): Deprecated. The toolbar’s size mode.
- [NSToolbarSizeMode](nstoolbar/sizemode-swift.enum.md): Deprecated. Constants that specify toolbar display modes.

### Instance Properties

- [allowsDisplayModeCustomization](nstoolbar/allowsdisplaymodecustomization.md): Whether or not the user is allowed to change display modes at run time. This functionality is independent of customizing the order of the items themselves. Only disable when the functionality or legibility of your toolbar could not be improved by another display mode. The user’s selection will be persisted using the toolbar’s `identifier` when `autosavesConfiguration` is enabled. The default is YES for apps linked on macOS 15.0 and above.
- [itemIdentifiers](nstoolbar/itemidentifiers.md): An array of itemIdentifiers that represent the current items in the toolbar. Setting this property will set the current items in the toolbar by diffing against items that already exist. Use this with great caution if `allowsUserCustomization` is enabled as it will override any customizations the user has made. This property is key value observable.

### Instance Methods

- [removeItemWithItemIdentifier:](nstoolbar/removeitem%28identifier_%29.md): Removes the item with matching `itemIdentifier` in the receiving toolbar. If multiple items share the same identifier (as is the case with space items) all matching items will be removed. To remove only a single space item, use `-removeItemAtIndex:` instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### View

- [Integrating a Toolbar and Touch Bar into Your App](integrating-a-toolbar-and-touch-bar-into-your-app.md): Provide users quick access to your app’s features from a toolbar and corresponding Touch Bar.
- [NSToolbarItemValidation](nstoolbaritemvalidation.md): Validation of a toolbar item.
