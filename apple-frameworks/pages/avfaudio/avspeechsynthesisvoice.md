> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisvoice](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice)

# AVSpeechSynthesisVoice (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A distinct voice for use in speech synthesis.

## Declaration

```swift
class AVSpeechSynthesisVoice
```

<a id="overview"></a>

## Overview

The primary factors that distinguish a voice in speech synthesis are language, locale, and quality. Create an instance of `AVSpeechSynthesisVoice` to select a voice that’s appropriate for the text and the language, and set it as the value of the [voice](avspeechutterance/voice.md) property on an [AVSpeechUtterance](avspeechutterance.md) instance. The voice may optionally reflect a local variant of the language, such as Australian or South African English. For a complete list of supported languages, see [Languages Supported by VoiceOver](https://support.apple.com/en-us/HT206175).

## Topics

### Obtaining voices

- [init(identifier:)](avspeechsynthesisvoice/init%28identifier_%29.md): Retrieves a voice for the identifier you specify.
- [init(language:)](avspeechsynthesisvoice/init%28language_%29.md): Retrieves a voice for the BCP 47 code language code you specify.
- [speechVoices()](avspeechsynthesisvoice/speechvoices%28%29.md): Retrieves all available voices on the device.
- [AVSpeechSynthesisVoiceIdentifierAlex](avspeechsynthesisvoiceidentifieralex.md): The voice that the system identifies as Alex.

### Inspecting voices

- [identifier](avspeechsynthesisvoice/identifier.md): The unique identifier of a voice.
- [name](avspeechsynthesisvoice/name.md): The name of a voice.
- [quality](avspeechsynthesisvoice/quality.md): The speech quality of a voice.
- [gender](avspeechsynthesisvoice/gender.md): The gender for a voice.
- [voiceTraits](avspeechsynthesisvoice/voicetraits.md): The traits of a voice.
- [audioFileSettings](avspeechsynthesisvoice/audiofilesettings.md): A dictionary that contains audio file settings.
- [AVSpeechSynthesisVoiceQuality](avspeechsynthesisvoicequality.md): The speech quality of a voice.
- [AVSpeechSynthesisVoiceGender](avspeechsynthesisvoicegender.md): The gender for a voice.
- [AVSpeechSynthesisVoice.Traits](avspeechsynthesisvoice/traits.md): Traits that describe a voice.

### Working with language codes

- [currentLanguageCode()](avspeechsynthesisvoice/currentlanguagecode%28%29.md): Returns the language and locale code for the user’s current locale.
- [language](avspeechsynthesisvoice/language.md): A BCP 47 code that contains the voice’s language and locale.

### Initializers

- [init(coder:)](avspeechsynthesisvoice/init%28coder_%29.md)

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
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Spoken text attributes

- [AVSpeechUtterance](avspeechutterance.md): An object that encapsulates the text for speech synthesis and parameters that affect the speech.

# AVSpeechSynthesisVoice (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A distinct voice for use in speech synthesis.

## Declaration

```objectivec
@interface AVSpeechSynthesisVoice : NSObject
```

<a id="overview"></a>

## Overview

The primary factors that distinguish a voice in speech synthesis are language, locale, and quality. Create an instance of `AVSpeechSynthesisVoice` to select a voice that’s appropriate for the text and the language, and set it as the value of the [voice](avspeechutterance/voice.md) property on an [AVSpeechUtterance](avspeechutterance.md) instance. The voice may optionally reflect a local variant of the language, such as Australian or South African English. For a complete list of supported languages, see [Languages Supported by VoiceOver](https://support.apple.com/en-us/HT206175).

## Topics

### Obtaining voices

- [voiceWithIdentifier:](avspeechsynthesisvoice/init%28identifier_%29.md): Retrieves a voice for the identifier you specify.
- [voiceWithLanguage:](avspeechsynthesisvoice/init%28language_%29.md): Retrieves a voice for the BCP 47 code language code you specify.
- [speechVoices](avspeechsynthesisvoice/speechvoices%28%29.md): Retrieves all available voices on the device.
- [AVSpeechSynthesisVoiceIdentifierAlex](avspeechsynthesisvoiceidentifieralex.md): The voice that the system identifies as Alex.

### Inspecting voices

- [identifier](avspeechsynthesisvoice/identifier.md): The unique identifier of a voice.
- [name](avspeechsynthesisvoice/name.md): The name of a voice.
- [quality](avspeechsynthesisvoice/quality.md): The speech quality of a voice.
- [gender](avspeechsynthesisvoice/gender.md): The gender for a voice.
- [voiceTraits](avspeechsynthesisvoice/voicetraits.md): The traits of a voice.
- [audioFileSettings](avspeechsynthesisvoice/audiofilesettings.md): A dictionary that contains audio file settings.
- [AVSpeechSynthesisVoiceQuality](avspeechsynthesisvoicequality.md): The speech quality of a voice.
- [AVSpeechSynthesisVoiceGender](avspeechsynthesisvoicegender.md): The gender for a voice.
- [AVSpeechSynthesisVoiceTraits](avspeechsynthesisvoice/traits.md): Traits that describe a voice.

### Working with language codes

- [currentLanguageCode](avspeechsynthesisvoice/currentlanguagecode%28%29.md): Returns the language and locale code for the user’s current locale.
- [language](avspeechsynthesisvoice/language.md): A BCP 47 code that contains the voice’s language and locale.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Spoken text attributes

- [AVSpeechUtterance](avspeechutterance.md): An object that encapsulates the text for speech synthesis and parameters that affect the speech.
