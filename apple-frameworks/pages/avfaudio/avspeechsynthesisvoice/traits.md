> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisvoice/traits](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice/traits)

# AVSpeechSynthesisVoice.Traits (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Traits that describe a voice.

## Declaration

```swift
struct Traits
```

## Topics

### Creating a voice trait

- [init(rawValue:)](traits/init%28rawvalue_%29.md): Creates a voice trait with the corresponding integer that you specify.

### Inspecting a voice trait

- [isNoveltyVoice](traits/isnoveltyvoice.md): The trait that indicates a voice is a novelty voice.
- [isPersonalVoice](traits/ispersonalvoice.md): The trait that indicates a voice is a personal voice.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Inspecting voices

- [identifier](identifier.md): The unique identifier of a voice.
- [name](name.md): The name of a voice.
- [quality](quality.md): The speech quality of a voice.
- [gender](gender.md): The gender for a voice.
- [voiceTraits](voicetraits.md): The traits of a voice.
- [audioFileSettings](audiofilesettings.md): A dictionary that contains audio file settings.
- [AVSpeechSynthesisVoiceQuality](../avspeechsynthesisvoicequality.md): The speech quality of a voice.
- [AVSpeechSynthesisVoiceGender](../avspeechsynthesisvoicegender.md): The gender for a voice.

# AVSpeechSynthesisVoiceTraits (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Traits that describe a voice.

## Declaration

```objectivec
enum AVSpeechSynthesisVoiceTraits : NSUInteger;
```

## Topics

### Inspecting a voice trait

- [AVSpeechSynthesisVoiceTraitNone](../avspeechsynthesisvoicetraits/avspeechsynthesisvoicetraitnone.md): The trait that indicates a voice is a regular voice.
- [AVSpeechSynthesisVoiceTraitIsNoveltyVoice](traits/isnoveltyvoice.md): The trait that indicates a voice is a novelty voice.
- [AVSpeechSynthesisVoiceTraitIsPersonalVoice](traits/ispersonalvoice.md): The trait that indicates a voice is a personal voice.

## See Also

### Inspecting voices

- [identifier](identifier.md): The unique identifier of a voice.
- [name](name.md): The name of a voice.
- [quality](quality.md): The speech quality of a voice.
- [gender](gender.md): The gender for a voice.
- [voiceTraits](voicetraits.md): The traits of a voice.
- [audioFileSettings](audiofilesettings.md): A dictionary that contains audio file settings.
- [AVSpeechSynthesisVoiceQuality](../avspeechsynthesisvoicequality.md): The speech quality of a voice.
- [AVSpeechSynthesisVoiceGender](../avspeechsynthesisvoicegender.md): The gender for a voice.
