> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosessionproperty_outputdestination](https://developer.apple.com/documentation/audiotoolbox/kaudiosessionproperty_outputdestination)

# kAudioSessionProperty_OutputDestination (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The audio output destination.

## Declaration

```swift
var kAudioSessionProperty_OutputDestination: Int { get }
```

<a id="discussion"></a>

## Discussion

A read/write [CFNumber](../corefoundation/cfnumber.md) object that indicates the audio output destination, from a USB audio accessory attached through the iPad camera connection kit, that you want to use.

<a id="Discussion"></a>

## Discussion

The value must be one of the identifiers provided as a [kAudioSession_OutputDestinationKey_ID](kaudiosession_outputdestinationkey_id.md) key as part of the [kAudioSessionProperty_OutputDestinations](kaudiosessionproperty_outputdestinations.md) array.

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
- [kAudioSessionProperty_OverrideAudioRoute](kaudiosessionproperty_overrideaudioroute.md): Specifies whether or not to override the audio session category’s typical audio route.
- [kAudioSessionProperty_AudioInputAvailable](kaudiosessionproperty_audioinputavailable.md): Indicates if audio input is available (a nonzero value) or not (a value of 0).
- [kAudioSessionProperty_ServerDied](kaudiosessionproperty_serverdied.md): Indicates if the audio server has died (indicated by a nonzero `UInt32` value) or is still running (a value of 0).

# kAudioSessionProperty_OutputDestination (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

The audio output destination.

## Declaration

```objectivec
kAudioSessionProperty_OutputDestination
```

<a id="discussion"></a>

## Discussion

A read/write [CFNumberRef](../corefoundation/cfnumber.md) object that indicates the audio output destination, from a USB audio accessory attached through the iPad camera connection kit, that you want to use.

<a id="Discussion"></a>

## Discussion

The value must be one of the identifiers provided as a [kAudioSession_OutputDestinationKey_ID](kaudiosession_outputdestinationkey_id.md) key as part of the [kAudioSessionProperty_OutputDestinations](kaudiosessionproperty_outputdestinations.md) array.

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
- [kAudioSessionProperty_OverrideAudioRoute](kaudiosessionproperty_overrideaudioroute.md): Specifies whether or not to override the audio session category’s typical audio route.
- [kAudioSessionProperty_AudioInputAvailable](kaudiosessionproperty_audioinputavailable.md): Indicates if audio input is available (a nonzero value) or not (a value of 0).
- [kAudioSessionProperty_ServerDied](kaudiosessionproperty_serverdied.md): Indicates if the audio server has died (indicated by a nonzero `UInt32` value) or is still running (a value of 0).
