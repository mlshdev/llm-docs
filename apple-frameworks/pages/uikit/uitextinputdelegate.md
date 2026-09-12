> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputdelegate](https://developer.apple.com/documentation/uikit/uitextinputdelegate)

# UITextInputDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An intermediary between a document and the text input system.

## Declaration

```swift
@MainActor protocol UITextInputDelegate : NSObjectProtocol
```

## Mentioned In

- [Handling text interactions in custom keyboards](handling-text-interactions-in-custom-keyboards.md)

<a id="overview"></a>

## Overview

A [UITextInputDelegate](uitextinputdelegate.md) conveys notifications of pending or transpired changes in text and selection in the document. UIKit provides a private text input delegate, which it assigns at runtime to the [inputDelegate](uitextinput/inputdelegate.md) property of the object whose class adopts the [UITextInput](uitextinput.md) protocol.

## Topics

### Notifying the delegate of textual changes

- [textWillChange(\_:)](uitextinputdelegate/textwillchange%28__%29.md): Tells the input delegate when text is about to change in the document.
- [textDidChange(\_:)](uitextinputdelegate/textdidchange%28__%29.md): Tells the input delegate when text has changed in the document.

### Notifying the delegate of selection changes

- [selectionWillChange(\_:)](uitextinputdelegate/selectionwillchange%28__%29.md): Tells the input delegate when the selection is about to change in the document.
- [selectionDidChange(\_:)](uitextinputdelegate/selectiondidchange%28__%29.md): Tells the input delegate when the selection has changed in the document.

### Notifying the delegate of conversation changes

- [conversationContext(\_:didChange:)](uitextinputdelegate/conversationcontext%28__didchange_%29.md): Tells the input delegate when text has changed in the input object for a conversation.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIInputViewController](uiinputviewcontroller.md)

## See Also

### Text input

- [UITextInput](uitextinput.md): A set of methods for interacting with the text input system and enabling features in documents.
- [UIKeyInput](uikeyinput.md): A set of methods a responder uses to implement simple text entry.
- [UITextInputTraits](uitextinputtraits.md): A set of methods that defines features for keyboard input to a text object.
- [UITextInputContext](uitextinputcontext.md): An object that reports the type of input your app receives.
- [UITextInputMode](uitextinputmode.md): The current text input mode.
- [UITextInputAssistantItem](uitextinputassistantitem.md): An object that manages custom bar button items that you add to the shortcuts bar above the keyboard on iPad.
- [UIDictationPhrase](uidictationphrase.md): An object that represents the textual interpretation of a spoken phrase that the user dictates.

# UITextInputDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

An intermediary between a document and the text input system.

## Declaration

```objectivec
@protocol UITextInputDelegate <NSObject>
```

## Mentioned In

- [Handling text interactions in custom keyboards](handling-text-interactions-in-custom-keyboards.md)

<a id="overview"></a>

## Overview

A [UITextInputDelegate](uitextinputdelegate.md) conveys notifications of pending or transpired changes in text and selection in the document. UIKit provides a private text input delegate, which it assigns at runtime to the [inputDelegate](uitextinput/inputdelegate.md) property of the object whose class adopts the [UITextInput](uitextinput.md) protocol.

## Topics

### Notifying the delegate of textual changes

- [textWillChange:](uitextinputdelegate/textwillchange%28__%29.md): Tells the input delegate when text is about to change in the document.
- [textDidChange:](uitextinputdelegate/textdidchange%28__%29.md): Tells the input delegate when text has changed in the document.

### Notifying the delegate of selection changes

- [selectionWillChange:](uitextinputdelegate/selectionwillchange%28__%29.md): Tells the input delegate when the selection is about to change in the document.
- [selectionDidChange:](uitextinputdelegate/selectiondidchange%28__%29.md): Tells the input delegate when the selection has changed in the document.

### Notifying the delegate of conversation changes

- [conversationContext:didChange:](uitextinputdelegate/conversationcontext%28__didchange_%29.md): Tells the input delegate when text has changed in the input object for a conversation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIInputViewController](uiinputviewcontroller.md)

## See Also

### Text input

- [UITextInput](uitextinput.md): A set of methods for interacting with the text input system and enabling features in documents.
- [UIKeyInput](uikeyinput.md): A set of methods a responder uses to implement simple text entry.
- [UITextInputTraits](uitextinputtraits.md): A set of methods that defines features for keyboard input to a text object.
- [UITextInputContext](uitextinputcontext.md): An object that reports the type of input your app receives.
- [UITextInputMode](uitextinputmode.md): The current text input mode.
- [UITextInputAssistantItem](uitextinputassistantitem.md): An object that manages custom bar button items that you add to the shortcuts bar above the keyboard on iPad.
- [UIDictationPhrase](uidictationphrase.md): An object that represents the textual interpretation of a spoken phrase that the user dictates.
