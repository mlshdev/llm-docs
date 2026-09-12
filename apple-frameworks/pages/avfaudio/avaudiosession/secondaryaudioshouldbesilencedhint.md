> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/secondaryaudioshouldbesilencedhint](https://developer.apple.com/documentation/avfaudio/avaudiosession/secondaryaudioshouldbesilencedhint)

# secondaryAudioShouldBeSilencedHint (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether another app, with a nonmixable audio session, is playing audio.

## Declaration

```swift
var secondaryAudioShouldBeSilencedHint: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Use this property as a hint to silence audio that’s secondary to the functionality of the app. For example, in a game that uses the [ambient](category-swift.struct/ambient.md) category, you can use this property to mute the soundtrack while leaving sound effects unmuted.

## See Also

### Mixing with other audio

- [isOtherAudioPlaying](isotheraudioplaying.md): A Boolean value that indicates whether another app is playing audio.
- [silenceSecondaryAudioHintNotification](silencesecondaryaudiohintnotification.md): A notification the system posts when the primary audio from other apps starts and stops.
- [allowHapticsAndSystemSoundsDuringRecording](allowhapticsandsystemsoundsduringrecording.md): A Boolean value that indicates whether system sounds and haptics play while recording from audio input.
- [setAllowHapticsAndSystemSoundsDuringRecording(\_:)](setallowhapticsandsystemsoundsduringrecording%28__%29.md): Sets a Boolean value that indicates whether system sounds and haptics play while recording from audio input.

# secondaryAudioShouldBeSilencedHint (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether another app, with a nonmixable audio session, is playing audio.

## Declaration

```objectivec
@property (readonly) BOOL secondaryAudioShouldBeSilencedHint;
```

<a id="Discussion"></a>

## Discussion

Use this property as a hint to silence audio that’s secondary to the functionality of the app. For example, in a game that uses the [AVAudioSessionCategoryAmbient](category-swift.struct/ambient.md) category, you can use this property to mute the soundtrack while leaving sound effects unmuted.

## See Also

### Mixing with other audio

- [otherAudioPlaying](isotheraudioplaying.md): A Boolean value that indicates whether another app is playing audio.
- [AVAudioSessionSilenceSecondaryAudioHintNotification](silencesecondaryaudiohintnotification.md): A notification the system posts when the primary audio from other apps starts and stops.
- [allowHapticsAndSystemSoundsDuringRecording](allowhapticsandsystemsoundsduringrecording.md): A Boolean value that indicates whether system sounds and haptics play while recording from audio input.
- [setAllowHapticsAndSystemSoundsDuringRecording:error:](setallowhapticsandsystemsoundsduringrecording%28__%29.md): Sets a Boolean value that indicates whether system sounds and haptics play while recording from audio input.
