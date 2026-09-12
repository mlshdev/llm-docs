> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/allowhapticsandsystemsoundsduringrecording](https://developer.apple.com/documentation/avfaudio/avaudiosession/allowhapticsandsystemsoundsduringrecording)

# allowHapticsAndSystemSoundsDuringRecording (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether system sounds and haptics play while recording from audio input.

## Declaration

```swift
var allowHapticsAndSystemSoundsDuringRecording: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Mixing with other audio

- [isOtherAudioPlaying](isotheraudioplaying.md): A Boolean value that indicates whether another app is playing audio.
- [secondaryAudioShouldBeSilencedHint](secondaryaudioshouldbesilencedhint.md): A Boolean value that indicates whether another app, with a nonmixable audio session, is playing audio.
- [silenceSecondaryAudioHintNotification](silencesecondaryaudiohintnotification.md): A notification the system posts when the primary audio from other apps starts and stops.
- [setAllowHapticsAndSystemSoundsDuringRecording(\_:)](setallowhapticsandsystemsoundsduringrecording%28__%29.md): Sets a Boolean value that indicates whether system sounds and haptics play while recording from audio input.

# allowHapticsAndSystemSoundsDuringRecording (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether system sounds and haptics play while recording from audio input.

## Declaration

```objectivec
@property (readonly) BOOL allowHapticsAndSystemSoundsDuringRecording;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Mixing with other audio

- [otherAudioPlaying](isotheraudioplaying.md): A Boolean value that indicates whether another app is playing audio.
- [secondaryAudioShouldBeSilencedHint](secondaryaudioshouldbesilencedhint.md): A Boolean value that indicates whether another app, with a nonmixable audio session, is playing audio.
- [AVAudioSessionSilenceSecondaryAudioHintNotification](silencesecondaryaudiohintnotification.md): A notification the system posts when the primary audio from other apps starts and stops.
- [setAllowHapticsAndSystemSoundsDuringRecording:error:](setallowhapticsandsystemsoundsduringrecording%28__%29.md): Sets a Boolean value that indicates whether system sounds and haptics play while recording from audio input.
