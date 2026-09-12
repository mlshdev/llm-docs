> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/overridemutedmicrophoneinterruption](https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/overridemutedmicrophoneinterruption)

# overrideMutedMicrophoneInterruption (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+ · watchOS 7.3+

An option that indicates whether the system interrupts the audio session when it mutes the built-in microphone.

## Declaration

```swift
static var overrideMutedMicrophoneInterruption: AVAudioSession.CategoryOptions { get }
```

## Mentioned In

- [Handling audio interruptions](../../handling-audio-interruptions.md)

<a id="Discussion"></a>

## Discussion

Some devices include a privacy feature that mutes the built-in microphone at the hardware level in certain conditions, such as when you close the Smart Folio cover of an iPad. When this occurs, the system interrupts the audio session that’s capturing input from the microphone. Attempting to start audio input after the system mutes the microphone results in an error.

If your app uses an audio session category that supports input and output, such as [playAndRecord](../category-swift.struct/playandrecord.md), you can set this option to disable the default behavior and continue using the session. Disabling the default behavior may be useful to allow your app to continue playback when recording or monitoring a muted microphone doesn’t lead to a poor user experience. When you set this option, playback continues as normal, and the microphone hardware produces sample buffers, but with values of `0`.

> **Important**

>  Attempting to use this option with a session category that doesn’t support audio input results in an error.

## See Also

### Category options

- [allowAirPlay](allowairplay.md): An option that determines whether you can stream audio from this session to AirPlay devices.
- [allowBluetooth](allowbluetooth.md): Deprecated. An option that determines whether Bluetooth hands-free devices appear as available input routes.
- [allowBluetoothA2DP](allowbluetootha2dp.md): An option that determines whether you can stream audio from this session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).
- [allowBluetoothHFP](allowbluetoothhfp.md): An option that makes Bluetooth Hands-Free Profile (HFP) devices available for audio input.
- [bluetoothHighQualityRecording](bluetoothhighqualityrecording.md): An option that indicates to enable high-quality audio for input and output routes.
- [defaultToSpeaker](defaulttospeaker.md): An option that determines whether audio from the session defaults to the built-in speaker instead of the receiver.
- [duckOthers](duckothers.md): An option that reduces the volume of other audio sessions while audio from this session plays.
- [farFieldInput](farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [playAndRecord](../category-swift.struct/playandrecord.md), [record](../category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [dualRoute](../mode-swift.struct/dualroute.md).
- [interruptSpokenAudioAndMixWithOthers](interruptspokenaudioandmixwithothers.md): An option that determines whether to pause spoken audio content from other sessions when your app plays its audio.
- [mixWithOthers](mixwithothers.md): An option that indicates whether audio from this session mixes with audio from active sessions in other audio apps.

# AVAudioSessionCategoryOptionOverrideMutedMicrophoneInterruption (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · visionOS 1.0+ · watchOS 7.3+

An option that indicates whether the system interrupts the audio session when it mutes the built-in microphone.

## Declaration

```objectivec
AVAudioSessionCategoryOptionOverrideMutedMicrophoneInterruption
```

## Mentioned In

- [Handling audio interruptions](../../handling-audio-interruptions.md)

<a id="Discussion"></a>

## Discussion

Some devices include a privacy feature that mutes the built-in microphone at the hardware level in certain conditions, such as when you close the Smart Folio cover of an iPad. When this occurs, the system interrupts the audio session that’s capturing input from the microphone. Attempting to start audio input after the system mutes the microphone results in an error.

If your app uses an audio session category that supports input and output, such as [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md), you can set this option to disable the default behavior and continue using the session. Disabling the default behavior may be useful to allow your app to continue playback when recording or monitoring a muted microphone doesn’t lead to a poor user experience. When you set this option, playback continues as normal, and the microphone hardware produces sample buffers, but with values of `0`.

> **Important**

>  Attempting to use this option with a session category that doesn’t support audio input results in an error.

## See Also

### Category options

- [AVAudioSessionCategoryOptionAllowAirPlay](allowairplay.md): An option that determines whether you can stream audio from this session to AirPlay devices.
- [AVAudioSessionCategoryOptionAllowBluetooth](allowbluetooth.md): Deprecated. An option that determines whether Bluetooth hands-free devices appear as available input routes.
- [AVAudioSessionCategoryOptionAllowBluetoothA2DP](allowbluetootha2dp.md): An option that determines whether you can stream audio from this session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).
- [AVAudioSessionCategoryOptionAllowBluetoothHFP](allowbluetoothhfp.md): An option that makes Bluetooth Hands-Free Profile (HFP) devices available for audio input.
- [AVAudioSessionCategoryOptionBluetoothHighQualityRecording](bluetoothhighqualityrecording.md): An option that indicates to enable high-quality audio for input and output routes.
- [AVAudioSessionCategoryOptionDefaultToSpeaker](defaulttospeaker.md): An option that determines whether audio from the session defaults to the built-in speaker instead of the receiver.
- [AVAudioSessionCategoryOptionDuckOthers](duckothers.md): An option that reduces the volume of other audio sessions while audio from this session plays.
- [AVAudioSessionCategoryOptionFarFieldInput](farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md), [AVAudioSessionCategoryRecord](../category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [AVAudioSessionModeDualRoute](../mode-swift.struct/dualroute.md).
- [AVAudioSessionCategoryOptionInterruptSpokenAudioAndMixWithOthers](interruptspokenaudioandmixwithothers.md): An option that determines whether to pause spoken audio content from other sessions when your app plays its audio.
- [AVAudioSessionCategoryOptionMixWithOthers](mixwithothers.md): An option that indicates whether audio from this session mixes with audio from active sessions in other audio apps.
