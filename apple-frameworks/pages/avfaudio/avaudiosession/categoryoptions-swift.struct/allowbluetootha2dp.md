> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/allowbluetootha2dp](https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/allowbluetootha2dp)

# allowBluetoothA2DP (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An option that determines whether you can stream audio from this session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).

## Declaration

```swift
static var allowBluetoothA2DP: AVAudioSession.CategoryOptions { get }
```

<a id="Discussion"></a>

## Discussion

A2DP is a stereo, output-only profile intended for higher bandwidth audio use cases, such as music playback. The system automatically routes to A2DP ports if you configure an app’s audio session to use the [ambient](../category-swift.struct/ambient.md), [soloAmbient](../category-swift.struct/soloambient.md), or [playback](../category-swift.struct/playback.md) categories.

Starting with iOS 10.0, apps using the [playAndRecord](../category-swift.struct/playandrecord.md) category may also allow routing output to paired Bluetooth A2DP devices. To enable this behavior, pass this category option when setting your audio session’s category.

Audio sessions using the [multiRoute](../category-swift.struct/multiroute.md) or [record](../category-swift.struct/record.md) categories implicitly clear this option. If you clear it, paired Bluetooth A2DP devices don’t show up as available audio output routes.

> **Note**

>  If this option and the [allowBluetooth](allowbluetooth.md) option are both set, when a single device supports both the Hands-Free Profile (HFP) and A2DP, the system gives hands-free ports a higher priority for routing.

## See Also

### Category options

- [allowAirPlay](allowairplay.md): An option that determines whether you can stream audio from this session to AirPlay devices.
- [allowBluetooth](allowbluetooth.md): Deprecated. An option that determines whether Bluetooth hands-free devices appear as available input routes.
- [allowBluetoothHFP](allowbluetoothhfp.md): An option that makes Bluetooth Hands-Free Profile (HFP) devices available for audio input.
- [bluetoothHighQualityRecording](bluetoothhighqualityrecording.md): An option that indicates to enable high-quality audio for input and output routes.
- [defaultToSpeaker](defaulttospeaker.md): An option that determines whether audio from the session defaults to the built-in speaker instead of the receiver.
- [duckOthers](duckothers.md): An option that reduces the volume of other audio sessions while audio from this session plays.
- [farFieldInput](farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [playAndRecord](../category-swift.struct/playandrecord.md), [record](../category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [dualRoute](../mode-swift.struct/dualroute.md).
- [interruptSpokenAudioAndMixWithOthers](interruptspokenaudioandmixwithothers.md): An option that determines whether to pause spoken audio content from other sessions when your app plays its audio.
- [mixWithOthers](mixwithothers.md): An option that indicates whether audio from this session mixes with audio from active sessions in other audio apps.
- [overrideMutedMicrophoneInterruption](overridemutedmicrophoneinterruption.md): An option that indicates whether the system interrupts the audio session when it mutes the built-in microphone.

# AVAudioSessionCategoryOptionAllowBluetoothA2DP (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An option that determines whether you can stream audio from this session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).

## Declaration

```objectivec
AVAudioSessionCategoryOptionAllowBluetoothA2DP
```

<a id="Discussion"></a>

## Discussion

A2DP is a stereo, output-only profile intended for higher bandwidth audio use cases, such as music playback. The system automatically routes to A2DP ports if you configure an app’s audio session to use the [AVAudioSessionCategoryAmbient](../category-swift.struct/ambient.md), [AVAudioSessionCategorySoloAmbient](../category-swift.struct/soloambient.md), or [AVAudioSessionCategoryPlayback](../category-swift.struct/playback.md) categories.

Starting with iOS 10.0, apps using the [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md) category may also allow routing output to paired Bluetooth A2DP devices. To enable this behavior, pass this category option when setting your audio session’s category.

Audio sessions using the [AVAudioSessionCategoryMultiRoute](../category-swift.struct/multiroute.md) or [AVAudioSessionCategoryRecord](../category-swift.struct/record.md) categories implicitly clear this option. If you clear it, paired Bluetooth A2DP devices don’t show up as available audio output routes.

> **Note**

>  If this option and the [AVAudioSessionCategoryOptionAllowBluetooth](allowbluetooth.md) option are both set, when a single device supports both the Hands-Free Profile (HFP) and A2DP, the system gives hands-free ports a higher priority for routing.

## See Also

### Category options

- [AVAudioSessionCategoryOptionAllowAirPlay](allowairplay.md): An option that determines whether you can stream audio from this session to AirPlay devices.
- [AVAudioSessionCategoryOptionAllowBluetooth](allowbluetooth.md): Deprecated. An option that determines whether Bluetooth hands-free devices appear as available input routes.
- [AVAudioSessionCategoryOptionAllowBluetoothHFP](allowbluetoothhfp.md): An option that makes Bluetooth Hands-Free Profile (HFP) devices available for audio input.
- [AVAudioSessionCategoryOptionBluetoothHighQualityRecording](bluetoothhighqualityrecording.md): An option that indicates to enable high-quality audio for input and output routes.
- [AVAudioSessionCategoryOptionDefaultToSpeaker](defaulttospeaker.md): An option that determines whether audio from the session defaults to the built-in speaker instead of the receiver.
- [AVAudioSessionCategoryOptionDuckOthers](duckothers.md): An option that reduces the volume of other audio sessions while audio from this session plays.
- [AVAudioSessionCategoryOptionFarFieldInput](farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md), [AVAudioSessionCategoryRecord](../category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [AVAudioSessionModeDualRoute](../mode-swift.struct/dualroute.md).
- [AVAudioSessionCategoryOptionInterruptSpokenAudioAndMixWithOthers](interruptspokenaudioandmixwithothers.md): An option that determines whether to pause spoken audio content from other sessions when your app plays its audio.
- [AVAudioSessionCategoryOptionMixWithOthers](mixwithothers.md): An option that indicates whether audio from this session mixes with audio from active sessions in other audio apps.
- [AVAudioSessionCategoryOptionOverrideMutedMicrophoneInterruption](overridemutedmicrophoneinterruption.md): An option that indicates whether the system interrupts the audio session when it mutes the built-in microphone.
