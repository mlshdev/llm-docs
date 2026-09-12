> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextalternatives](https://developer.apple.com/documentation/appkit/nstextalternatives)

# NSTextAlternatives (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.8+

A list of alternative strings for a piece of text.

## Declaration

```swift
class NSTextAlternatives
```

<a id="overview"></a>

## Overview

[NSTextAlternatives](nstextalternatives.md) is an immutable value class that stores a list of alternatives for a piece of text and communicates the user’s selection of an alternative via a notification to your app. To support dictation, for example, you might use [NSTextAlternatives](nstextalternatives.md) to present a list of alternative interpretations for a word or phrase the user speaks. If the user chooses to replace the initial interpretation with an alternative, [NSTextAlternatives](nstextalternatives.md) notifies you of the choice so that you can update the text appropriately.

[NSTextAlternatives](nstextalternatives.md) instances are attached to attributed strings as the value of a text attribute, [NSTextAlternativesAttributeName](nstextalternativesattributename.md).

## Topics

### Initializing a Text Alternatives Object

- [init(primaryString:alternativeStrings:)](nstextalternatives/init%28primarystring_alternativestrings_%29.md): Initializes an `NSTextAlternatives` instance.

### Storing Alternative Text Strings

- [primaryString](nstextalternatives/primarystring.md): The text that was initially chosen as the input string.
- [alternativeStrings](nstextalternatives/alternativestrings.md): An array of alternative possible interpretations that the user might select.

### Selecting an Alternative String

- [noteSelectedAlternativeString(\_:)](nstextalternatives/noteselectedalternativestring%28__%29.md): Sent to the `NSTextAlternatives` object by the text view when the user chooses one of the alternative strings.

### Notifications

- [selectedAlternativeStringNotification](nstextalternatives/selectedalternativestringnotification.md): Posted when the user selects an alternate string.

### Structures

- [NSTextAlternatives.SelectedAlternativeStringMessage](nstextalternatives/selectedalternativestringmessage.md)

### Initializers

- [init(coder:)](nstextalternatives/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Text input

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputContext](nstextinputcontext.md): An object that represents the Cocoa text input system.
- [NSTextInputClient](nstextinputclient.md): A set of methods that text views need to implement to interact properly with the text input management system.
- [NSTextContent](nstextcontent.md): A protocol that describes specific kinds of input content types.
- [NSTextInsertionIndicator](nstextinsertionindicator.md): A view that represents the insertion indicator in text.
- [NSTextInsertionIndicator.DisplayMode](nstextinsertionindicator/displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.
- [NSTextInsertionIndicator.AutomaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.

# NSTextAlternatives (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.8+

A list of alternative strings for a piece of text.

## Declaration

```objectivec
@interface NSTextAlternatives : NSObject
```

<a id="overview"></a>

## Overview

[NSTextAlternatives](nstextalternatives.md) is an immutable value class that stores a list of alternatives for a piece of text and communicates the user’s selection of an alternative via a notification to your app. To support dictation, for example, you might use [NSTextAlternatives](nstextalternatives.md) to present a list of alternative interpretations for a word or phrase the user speaks. If the user chooses to replace the initial interpretation with an alternative, [NSTextAlternatives](nstextalternatives.md) notifies you of the choice so that you can update the text appropriately.

[NSTextAlternatives](nstextalternatives.md) instances are attached to attributed strings as the value of a text attribute, [NSTextAlternativesAttributeName](nstextalternativesattributename.md).

## Topics

### Initializing a Text Alternatives Object

- [initWithPrimaryString:alternativeStrings:](nstextalternatives/init%28primarystring_alternativestrings_%29.md): Initializes an `NSTextAlternatives` instance.

### Storing Alternative Text Strings

- [primaryString](nstextalternatives/primarystring.md): The text that was initially chosen as the input string.
- [alternativeStrings](nstextalternatives/alternativestrings.md): An array of alternative possible interpretations that the user might select.

### Selecting an Alternative String

- [noteSelectedAlternativeString:](nstextalternatives/noteselectedalternativestring%28__%29.md): Sent to the `NSTextAlternatives` object by the text view when the user chooses one of the alternative strings.

### Notifications

- [NSTextAlternativesSelectedAlternativeStringNotification](nstextalternatives/selectedalternativestringnotification.md): Posted when the user selects an alternate string.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Text input

- [Adopting the system text cursor in custom text views](adopting-the-system-text-cursor-in-custom-text-views.md): Incorporate the system text cursor into your custom text UI in AppKit.
- [NSTextInputContext](nstextinputcontext.md): An object that represents the Cocoa text input system.
- [NSTextInputClient](nstextinputclient.md): A set of methods that text views need to implement to interact properly with the text input management system.
- [NSTextContent](nstextcontent.md): A protocol that describes specific kinds of input content types.
- [NSTextInsertionIndicator](nstextinsertionindicator.md): A view that represents the insertion indicator in text.
- [NSTextInsertionIndicatorDisplayMode](nstextinsertionindicator/displaymode-swift.enum.md): Constants that determine how to display the system text cursor in a custom text UI.
- [NSTextInsertionIndicatorAutomaticModeOptions](nstextinsertionindicator/automaticmodeoptions-swift.struct.md): Options that affect the automatic display mode.
