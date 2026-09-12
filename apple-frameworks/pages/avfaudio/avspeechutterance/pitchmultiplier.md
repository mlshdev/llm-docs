> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechutterance/pitchmultiplier](https://developer.apple.com/documentation/avfaudio/avspeechutterance/pitchmultiplier)

# pitchMultiplier (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The baseline pitch the speech synthesizer uses when speaking the utterance.

## Declaration

```swift
var pitchMultiplier: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Before enqueing the utterance, set this property to a value within the range of `0.5` for lower pitch to `2.0` for higher pitch. The default value is `1.0`. Setting this after enqueing the utterance has no effect.

## See Also

### Configuring an utterance

- [voice](voice.md): The voice the speech synthesizer uses when speaking the utterance.
- [volume](volume.md): The volume the speech synthesizer uses when speaking the utterance.
- [prefersAssistiveTechnologySettings](prefersassistivetechnologysettings.md): A Boolean that specifies whether assistive technology settings take precedence over the property values of this utterance.

# pitchMultiplier (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The baseline pitch the speech synthesizer uses when speaking the utterance.

## Declaration

```objectivec
@property (nonatomic) float pitchMultiplier;
```

<a id="Discussion"></a>

## Discussion

Before enqueing the utterance, set this property to a value within the range of `0.5` for lower pitch to `2.0` for higher pitch. The default value is `1.0`. Setting this after enqueing the utterance has no effect.

## See Also

### Configuring an utterance

- [voice](voice.md): The voice the speech synthesizer uses when speaking the utterance.
- [volume](volume.md): The volume the speech synthesizer uses when speaking the utterance.
- [prefersAssistiveTechnologySettings](prefersassistivetechnologysettings.md): A Boolean that specifies whether assistive technology settings take precedence over the property values of this utterance.
