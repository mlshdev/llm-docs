> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenuelement/attributes](https://developer.apple.com/documentation/uikit/uimenuelement/attributes)

# UIMenuElement.Attributes (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Attributes that determine the style of the menu element.

## Declaration

```swift
struct Attributes
```

## Topics

### Attributes

- [destructive](attributes/destructive.md): An attribute indicating the destructive style.
- [disabled](attributes/disabled.md): An attribute indicating the disabled style.
- [hidden](attributes/hidden.md): An attribute indicating the hidden style.
- [keepsMenuPresented](attributes/keepsmenupresented.md): An attribute indicating that the menu remains presented after firing the element’s action instead of dismissing.

### Initializers

- [init(rawValue:)](attributes/init%28rawvalue_%29.md): Creates a menu-element attributes structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

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
- [UIMenuElement.State](state.md): Constants that indicate the state of an action- or command-based menu element.
- [UIMenuLeaf](../uimenuleaf.md): An interface for an object that represents a menu element without child elements.

# UIMenuElementAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Attributes that determine the style of the menu element.

## Declaration

```objectivec
enum UIMenuElementAttributes : NSUInteger;
```

## Topics

### Attributes

- [UIMenuElementAttributesDestructive](attributes/destructive.md): An attribute indicating the destructive style.
- [UIMenuElementAttributesDisabled](attributes/disabled.md): An attribute indicating the disabled style.
- [UIMenuElementAttributesHidden](attributes/hidden.md): An attribute indicating the hidden style.
- [UIMenuElementAttributesKeepsMenuPresented](attributes/keepsmenupresented.md): An attribute indicating that the menu remains presented after firing the element’s action instead of dismissing.

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
- [UIMenuElementState](state.md): Constants that indicate the state of an action- or command-based menu element.
- [UIMenuLeaf](../uimenuleaf.md): An interface for an object that represents a menu element without child elements.
