> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextautocapitalizationtype](https://developer.apple.com/documentation/uikit/uitextautocapitalizationtype)

# UITextAutocapitalizationType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The autocapitalization behavior of a text-based view.

## Declaration

```swift
enum UITextAutocapitalizationType
```

<a id="overview"></a>

## Overview

Use these constants with the [autocapitalizationType](uitextinputtraits/autocapitalizationtype.md) property. If the script system doesn’t support capitalization, the keyboard input method ignores these constants.

Some keyboard types don’t support autocapitalization. Specifically, if the [keyboardType](uitextinputtraits/keyboardtype.md) property is set to [UIKeyboardType.numberPad](uikeyboardtype/numberpad.md), [UIKeyboardType.phonePad](uikeyboardtype/phonepad.md), or [UIKeyboardType.namePhonePad](uikeyboardtype/namephonepad.md), the system ignores these constants.

## Topics

### Constants

- [UITextAutocapitalizationType.none](uitextautocapitalizationtype/none.md): Specifies that there is no automatic text capitalization.
- [UITextAutocapitalizationType.words](uitextautocapitalizationtype/words.md): Specifies automatic capitalization of the first letter of each word.
- [UITextAutocapitalizationType.sentences](uitextautocapitalizationtype/sentences.md): Specifies automatic capitalization of the first letter of each sentence.
- [UITextAutocapitalizationType.allCharacters](uitextautocapitalizationtype/allcharacters.md): Specifies automatic capitalization of all characters, such as for entry of two-character state abbreviations for the United States.

### Initializers

- [init(rawValue:)](uitextautocapitalizationtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing spelling and autocorrection

- [autocapitalizationType](uitextinputtraits/autocapitalizationtype.md): The autocapitalization style for the text object.
- [autocorrectionType](uitextinputtraits/autocorrectiontype.md): The autocorrection style for the text object.
- [UITextAutocorrectionType](uitextautocorrectiontype.md): The autocorrection behavior of a text-based view.
- [spellCheckingType](uitextinputtraits/spellcheckingtype.md): The spell-checking style for the text object.
- [UITextSpellCheckingType](uitextspellcheckingtype.md): The spell-checking behavior of a text-based view.
- [inlinePredictionType](uitextinputtraits/inlinepredictiontype.md): The behavior of inline text predictions for a text-entry area.
- [UITextInlinePredictionType](uitextinlinepredictiontype.md): Constants that identify the behavior of inline text predictions for a text-entry area.

# UITextAutocapitalizationType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The autocapitalization behavior of a text-based view.

## Declaration

```objectivec
enum UITextAutocapitalizationType : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants with the [autocapitalizationType](uitextinputtraits/autocapitalizationtype.md) property. If the script system doesn’t support capitalization, the keyboard input method ignores these constants.

Some keyboard types don’t support autocapitalization. Specifically, if the [keyboardType](uitextinputtraits/keyboardtype.md) property is set to [UIKeyboardTypeNumberPad](uikeyboardtype/numberpad.md), [UIKeyboardTypePhonePad](uikeyboardtype/phonepad.md), or [UIKeyboardTypeNamePhonePad](uikeyboardtype/namephonepad.md), the system ignores these constants.

## Topics

### Constants

- [UITextAutocapitalizationTypeNone](uitextautocapitalizationtype/none.md): Specifies that there is no automatic text capitalization.
- [UITextAutocapitalizationTypeWords](uitextautocapitalizationtype/words.md): Specifies automatic capitalization of the first letter of each word.
- [UITextAutocapitalizationTypeSentences](uitextautocapitalizationtype/sentences.md): Specifies automatic capitalization of the first letter of each sentence.
- [UITextAutocapitalizationTypeAllCharacters](uitextautocapitalizationtype/allcharacters.md): Specifies automatic capitalization of all characters, such as for entry of two-character state abbreviations for the United States.

## See Also

### Managing spelling and autocorrection

- [autocapitalizationType](uitextinputtraits/autocapitalizationtype.md): The autocapitalization style for the text object.
- [autocorrectionType](uitextinputtraits/autocorrectiontype.md): The autocorrection style for the text object.
- [UITextAutocorrectionType](uitextautocorrectiontype.md): The autocorrection behavior of a text-based view.
- [spellCheckingType](uitextinputtraits/spellcheckingtype.md): The spell-checking style for the text object.
- [UITextSpellCheckingType](uitextspellcheckingtype.md): The spell-checking behavior of a text-based view.
- [inlinePredictionType](uitextinputtraits/inlinepredictiontype.md): The behavior of inline text predictions for a text-entry area.
- [UITextInlinePredictionType](uitextinlinepredictiontype.md): Constants that identify the behavior of inline text predictions for a text-entry area.
