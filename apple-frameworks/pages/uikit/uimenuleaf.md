> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenuleaf](https://developer.apple.com/documentation/uikit/uimenuleaf)

# UIMenuLeaf (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An interface for an object that represents a menu element without child elements.

## Declaration

```swift
@MainActor protocol UIMenuLeaf : NSObjectProtocol
```

<a id="overview"></a>

## Overview

`UIMenuLeaf` defines the behavior shared by menu elements that don’t have child elements. Don’t implement the `UIMenuLeaf` protocol in your object directly. Instead, create an appropriate object that implements this protocol, such as [UIAction](uiaction.md) or [UICommand](uicommand.md).

## Topics

### Managing the appearance

- [title](uimenuleaf/title.md): A short display title for the menu element.
- [discoverabilityTitle](uimenuleaf/discoverabilitytitle.md): A long, informative title to use in the keyboard shortcut overlay.
- [image](uimenuleaf/image.md): An image that appears next to the menu element.
- [attributes](uimenuleaf/attributes.md): The attributes that determine the style of the menu element.
- [presentationSourceItem](uimenuleaf/presentationsourceitem.md): The item you can use as an anchor for subsequent presentations.

### Managing the selection state

- [state](uimenuleaf/state.md): The menu element’s selection state.
- [selectedImage](uimenuleaf/selectedimage.md): An image that appears next to the menu element when the menu element is in the selected state.

### Performing actions

- [sender](uimenuleaf/sender.md): The object on behalf of which to perform the menu element’s primary action.
- [performWithSender(\_:target:)](uimenuleaf/performwithsender%28__target_%29.md): Performs the element’s primary action.

### Instance Properties

- [preferredImageVisibility](uimenuleaf/preferredimagevisibility.md): The preferred visibility of the element’s image.
- [repeatBehavior](uimenuleaf/repeatbehavior.md): The leaf’s preferred repeat behavior. Menu leaves can repeatedly perform their primary actions on prolonged interactions, such as by holding down their keyboard shortcut.
- [subtitle](uimenuleaf/subtitle.md): The element’s subtitle.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIAction](uiaction.md)
- [UICommand](uicommand.md)
- [UIKeyCommand](uikeycommand.md)
- [UIWindowScene.ActivationAction](uiwindowscene/activationaction.md)

## See Also

### Menu elements and keyboard shortcuts

- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Adopting menus and UIActions in your user interface](adopting-menus-and-uiactions-in-your-user-interface.md): Add menus to your user interface, with built-in button support and bar-button items, and create custom menu experiences.
- [UIMenuElement](uimenuelement.md): An object representing a menu, action, or command.
- [UIAction](uiaction.md): A menu element that performs its action in a closure.
- [UICommand](uicommand.md): A menu element that performs its action in a selector.
- [UIKeyCommand](uikeycommand.md): An object that specifies a key press perform on a hardware keyboard and the resulting action.
- [UIDeferredMenuElement](uideferredmenuelement.md): A placeholder menu element that the system replaces with the result of the block’s completion handler.
- [UIDeferredMenuElement.Provider](uideferredmenuelement/provider.md)
- [UIMenuElement.Attributes](uimenuelement/attributes.md): Attributes that determine the style of the menu element.
- [UIMenuElement.State](uimenuelement/state.md): Constants that indicate the state of an action- or command-based menu element.

# UIMenuLeaf (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.0+

An interface for an object that represents a menu element without child elements.

## Declaration

```objectivec
@protocol UIMenuLeaf <NSObject>
```

<a id="overview"></a>

## Overview

`UIMenuLeaf` defines the behavior shared by menu elements that don’t have child elements. Don’t implement the `UIMenuLeaf` protocol in your object directly. Instead, create an appropriate object that implements this protocol, such as [UIAction](uiaction.md) or [UICommand](uicommand.md).

## Topics

### Managing the appearance

- [title](uimenuleaf/title.md): A short display title for the menu element.
- [discoverabilityTitle](uimenuleaf/discoverabilitytitle.md): A long, informative title to use in the keyboard shortcut overlay.
- [image](uimenuleaf/image.md): An image that appears next to the menu element.
- [attributes](uimenuleaf/attributes.md): The attributes that determine the style of the menu element.
- [presentationSourceItem](uimenuleaf/presentationsourceitem.md): The item you can use as an anchor for subsequent presentations.

### Managing the selection state

- [state](uimenuleaf/state.md): The menu element’s selection state.
- [selectedImage](uimenuleaf/selectedimage.md): An image that appears next to the menu element when the menu element is in the selected state.

### Performing actions

- [sender](uimenuleaf/sender.md): The object on behalf of which to perform the menu element’s primary action.
- [performWithSender:target:](uimenuleaf/performwithsender%28__target_%29.md): Performs the element’s primary action.

### Instance Properties

- [preferredImageVisibility](uimenuleaf/preferredimagevisibility.md): The preferred visibility of the element’s image.
- [repeatBehavior](uimenuleaf/repeatbehavior.md): The leaf’s preferred repeat behavior. Menu leaves can repeatedly perform their primary actions on prolonged interactions, such as by holding down their keyboard shortcut.
- [subtitle](uimenuleaf/subtitle.md): The element’s subtitle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIAction](uiaction.md)
- [UICommand](uicommand.md)

## See Also

### Menu elements and keyboard shortcuts

- [Adding menus and shortcuts to the menu bar and user interface](adding-menus-and-shortcuts-to-the-menu-bar-and-user-interface.md): Provide quick access to useful actions by adding menus and keyboard shortcuts to your Mac app built with Mac Catalyst.
- [Adopting menus and UIActions in your user interface](adopting-menus-and-uiactions-in-your-user-interface.md): Add menus to your user interface, with built-in button support and bar-button items, and create custom menu experiences.
- [UIMenuElement](uimenuelement.md): An object representing a menu, action, or command.
- [UIAction](uiaction.md): A menu element that performs its action in a closure.
- [UICommand](uicommand.md): A menu element that performs its action in a selector.
- [UIKeyCommand](uikeycommand.md): An object that specifies a key press perform on a hardware keyboard and the resulting action.
- [UIDeferredMenuElement](uideferredmenuelement.md): A placeholder menu element that the system replaces with the result of the block’s completion handler.
- [UIDeferredMenuElementProvider](uideferredmenuelement/provider.md)
- [UIMenuElementAttributes](uimenuelement/attributes.md): Attributes that determine the style of the menu element.
- [UIMenuElementState](uimenuelement/state.md): Constants that indicate the state of an action- or command-based menu element.
