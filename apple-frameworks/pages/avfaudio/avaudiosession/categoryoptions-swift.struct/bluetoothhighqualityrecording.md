> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/bluetoothhighqualityrecording](https://developer.apple.com/documentation/avfaudio/avaudiosession/categoryoptions-swift.struct/bluetoothhighqualityrecording)

# bluetoothHighQualityRecording (Swift)

**Framework:** AVFAudio  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An option that indicates to enable high-quality audio for input and output routes.

## Declaration

```swift
static var bluetoothHighQualityRecording: AVAudioSession.CategoryOptions { get }
```

<a id="discussion"></a>

## Discussion

Specifying this option enables full-bandwidth audio when the Bluetooth route supports it, such as on certain AirPods models. You can combine it with the [allowBluetoothHFP](allowbluetoothhfp.md) option, which the audio session uses as a fallback when the audio route doesn’t support the feature. You can request high-quality recording only when using the [default](../mode-swift.struct/default.md) audio session mode.

> **Important**

> Bluetooth high-quality recording isn’t currently supported in the European Union.

To determine whether a Bluetooth input port supports high-quality recording, access its [bluetoothMicrophoneExtension](../../avaudiosessionportdescription/bluetoothmicrophoneextension.md) and query the extension’s [highQualityRecording](../../avaudiosessionportextensionbluetoothmicrophone/highqualityrecording.md) capability like shown below:

```swift
let audioSession = AVAudioSession.sharedInstance()
// Get the input port description for the current route.
guard let inputPort = audioSession.currentRoute.inputs.first else { return }
// Access the Bluetooth microphone extension, if it exists.
guard let micExtension = inputPort.bluetoothMicrophoneExtension else { return }
// Query the extension's high-quality recording capability.
if micExtension.highQualityRecording.isSupported {
    // The Bluetooth input supports high-quality recording.
}
```

Similarly, you can query the high-quality recording capability’s [isEnabled](../../avaudiosessioncapability/isenabled.md) property to determine whether this feature is in an enabled state for the active session.

If your app uses high-quality recording, consider setting [setPrefersNoInterruptionsFromSystemAlerts(\_:)](../setprefersnointerruptionsfromsystemalerts%28__%29.md) while recording, to avoid the recording session being interrupted by an incoming call ringtone.

> **Note**

> This option may increase input latency when enabled and isn’t recommended for real-time communication usage.

## See Also

### Category options

- [allowAirPlay](allowairplay.md): An option that determines whether you can stream audio from this session to AirPlay devices.
- [allowBluetooth](allowbluetooth.md): Deprecated. An option that determines whether Bluetooth hands-free devices appear as available input routes.
- [allowBluetoothA2DP](allowbluetootha2dp.md): An option that determines whether you can stream audio from this session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).
- [allowBluetoothHFP](allowbluetoothhfp.md): An option that makes Bluetooth Hands-Free Profile (HFP) devices available for audio input.
- [defaultToSpeaker](defaulttospeaker.md): An option that determines whether audio from the session defaults to the built-in speaker instead of the receiver.
- [duckOthers](duckothers.md): An option that reduces the volume of other audio sessions while audio from this session plays.
- [farFieldInput](farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [playAndRecord](../category-swift.struct/playandrecord.md), [record](../category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [dualRoute](../mode-swift.struct/dualroute.md).
- [interruptSpokenAudioAndMixWithOthers](interruptspokenaudioandmixwithothers.md): An option that determines whether to pause spoken audio content from other sessions when your app plays its audio.
- [mixWithOthers](mixwithothers.md): An option that indicates whether audio from this session mixes with audio from active sessions in other audio apps.
- [overrideMutedMicrophoneInterruption](overridemutedmicrophoneinterruption.md): An option that indicates whether the system interrupts the audio session when it mutes the built-in microphone.

# AVAudioSessionCategoryOptionBluetoothHighQualityRecording (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An option that indicates to enable high-quality audio for input and output routes.

## Declaration

```objectivec
AVAudioSessionCategoryOptionBluetoothHighQualityRecording
```

<a id="discussion"></a>

## Discussion

Specifying this option enables full-bandwidth audio when the Bluetooth route supports it, such as on certain AirPods models. You can combine it with the [AVAudioSessionCategoryOptionAllowBluetoothHFP](allowbluetoothhfp.md) option, which the audio session uses as a fallback when the audio route doesn’t support the feature. You can request high-quality recording only when using the [AVAudioSessionModeDefault](../mode-swift.struct/default.md) audio session mode.

> **Important**

> Bluetooth high-quality recording isn’t currently supported in the European Union.

To determine whether a Bluetooth input port supports high-quality recording, access its [bluetoothMicrophoneExtension](../../avaudiosessionportdescription/bluetoothmicrophoneextension.md) and query the extension’s [highQualityRecording](../../avaudiosessionportextensionbluetoothmicrophone/highqualityrecording.md) capability like shown below:

```swift
let audioSession = AVAudioSession.sharedInstance()
// Get the input port description for the current route.
guard let inputPort = audioSession.currentRoute.inputs.first else { return }
// Access the Bluetooth microphone extension, if it exists.
guard let micExtension = inputPort.bluetoothMicrophoneExtension else { return }
// Query the extension's high-quality recording capability.
if micExtension.highQualityRecording.isSupported {
    // The Bluetooth input supports high-quality recording.
}
```

Similarly, you can query the high-quality recording capability’s [enabled](../../avaudiosessioncapability/isenabled.md) property to determine whether this feature is in an enabled state for the active session.

If your app uses high-quality recording, consider setting [setPrefersNoInterruptionsFromSystemAlerts:error:](../setprefersnointerruptionsfromsystemalerts%28__%29.md) while recording, to avoid the recording session being interrupted by an incoming call ringtone.

> **Note**

> This option may increase input latency when enabled and isn’t recommended for real-time communication usage.

## See Also

### Category options

- [AVAudioSessionCategoryOptionAllowAirPlay](allowairplay.md): An option that determines whether you can stream audio from this session to AirPlay devices.
- [AVAudioSessionCategoryOptionAllowBluetooth](allowbluetooth.md): Deprecated. An option that determines whether Bluetooth hands-free devices appear as available input routes.
- [AVAudioSessionCategoryOptionAllowBluetoothA2DP](allowbluetootha2dp.md): An option that determines whether you can stream audio from this session to Bluetooth devices that support the Advanced Audio Distribution Profile (A2DP).
- [AVAudioSessionCategoryOptionAllowBluetoothHFP](allowbluetoothhfp.md): An option that makes Bluetooth Hands-Free Profile (HFP) devices available for audio input.
- [AVAudioSessionCategoryOptionDefaultToSpeaker](defaulttospeaker.md): An option that determines whether audio from the session defaults to the built-in speaker instead of the receiver.
- [AVAudioSessionCategoryOptionDuckOthers](duckothers.md): An option that reduces the volume of other audio sessions while audio from this session plays.
- [AVAudioSessionCategoryOptionFarFieldInput](farfieldinput.md): This option should be used if a session prefers to use FarFieldInput when available. This option is only valid with categories that support input - [AVAudioSessionCategoryPlayAndRecord](../category-swift.struct/playandrecord.md), [AVAudioSessionCategoryRecord](../category-swift.struct/record.md), and `AVAudioSessionMultiRoute` with [AVAudioSessionModeDualRoute](../mode-swift.struct/dualroute.md).
- [AVAudioSessionCategoryOptionInterruptSpokenAudioAndMixWithOthers](interruptspokenaudioandmixwithothers.md): An option that determines whether to pause spoken audio content from other sessions when your app plays its audio.
- [AVAudioSessionCategoryOptionMixWithOthers](mixwithothers.md): An option that indicates whether audio from this session mixes with audio from active sessions in other audio apps.
- [AVAudioSessionCategoryOptionOverrideMutedMicrophoneInterruption](overridemutedmicrophoneinterruption.md): An option that indicates whether the system interrupts the audio session when it mutes the built-in microphone.
