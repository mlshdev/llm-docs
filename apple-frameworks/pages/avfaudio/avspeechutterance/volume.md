> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechutterance/volume](https://developer.apple.com/documentation/avfaudio/avspeechutterance/volume)

# volume (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The volume the speech synthesizer uses when speaking the utterance.

## Declaration

```swift
var volume: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Before enqueing the utterance, set this property to a value within the range of `0.0` for silent to `1.0` for loudest volume. The default value is `1.0`. Setting this after enqueing the utterance has no effect.

## See Also

### Configuring an utterance

- [voice](voice.md): The voice the speech synthesizer uses when speaking the utterance.
- [pitchMultiplier](pitchmultiplier.md): The baseline pitch the speech synthesizer uses when speaking the utterance.
- [prefersAssistiveTechnologySettings](prefersassistivetechnologysettings.md): A Boolean that specifies whether assistive technology settings take precedence over the property values of this utterance.

# volume (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The volume the speech synthesizer uses when speaking the utterance.

## Declaration

```objectivec
@property (nonatomic) float volume;
```

<a id="Discussion"></a>

## Discussion

Before enqueing the utterance, set this property to a value within the range of `0.0` for silent to `1.0` for loudest volume. The default value is `1.0`. Setting this after enqueing the utterance has no effect.

## See Also

### Configuring an utterance

- [voice](voice.md): The voice the speech synthesizer uses when speaking the utterance.
- [pitchMultiplier](pitchmultiplier.md): The baseline pitch the speech synthesizer uses when speaking the utterance.
- [prefersAssistiveTechnologySettings](prefersassistivetechnologysettings.md): A Boolean that specifies whether assistive technology settings take precedence over the property values of this utterance.
