> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisprovidervoice](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisprovidervoice)

# AVSpeechSynthesisProviderVoice (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that represents a voice that an audio unit provides to its host.

## Declaration

```swift
class AVSpeechSynthesisProviderVoice
```

<a id="overview"></a>

## Overview

This is a voice that an [AVSpeechSynthesisProviderAudioUnit](avspeechsynthesisprovideraudiounit.md) provides to the system, distinct from [AVSpeechSynthesisVoice](avspeechsynthesisvoice.md). Use [speechVoices](avspeechsynthesisprovideraudiounit/speechvoices.md) to access the underlying [AVSpeechSynthesisVoice](avspeechsynthesisvoice.md) in the voice quality [AVSpeechSynthesisVoiceQuality.enhanced](avspeechsynthesisvoicequality/enhanced.md).

## Topics

### Creating a voice

- [init(name:identifier:primaryLanguages:supportedLanguages:)](avspeechsynthesisprovidervoice/init%28name_identifier_primarylanguages_supportedlanguages_%29.md): Creates a voice with a name, an identifier, and language information.

### Inspecting a voice

- [age](avspeechsynthesisprovidervoice/age.md): The age of the voice, in years.
- [gender](avspeechsynthesisprovidervoice/gender.md): The gender of the voice.
- [AVSpeechSynthesisVoiceGender](avspeechsynthesisvoicegender.md): The gender for a voice.
- [identifier](avspeechsynthesisprovidervoice/identifier.md): The unique identifier for the voice.
- [name](avspeechsynthesisprovidervoice/name.md): The localized name of the voice.
- [primaryLanguages](avspeechsynthesisprovidervoice/primarylanguages.md): A list of BCP 47 codes that identify the languages the synthesizer uses.
- [supportedLanguages](avspeechsynthesisprovidervoice/supportedlanguages.md): A list of BCP 47 codes that identify the languages a voice supports.
- [version](avspeechsynthesisprovidervoice/version.md): The version of the voice.
- [voiceSize](avspeechsynthesisprovidervoice/voicesize.md): The size of the voice package on disk, in bytes.

### Updating a voice

- [updateSpeechVoices()](avspeechsynthesisprovidervoice/updatespeechvoices%28%29.md): Updates the voices your app provides to the system.

### Initializers

- [init(coder:)](avspeechsynthesisprovidervoice/init%28coder_%29.md)

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
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting and setting voices

- [speechVoices](avspeechsynthesisprovideraudiounit/speechvoices.md): A list of voices the audio unit provides to the system.

# AVSpeechSynthesisProviderVoice (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that represents a voice that an audio unit provides to its host.

## Declaration

```objectivec
@interface AVSpeechSynthesisProviderVoice : NSObject
```

<a id="overview"></a>

## Overview

This is a voice that an [AVSpeechSynthesisProviderAudioUnit](avspeechsynthesisprovideraudiounit.md) provides to the system, distinct from [AVSpeechSynthesisVoice](avspeechsynthesisvoice.md). Use [speechVoices](avspeechsynthesisprovideraudiounit/speechvoices.md) to access the underlying [AVSpeechSynthesisVoice](avspeechsynthesisvoice.md) in the voice quality [AVSpeechSynthesisVoiceQualityEnhanced](avspeechsynthesisvoicequality/enhanced.md).

## Topics

### Creating a voice

- [initWithName:identifier:primaryLanguages:supportedLanguages:](avspeechsynthesisprovidervoice/init%28name_identifier_primarylanguages_supportedlanguages_%29.md): Creates a voice with a name, an identifier, and language information.

### Inspecting a voice

- [age](avspeechsynthesisprovidervoice/age.md): The age of the voice, in years.
- [gender](avspeechsynthesisprovidervoice/gender.md): The gender of the voice.
- [AVSpeechSynthesisVoiceGender](avspeechsynthesisvoicegender.md): The gender for a voice.
- [identifier](avspeechsynthesisprovidervoice/identifier.md): The unique identifier for the voice.
- [name](avspeechsynthesisprovidervoice/name.md): The localized name of the voice.
- [primaryLanguages](avspeechsynthesisprovidervoice/primarylanguages.md): A list of BCP 47 codes that identify the languages the synthesizer uses.
- [supportedLanguages](avspeechsynthesisprovidervoice/supportedlanguages.md): A list of BCP 47 codes that identify the languages a voice supports.
- [version](avspeechsynthesisprovidervoice/version.md): The version of the voice.
- [voiceSize](avspeechsynthesisprovidervoice/voicesize.md): The size of the voice package on disk, in bytes.

### Updating a voice

- [updateSpeechVoices](avspeechsynthesisprovidervoice/updatespeechvoices%28%29.md): Updates the voices your app provides to the system.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting and setting voices

- [speechVoices](avspeechsynthesisprovideraudiounit/speechvoices.md): A list of voices the audio unit provides to the system.
