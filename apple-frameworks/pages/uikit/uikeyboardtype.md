> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeyboardtype](https://developer.apple.com/documentation/uikit/uikeyboardtype)

# UIKeyboardType (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that specify the type of keyboard to display for a text-based view.

## Declaration

```swift
enum UIKeyboardType
```

<a id="overview"></a>

## Overview

Use these constants with the [keyboardType](uitextinputtraits/keyboardtype.md) property.

## Topics

### Constants

- [UIKeyboardType.default](uikeyboardtype/default.md): Specifies the default keyboard for the current input method.
- [UIKeyboardType.asciiCapable](uikeyboardtype/asciicapable.md): Specifies a keyboard that displays standard ASCII characters.
- [UIKeyboardType.numbersAndPunctuation](uikeyboardtype/numbersandpunctuation.md): Specifies the numbers and punctuation keyboard.
- [UIKeyboardType.URL](uikeyboardtype/url.md): Specifies a keyboard for URL entry.
- [UIKeyboardType.numberPad](uikeyboardtype/numberpad.md): Specifies a numeric keypad for PIN entry.
- [UIKeyboardType.phonePad](uikeyboardtype/phonepad.md): Specifies a keypad for entering telephone numbers.
- [UIKeyboardType.namePhonePad](uikeyboardtype/namephonepad.md): Specifies a keypad for entering a person’s name or phone number.
- [UIKeyboardType.emailAddress](uikeyboardtype/emailaddress.md): Specifies a keyboard for entering email addresses.
- [UIKeyboardType.decimalPad](uikeyboardtype/decimalpad.md): Specifies a keyboard with numbers and a decimal point.
- [UIKeyboardType.twitter](uikeyboardtype/twitter.md): Specifies a keyboard for Twitter text entry, with easy access to the at (”`@`”) and hash (”`#`”) characters.
- [UIKeyboardType.webSearch](uikeyboardtype/websearch.md): Specifies a keyboard for web search terms and URL entry.
- [UIKeyboardType.asciiCapableNumberPad](uikeyboardtype/asciicapablenumberpad.md): Specifies a number pad that outputs only ASCII digits.
- [alphabet](uikeyboardtype/alphabet.md): Deprecated. Specifies a keyboard for alphabetic entry.

### Initializers

- [init(rawValue:)](uikeyboardtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the keyboard appearance

- [keyboardType](uitextinputtraits/keyboardtype.md): The keyboard type for the text object.
- [keyboardAppearance](uitextinputtraits/keyboardappearance.md): The appearance style of the keyboard for the text object.
- [UIKeyboardAppearance](uikeyboardappearance.md): Constants that specify the appearance of the keyboard for a text-based view.
- [returnKeyType](uitextinputtraits/returnkeytype.md): The visible indication of what the Return key does.
- [UIReturnKeyType](uireturnkeytype.md): Constants that specify the type of Return key the keyboard displays.
- [textContentType](uitextinputtraits/textcontenttype.md): The semantic meaning for a text input area.
- [UITextContentType](uitextcontenttype.md): Constants that identify the semantic meaning for a text-entry area.

# UIKeyboardType (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Constants that specify the type of keyboard to display for a text-based view.

## Declaration

```objectivec
enum UIKeyboardType : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants with the [keyboardType](uitextinputtraits/keyboardtype.md) property.

## Topics

### Constants

- [UIKeyboardTypeDefault](uikeyboardtype/default.md): Specifies the default keyboard for the current input method.
- [UIKeyboardTypeASCIICapable](uikeyboardtype/asciicapable.md): Specifies a keyboard that displays standard ASCII characters.
- [UIKeyboardTypeNumbersAndPunctuation](uikeyboardtype/numbersandpunctuation.md): Specifies the numbers and punctuation keyboard.
- [UIKeyboardTypeURL](uikeyboardtype/url.md): Specifies a keyboard for URL entry.
- [UIKeyboardTypeNumberPad](uikeyboardtype/numberpad.md): Specifies a numeric keypad for PIN entry.
- [UIKeyboardTypePhonePad](uikeyboardtype/phonepad.md): Specifies a keypad for entering telephone numbers.
- [UIKeyboardTypeNamePhonePad](uikeyboardtype/namephonepad.md): Specifies a keypad for entering a person’s name or phone number.
- [UIKeyboardTypeEmailAddress](uikeyboardtype/emailaddress.md): Specifies a keyboard for entering email addresses.
- [UIKeyboardTypeDecimalPad](uikeyboardtype/decimalpad.md): Specifies a keyboard with numbers and a decimal point.
- [UIKeyboardTypeTwitter](uikeyboardtype/twitter.md): Specifies a keyboard for Twitter text entry, with easy access to the at (”`@`”) and hash (”`#`”) characters.
- [UIKeyboardTypeWebSearch](uikeyboardtype/websearch.md): Specifies a keyboard for web search terms and URL entry.
- [UIKeyboardTypeASCIICapableNumberPad](uikeyboardtype/asciicapablenumberpad.md): Specifies a number pad that outputs only ASCII digits.
- [UIKeyboardTypeAlphabet](uikeyboardtype/alphabet.md): Deprecated. Specifies a keyboard for alphabetic entry.

## See Also

### Configuring the keyboard appearance

- [keyboardType](uitextinputtraits/keyboardtype.md): The keyboard type for the text object.
- [keyboardAppearance](uitextinputtraits/keyboardappearance.md): The appearance style of the keyboard for the text object.
- [UIKeyboardAppearance](uikeyboardappearance.md): Constants that specify the appearance of the keyboard for a text-based view.
- [returnKeyType](uitextinputtraits/returnkeytype.md): The visible indication of what the Return key does.
- [UIReturnKeyType](uireturnkeytype.md): Constants that specify the type of Return key the keyboard displays.
- [textContentType](uitextinputtraits/textcontenttype.md): The semantic meaning for a text input area.
- [UITextContentType](uitextcontenttype.md): Constants that identify the semantic meaning for a text-entry area.
