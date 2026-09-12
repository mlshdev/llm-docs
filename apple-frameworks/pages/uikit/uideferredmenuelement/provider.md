> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uideferredmenuelement/provider](https://developer.apple.com/documentation/uikit/uideferredmenuelement/provider)

# UIDeferredMenuElement.Provider (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
@MainActor class Provider
```

<a id="overview"></a>

## Overview

Represents an element provider for a deferred menu element. When the containing menu for a responder-based deferred element is presented, the system asks the responder chain for one of these element providers for the deferred element.

## Topics

### Initializers

- [init(\_:)](provider/init%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Menu elements and keyboard shortcuts

- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Adopting menus and UIActions in your user interface](../adopting-menus-and-uiactions-in-your-user-interface.md): Add menus to your user interface, with built-in button support and bar-button items, and create custom menu experiences.
- [UIMenuElement](../uimenuelement.md): An object representing a menu, action, or command.
- [UIAction](../uiaction.md): A menu element that performs its action in a closure.
- [UICommand](../uicommand.md): A menu element that performs its action in a selector.
- [UIKeyCommand](../uikeycommand.md): An object that specifies a key press perform on a hardware keyboard and the resulting action.
- [UIDeferredMenuElement](../uideferredmenuelement.md): A placeholder menu element that the system replaces with the result of the block’s completion handler.
- [UIMenuElement.Attributes](../uimenuelement/attributes.md): Attributes that determine the style of the menu element.
- [UIMenuElement.State](../uimenuelement/state.md): Constants that indicate the state of an action- or command-based menu element.
- [UIMenuLeaf](../uimenuleaf.md): An interface for an object that represents a menu element without child elements.

# UIDeferredMenuElementProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```objectivec
@interface UIDeferredMenuElementProvider : NSObject
```

<a id="overview"></a>

## Overview

Represents an element provider for a deferred menu element. When the containing menu for a responder-based deferred element is presented, the system asks the responder chain for one of these element providers for the deferred element.

## Topics

### Type Methods

- [providerWithElementProvider:](provider/init%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Menu elements and keyboard shortcuts

- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Adopting menus and UIActions in your user interface](../adopting-menus-and-uiactions-in-your-user-interface.md): Add menus to your user interface, with built-in button support and bar-button items, and create custom menu experiences.
- [UIMenuElement](../uimenuelement.md): An object representing a menu, action, or command.
- [UIAction](../uiaction.md): A menu element that performs its action in a closure.
- [UICommand](../uicommand.md): A menu element that performs its action in a selector.
- [UIKeyCommand](../uikeycommand.md): An object that specifies a key press perform on a hardware keyboard and the resulting action.
- [UIDeferredMenuElement](../uideferredmenuelement.md): A placeholder menu element that the system replaces with the result of the block’s completion handler.
- [UIMenuElementAttributes](../uimenuelement/attributes.md): Attributes that determine the style of the menu element.
- [UIMenuElementState](../uimenuelement/state.md): Constants that indicate the state of an action- or command-based menu element.
- [UIMenuLeaf](../uimenuleaf.md): An interface for an object that represents a menu element without child elements.
