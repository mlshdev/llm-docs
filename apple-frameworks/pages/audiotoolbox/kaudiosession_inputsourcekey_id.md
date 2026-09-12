> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudiosession_inputsourcekey_id](https://developer.apple.com/documentation/audiotoolbox/kaudiosession_inputsourcekey_id)

# kAudioSession_InputSourceKey_ID (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

An audio input source.

> Deprecated in iOS 7.0.

## Declaration

```swift
let kAudioSession_InputSourceKey_ID: CFString!
```

<a id="discussion"></a>

## Discussion

A [CFNumber](../corefoundation/cfnumber.md) object, defined by a USB audio accessory attached to the device through the iPad camera connection kit, that identifies an audio input source. When setting a source on the accessory, use this identifier.

## See Also

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

# kAudioSession_InputSourceKey_ID (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ (deprecated in 7.0) · iPadOS 5.0+ (deprecated in 7.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

An audio input source.

> Deprecated in iOS 7.0.

## Declaration

```objectivec
extern CFStringRef const kAudioSession_InputSourceKey_ID;
```

<a id="discussion"></a>

## Discussion

A [CFNumberRef](../corefoundation/cfnumber.md) object, defined by a USB audio accessory attached to the device through the iPad camera connection kit, that identifies an audio input source. When setting a source on the accessory, use this identifier.

## See Also

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
