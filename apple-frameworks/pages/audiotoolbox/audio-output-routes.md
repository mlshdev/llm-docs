> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audio-output-routes](https://developer.apple.com/documentation/audiotoolbox/audio-output-routes)

# Audio Output Routes

**Interface languages:** Swift, Objective-C

**Framework:** Audio Toolbox  
**Kind:** API Collection

The various audio output destinations available for an iOS device.

<a id="overview"></a>

## Overview

These strings are used as values for the [kAudioSession_AudioRouteKey_Type](kaudiosession_audioroutekey_type.md) key for the dictionary associated with the [kAudioSession_AudioRouteKey_Outputs](kaudiosession_audioroutekey_outputs.md) array.

## Topics

### Constants

- [kAudioSessionOutputRoute_LineOut](kaudiosessionoutputroute_lineout.md): Deprecated. Analog line-level output.
- [kAudioSessionOutputRoute_Headphones](kaudiosessionoutputroute_headphones.md): Deprecated. Speakers in headphones or in a headset.
- [kAudioSessionOutputRoute_BluetoothHFP](kaudiosessionoutputroute_bluetoothhfp.md): Deprecated. Speakers that are part of a Bluetooth Hands-Free Profile (HFP) accessory.
- [kAudioSessionOutputRoute_BluetoothA2DP](kaudiosessionoutputroute_bluetootha2dp.md): Deprecated. Speakers in a Bluetooth A2DP device.
- [kAudioSessionOutputRoute_BuiltInReceiver](kaudiosessionoutputroute_builtinreceiver.md): Deprecated. The built-in speaker you hold to your ear when on a phone call.
- [kAudioSessionOutputRoute_BuiltInSpeaker](kaudiosessionoutputroute_builtinspeaker.md): Deprecated. The primary built-in speaker.
- [kAudioSessionOutputRoute_USBAudio](kaudiosessionoutputroute_usbaudio.md): Deprecated. Speaker(s) in a Universal Serial Bus (USB) accessory, accessed through the device 30-pin connector.
- [kAudioSessionOutputRoute_HDMI](kaudiosessionoutputroute_hdmi.md): Deprecated. An output available through the HDMI interface.
- [kAudioSessionOutputRoute_AirPlay](kaudiosessionoutputroute_airplay.md): Deprecated. An output on an AirPlay device.

## See Also

### Audio Routes

- [Audio Route Change Reasons](1618380-audio-route-change-reasons.md): Identifiers for the various reasons that an audio route can change while your app is running.
- [Audio Route Description Dictionary Keys](audio-route-description-dictionary-keys.md): Keys for the [kAudioSessionProperty_AudioRouteDescription](kaudiosessionproperty_audioroutedescription.md) dictionary.
- [Audio Route Type Key](audio-route-type-key.md): The one key for an audio route input or output dictionary.
- [Audio Input Routes](audio-input-routes.md): Strings that identify the various audio input sources for a device.
- [Audio Route Change Dictionary Keys](audio-route-change-dictionary-keys.md): Keys for obtaining information about an audio hardware route change.
- [Alternative Audio Route Change Reason Dictionary Key](alternative-audio-route-change-reason-dictionary-key.md): An alternate key for obtaining information about the reason for an audio route change.
