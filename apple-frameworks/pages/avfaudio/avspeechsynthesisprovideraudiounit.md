> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisprovideraudiounit](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisprovideraudiounit)

# AVSpeechSynthesisProviderAudioUnit (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that generates speech from text.

## Declaration

```swift
class AVSpeechSynthesisProviderAudioUnit
```

<a id="overview"></a>

## Overview

Use a speech synthesizer audio unit to generate audio buffers that contain speech for a given voice and speech markup. The audio unit receives an [AVSpeechSynthesisProviderRequest](avspeechsynthesisproviderrequest.md) as input, and extracts audio buffers through the render block.

Use [speechSynthesisOutputMetadataBlock](avspeechsynthesisprovideraudiounit/speechsynthesisoutputmetadatablock.md) to provide metadata as an array of [AVSpeechSynthesisMarker](avspeechsynthesismarker.md).

The system scans and loads voices for audio unit extensions of this type, and the voices it provides are available for use in [AVSpeechSynthesizer](avspeechsynthesizer.md) and accessibility technologies like VoiceOver and Speak Screen.

> **Important**

>  Network access isn’t allowed in speech synthesizers.

## Topics

### Rendering speech

- [synthesizeSpeechRequest(\_:)](avspeechsynthesisprovideraudiounit/synthesizespeechrequest%28__%29.md): Sets the text to synthesize and the voice to use.
- [AVSpeechSynthesisProviderRequest](avspeechsynthesisproviderrequest.md): An object that represents the text to synthesize and the voice to use.

### Supplying metadata

- [AVSpeechSynthesisProviderOutputBlock](avspeechsynthesisprovideroutputblock.md): A type that represents the method for sending marker information to the host.
- [speechSynthesisOutputMetadataBlock](avspeechsynthesisprovideraudiounit/speechsynthesisoutputmetadatablock.md): A block that subclasses use to send marker information to the host.
- [AVSpeechSynthesisMarker](avspeechsynthesismarker.md): An object that contains information about the synthesized audio.

### Getting and setting voices

- [speechVoices](avspeechsynthesisprovideraudiounit/speechvoices.md): A list of voices the audio unit provides to the system.
- [AVSpeechSynthesisProviderVoice](avspeechsynthesisprovidervoice.md): An object that represents a voice that an audio unit provides to its host.

### Cancelling a request

- [cancelSpeechRequest()](avspeechsynthesisprovideraudiounit/cancelspeechrequest%28%29.md): Informs the audio unit to discard the speech request.

## Relationships

### Inherits From

- [AUAudioUnit](../audiotoolbox/auaudiounit.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# AVSpeechSynthesisProviderAudioUnit (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that generates speech from text.

## Declaration

```objectivec
@interface AVSpeechSynthesisProviderAudioUnit : AUAudioUnit
```

<a id="overview"></a>

## Overview

Use a speech synthesizer audio unit to generate audio buffers that contain speech for a given voice and speech markup. The audio unit receives an [AVSpeechSynthesisProviderRequest](avspeechsynthesisproviderrequest.md) as input, and extracts audio buffers through the render block.

Use [speechSynthesisOutputMetadataBlock](avspeechsynthesisprovideraudiounit/speechsynthesisoutputmetadatablock.md) to provide metadata as an array of [AVSpeechSynthesisMarker](avspeechsynthesismarker.md).

The system scans and loads voices for audio unit extensions of this type, and the voices it provides are available for use in [AVSpeechSynthesizer](avspeechsynthesizer.md) and accessibility technologies like VoiceOver and Speak Screen.

> **Important**

>  Network access isn’t allowed in speech synthesizers.

## Topics

### Rendering speech

- [synthesizeSpeechRequest:](avspeechsynthesisprovideraudiounit/synthesizespeechrequest%28__%29.md): Sets the text to synthesize and the voice to use.
- [AVSpeechSynthesisProviderRequest](avspeechsynthesisproviderrequest.md): An object that represents the text to synthesize and the voice to use.

### Supplying metadata

- [AVSpeechSynthesisProviderOutputBlock](avspeechsynthesisprovideroutputblock.md): A type that represents the method for sending marker information to the host.
- [speechSynthesisOutputMetadataBlock](avspeechsynthesisprovideraudiounit/speechsynthesisoutputmetadatablock.md): A block that subclasses use to send marker information to the host.
- [AVSpeechSynthesisMarker](avspeechsynthesismarker.md): An object that contains information about the synthesized audio.

### Getting and setting voices

- [speechVoices](avspeechsynthesisprovideraudiounit/speechvoices.md): A list of voices the audio unit provides to the system.
- [AVSpeechSynthesisProviderVoice](avspeechsynthesisprovidervoice.md): An object that represents a voice that an audio unit provides to its host.

### Cancelling a request

- [cancelSpeechRequest](avspeechsynthesisprovideraudiounit/cancelspeechrequest%28%29.md): Informs the audio unit to discard the speech request.

## Relationships

### Inherits From

- [AUAudioUnit](../audiotoolbox/auaudiounit.md)
