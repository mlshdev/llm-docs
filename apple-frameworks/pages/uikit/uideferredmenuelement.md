> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uideferredmenuelement](https://developer.apple.com/documentation/uikit/uideferredmenuelement)

# UIDeferredMenuElement (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A placeholder menu element that the system replaces with the result of the block’s completion handler.

## Declaration

```swift
@MainActor class UIDeferredMenuElement
```

## Topics

### Creating a deferred menu element

- [init(\_:)](uideferredmenuelement/init%28__%29.md): A convenience initializer that creates a placeholder menu element that the system replaces with the result of the provider’s completion handler.
- [uncached(\_:)](uideferredmenuelement/uncached%28__%29.md): Returns a placeholder menu element that the system replaces with the result of the provider’s completion handler.
- [usingFocus(identifier:shouldCacheItems:)](uideferredmenuelement/usingfocus%28identifier_shouldcacheitems_%29.md)

### Setting an identifier

- [identifier](uideferredmenuelement/identifier-swift.property.md): The identifier of this deferred menu element.
- [UIDeferredMenuElement.Identifier](uideferredmenuelement/identifier-swift.struct.md)

### Initializers

- [init(provider:)](uideferredmenuelement/init%28provider_%29.md)
- [init(uncachedProvider:)](uideferredmenuelement/init%28uncachedprovider_%29.md)

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

### Menu elements and keyboard shortcuts

- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Adopting menus and UIActions in your user interface](adopting-menus-and-uiactions-in-your-user-interface.md): Add menus to your user interface, with built-in button support and bar-button items, and create custom menu experiences.
- [UIMenuElement](uimenuelement.md): An object representing a menu, action, or command.
- [UIAction](uiaction.md): A menu element that performs its action in a closure.
- [UICommand](uicommand.md): A menu element that performs its action in a selector.
- [UIKeyCommand](uikeycommand.md): An object that specifies a key press perform on a hardware keyboard and the resulting action.
- [UIDeferredMenuElement.Provider](uideferredmenuelement/provider.md)
- [UIMenuElement.Attributes](uimenuelement/attributes.md): Attributes that determine the style of the menu element.
- [UIMenuElement.State](uimenuelement/state.md): Constants that indicate the state of an action- or command-based menu element.
- [UIMenuLeaf](uimenuleaf.md): An interface for an object that represents a menu element without child elements.

# UIDeferredMenuElement (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

A placeholder menu element that the system replaces with the result of the block’s completion handler.

## Declaration

```objectivec
@interface UIDeferredMenuElement : UIMenuElement
```

## Topics

### Creating a deferred menu element

- [elementWithProvider:](uideferredmenuelement/init%28__%29.md): A convenience initializer that creates a placeholder menu element that the system replaces with the result of the provider’s completion handler.
- [elementWithUncachedProvider:](uideferredmenuelement/uncached%28__%29.md): Returns a placeholder menu element that the system replaces with the result of the provider’s completion handler.
- [elementUsingFocusWithIdentifier:shouldCacheItems:](uideferredmenuelement/usingfocus%28identifier_shouldcacheitems_%29.md)

### Setting an identifier

- [identifier](uideferredmenuelement/identifier-swift.property.md): The identifier of this deferred menu element.
- [UIDeferredMenuElementIdentifier](uideferredmenuelement/identifier-swift.struct.md)

## Relationships

### Inherits From

- [UIMenuElement](uimenuelement.md)

## See Also

### Menu elements and keyboard shortcuts

- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Adopting menus and UIActions in your user interface](adopting-menus-and-uiactions-in-your-user-interface.md): Add menus to your user interface, with built-in button support and bar-button items, and create custom menu experiences.
- [UIMenuElement](uimenuelement.md): An object representing a menu, action, or command.
- [UIAction](uiaction.md): A menu element that performs its action in a closure.
- [UICommand](uicommand.md): A menu element that performs its action in a selector.
- [UIKeyCommand](uikeycommand.md): An object that specifies a key press perform on a hardware keyboard and the resulting action.
- [UIDeferredMenuElementProvider](uideferredmenuelement/provider.md)
- [UIMenuElementAttributes](uimenuelement/attributes.md): Attributes that determine the style of the menu element.
- [UIMenuElementState](uimenuelement/state.md): Constants that indicate the state of an action- or command-based menu element.
- [UIMenuLeaf](uimenuleaf.md): An interface for an object that represents a menu element without child elements.
