> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1618455-audio-session-property-identifie](https://developer.apple.com/documentation/audiotoolbox/1618455-audio-session-property-identifie)

# Audio Session Property Identifiers (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Property identifiers used with Audio Session Services in iOS.

<a id="overview"></a>

## Overview

Use these property identifiers in concert with the [AudioSessionGetProperty(\_:\_:\_:)](audiosessiongetproperty%28______%29.md), [AudioSessionSetProperty(\_:\_:\_:)](audiosessionsetproperty%28______%29.md), and [AudioSessionAddPropertyListener(\_:\_:\_:)](audiosessionaddpropertylistener%28______%29.md) functions.

## Topics

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
- [kAudioSessionProperty_OtherMixableAudioShouldDuck](kaudiosessionproperty_othermixableaudioshouldduck.md): For audio session categories that allow audio mixing with other apps, specifies whether other audio should be reduced in level when your app produces sound. This property has a value of `FALSE` (0) by default. Set it to a nonzero value to turn on ducking.
- [kAudioSessionProperty_OverrideCategoryMixWithOthers](kaudiosessionproperty_overridecategorymixwithothers.md): Changes the mixing behavior of the [kAudioSessionCategory_MediaPlayback](kaudiosessioncategory_mediaplayback.md) and [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md) audio session categories.
- [kAudioSessionProperty_OverrideCategoryDefaultToSpeaker](kaudiosessionproperty_overridecategorydefaulttospeaker.md): Specifies whether or not to route audio to the speaker (instead of to the receiver) when no other audio route, such as a headset, is connected.
- [kAudioSessionProperty_OverrideCategoryEnableBluetoothInput](kaudiosessionproperty_overridecategoryenablebluetoothinput.md): Allows a paired Bluetooth device to appear as an available audio input route.
- [kAudioSessionProperty_InterruptionType](kaudiosessionproperty_interruptiontype.md): Indicates the type of an end-interruption event.
- [kAudioSessionProperty_Mode](kaudiosessionproperty_mode.md): A read/write `UIInt32` value that specifies the audio session mode.
- [kAudioSessionProperty_InputSources](kaudiosessionproperty_inputsources.md): Details on the available audio input sources.
- [kAudioSessionProperty_OutputDestinations](kaudiosessionproperty_outputdestinations.md): Details on the available audio output destinations.
- [kAudioSessionProperty_InputSource](kaudiosessionproperty_inputsource.md): The audio input source.
- [kAudioSessionProperty_OutputDestination](kaudiosessionproperty_outputdestination.md): The audio output destination.
- [kAudioSessionProperty_InputGainAvailable](kaudiosessionproperty_inputgainavailable.md): A read-only `UInt32` value that indicates whether or not audio input gain adjustment is available, where a nonzero value means adjustment is available.
- [kAudioSessionProperty_InputGainScalar](kaudiosessionproperty_inputgainscalar.md): A read/write `Float32` value that indicates the audio input gain setting for the active input source.
- [kAudioSessionProperty_AudioRouteDescription](kaudiosessionproperty_audioroutedescription.md): Information about an audio route.

## See Also

### Audio Session Support

- [Audio Session Categories](1618427-audio-session-categories.md): Category identifiers for audio sessions, used as values for the [kAudioSessionProperty_AudioCategory](kaudiosessionproperty_audiocategory.md) property.
- [Audio Session Modes](1618405-audio-session-modes.md): Mode identifiers for audio sessions, used as values for the [kAudioSessionProperty_Mode](kaudiosessionproperty_mode.md) property.
- [Audio Session Category Route Overrides](1618372-audio-session-category-route-ove.md): Specifies whether the default audio route for the `PlayAndRecord` category should be overridden.
- [Audio Session Activation Flags](1618357-audio-session-activation-flags.md): Flags that provide additional information about your app’s audio intentions upon session activation or deactivation.
- [Audio Session Interruption States](1618425-audio-session-interruption-state.md): Identifiers used with the [AudioSessionInterruptionListener](audiosessioninterruptionlistener.md) callback function in iOS to indicate that an audio interruption has started or stopped.
- [AudioSessionInterruptionType](audiosessioninterruptiontype.md): Values that indicate the nature of the interruption that ended.

# Audio Session Property Identifiers (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Property identifiers used with Audio Session Services in iOS.

<a id="overview"></a>

## Overview

Use these property identifiers in concert with the [AudioSessionGetProperty](audiosessiongetproperty%28______%29.md), [AudioSessionSetProperty](audiosessionsetproperty%28______%29.md), and [AudioSessionAddPropertyListener](audiosessionaddpropertylistener%28______%29.md) functions.

## Topics

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
- [kAudioSessionProperty_OtherMixableAudioShouldDuck](kaudiosessionproperty_othermixableaudioshouldduck.md): For audio session categories that allow audio mixing with other apps, specifies whether other audio should be reduced in level when your app produces sound. This property has a value of `FALSE` (0) by default. Set it to a nonzero value to turn on ducking.
- [kAudioSessionProperty_OverrideCategoryMixWithOthers](kaudiosessionproperty_overridecategorymixwithothers.md): Changes the mixing behavior of the [kAudioSessionCategory_MediaPlayback](kaudiosessioncategory_mediaplayback.md) and [kAudioSessionCategory_PlayAndRecord](kaudiosessioncategory_playandrecord.md) audio session categories.
- [kAudioSessionProperty_OverrideCategoryDefaultToSpeaker](kaudiosessionproperty_overridecategorydefaulttospeaker.md): Specifies whether or not to route audio to the speaker (instead of to the receiver) when no other audio route, such as a headset, is connected.
- [kAudioSessionProperty_OverrideCategoryEnableBluetoothInput](kaudiosessionproperty_overridecategoryenablebluetoothinput.md): Allows a paired Bluetooth device to appear as an available audio input route.
- [kAudioSessionProperty_InterruptionType](kaudiosessionproperty_interruptiontype.md): Indicates the type of an end-interruption event.
- [kAudioSessionProperty_Mode](kaudiosessionproperty_mode.md): A read/write `UIInt32` value that specifies the audio session mode.
- [kAudioSessionProperty_InputSources](kaudiosessionproperty_inputsources.md): Details on the available audio input sources.
- [kAudioSessionProperty_OutputDestinations](kaudiosessionproperty_outputdestinations.md): Details on the available audio output destinations.
- [kAudioSessionProperty_InputSource](kaudiosessionproperty_inputsource.md): The audio input source.
- [kAudioSessionProperty_OutputDestination](kaudiosessionproperty_outputdestination.md): The audio output destination.
- [kAudioSessionProperty_InputGainAvailable](kaudiosessionproperty_inputgainavailable.md): A read-only `UInt32` value that indicates whether or not audio input gain adjustment is available, where a nonzero value means adjustment is available.
- [kAudioSessionProperty_InputGainScalar](kaudiosessionproperty_inputgainscalar.md): A read/write `Float32` value that indicates the audio input gain setting for the active input source.
- [kAudioSessionProperty_AudioRouteDescription](kaudiosessionproperty_audioroutedescription.md): Information about an audio route.

## See Also

### Audio Session Support

- [Audio Session Categories](1618427-audio-session-categories.md): Category identifiers for audio sessions, used as values for the [kAudioSessionProperty_AudioCategory](kaudiosessionproperty_audiocategory.md) property.
- [Audio Session Modes](1618405-audio-session-modes.md): Mode identifiers for audio sessions, used as values for the [kAudioSessionProperty_Mode](kaudiosessionproperty_mode.md) property.
- [Audio Session Category Route Overrides](1618372-audio-session-category-route-ove.md): Specifies whether the default audio route for the `PlayAndRecord` category should be overridden.
- [Audio Session Activation Flags](1618357-audio-session-activation-flags.md): Flags that provide additional information about your app’s audio intentions upon session activation or deactivation.
- [Audio Session Interruption States](1618425-audio-session-interruption-state.md): Identifiers used with the [AudioSessionInterruptionListener](audiosessioninterruptionlistener.md) callback function in iOS to indicate that an audio interruption has started or stopped.
- [AudioSessionInterruptionType](audiosessioninterruptiontype.md): Values that indicate the nature of the interruption that ended.
