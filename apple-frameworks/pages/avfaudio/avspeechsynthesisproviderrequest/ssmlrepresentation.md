> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisproviderrequest/ssmlrepresentation](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisproviderrequest/ssmlrepresentation)

# ssmlRepresentation (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The description of the text to synthesize.

## Declaration

```swift
var ssmlRepresentation: String { get }
```

<a id="Discussion"></a>

## Discussion

The Speech Synthesis Markup Language describes the speech synthesis attributes for the customization of pitch, rate, intonation, and more.

## See Also

### Inspecting a request

- [voice](voice.md): The voice to use in the speech request.
- [AVSpeechSynthesisProviderVoice](../avspeechsynthesisprovidervoice.md): An object that represents a voice that an audio unit provides to its host.

# ssmlRepresentation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The description of the text to synthesize.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * ssmlRepresentation;
```

<a id="Discussion"></a>

## Discussion

The Speech Synthesis Markup Language describes the speech synthesis attributes for the customization of pitch, rate, intonation, and more.

## See Also

### Inspecting a request

- [voice](voice.md): The voice to use in the speech request.
- [AVSpeechSynthesisProviderVoice](../avspeechsynthesisprovidervoice.md): An object that represents a voice that an audio unit provides to its host.
