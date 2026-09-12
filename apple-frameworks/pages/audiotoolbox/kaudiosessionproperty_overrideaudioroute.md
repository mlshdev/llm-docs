> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessionproperty_overrideaudioroute](https://developer.apple.com/documentation/audiotoolbox/kaudiosessionproperty_overrideaudioroute)

# kAudioSessionProperty_OverrideAudioRoute (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Specifies whether or not to override the audio session category’s typical audio route.

## Declaration

```swift
var kAudioSessionProperty_OverrideAudioRoute: Int { get }
```

<a id="Discussion"></a>

## Discussion

A write-only `UInt32` value. Can be set with one of two values: [kAudioSessionOverrideAudioRoute_None](kaudiosessionoverrideaudioroute_none.md), which specifies that you want to use the typical audio route; and [kAudioSessionOverrideAudioRoute_Speaker](kaudiosessionoverrideaudioroute_speaker.md), when sends output audio to the built-in speaker. This property can be used only with the [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md) (or the equivalent [playAndRecord](../avfaudio/avaudiosession/category-swift.struct/playandrecord.md)) category.

If a headset is plugged in at the time you set this property’s value to [kAudioSessionOverrideAudioRoute_Speaker](kaudiosessionoverrideaudioroute_speaker.md), the system changes the audio routing for input as well as for output: input comes from the built-in microphone; output goes to the built-in speaker.

Upon an audio route change (such as by plugging in or unplugging a headset), or upon interruption, this property reverts to its default value.

See also [kAudioSessionProperty_OverrideCategoryDefaultToSpeaker](kaudiosessionproperty_overridecategorydefaulttospeaker.md).

## See Also

### Constants

- [kAudioSessionProperty_PreferredHardwareSampleRate](kaudiosessionproperty_preferredhardwaresamplerate.md): Deprecated. Your preferred hardware sample rate for the audio session. A read/write `Float64` value. The actual sample rate may be different and can be obtained using the `kAudioSessionProperty_CurrentHardwareSampleRate` property.
- [kAudioSessionProperty_PreferredHardwareIOBufferDuration](kaudiosessionproperty_preferredhardwareiobufferduration.md): Your preferred hardware I/O buffer duration in seconds. Do not set this property unless you require lower I/O latency than is provided by default.
- [kAudioSessionProperty_AudioCategory](kaudiosessionproperty_audiocategory.md): The category for the audio session. A read/write `UInt32` value.
- [kAudioSessionProperty_AudioRouteChange](kaudiosessionproperty_audioroutechange.md): The reason the audio route changed.
- [kAudioSessionProperty_CurrentHardwareSampleRate](kaudiosessionproperty_currenthardwaresamplerate.md): Indicates the current hardware sample rate. A read-only `Float64` value.
- [kAudioSessionProperty_CurrentHardwareInputNumberChannels](kaudiosessionproperty_currenthardwareinputnumberchannels.md): Indicates the current number of audio hardware input channels. A read-only `UInt32` value.
- [kAudioSessionProperty_CurrentHardwareOutputNumberChannels](kaudiosessionproperty_currenthardwareoutputnumberchannels.md): Indicates the current number of audio hardware output channels. A read-only `UInt32` value.
- [kAudioSessionProperty_CurrentHardwareOutputVolume](kaudiosessionproperty_currenthardwareoutputvolume.md): Indicates the current audio output volume as `Float32` value between 0.0 and 1.0. Read-only. This value is available to your app by way of a property listener callback function. See [AudioSessionAddPropertyListener(\_:\_:\_:)](audiosessionaddpropertylistener%28______%29.md).
- [kAudioSessionProperty_CurrentHardwareInputLatency](kaudiosessionproperty_currenthardwareinputlatency.md): Indicates the current hardware input latency, in seconds, as a read-only `Float32` value.
- [kAudioSessionProperty_CurrentHardwareOutputLatency](kaudiosessionproperty_currenthardwareoutputlatency.md): Indicates the current hardware output latency, in seconds, as a read-only `Float32` value.
- [kAudioSessionProperty_CurrentHardwareIOBufferDuration](kaudiosessionproperty_currenthardwareiobufferduration.md): Indicates the current hardware IO buffer duration, in seconds, as a read-only `Float32` value.
- [kAudioSessionProperty_OtherAudioIsPlaying](kaudiosessionproperty_otheraudioisplaying.md): Indicates whether or not another app (typically, the iPod app) is currently playing audio. Read-only. A non-zero `UInt32` value indicates that other audio is playing.
- [kAudioSessionProperty_AudioInputAvailable](kaudiosessionproperty_audioinputavailable.md): Indicates if audio input is available (a nonzero value) or not (a value of 0).
- [kAudioSessionProperty_ServerDied](kaudiosessionproperty_serverdied.md): Indicates if the audio server has died (indicated by a nonzero `UInt32` value) or is still running (a value of 0).
- [kAudioSessionProperty_OtherMixableAudioShouldDuck](kaudiosessionproperty_othermixableaudioshouldduck.md): For audio session categories that allow audio mixing with other apps, specifies whether other audio should be reduced in level when your app produces sound. This property has a value of `FALSE` (0) by default. Set it to a nonzero value to turn on ducking.

# kAudioSessionProperty_OverrideAudioRoute (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Specifies whether or not to override the audio session category’s typical audio route.

## Declaration

```objectivec
kAudioSessionProperty_OverrideAudioRoute
```

<a id="Discussion"></a>

## Discussion

A write-only `UInt32` value. Can be set with one of two values: [kAudioSessionOverrideAudioRoute_None](kaudiosessionoverrideaudioroute_none.md), which specifies that you want to use the typical audio route; and [kAudioSessionOverrideAudioRoute_Speaker](kaudiosessionoverrideaudioroute_speaker.md), when sends output audio to the built-in speaker. This property can be used only with the [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md) (or the equivalent [AVAudioSessionCategoryPlayAndRecord](../avfaudio/avaudiosession/category-swift.struct/playandrecord.md)) category.

If a headset is plugged in at the time you set this property’s value to [kAudioSessionOverrideAudioRoute_Speaker](kaudiosessionoverrideaudioroute_speaker.md), the system changes the audio routing for input as well as for output: input comes from the built-in microphone; output goes to the built-in speaker.

Upon an audio route change (such as by plugging in or unplugging a headset), or upon interruption, this property reverts to its default value.

See also [kAudioSessionProperty_OverrideCategoryDefaultToSpeaker](kaudiosessionproperty_overridecategorydefaulttospeaker.md).

## See Also

### Constants

- [kAudioSessionProperty_PreferredHardwareSampleRate](kaudiosessionproperty_preferredhardwaresamplerate.md): Deprecated. Your preferred hardware sample rate for the audio session. A read/write `Float64` value. The actual sample rate may be different and can be obtained using the `kAudioSessionProperty_CurrentHardwareSampleRate` property.
- [kAudioSessionProperty_PreferredHardwareIOBufferDuration](kaudiosessionproperty_preferredhardwareiobufferduration.md): Your preferred hardware I/O buffer duration in seconds. Do not set this property unless you require lower I/O latency than is provided by default.
- [kAudioSessionProperty_AudioCategory](kaudiosessionproperty_audiocategory.md): The category for the audio session. A read/write `UInt32` value.
- [kAudioSessionProperty_AudioRouteChange](kaudiosessionproperty_audioroutechange.md): The reason the audio route changed.
- [kAudioSessionProperty_CurrentHardwareSampleRate](kaudiosessionproperty_currenthardwaresamplerate.md): Indicates the current hardware sample rate. A read-only `Float64` value.
- [kAudioSessionProperty_CurrentHardwareInputNumberChannels](kaudiosessionproperty_currenthardwareinputnumberchannels.md): Indicates the current number of audio hardware input channels. A read-only `UInt32` value.
- [kAudioSessionProperty_CurrentHardwareOutputNumberChannels](kaudiosessionproperty_currenthardwareoutputnumberchannels.md): Indicates the current number of audio hardware output channels. A read-only `UInt32` value.
- [kAudioSessionProperty_CurrentHardwareOutputVolume](kaudiosessionproperty_currenthardwareoutputvolume.md): Indicates the current audio output volume as `Float32` value between 0.0 and 1.0. Read-only. This value is available to your app by way of a property listener callback function. See [AudioSessionAddPropertyListener](audiosessionaddpropertylistener%28______%29.md).
- [kAudioSessionProperty_CurrentHardwareInputLatency](kaudiosessionproperty_currenthardwareinputlatency.md): Indicates the current hardware input latency, in seconds, as a read-only `Float32` value.
- [kAudioSessionProperty_CurrentHardwareOutputLatency](kaudiosessionproperty_currenthardwareoutputlatency.md): Indicates the current hardware output latency, in seconds, as a read-only `Float32` value.
- [kAudioSessionProperty_CurrentHardwareIOBufferDuration](kaudiosessionproperty_currenthardwareiobufferduration.md): Indicates the current hardware IO buffer duration, in seconds, as a read-only `Float32` value.
- [kAudioSessionProperty_OtherAudioIsPlaying](kaudiosessionproperty_otheraudioisplaying.md): Indicates whether or not another app (typically, the iPod app) is currently playing audio. Read-only. A non-zero `UInt32` value indicates that other audio is playing.
- [kAudioSessionProperty_AudioInputAvailable](kaudiosessionproperty_audioinputavailable.md): Indicates if audio input is available (a nonzero value) or not (a value of 0).
- [kAudioSessionProperty_ServerDied](kaudiosessionproperty_serverdied.md): Indicates if the audio server has died (indicated by a nonzero `UInt32` value) or is still running (a value of 0).
- [kAudioSessionProperty_OtherMixableAudioShouldDuck](kaudiosessionproperty_othermixableaudioshouldduck.md): For audio session categories that allow audio mixing with other apps, specifies whether other audio should be reduced in level when your app produces sound. This property has a value of `FALSE` (0) by default. Set it to a nonzero value to turn on ducking.
