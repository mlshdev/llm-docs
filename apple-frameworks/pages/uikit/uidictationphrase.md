> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidictationphrase](https://developer.apple.com/documentation/uikit/uidictationphrase)

# UIDictationPhrase (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.1+ · iPadOS 5.1+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that represents the textual interpretation of a spoken phrase that the user dictates.

## Declaration

```swift
@MainActor class UIDictationPhrase
```

<a id="overview"></a>

## Overview

When the user chooses dictation input on a supported device, the system automatically inserts recognized phrases into the current text view. You can use an object of the [UIDictationPhrase](uidictationphrase.md) class to obtain a string representing a phrase a user has dictated. In the case of ambiguous dictation results, a dictation phrase object provides an array containing alternative strings. Methods in the [UITextInput](uitextinput.md) protocol allow your app to respond to the completion of dictation.

## Topics

### Obtaining textual interpretations of spoken text

- [alternativeInterpretations](uidictationphrase/alternativeinterpretations.md): An array of alternative textual interpretations of a dictated phrase.
- [text](uidictationphrase/text.md): The most likely textual interpretation of a dictated phrase.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Text input

- [UITextInput](uitextinput.md): A set of methods for interacting with the text input system and enabling features in documents.
- [UITextInputDelegate](uitextinputdelegate.md): An intermediary between a document and the text input system.
- [UIKeyInput](uikeyinput.md): A set of methods a responder uses to implement simple text entry.
- [UITextInputTraits](uitextinputtraits.md): A set of methods that defines features for keyboard input to a text object.
- [UITextInputContext](uitextinputcontext.md): An object that reports the type of input your app receives.
- [UITextInputMode](uitextinputmode.md): The current text input mode.
- [UITextInputAssistantItem](uitextinputassistantitem.md): An object that manages custom bar button items that you add to the shortcuts bar above the keyboard on iPad.

# UIDictationPhrase (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 5.1+ · iPadOS 5.1+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An object that represents the textual interpretation of a spoken phrase that the user dictates.

## Declaration

```objectivec
@interface UIDictationPhrase : NSObject
```

<a id="overview"></a>

## Overview

When the user chooses dictation input on a supported device, the system automatically inserts recognized phrases into the current text view. You can use an object of the [UIDictationPhrase](uidictationphrase.md) class to obtain a string representing a phrase a user has dictated. In the case of ambiguous dictation results, a dictation phrase object provides an array containing alternative strings. Methods in the [UITextInput](uitextinput.md) protocol allow your app to respond to the completion of dictation.

## Topics

### Obtaining textual interpretations of spoken text

- [alternativeInterpretations](uidictationphrase/alternativeinterpretations.md): An array of alternative textual interpretations of a dictated phrase.
- [text](uidictationphrase/text.md): The most likely textual interpretation of a dictated phrase.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Text input

- [UITextInput](uitextinput.md): A set of methods for interacting with the text input system and enabling features in documents.
- [UITextInputDelegate](uitextinputdelegate.md): An intermediary between a document and the text input system.
- [UIKeyInput](uikeyinput.md): A set of methods a responder uses to implement simple text entry.
- [UITextInputTraits](uitextinputtraits.md): A set of methods that defines features for keyboard input to a text object.
- [UITextInputContext](uitextinputcontext.md): An object that reports the type of input your app receives.
- [UITextInputMode](uitextinputmode.md): The current text input mode.
- [UITextInputAssistantItem](uitextinputassistantitem.md): An object that manages custom bar button items that you add to the shortcuts bar above the keyboard on iPad.
