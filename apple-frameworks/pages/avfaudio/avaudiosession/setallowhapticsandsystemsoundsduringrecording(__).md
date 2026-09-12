> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/setallowhapticsandsystemsoundsduringrecording(_:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/setallowhapticsandsystemsoundsduringrecording(_:))

# setAllowHapticsAndSystemSoundsDuringRecording(\_:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a Boolean value that indicates whether system sounds and haptics play while recording from audio input.

## Declaration

```swift
func setAllowHapticsAndSystemSoundsDuringRecording(_ inValue: Bool) throws
```

## Parameters

- `inValue`: A Boolean value that indicates whether haptics and system sounds should play while recording is in progress.

## See Also

### Mixing with other audio

- [isOtherAudioPlaying](isotheraudioplaying.md): A Boolean value that indicates whether another app is playing audio.
- [secondaryAudioShouldBeSilencedHint](secondaryaudioshouldbesilencedhint.md): A Boolean value that indicates whether another app, with a nonmixable audio session, is playing audio.
- [silenceSecondaryAudioHintNotification](silencesecondaryaudiohintnotification.md): A notification the system posts when the primary audio from other apps starts and stops.
- [allowHapticsAndSystemSoundsDuringRecording](allowhapticsandsystemsoundsduringrecording.md): A Boolean value that indicates whether system sounds and haptics play while recording from audio input.

# setAllowHapticsAndSystemSoundsDuringRecording:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets a Boolean value that indicates whether system sounds and haptics play while recording from audio input.

## Declaration

```objectivec
- (BOOL) setAllowHapticsAndSystemSoundsDuringRecording:(BOOL) inValue error:(NSError **) outError;
```

## Parameters

- `inValue`: A Boolean value that indicates whether haptics and system sounds should play while recording is in progress.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

## See Also

### Mixing with other audio

- [otherAudioPlaying](isotheraudioplaying.md): A Boolean value that indicates whether another app is playing audio.
- [secondaryAudioShouldBeSilencedHint](secondaryaudioshouldbesilencedhint.md): A Boolean value that indicates whether another app, with a nonmixable audio session, is playing audio.
- [AVAudioSessionSilenceSecondaryAudioHintNotification](silencesecondaryaudiohintnotification.md): A notification the system posts when the primary audio from other apps starts and stops.
- [allowHapticsAndSystemSoundsDuringRecording](allowhapticsandsystemsoundsduringrecording.md): A Boolean value that indicates whether system sounds and haptics play while recording from audio input.
