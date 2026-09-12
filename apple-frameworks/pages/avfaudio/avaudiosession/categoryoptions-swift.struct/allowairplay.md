> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/allowairplay](https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/allowairplay)

# allowAirPlay (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

An option that determines whether you can stream audio from this session to AirPlay devices.

## Declaration

```swift
static var allowAirPlay: AVAudioSession.CategoryOptions { get }
```

<a id="Discussion"></a>

## Discussion

Setting this option enables the audio session to route audio output to AirPlay devices. You can only explicitly set this option if the audio session’s category is set to [playAndRecord](../category-swift.struct/playandrecord.md). For most other audio session categories, the system sets this option implicitly.

Audio sessions using the [multiRoute](../category-swift.struct/multiroute.md) or [record](../category-swift.struct/record.md) categories implicitly clear this option.

## See Also

### Category options

- [allowBluetooth](allowbluetooth.md): Deprecated. An option that determines whether Bluetooth hands-free devices appear as available input routes.
- [allowBluetoothA2DP](allowbluetootha2dp.md): An option that determines whether you can stream audio from this session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).
- [allowBluetoothHFP](allowbluetoothhfp.md): An option that makes Bluetooth Hands-Free Profile (HFP) devices available for audio input.
- [bluetoothHighQualityRecording](bluetoothhighqualityrecording.md): An option that indicates to enable high-quality audio for input and output routes.
- [defaultToSpeaker](defaulttospeaker.md): An option that determines whether audio from the session defaults to the built-in speaker instead of the receiver.
- [duckOthers](duckothers.md): An option that reduces the volume of other audio sessions while audio from this session plays.
- [farFieldInput](farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [playAndRecord](../category-swift.struct/playandrecord.md), [record](../category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [dualRoute](../mode-swift.struct/dualroute.md).
- [interruptSpokenAudioAndMixWithOthers](interruptspokenaudioandmixwithothers.md): An option that determines whether to pause spoken audio content from other sessions when your app plays its audio.
- [mixWithOthers](mixwithothers.md): An option that indicates whether audio from this session mixes with audio from active sessions in other audio apps.
- [overrideMutedMicrophoneInterruption](overridemutedmicrophoneinterruption.md): An option that indicates whether the system interrupts the audio session when it mutes the built-in microphone.

# AVAudioSessionCategoryOptionAllowAirPlay (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

An option that determines whether you can stream audio from this session to AirPlay devices.

## Declaration

```objectivec
AVAudioSessionCategoryOptionAllowAirPlay
```

<a id="Discussion"></a>

## Discussion

Setting this option enables the audio session to route audio output to AirPlay devices. You can only explicitly set this option if the audio session’s category is set to [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md). For most other audio session categories, the system sets this option implicitly.

Audio sessions using the [AVAudioSessionCategoryMultiRoute](../category-swift.struct/multiroute.md) or [AVAudioSessionCategoryRecord](../category-swift.struct/record.md) categories implicitly clear this option.

## See Also

### Category options

- [AVAudioSessionCategoryOptionAllowBluetooth](allowbluetooth.md): Deprecated. An option that determines whether Bluetooth hands-free devices appear as available input routes.
- [AVAudioSessionCategoryOptionAllowBluetoothA2DP](allowbluetootha2dp.md): An option that determines whether you can stream audio from this session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).
- [AVAudioSessionCategoryOptionAllowBluetoothHFP](allowbluetoothhfp.md): An option that makes Bluetooth Hands-Free Profile (HFP) devices available for audio input.
- [AVAudioSessionCategoryOptionBluetoothHighQualityRecording](bluetoothhighqualityrecording.md): An option that indicates to enable high-quality audio for input and output routes.
- [AVAudioSessionCategoryOptionDefaultToSpeaker](defaulttospeaker.md): An option that determines whether audio from the session defaults to the built-in speaker instead of the receiver.
- [AVAudioSessionCategoryOptionDuckOthers](duckothers.md): An option that reduces the volume of other audio sessions while audio from this session plays.
- [AVAudioSessionCategoryOptionFarFieldInput](farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md), [AVAudioSessionCategoryRecord](../category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [AVAudioSessionModeDualRoute](../mode-swift.struct/dualroute.md).
- [AVAudioSessionCategoryOptionInterruptSpokenAudioAndMixWithOthers](interruptspokenaudioandmixwithothers.md): An option that determines whether to pause spoken audio content from other sessions when your app plays its audio.
- [AVAudioSessionCategoryOptionMixWithOthers](mixwithothers.md): An option that indicates whether audio from this session mixes with audio from active sessions in other audio apps.
- [AVAudioSessionCategoryOptionOverrideMutedMicrophoneInterruption](overridemutedmicrophoneinterruption.md): An option that indicates whether the system interrupts the audio session when it mutes the built-in microphone.
