> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/isotheraudioplaying](https://developer.apple.com/documentation/avfaudio/avaudiosession/isotheraudioplaying)

# isOtherAudioPlaying (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether another app is playing audio.

## Declaration

```swift
var isOtherAudioPlaying: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property returns [true](https://developer.apple.com/documentation/swift/true) if any other audio is playing, including audio from an app using the [ambient](category-swift.struct/ambient.md) category. Most apps should instead use the [secondaryAudioShouldBeSilencedHint](secondaryaudioshouldbesilencedhint.md) property, because it’s more restrictive when considering whether primary audio from another app is playing.

## See Also

### Mixing with other audio

- [secondaryAudioShouldBeSilencedHint](secondaryaudioshouldbesilencedhint.md): A Boolean value that indicates whether another app, with a nonmixable audio session, is playing audio.
- [silenceSecondaryAudioHintNotification](silencesecondaryaudiohintnotification.md): A notification the system posts when the primary audio from other apps starts and stops.
- [allowHapticsAndSystemSoundsDuringRecording](allowhapticsandsystemsoundsduringrecording.md): A Boolean value that indicates whether system sounds and haptics play while recording from audio input.
- [setAllowHapticsAndSystemSoundsDuringRecording(\_:)](setallowhapticsandsystemsoundsduringrecording%28__%29.md): Sets a Boolean value that indicates whether system sounds and haptics play while recording from audio input.

# otherAudioPlaying (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether another app is playing audio.

## Declaration

```objectivec
@property (readonly, getter=isOtherAudioPlaying) BOOL otherAudioPlaying;
```

<a id="Discussion"></a>

## Discussion

This property returns [true](https://developer.apple.com/documentation/swift/true) if any other audio is playing, including audio from an app using the [AVAudioSessionCategoryAmbient](category-swift.struct/ambient.md) category. Most apps should instead use the [secondaryAudioShouldBeSilencedHint](secondaryaudioshouldbesilencedhint.md) property, because it’s more restrictive when considering whether primary audio from another app is playing.

## See Also

### Mixing with other audio

- [secondaryAudioShouldBeSilencedHint](secondaryaudioshouldbesilencedhint.md): A Boolean value that indicates whether another app, with a nonmixable audio session, is playing audio.
- [AVAudioSessionSilenceSecondaryAudioHintNotification](silencesecondaryaudiohintnotification.md): A notification the system posts when the primary audio from other apps starts and stops.
- [allowHapticsAndSystemSoundsDuringRecording](allowhapticsandsystemsoundsduringrecording.md): A Boolean value that indicates whether system sounds and haptics play while recording from audio input.
- [setAllowHapticsAndSystemSoundsDuringRecording:error:](setallowhapticsandsystemsoundsduringrecording%28__%29.md): Sets a Boolean value that indicates whether system sounds and haptics play while recording from audio input.
