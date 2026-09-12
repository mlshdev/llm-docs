> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicommand](https://developer.apple.com/documentation/uikit/uicommand)

# UICommand (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A menu element that performs its action in a selector.

## Declaration

```swift
@MainActor class UICommand
```

<a id="overview"></a>

## Overview

Create a [UICommand](uicommand.md) object when you want a menu element that performs its action in a selector available in the responder chain.

```swift
// Create a selector-based action to use as a menu element.
let refreshCommand = UICommand(title: "Refresh", action: #selector(refreshData(_:)))

// Use the .displayInline option to avoid displaying the menu as a submenu,
// and to separate it from the other menu elements using a line separator.
let refreshMenuItem = UIMenu(title: "", options: .displayInline, children: [refreshCommand])

// Insert the menu into the File menu before the Close menu.
builder.insertSibling(refreshMenuItem, beforeMenu: .close)
```

## Topics

### Creating a command

- [init(title:subtitle:image:action:propertyList:alternates:discoverabilityTitle:attributes:state:)](uicommand/init%28title_subtitle_image_action_propertylist_alternates_discoverabilitytitle_attributes_state_%29.md): Creates a command with the specified title, subtitle, image, action, property list, alternative commands, discoverability title, attributes, and state.
- [init(title:image:action:propertyList:alternates:discoverabilityTitle:attributes:state:)](uicommand/init%28title_image_action_propertylist_alternates_discoverabilitytitle_attributes_state_%29.md): Creates a command with the specified title, image, action, property list, alternative commands, discoverability title, attributes, and state.
- [init(coder:)](uicommand/init%28coder_%29.md): Creates a command from data in an unarchiver.
- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.

### Getting information about the command

- [title](uicommand/title.md): The command’s title.
- [image](uicommand/image.md): The command’s image.
- [action](uicommand/action.md): The selector identifying the action method called after the user selects the command.
- [discoverabilityTitle](uicommand/discoverabilitytitle.md): An elaborated title that explains the purpose of the command.
- [attributes](uicommand/attributes.md): The attributes indicating the style of the command.
- [state](uicommand/state.md): The state of the command.

### Getting command alternatives

- [alternates](uicommand/alternates.md): An array of alternative actions to take for the command.
- [UICommandAlternate](uicommandalternate.md): An object representing an alternative action for a command.

### Associating data

- [propertyList](uicommand/propertylist.md): An object that contains data to associate with the command.
- [UICommandTagShare](uicommandtagshare.md): A value that identifies a command as a Share menu.

### Initializers

- [init(title:subtitle:image:selectedImage:action:propertyList:alternates:discoverabilityTitle:attributes:state:)](uicommand/init%28title_subtitle_image_selectedimage_action_propertylist_alternates_discoverabilitytitle_attributes_state_%29.md)
- [init(title:subtitle:image:selectedImage:preferredImageVisibility:action:propertyList:alternates:discoverabilityTitle:attributes:state:)](uicommand/init%28title_subtitle_image_selectedimage_preferredimagevisibility_action_propertylist_alternates_discoverabilitytitle_attributes_state_%29.md)

## Relationships

### Inherits From

- [UIMenuElement](uimenuelement.md)

### Inherited By

- [UIKeyCommand](uikeycommand.md)

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
- [UIMenuLeaf](uimenuleaf.md)

## See Also

### Menu elements and keyboard shortcuts

- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Adopting menus and UIActions in your user interface](adopting-menus-and-uiactions-in-your-user-interface.md): Add menus to your user interface, with built-in button support and bar-button items, and create custom menu experiences.
- [UIMenuElement](uimenuelement.md): An object representing a menu, action, or command.
- [UIAction](uiaction.md): A menu element that performs its action in a closure.
- [UIKeyCommand](uikeycommand.md): An object that specifies a key press perform on a hardware keyboard and the resulting action.
- [UIDeferredMenuElement](uideferredmenuelement.md): A placeholder menu element that the system replaces with the result of the block’s completion handler.
- [UIDeferredMenuElement.Provider](uideferredmenuelement/provider.md)
- [UIMenuElement.Attributes](uimenuelement/attributes.md): Attributes that determine the style of the menu element.
- [UIMenuElement.State](uimenuelement/state.md): Constants that indicate the state of an action- or command-based menu element.
- [UIMenuLeaf](uimenuleaf.md): An interface for an object that represents a menu element without child elements.

# UICommand (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A menu element that performs its action in a selector.

## Declaration

```objectivec
@interface UICommand : UIMenuElement
```

<a id="overview"></a>

## Overview

Create a [UICommand](uicommand.md) object when you want a menu element that performs its action in a selector available in the responder chain.

```swift
// Create a selector-based action to use as a menu element.
let refreshCommand = UICommand(title: "Refresh", action: #selector(refreshData(_:)))

// Use the .displayInline option to avoid displaying the menu as a submenu,
// and to separate it from the other menu elements using a line separator.
let refreshMenuItem = UIMenu(title: "", options: .displayInline, children: [refreshCommand])

// Insert the menu into the File menu before the Close menu.
builder.insertSibling(refreshMenuItem, beforeMenu: .close)
```

## Topics

### Creating a command

- [commandWithTitle:image:action:propertyList:](uicommand/commandwithtitle_image_action_propertylist_.md): Creates a command with the specified title, image, action, and property list.
- [commandWithTitle:image:action:propertyList:alternates:](uicommand/commandwithtitle_image_action_propertylist_alternates_.md): Creates a command with the specified title, image, action, property list, and alternative commands.
- [initWithCoder:](uicommand/init%28coder_%29.md): Creates a command from data in an unarchiver.
- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.

### Getting information about the command

- [title](uicommand/title.md): The command’s title.
- [image](uicommand/image.md): The command’s image.
- [action](uicommand/action.md): The selector identifying the action method called after the user selects the command.
- [discoverabilityTitle](uicommand/discoverabilitytitle.md): An elaborated title that explains the purpose of the command.
- [attributes](uicommand/attributes.md): The attributes indicating the style of the command.
- [state](uicommand/state.md): The state of the command.

### Getting command alternatives

- [alternates](uicommand/alternates.md): An array of alternative actions to take for the command.
- [UICommandAlternate](uicommandalternate.md): An object representing an alternative action for a command.

### Associating data

- [propertyList](uicommand/propertylist.md): An object that contains data to associate with the command.
- [UICommandTagShare](uicommandtagshare.md): A value that identifies a command as a Share menu.

## Relationships

### Inherits From

- [UIMenuElement](uimenuelement.md)

### Inherited By

- [UIKeyCommand](uikeycommand.md)

### Conforms To

- [UIMenuLeaf](uimenuleaf.md)

## See Also

### Menu elements and keyboard shortcuts

- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Adopting menus and UIActions in your user interface](adopting-menus-and-uiactions-in-your-user-interface.md): Add menus to your user interface, with built-in button support and bar-button items, and create custom menu experiences.
- [UIMenuElement](uimenuelement.md): An object representing a menu, action, or command.
- [UIAction](uiaction.md): A menu element that performs its action in a closure.
- [UIKeyCommand](uikeycommand.md): An object that specifies a key press perform on a hardware keyboard and the resulting action.
- [UIDeferredMenuElement](uideferredmenuelement.md): A placeholder menu element that the system replaces with the result of the block’s completion handler.
- [UIDeferredMenuElementProvider](uideferredmenuelement/provider.md)
- [UIMenuElementAttributes](uimenuelement/attributes.md): Attributes that determine the style of the menu element.
- [UIMenuElementState](uimenuelement/state.md): Constants that indicate the state of an action- or command-based menu element.
- [UIMenuLeaf](uimenuleaf.md): An interface for an object that represents a menu element without child elements.
