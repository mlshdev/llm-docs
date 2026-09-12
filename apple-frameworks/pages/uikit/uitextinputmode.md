> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputmode](https://developer.apple.com/documentation/uikit/uitextinputmode)

# UITextInputMode (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current text input mode.

## Declaration

```swift
@MainActor class UITextInputMode
```

<a id="overview"></a>

## Overview

You can use this object to determine the primary language currently being used for text input.

## Topics

### Getting the current and active text-input modes

- [activeInputModes](uitextinputmode/activeinputmodes.md): The active text-input modes.

### Getting the primary language

- [primaryLanguage](uitextinputmode/primarylanguage.md): The primary language, if any, of the input mode.

### Notifications

- [currentInputModeDidChangeNotification](uitextinputmode/currentinputmodedidchangenotification.md): A notification that posts when the current input mode changes.

### Structures

- [UITextInputMode.CurrentInputModeDidChangeMessage](uitextinputmode/currentinputmodedidchangemessage.md)

### Initializers

- [init(coder:)](uitextinputmode/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Text input

- [UITextInput](uitextinput.md): A set of methods for interacting with the text input system and enabling features in documents.
- [UITextInputDelegate](uitextinputdelegate.md): An intermediary between a document and the text input system.
- [UIKeyInput](uikeyinput.md): A set of methods a responder uses to implement simple text entry.
- [UITextInputTraits](uitextinputtraits.md): A set of methods that defines features for keyboard input to a text object.
- [UITextInputContext](uitextinputcontext.md): An object that reports the type of input your app receives.
- [UITextInputAssistantItem](uitextinputassistantitem.md): An object that manages custom bar button items that you add to the shortcuts bar above the keyboard on iPad.
- [UIDictationPhrase](uidictationphrase.md): An object that represents the textual interpretation of a spoken phrase that the user dictates.

# UITextInputMode (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current text input mode.

## Declaration

```objectivec
@interface UITextInputMode : NSObject
```

<a id="overview"></a>

## Overview

You can use this object to determine the primary language currently being used for text input.

## Topics

### Getting the current and active text-input modes

- [activeInputModes](uitextinputmode/activeinputmodes.md): The active text-input modes.
- [currentInputMode](uitextinputmode/currentinputmode.md): Deprecated. Returns an instance representing the current text-input mode.

### Getting the primary language

- [primaryLanguage](uitextinputmode/primarylanguage.md): The primary language, if any, of the input mode.

### Notifications

- [UITextInputCurrentInputModeDidChangeNotification](uitextinputmode/currentinputmodedidchangenotification.md): A notification that posts when the current input mode changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Text input

- [UITextInput](uitextinput.md): A set of methods for interacting with the text input system and enabling features in documents.
- [UITextInputDelegate](uitextinputdelegate.md): An intermediary between a document and the text input system.
- [UIKeyInput](uikeyinput.md): A set of methods a responder uses to implement simple text entry.
- [UITextInputTraits](uitextinputtraits.md): A set of methods that defines features for keyboard input to a text object.
- [UITextInputContext](uitextinputcontext.md): An object that reports the type of input your app receives.
- [UITextInputAssistantItem](uitextinputassistantitem.md): An object that manages custom bar button items that you add to the shortcuts bar above the keyboard on iPad.
- [UIDictationPhrase](uidictationphrase.md): An object that represents the textual interpretation of a spoken phrase that the user dictates.
