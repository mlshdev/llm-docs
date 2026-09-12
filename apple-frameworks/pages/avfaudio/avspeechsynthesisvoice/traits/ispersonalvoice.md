> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avspeechsynthesisvoice/traits/ispersonalvoice](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice/traits/ispersonalvoice)

# isPersonalVoice (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The trait that indicates a voice is a personal voice.

## Declaration

```swift
static var isPersonalVoice: AVSpeechSynthesisVoice.Traits { get }
```

<a id="Discussion"></a>

## Discussion

A user generates and owns a personal voice.

> **Note**

>  The system only makes personal voices available when [personalVoiceAuthorizationStatus](../../avspeechsynthesizer/personalvoiceauthorizationstatus-swift.type.property.md) is [AVSpeechSynthesizer.PersonalVoiceAuthorizationStatus.authorized](../../avspeechsynthesizer/personalvoiceauthorizationstatus-swift.enum/authorized.md).

## See Also

### Inspecting a voice trait

- [isNoveltyVoice](isnoveltyvoice.md): The trait that indicates a voice is a novelty voice.

# AVSpeechSynthesisVoiceTraitIsPersonalVoice (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The trait that indicates a voice is a personal voice.

## Declaration

```objectivec
AVSpeechSynthesisVoiceTraitIsPersonalVoice
```

<a id="Discussion"></a>

## Discussion

A user generates and owns a personal voice.

> **Note**

>  The system only makes personal voices available when [personalVoiceAuthorizationStatus](../../avspeechsynthesizer/personalvoiceauthorizationstatus-swift.type.property.md) is [AVSpeechSynthesisPersonalVoiceAuthorizationStatusAuthorized](../../avspeechsynthesizer/personalvoiceauthorizationstatus-swift.enum/authorized.md).

## See Also

### Inspecting a voice trait

- [AVSpeechSynthesisVoiceTraitNone](../../avspeechsynthesisvoicetraits/avspeechsynthesisvoicetraitnone.md): The trait that indicates a voice is a regular voice.
- [AVSpeechSynthesisVoiceTraitIsNoveltyVoice](isnoveltyvoice.md): The trait that indicates a voice is a novelty voice.
