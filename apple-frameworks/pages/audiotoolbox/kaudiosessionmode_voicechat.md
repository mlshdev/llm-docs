> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessionmode_voicechat](https://developer.apple.com/documentation/audiotoolbox/kaudiosessionmode_voicechat)

# kAudioSessionMode_VoiceChat (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Specify this mode if your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).

## Declaration

```swift
var kAudioSessionMode_VoiceChat: Int { get }
```

<a id="Discussion"></a>

## Discussion

When this mode is in use, the device’s tonal equalization is optimized for voice. For use with the [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md) audio session category. On devices with more than one built-in microphone, the primary microphone is used.

Using this mode has the side effect of setting the [kAudioSessionProperty_OverrideCategoryEnableBluetoothInput](kaudiosessionproperty_overridecategoryenablebluetoothinput.md) category override to `TRUE`.

This mode is equivalent to the [voiceChat](../avfaudio/avaudiosession/mode-swift.struct/voicechat.md) mode provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionMode_Default](kaudiosessionmode_default.md): Deprecated. The default mode; used unless you set a mode with the [AudioSessionSetProperty(\_:\_:\_:)](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionMode_VideoRecording](kaudiosessionmode_videorecording.md): Specify this mode if your app is recording a movie.
- [kAudioSessionMode_Measurement](kaudiosessionmode_measurement.md): Specify this mode if your app is performing measurement of incoming audio.
- [kAudioSessionMode_GameChat](kaudiosessionmode_gamechat.md)

# kAudioSessionMode_VoiceChat (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Specify this mode if your app is performing two-way voice communication, such as using Voice over Internet Protocol (VoIP).

## Declaration

```objectivec
kAudioSessionMode_VoiceChat
```

<a id="Discussion"></a>

## Discussion

When this mode is in use, the device’s tonal equalization is optimized for voice. For use with the [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md) audio session category. On devices with more than one built-in microphone, the primary microphone is used.

Using this mode has the side effect of setting the [kAudioSessionProperty_OverrideCategoryEnableBluetoothInput](kaudiosessionproperty_overridecategoryenablebluetoothinput.md) category override to `TRUE`.

This mode is equivalent to the [AVAudioSessionModeVoiceChat](../avfaudio/avaudiosession/mode-swift.struct/voicechat.md) mode provided in the AVFoundation framework.

## See Also

### Constants

- [kAudioSessionMode_Default](kaudiosessionmode_default.md): Deprecated. The default mode; used unless you set a mode with the [AudioSessionSetProperty](audiosessionsetproperty%28______%29.md) function.
- [kAudioSessionMode_VideoRecording](kaudiosessionmode_videorecording.md): Specify this mode if your app is recording a movie.
- [kAudioSessionMode_Measurement](kaudiosessionmode_measurement.md): Specify this mode if your app is performing measurement of incoming audio.
- [kAudioSessionMode_GameChat](kaudiosessionmode_gamechat.md)
