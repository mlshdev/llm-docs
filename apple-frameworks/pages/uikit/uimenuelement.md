> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenuelement](https://developer.apple.com/documentation/uikit/uimenuelement)

# UIMenuElement (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object representing a menu, action, or command.

## Declaration

```swift
@MainActor class UIMenuElement
```

<a id="overview"></a>

## Overview

[UIMenuElement](uimenuelement.md) defines the behavior shared by all menus, actions, and commands. You don’t create [UIMenuElement](uimenuelement.md) objects directly. Instead, you create an appropriate object that inherits from this class, such as [UIMenu](uimenu.md), [UIAction](uiaction.md), or [UICommand](uicommand.md).

## Topics

### Getting the element attributes

- [title](uimenuelement/title.md): The title of the menu element.
- [subtitle](uimenuelement/subtitle.md): The subtitle to display alongside the menu element’s title.
- [image](uimenuelement/image.md): The image to display alongside the menu element’s title.

### Creating a menu element

- [init(coder:)](uimenuelement/init%28coder_%29.md): Creates a menu element from data in an unarchiver.

### Constants

- [UIMenuElement.Attributes](uimenuelement/attributes.md): Attributes that determine the style of the menu element.
- [UIMenuElement.State](uimenuelement/state.md): Constants that indicate the state of an action- or command-based menu element.
- [UIMenuElement.RepeatBehavior](uimenuelement/repeatbehavior.md): Possible repeat behaviors for a menu element.

### Instance Properties

- [highlightStateUpdateHandler](uimenuelement/highlightstateupdatehandler.md): A closure the system calls when the element’s highlight state changes in a menu.
- [preferredImageVisibility](uimenuelement/preferredimagevisibility.md): The preferred visibility of the element’s image.

### Enumerations

- [UIMenuElement.ImageVisibility](uimenuelement/imagevisibility.md): Visibility options for a menu element’s image.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIAction](uiaction.md)
- [UICommand](uicommand.md)
- [UIDeferredMenuElement](uideferredmenuelement.md)
- [UIMenu](uimenu.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)

## See Also

### Menu elements and keyboard shortcuts

- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Adopting menus and UIActions in your user interface](adopting-menus-and-uiactions-in-your-user-interface.md): Add menus to your user interface, with built-in button support and bar-button items, and create custom menu experiences.
- [UIAction](uiaction.md): A menu element that performs its action in a closure.
- [UICommand](uicommand.md): A menu element that performs its action in a selector.
- [UIKeyCommand](uikeycommand.md): An object that specifies a key press perform on a hardware keyboard and the resulting action.
- [UIDeferredMenuElement](uideferredmenuelement.md): A placeholder menu element that the system replaces with the result of the block’s completion handler.
- [UIDeferredMenuElement.Provider](uideferredmenuelement/provider.md)
- [UIMenuElement.Attributes](uimenuelement/attributes.md): Attributes that determine the style of the menu element.
- [UIMenuElement.State](uimenuelement/state.md): Constants that indicate the state of an action- or command-based menu element.
- [UIMenuLeaf](uimenuleaf.md): An interface for an object that represents a menu element without child elements.

# UIMenuElement (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

An object representing a menu, action, or command.

## Declaration

```objectivec
@interface UIMenuElement : NSObject
```

<a id="overview"></a>

## Overview

[UIMenuElement](uimenuelement.md) defines the behavior shared by all menus, actions, and commands. You don’t create [UIMenuElement](uimenuelement.md) objects directly. Instead, you create an appropriate object that inherits from this class, such as [UIMenu](uimenu.md), [UIAction](uiaction.md), or [UICommand](uicommand.md).

## Topics

### Getting the element attributes

- [title](uimenuelement/title.md): The title of the menu element.
- [subtitle](uimenuelement/subtitle.md): The subtitle to display alongside the menu element’s title.
- [image](uimenuelement/image.md): The image to display alongside the menu element’s title.

### Creating a menu element

- [initWithCoder:](uimenuelement/init%28coder_%29.md): Creates a menu element from data in an unarchiver.

### Constants

- [UIMenuElementAttributes](uimenuelement/attributes.md): Attributes that determine the style of the menu element.
- [UIMenuElementState](uimenuelement/state.md): Constants that indicate the state of an action- or command-based menu element.
- [UIMenuElementRepeatBehavior](uimenuelement/repeatbehavior.md): Possible repeat behaviors for a menu element.

### Instance Properties

- [highlightStateUpdateHandler](uimenuelement/highlightstateupdatehandler.md): A closure the system calls when the element’s highlight state changes in a menu.
- [preferredImageVisibility](uimenuelement/preferredimagevisibility.md): The preferred visibility of the element’s image.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIAction](uiaction.md)
- [UICommand](uicommand.md)
- [UIDeferredMenuElement](uideferredmenuelement.md)
- [UIMenu](uimenu.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)

## See Also

### Menu elements and keyboard shortcuts

- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Adopting menus and UIActions in your user interface](adopting-menus-and-uiactions-in-your-user-interface.md): Add menus to your user interface, with built-in button support and bar-button items, and create custom menu experiences.
- [UIAction](uiaction.md): A menu element that performs its action in a closure.
- [UICommand](uicommand.md): A menu element that performs its action in a selector.
- [UIKeyCommand](uikeycommand.md): An object that specifies a key press perform on a hardware keyboard and the resulting action.
- [UIDeferredMenuElement](uideferredmenuelement.md): A placeholder menu element that the system replaces with the result of the block’s completion handler.
- [UIDeferredMenuElementProvider](uideferredmenuelement/provider.md)
- [UIMenuElementAttributes](uimenuelement/attributes.md): Attributes that determine the style of the menu element.
- [UIMenuElementState](uimenuelement/state.md): Constants that indicate the state of an action- or command-based menu element.
- [UIMenuLeaf](uimenuleaf.md): An interface for an object that represents a menu element without child elements.
