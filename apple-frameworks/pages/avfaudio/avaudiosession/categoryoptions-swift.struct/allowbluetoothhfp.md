> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/allowbluetoothhfp](https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/allowbluetoothhfp)

# allowBluetoothHFP (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 1.0+ · iPadOS 1.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

An option that makes Bluetooth Hands-Free Profile (HFP) devices available for audio input.

## Declaration

```swift
static var allowBluetoothHFP: AVAudioSession.CategoryOptions { get }
```

<a id="discussion"></a>

## Discussion

You can use this option only with the [record](../category-swift.struct/record.md) and  [playAndRecord](../category-swift.struct/playandrecord.md) categories.

## See Also

### Category options

- [allowAirPlay](allowairplay.md): An option that determines whether you can stream audio from this session to AirPlay devices.
- [allowBluetooth](allowbluetooth.md): Deprecated. An option that determines whether Bluetooth hands-free devices appear as available input routes.
- [allowBluetoothA2DP](allowbluetootha2dp.md): An option that determines whether you can stream audio from this session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).
- [bluetoothHighQualityRecording](bluetoothhighqualityrecording.md): An option that indicates to enable high-quality audio for input and output routes.
- [defaultToSpeaker](defaulttospeaker.md): An option that determines whether audio from the session defaults to the built-in speaker instead of the receiver.
- [duckOthers](duckothers.md): An option that reduces the volume of other audio sessions while audio from this session plays.
- [farFieldInput](farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [playAndRecord](../category-swift.struct/playandrecord.md), [record](../category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [dualRoute](../mode-swift.struct/dualroute.md).
- [interruptSpokenAudioAndMixWithOthers](interruptspokenaudioandmixwithothers.md): An option that determines whether to pause spoken audio content from other sessions when your app plays its audio.
- [mixWithOthers](mixwithothers.md): An option that indicates whether audio from this session mixes with audio from active sessions in other audio apps.
- [overrideMutedMicrophoneInterruption](overridemutedmicrophoneinterruption.md): An option that indicates whether the system interrupts the audio session when it mutes the built-in microphone.

# AVAudioSessionCategoryOptionAllowBluetoothHFP (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 1.0+ · iPadOS 1.0+ · Mac Catalyst 13.1+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

An option that makes Bluetooth Hands-Free Profile (HFP) devices available for audio input.

## Declaration

```objectivec
AVAudioSessionCategoryOptionAllowBluetoothHFP
```

<a id="discussion"></a>

## Discussion

You can use this option only with the [AVAudioSessionCategoryRecord](../category-swift.struct/record.md) and  [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md) categories.

## See Also

### Category options

- [AVAudioSessionCategoryOptionAllowAirPlay](allowairplay.md): An option that determines whether you can stream audio from this session to AirPlay devices.
- [AVAudioSessionCategoryOptionAllowBluetooth](allowbluetooth.md): Deprecated. An option that determines whether Bluetooth hands-free devices appear as available input routes.
- [AVAudioSessionCategoryOptionAllowBluetoothA2DP](allowbluetootha2dp.md): An option that determines whether you can stream audio from this session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).
- [AVAudioSessionCategoryOptionBluetoothHighQualityRecording](bluetoothhighqualityrecording.md): An option that indicates to enable high-quality audio for input and output routes.
- [AVAudioSessionCategoryOptionDefaultToSpeaker](defaulttospeaker.md): An option that determines whether audio from the session defaults to the built-in speaker instead of the receiver.
- [AVAudioSessionCategoryOptionDuckOthers](duckothers.md): An option that reduces the volume of other audio sessions while audio from this session plays.
- [AVAudioSessionCategoryOptionFarFieldInput](farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md), [AVAudioSessionCategoryRecord](../category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [AVAudioSessionModeDualRoute](../mode-swift.struct/dualroute.md).
- [AVAudioSessionCategoryOptionInterruptSpokenAudioAndMixWithOthers](interruptspokenaudioandmixwithothers.md): An option that determines whether to pause spoken audio content from other sessions when your app plays its audio.
- [AVAudioSessionCategoryOptionMixWithOthers](mixwithothers.md): An option that indicates whether audio from this session mixes with audio from active sessions in other audio apps.
- [AVAudioSessionCategoryOptionOverrideMutedMicrophoneInterruption](overridemutedmicrophoneinterruption.md): An option that indicates whether the system interrupts the audio session when it mutes the built-in microphone.
