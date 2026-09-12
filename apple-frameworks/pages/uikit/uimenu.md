> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenu](https://developer.apple.com/documentation/uikit/uimenu)

# UIMenu (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A container for grouping related menu elements in an app menu or contextual menu.

## Declaration

```swift
@MainActor class UIMenu
```

<a id="overview"></a>

## Overview

Create [UIMenu](uimenu.md) objects and use them to construct the menus and submenus your app displays. You provide menus for your app when it runs on macOS, and key command elements in those menus also appear in the discoverability HUD on iPad when someone presses the Command key. You also use menus to display contextual actions in response to specific interactions with one of your views. Every menu has a title, an optional image, and an optional set of child elements. When someone selects an element from the menu, the system executes the code you provide. The code sample below illustrates adding a menu group that contains two menu elements — New and Open — to the File menu.

```swift
// Ensure that the builder is modifying the menu bar system.
guard builder.system == UIMenuSystem.main else { return }

let newDocument = UIKeyCommand(title: "New",
                               action: #selector(newDocument(_:)),
                               input: "n",
                               modifierFlags: .command)

let openDocument = UIKeyCommand(title: "Open...",
                                action: #selector(openDocument(_:)),
                                input: "o",
                                modifierFlags: .command)

// Use the .displayInline option to avoid displaying the menu as a submenu,
// and to separate it from the other menu elements using a line separator.
let newMenu = UIMenu(title: "", options: .displayInline, children: [newDocument, openDocument])

// Insert the menu item at the top of the File menu.
builder.insertChild(newMenu, atStartOfMenu: .file)
```

For examples of how you use [UIMenu](uimenu.md), see [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md).

## Topics

### Creating a menu object

- [init(title:image:identifier:options:children:)](uimenu/init%28title_image_identifier_options_children_%29.md): Creates a new menu with the specified values.
- [init(title:subtitle:image:identifier:options:children:)](uimenu/init%28title_subtitle_image_identifier_options_children_%29.md): Creates a new menu with the specified title, subtitle, image, identifier, menu options, and child elements.
- [init(title:subtitle:image:identifier:options:preferredElementSize:children:)](uimenu/init%28title_subtitle_image_identifier_options_preferredelementsize_children_%29.md): Creates a new menu with the specified title, subtitle, image, identifier, menu options, element size, and child elements.
- [UIMenu.Identifier](uimenu/identifier-swift.struct.md): Constants you use to identify an app’s standard menus.
- [UIMenu.Options](uimenu/options-swift.struct.md): Options you use to configure a menu’s appearance.
- [init(coder:)](uimenu/init%28coder_%29.md): Creates a menu from data in an unarchiver.

### Accessing child elements

- [children](uimenu/children.md): The contents of the menu.
- [replacingChildren(\_:)](uimenu/replacingchildren%28__%29.md): Creates a new menu with the same configuration as the current menu, but with a new set of child elements.

### Accessing selected elements

- [selectedElements](uimenu/selectedelements.md): The elements in the menu and its sub-menus that are in the on state.

### Getting menu details

- [identifier](uimenu/identifier-swift.property.md): The unique identifier for the current menu.
- [options](uimenu/options-swift.property.md): The configuration options for the current menu.

### Specifying size of menu elements

- [preferredElementSize](uimenu/preferredelementsize.md): The size of the menu’s child elements.
- [UIMenu.ElementSize](uimenu/elementsize.md): Constants that determine the size of an element in a menu.

### Customizing menu display

- [displayPreferences](uimenu/displaypreferences.md): An object that configures how UIKit displays the menu.
- [UIMenuDisplayPreferences](uimenudisplaypreferences.md): An object that contains information for configuring a menu’s display.

### Initializers

- [init(title:subtitle:image:preferredImageVisibility:identifier:options:preferredElementSize:children:)](uimenu/init%28title_subtitle_image_preferredimagevisibility_identifier_options_preferredelementsize_children_%29.md)

## Relationships

### Inherits From

- [UIMenuElement](uimenuelement.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)

## See Also

### App menus

- [UIMenuBuilder](uimenubuilder.md): An interface for adding and removing menus from a menu system.
- [UIMenuSystem](uimenusystem.md): An object representing a main or contextual menu system.
- [UIMainMenuSystem](uimainmenusystem.md): The main menu system.

# UIMenu (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A container for grouping related menu elements in an app menu or contextual menu.

## Declaration

```objectivec
@interface UIMenu : UIMenuElement
```

<a id="overview"></a>

## Overview

Create [UIMenu](uimenu.md) objects and use them to construct the menus and submenus your app displays. You provide menus for your app when it runs on macOS, and key command elements in those menus also appear in the discoverability HUD on iPad when someone presses the Command key. You also use menus to display contextual actions in response to specific interactions with one of your views. Every menu has a title, an optional image, and an optional set of child elements. When someone selects an element from the menu, the system executes the code you provide. The code sample below illustrates adding a menu group that contains two menu elements — New and Open — to the File menu.

```swift
// Ensure that the builder is modifying the menu bar system.
guard builder.system == UIMenuSystem.main else { return }

let newDocument = UIKeyCommand(title: "New",
                               action: #selector(newDocument(_:)),
                               input: "n",
                               modifierFlags: .command)

let openDocument = UIKeyCommand(title: "Open...",
                                action: #selector(openDocument(_:)),
                                input: "o",
                                modifierFlags: .command)

// Use the .displayInline option to avoid displaying the menu as a submenu,
// and to separate it from the other menu elements using a line separator.
let newMenu = UIMenu(title: "", options: .displayInline, children: [newDocument, openDocument])

// Insert the menu item at the top of the File menu.
builder.insertChild(newMenu, atStartOfMenu: .file)
```

For examples of how you use [UIMenu](uimenu.md), see [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md).

## Topics

### Creating a menu object

- [menuWithChildren:](uimenu/menuwithchildren_.md): Creates a new menu with the specified child elements.
- [menuWithTitle:children:](uimenu/menuwithtitle_children_.md): Creates a menu with the specified title and child menu elements.
- [menuWithTitle:image:identifier:options:children:](uimenu/menuwithtitle_image_identifier_options_children_.md): Creates a new menu with the specified values.
- [UIMenuIdentifier](uimenu/identifier-swift.struct.md): Constants you use to identify an app’s standard menus.
- [UIMenuOptions](uimenu/options-swift.struct.md): Options you use to configure a menu’s appearance.
- [initWithCoder:](uimenu/init%28coder_%29.md): Creates a menu from data in an unarchiver.

### Accessing child elements

- [children](uimenu/children.md): The contents of the menu.
- [menuByReplacingChildren:](uimenu/replacingchildren%28__%29.md): Creates a new menu with the same configuration as the current menu, but with a new set of child elements.

### Accessing selected elements

- [selectedElements](uimenu/selectedelements.md): The elements in the menu and its sub-menus that are in the on state.

### Getting menu details

- [identifier](uimenu/identifier-swift.property.md): The unique identifier for the current menu.
- [options](uimenu/options-swift.property.md): The configuration options for the current menu.

### Specifying size of menu elements

- [preferredElementSize](uimenu/preferredelementsize.md): The size of the menu’s child elements.
- [UIMenuElementSize](uimenu/elementsize.md): Constants that determine the size of an element in a menu.

### Customizing menu display

- [displayPreferences](uimenu/displaypreferences.md): An object that configures how UIKit displays the menu.
- [UIMenuDisplayPreferences](uimenudisplaypreferences.md): An object that contains information for configuring a menu’s display.

## Relationships

### Inherits From

- [UIMenuElement](uimenuelement.md)

## See Also

### App menus

- [UIMenuBuilder](uimenubuilder.md): An interface for adding and removing menus from a menu system.
- [UIMenuSystem](uimenusystem.md): An object representing a main or contextual menu system.
- [UIMainMenuSystem](uimainmenusystem.md): The main menu system.
