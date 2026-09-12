> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-input-routes](https://developer.apple.com/documentation/audiotoolbox/audio-input-routes)

# Audio Input Routes

**Interface languages:** Swift, Objective-C

**Framework:** Audio Toolbox  
**Kind:** API Collection

Strings that identify the various audio input sources for a device.

<a id="overview"></a>

## Overview

These strings are used as values for the [kAudioSession_AudioRouteKey_Type](kaudiosession_audioroutekey_type.md) key for the dictionary associated with the [kAudioSession_AudioRouteKey_Inputs](kaudiosession_audioroutekey_inputs.md) array.

## Topics

### Constants

- [kAudioSessionInputRoute_LineIn](kaudiosessioninputroute_linein.md): Deprecated. A line in input
- [kAudioSessionInputRoute_BuiltInMic](kaudiosessioninputroute_builtinmic.md): Deprecated. A built-in microphone input.
- [kAudioSessionInputRoute_HeadsetMic](kaudiosessioninputroute_headsetmic.md): Deprecated. A microphone that is part of a headset.
- [kAudioSessionInputRoute_BluetoothHFP](kaudiosessioninputroute_bluetoothhfp.md): Deprecated. A microphone that is part of a Bluetooth Hands-Free Profile (HFP) device.
- [kAudioSessionInputRoute_USBAudio](kaudiosessioninputroute_usbaudio.md): Deprecated. A Universal Serial Bus (USB) input, accessed through the device 30-pin connector.

## See Also

### Audio Routes

- [Audio Route Change Reasons](1618380-audio-route-change-reasons.md): Identifiers for the various reasons that an audio route can change while your app is running.
- [Audio Route Description Dictionary Keys](audio-route-description-dictionary-keys.md): Keys for the [kAudioSessionProperty_AudioRouteDescription](kaudiosessionproperty_audioroutedescription.md) dictionary.
- [Audio Route Type Key](audio-route-type-key.md): The one key for an audio route input or output dictionary.
- [Audio Output Routes](audio-output-routes.md): The various audio output destinations available for an iOS device.
- [Audio Route Change Dictionary Keys](audio-route-change-dictionary-keys.md): Keys for obtaining information about an audio hardware route change.
- [Alternative Audio Route Change Reason Dictionary Key](alternative-audio-route-change-reason-dictionary-key.md): An alternate key for obtaining information about the reason for an audio route change.
