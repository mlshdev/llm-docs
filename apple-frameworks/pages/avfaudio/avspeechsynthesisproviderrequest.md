> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisproviderrequest](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisproviderrequest)

# AVSpeechSynthesisProviderRequest (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that represents the text to synthesize and the voice to use.

## Declaration

```swift
class AVSpeechSynthesisProviderRequest
```

## Topics

### Creating a request

- [init(ssmlRepresentation:voice:)](avspeechsynthesisproviderrequest/init%28ssmlrepresentation_voice_%29-7elh.md): Creates a request with a voice and a description.

### Inspecting a request

- [ssmlRepresentation](avspeechsynthesisproviderrequest/ssmlrepresentation.md): The description of the text to synthesize.
- [voice](avspeechsynthesisproviderrequest/voice.md): The voice to use in the speech request.
- [AVSpeechSynthesisProviderVoice](avspeechsynthesisprovidervoice.md): An object that represents a voice that an audio unit provides to its host.

### Initializers

- [init(SSMLRepresentation:voice:)](avspeechsynthesisproviderrequest/init%28ssmlrepresentation_voice_%29-5v77t.md)
- [init(coder:)](avspeechsynthesisproviderrequest/init%28coder_%29.md)

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

### Rendering speech

- [synthesizeSpeechRequest(\_:)](avspeechsynthesisprovideraudiounit/synthesizespeechrequest%28__%29.md): Sets the text to synthesize and the voice to use.

# AVSpeechSynthesisProviderRequest (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that represents the text to synthesize and the voice to use.

## Declaration

```objectivec
@interface AVSpeechSynthesisProviderRequest : NSObject
```

## Topics

### Creating a request

- [initWithSSMLRepresentation:voice:](avspeechsynthesisproviderrequest/init%28ssmlrepresentation_voice_%29-7elh.md): Creates a request with a voice and a description.

### Inspecting a request

- [ssmlRepresentation](avspeechsynthesisproviderrequest/ssmlrepresentation.md): The description of the text to synthesize.
- [voice](avspeechsynthesisproviderrequest/voice.md): The voice to use in the speech request.
- [AVSpeechSynthesisProviderVoice](avspeechsynthesisprovidervoice.md): An object that represents a voice that an audio unit provides to its host.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Rendering speech

- [synthesizeSpeechRequest:](avspeechsynthesisprovideraudiounit/synthesizespeechrequest%28__%29.md): Sets the text to synthesize and the voice to use.
