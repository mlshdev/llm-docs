> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechutterance/prefersassistivetechnologysettings](https://developer.apple.com/documentation/avfaudio/avspeechutterance/prefersassistivetechnologysettings)

# prefersAssistiveTechnologySettings (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean that specifies whether assistive technology settings take precedence over the property values of this utterance.

## Declaration

```swift
var prefersAssistiveTechnologySettings: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is `true`, but no assistive technology, such as VoiceOver, is on, the speech synthesizer uses the utterance property values.

## See Also

### Configuring an utterance

- [voice](voice.md): The voice the speech synthesizer uses when speaking the utterance.
- [pitchMultiplier](pitchmultiplier.md): The baseline pitch the speech synthesizer uses when speaking the utterance.
- [volume](volume.md): The volume the speech synthesizer uses when speaking the utterance.

# prefersAssistiveTechnologySettings (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean that specifies whether assistive technology settings take precedence over the property values of this utterance.

## Declaration

```objectivec
@property (nonatomic) BOOL prefersAssistiveTechnologySettings;
```

<a id="Discussion"></a>

## Discussion

If this property is `true`, but no assistive technology, such as VoiceOver, is on, the speech synthesizer uses the utterance property values.

## See Also

### Configuring an utterance

- [voice](voice.md): The voice the speech synthesizer uses when speaking the utterance.
- [pitchMultiplier](pitchmultiplier.md): The baseline pitch the speech synthesizer uses when speaking the utterance.
- [volume](volume.md): The volume the speech synthesizer uses when speaking the utterance.
