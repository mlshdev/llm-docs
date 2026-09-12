> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/silencesecondaryaudiohintnotification](https://developer.apple.com/documentation/avfaudio/avaudiosession/silencesecondaryaudiohintnotification)

# silenceSecondaryAudioHintNotification (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification the system posts when the primary audio from other apps starts and stops.

## Declaration

```swift
class let silenceSecondaryAudioHintNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

Subscribe to this notification to ensure that the system notifies your app when optional secondary audio muting should begin or end. The system sends this notification only to registered listeners who are currently in the foreground and have an active audio session.

This notification’s [userInfo](../../foundation/nsnotification/userinfo.md) dictionary contains a [AVAudioSession.SilenceSecondaryAudioHintType](silencesecondaryaudiohinttype.md) value for the [AVAudioSessionSilenceSecondaryAudioHintTypeKey](../avaudiosessionsilencesecondaryaudiohinttypekey.md). Use the audio hint type to determine if your secondary audio muting should begin or end.

```swift
func handleSecondaryAudio(notification: Notification) {
    // Determine hint type
    guard let userInfo = notification.userInfo,
        let typeValue = userInfo[AVAudioSessionSilenceSecondaryAudioHintTypeKey] as? UInt,
        let type = AVAudioSession.SilenceSecondaryAudioHintType(rawValue: typeValue) else {
            return
    }
    
    if type == .begin {
        // Other app audio started playing - mute secondary audio.
    } else {
        // Other app audio stopped playing - restart secondary audio.
    }
}
```

The system posts this notification on the main thread.

## Topics

### User Info Keys

- [AVAudioSessionSilenceSecondaryAudioHintTypeKey](../avaudiosessionsilencesecondaryaudiohinttypekey.md): A user info key that you use to retrieve the silence secondary audio hint type.

### User Info Values

- [AVAudioSession.SilenceSecondaryAudioHintType](silencesecondaryaudiohinttype.md): Constants that indicate whether optional secondary audio muting should begin or end.

## See Also

### Mixing with other audio

- [isOtherAudioPlaying](isotheraudioplaying.md): A Boolean value that indicates whether another app is playing audio.
- [secondaryAudioShouldBeSilencedHint](secondaryaudioshouldbesilencedhint.md): A Boolean value that indicates whether another app, with a nonmixable audio session, is playing audio.
- [allowHapticsAndSystemSoundsDuringRecording](allowhapticsandsystemsoundsduringrecording.md): A Boolean value that indicates whether system sounds and haptics play while recording from audio input.
- [setAllowHapticsAndSystemSoundsDuringRecording(\_:)](setallowhapticsandsystemsoundsduringrecording%28__%29.md): Sets a Boolean value that indicates whether system sounds and haptics play while recording from audio input.

# AVAudioSessionSilenceSecondaryAudioHintNotification (Objective-C)

**Framework:** AVFAudio  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A notification the system posts when the primary audio from other apps starts and stops.

## Declaration

```objectivec
extern NSNotificationName const AVAudioSessionSilenceSecondaryAudioHintNotification;
```

<a id="Discussion"></a>

## Discussion

Subscribe to this notification to ensure that the system notifies your app when optional secondary audio muting should begin or end. The system sends this notification only to registered listeners who are currently in the foreground and have an active audio session.

This notification’s [userInfo](../../foundation/nsnotification/userinfo.md) dictionary contains a [AVAudioSessionSilenceSecondaryAudioHintType](silencesecondaryaudiohinttype.md) value for the [AVAudioSessionSilenceSecondaryAudioHintTypeKey](../avaudiosessionsilencesecondaryaudiohinttypekey.md). Use the audio hint type to determine if your secondary audio muting should begin or end.

```swift
func handleSecondaryAudio(notification: Notification) {
    // Determine hint type
    guard let userInfo = notification.userInfo,
        let typeValue = userInfo[AVAudioSessionSilenceSecondaryAudioHintTypeKey] as? UInt,
        let type = AVAudioSession.SilenceSecondaryAudioHintType(rawValue: typeValue) else {
            return
    }
    
    if type == .begin {
        // Other app audio started playing - mute secondary audio.
    } else {
        // Other app audio stopped playing - restart secondary audio.
    }
}
```

The system posts this notification on the main thread.

## Topics

### User Info Keys

- [AVAudioSessionSilenceSecondaryAudioHintTypeKey](../avaudiosessionsilencesecondaryaudiohinttypekey.md): A user info key that you use to retrieve the silence secondary audio hint type.

### User Info Values

- [AVAudioSessionSilenceSecondaryAudioHintType](silencesecondaryaudiohinttype.md): Constants that indicate whether optional secondary audio muting should begin or end.

## See Also

### Mixing with other audio

- [otherAudioPlaying](isotheraudioplaying.md): A Boolean value that indicates whether another app is playing audio.
- [secondaryAudioShouldBeSilencedHint](secondaryaudioshouldbesilencedhint.md): A Boolean value that indicates whether another app, with a nonmixable audio session, is playing audio.
- [allowHapticsAndSystemSoundsDuringRecording](allowhapticsandsystemsoundsduringrecording.md): A Boolean value that indicates whether system sounds and haptics play while recording from audio input.
- [setAllowHapticsAndSystemSoundsDuringRecording:error:](setallowhapticsandsystemsoundsduringrecording%28__%29.md): Sets a Boolean value that indicates whether system sounds and haptics play while recording from audio input.
