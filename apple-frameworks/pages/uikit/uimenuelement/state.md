> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenuelement/state](https://developer.apple.com/documentation/uikit/uimenuelement/state)

# UIMenuElement.State (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants that indicate the state of an action- or command-based menu element.

## Declaration

```swift
enum State
```

## Topics

### States

- [UIMenuElement.State.off](state/off.md): A constant indicating the menu element is in the “off” state.
- [UIMenuElement.State.on](state/on.md): A constant indicating the menu element is in the “on” state.
- [UIMenuElement.State.mixed](state/mixed.md): A constant indicating the menu element is in the “mixed” state.

### Initializers

- [init(rawValue:)](state/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Menu elements and keyboard shortcuts

- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Adopting menus and UIActions in your user interface](../adopting-menus-and-uiactions-in-your-user-interface.md): Add menus to your user interface, with built-in button support and bar-button items, and create custom menu experiences.
- [UIMenuElement](../uimenuelement.md): An object representing a menu, action, or command.
- [UIAction](../uiaction.md): A menu element that performs its action in a closure.
- [UICommand](../uicommand.md): A menu element that performs its action in a selector.
- [UIKeyCommand](../uikeycommand.md): An object that specifies a key press perform on a hardware keyboard and the resulting action.
- [UIDeferredMenuElement](../uideferredmenuelement.md): A placeholder menu element that the system replaces with the result of the block’s completion handler.
- [UIDeferredMenuElement.Provider](../uideferredmenuelement/provider.md)
- [UIMenuElement.Attributes](attributes.md): Attributes that determine the style of the menu element.
- [UIMenuLeaf](../uimenuleaf.md): An interface for an object that represents a menu element without child elements.

# UIMenuElementState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Constants that indicate the state of an action- or command-based menu element.

## Declaration

```objectivec
enum UIMenuElementState : NSInteger;
```

## Topics

### States

- [UIMenuElementStateOff](state/off.md): A constant indicating the menu element is in the “off” state.
- [UIMenuElementStateOn](state/on.md): A constant indicating the menu element is in the “on” state.
- [UIMenuElementStateMixed](state/mixed.md): A constant indicating the menu element is in the “mixed” state.

## See Also

### Menu elements and keyboard shortcuts

- [Adding menus and shortcuts to the menu bar and user interface](../adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Adopting menus and UIActions in your user interface](../adopting-menus-and-uiactions-in-your-user-interface.md): Add menus to your user interface, with built-in button support and bar-button items, and create custom menu experiences.
- [UIMenuElement](../uimenuelement.md): An object representing a menu, action, or command.
- [UIAction](../uiaction.md): A menu element that performs its action in a closure.
- [UICommand](../uicommand.md): A menu element that performs its action in a selector.
- [UIKeyCommand](../uikeycommand.md): An object that specifies a key press perform on a hardware keyboard and the resulting action.
- [UIDeferredMenuElement](../uideferredmenuelement.md): A placeholder menu element that the system replaces with the result of the block’s completion handler.
- [UIDeferredMenuElementProvider](../uideferredmenuelement/provider.md)
- [UIMenuElementAttributes](attributes.md): Attributes that determine the style of the menu element.
- [UIMenuLeaf](../uimenuleaf.md): An interface for an object that represents a menu element without child elements.
