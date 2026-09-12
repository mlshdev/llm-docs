> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechutterance/voice](https://developer.apple.com/documentation/avfaudio/avspeechutterance/voice)

# voice (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The voice the speech synthesizer uses when speaking the utterance.

## Declaration

```swift
var voice: AVSpeechSynthesisVoice? { get set }
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a voice, the speech synthesizer uses the system’s default voice to speak the utterance.

## See Also

### Configuring an utterance

- [pitchMultiplier](pitchmultiplier.md): The baseline pitch the speech synthesizer uses when speaking the utterance.
- [volume](volume.md): The volume the speech synthesizer uses when speaking the utterance.
- [prefersAssistiveTechnologySettings](prefersassistivetechnologysettings.md): A Boolean that specifies whether assistive technology settings take precedence over the property values of this utterance.

# voice (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The voice the speech synthesizer uses when speaking the utterance.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) AVSpeechSynthesisVoice * voice;
```

<a id="Discussion"></a>

## Discussion

If you don’t specify a voice, the speech synthesizer uses the system’s default voice to speak the utterance.

## See Also

### Configuring an utterance

- [pitchMultiplier](pitchmultiplier.md): The baseline pitch the speech synthesizer uses when speaking the utterance.
- [volume](volume.md): The volume the speech synthesizer uses when speaking the utterance.
- [prefersAssistiveTechnologySettings](prefersassistivetechnologysettings.md): A Boolean that specifies whether assistive technology settings take precedence over the property values of this utterance.
