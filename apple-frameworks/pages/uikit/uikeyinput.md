> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeyinput](https://developer.apple.com/documentation/uikit/uikeyinput)

# UIKeyInput (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods a responder uses to implement simple text entry.

## Declaration

```swift
@MainActor protocol UIKeyInput : UITextInputTraits
```

## Mentioned In

- [Handling text interactions in custom keyboards](handling-text-interactions-in-custom-keyboards.md)

<a id="overview"></a>

## Overview

Adopt this protocol in a subclass of [UIResponder](uiresponder.md) to support text entry. When instances of this subclass are the first responder, the system keyboard displays. Only a small subset of the available keyboards and languages are available to classes that adopt this protocol.

## Topics

### Inserting and deleting text

- [insertText(\_:)](uikeyinput/inserttext%28__%29.md): Inserts a character into the displayed text.
- [deleteBackward()](uikeyinput/deletebackward%28%29.md): Deletes a character from the displayed text.
- [hasText](uikeyinput/hastext.md): A Boolean value that indicates whether the text-entry object has any text.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UITextInputTraits](uitextinputtraits.md)

### Inherited By

- [UITextDocumentProxy](uitextdocumentproxy.md)
- [UITextDraggable](uitextdraggable.md)
- [UITextDroppable](uitextdroppable.md)
- [UITextInput](uitextinput.md)

### Conforming Types

- [UISearchTextField](uisearchtextfield.md)
- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)

## See Also

### Text input

- [UITextInput](uitextinput.md): A set of methods for interacting with the text input system and enabling features in documents.
- [UITextInputDelegate](uitextinputdelegate.md): An intermediary between a document and the text input system.
- [UITextInputTraits](uitextinputtraits.md): A set of methods that defines features for keyboard input to a text object.
- [UITextInputContext](uitextinputcontext.md): An object that reports the type of input your app receives.
- [UITextInputMode](uitextinputmode.md): The current text input mode.
- [UITextInputAssistantItem](uitextinputassistantitem.md): An object that manages custom bar button items that you add to the shortcuts bar above the keyboard on iPad.
- [UIDictationPhrase](uidictationphrase.md): An object that represents the textual interpretation of a spoken phrase that the user dictates.

# UIKeyInput (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods a responder uses to implement simple text entry.

## Declaration

```objectivec
@protocol UIKeyInput <UITextInputTraits>
```

## Mentioned In

- [Handling text interactions in custom keyboards](handling-text-interactions-in-custom-keyboards.md)

<a id="overview"></a>

## Overview

Adopt this protocol in a subclass of [UIResponder](uiresponder.md) to support text entry. When instances of this subclass are the first responder, the system keyboard displays. Only a small subset of the available keyboards and languages are available to classes that adopt this protocol.

## Topics

### Inserting and deleting text

- [insertText:](uikeyinput/inserttext%28__%29.md): Inserts a character into the displayed text.
- [deleteBackward](uikeyinput/deletebackward%28%29.md): Deletes a character from the displayed text.
- [hasText](uikeyinput/hastext.md): A Boolean value that indicates whether the text-entry object has any text.

## Relationships

### Inherits From

- [UITextInputTraits](uitextinputtraits.md)

### Inherited By

- [UITextDocumentProxy](uitextdocumentproxy.md)
- [UITextInput](uitextinput.md)

## See Also

### Text input

- [UITextInput](uitextinput.md): A set of methods for interacting with the text input system and enabling features in documents.
- [UITextInputDelegate](uitextinputdelegate.md): An intermediary between a document and the text input system.
- [UITextInputTraits](uitextinputtraits.md): A set of methods that defines features for keyboard input to a text object.
- [UITextInputContext](uitextinputcontext.md): An object that reports the type of input your app receives.
- [UITextInputMode](uitextinputmode.md): The current text input mode.
- [UITextInputAssistantItem](uitextinputassistantitem.md): An object that manages custom bar button items that you add to the shortcuts bar above the keyboard on iPad.
- [UIDictationPhrase](uidictationphrase.md): An object that represents the textual interpretation of a spoken phrase that the user dictates.
