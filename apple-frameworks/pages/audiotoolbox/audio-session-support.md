> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-session-support](https://developer.apple.com/documentation/audiotoolbox/audio-session-support)

# Audio Session Support

**Interface languages:** Swift, Objective-C

**Framework:** Audio Toolbox  
**Kind:** API Collection

Describe the properties that you associate with audio sessions and audio routes.

<a id="overview"></a>

## Overview

> **Important**

>  The `AudioSession` API has been completely deprecated in iOS 7.0. See [AVAudioSession](../avfaudio/avaudiosession.md) for the Objective-C implementation of these functions.

Audio Session Services lets you specify the intended audio behavior for your iOS app. For example, you can specify whether you intend for your app’s audio to silence other apps or to mix with their audio. You also use this API to specify your app’s behavior when it is interrupted, such as by a phone call. When the system knows your intentions, it configures the audio hardware in the device to satisfy those intentions, as possible.

These functions apply only to iOS. They do not apply to macOS.

## Topics

### Audio Session Support

- [Audio Session Property Identifiers](1618455-audio-session-property-identifie.md): Property identifiers used with Audio Session Services in iOS.
- [Audio Session Categories](1618427-audio-session-categories.md): Category identifiers for audio sessions, used as values for the [kAudioSessionProperty_AudioCategory](kaudiosessionproperty_audiocategory.md) property.
- [Audio Session Modes](1618405-audio-session-modes.md): Mode identifiers for audio sessions, used as values for the [kAudioSessionProperty_Mode](kaudiosessionproperty_mode.md) property.
- [Audio Session Category Route Overrides](1618372-audio-session-category-route-ove.md): Specifies whether the default audio route for the `PlayAndRecord` category should be overridden.
- [Audio Session Activation Flags](1618357-audio-session-activation-flags.md): Flags that provide additional information about your app’s audio intentions upon session activation or deactivation.
- [Audio Session Interruption States](1618425-audio-session-interruption-state.md): Identifiers used with the [AudioSessionInterruptionListener](audiosessioninterruptionlistener.md) callback function in iOS to indicate that an audio interruption has started or stopped.
- [AudioSessionInterruptionType](audiosessioninterruptiontype.md): Values that indicate the nature of the interruption that ended.

### Audio Routes

- [Audio Route Change Reasons](1618380-audio-route-change-reasons.md): Identifiers for the various reasons that an audio route can change while your app is running.
- [Audio Route Description Dictionary Keys](audio-route-description-dictionary-keys.md): Keys for the [kAudioSessionProperty_AudioRouteDescription](kaudiosessionproperty_audioroutedescription.md) dictionary.
- [Audio Route Type Key](audio-route-type-key.md): The one key for an audio route input or output dictionary.
- [Audio Input Routes](audio-input-routes.md): Strings that identify the various audio input sources for a device.
- [Audio Output Routes](audio-output-routes.md): The various audio output destinations available for an iOS device.
- [Audio Route Change Dictionary Keys](audio-route-change-dictionary-keys.md): Keys for obtaining information about an audio hardware route change.
- [Alternative Audio Route Change Reason Dictionary Key](alternative-audio-route-change-reason-dictionary-key.md): An alternate key for obtaining information about the reason for an audio route change.

### USB Accessories

- [USB Accessory Audio Source Dictionary Keys](usb-accessory-audio-source-dictionary-keys.md): Keys for the dictionaries in the [kAudioSessionProperty_InputSources](kaudiosessionproperty_inputsources.md) array.
- [USB Accessory Audio Destination Dictionary Keys](usb-accessory-audio-destination-dictionary-keys.md): Keys for the dictionaries in the [kAudioSessionProperty_OutputDestinations](kaudiosessionproperty_outputdestinations.md) array.

### Constants

- [kAudioSessionInputRoute_BluetoothHFP](kaudiosessioninputroute_bluetoothhfp.md): Deprecated. A microphone that is part of a Bluetooth Hands-Free Profile (HFP) device.
- [kAudioSessionInputRoute_BuiltInMic](kaudiosessioninputroute_builtinmic.md): Deprecated. A built-in microphone input.
- [kAudioSessionInputRoute_HeadsetMic](kaudiosessioninputroute_headsetmic.md): Deprecated. A microphone that is part of a headset.
- [kAudioSessionInputRoute_LineIn](kaudiosessioninputroute_linein.md): Deprecated. A line in input
- [kAudioSessionInputRoute_USBAudio](kaudiosessioninputroute_usbaudio.md): Deprecated. A Universal Serial Bus (USB) input, accessed through the device 30-pin connector.
- [kAudioSessionOutputRoute_AirPlay](kaudiosessionoutputroute_airplay.md): Deprecated. An output on an AirPlay device.
- [kAudioSessionOutputRoute_BluetoothA2DP](kaudiosessionoutputroute_bluetootha2dp.md): Deprecated. Speakers in a Bluetooth A2DP device.
- [kAudioSessionOutputRoute_BluetoothHFP](kaudiosessionoutputroute_bluetoothhfp.md): Deprecated. Speakers that are part of a Bluetooth Hands-Free Profile (HFP) accessory.
- [kAudioSessionOutputRoute_BuiltInReceiver](kaudiosessionoutputroute_builtinreceiver.md): Deprecated. The built-in speaker you hold to your ear when on a phone call.
- [kAudioSessionOutputRoute_BuiltInSpeaker](kaudiosessionoutputroute_builtinspeaker.md): Deprecated. The primary built-in speaker.
- [kAudioSessionOutputRoute_HDMI](kaudiosessionoutputroute_hdmi.md): Deprecated. An output available through the HDMI interface.
- [kAudioSessionOutputRoute_Headphones](kaudiosessionoutputroute_headphones.md): Deprecated. Speakers in headphones or in a headset.
- [kAudioSessionOutputRoute_LineOut](kaudiosessionoutputroute_lineout.md): Deprecated. Analog line-level output.
- [kAudioSessionOutputRoute_USBAudio](kaudiosessionoutputroute_usbaudio.md): Deprecated. Speaker(s) in a Universal Serial Bus (USB) accessory, accessed through the device 30-pin connector.
- [kAudioSession_AudioRouteChangeKey_CurrentRouteDescription](kaudiosession_audioroutechangekey_currentroutedescription.md): Deprecated. Describes the current audio route.
- [kAudioSession_AudioRouteChangeKey_PreviousRouteDescription](kaudiosession_audioroutechangekey_previousroutedescription.md): Deprecated. Describes the previous audio route.
- [kAudioSession_AudioRouteKey_Inputs](kaudiosession_audioroutekey_inputs.md): Deprecated. An object containing details about audio input used in the current audio route.
- [kAudioSession_AudioRouteKey_Outputs](kaudiosession_audioroutekey_outputs.md): Deprecated. An object containing details about the audio output used in the current audio route.
- [kAudioSession_AudioRouteKey_Type](kaudiosession_audioroutekey_type.md): Deprecated. Audio routes input or output dictionary.
- [kAudioSession_InputSourceKey_Description](kaudiosession_inputsourcekey_description.md): Deprecated. Audio input source description.
- [kAudioSession_InputSourceKey_ID](kaudiosession_inputsourcekey_id.md): Deprecated. An audio input source.
- [kAudioSession_OutputDestinationKey_Description](kaudiosession_outputdestinationkey_description.md): Deprecated. The audio output destination.
- [kAudioSession_OutputDestinationKey_ID](kaudiosession_outputdestinationkey_id.md): Deprecated. The output destination.
- [kAudioSession_RouteChangeKey_Reason](kaudiosession_routechangekey_reason.md): Deprecated. The reason for the audio route change.

### Enumerations

- [Audio Session Interruption Types](1618387-audio-session-interruption-types.md)

### Result Codes

- [Audio Session Errors](1618373-audio-session-errors.md)

## See Also

### Utilities

- [Analyzing audio performance with Instruments](analyzing-audio-performance-with-instruments.md): Ensure a smooth and immersive audio experience in your apps using Audio System Trace.
- [Audio Converter Services](audio-converter-services.md): Convert between linear PCM audio formats, and between linear PCM and compressed formats.
- [Audio Toolbox Debugging](audio-toolbox-debugging.md): Obtain the internal state of Core Audio objects during the development and debugging of your code.
- [Workgroup Management](workgroup-management.md): Coordinate the activity of custom real-time audio threads with those of the system and other processes.
- [Audio Codec](audio-codec.md): Translate audio data from one format to another.
- [Clock Utilities](clock-utilities.md): Manage time-related information associated with audio playback.
