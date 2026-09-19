> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayer/audiooutputdeviceuniqueid

# audioOutputDeviceUniqueID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

Specifies the unique ID of the Core Audio output device used to play audio.

## Declaration

```swift
nonisolated var audioOutputDeviceUniqueID: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, indicating that the default audio output device is used. Otherwise the value of this property is a string containing the unique ID of the Core Audio output device to be used for audio output.

Core Audio’s [kAudioDevicePropertyDeviceUID](../../coreaudio/kaudiodevicepropertydeviceuid.md) is a suitable source of audio output device unique IDs.

## See Also

### Configuring audio and video devices

- [preferredVideoDecoderGPURegistryID](preferredvideodecodergpuregistryid.md): The registry identifier for the GPU used for video decoding.

# audioOutputDeviceUniqueID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

Specifies the unique ID of the Core Audio output device used to play audio.

## Declaration

```objectivec
@property (copy, nullable) NSString * audioOutputDeviceUniqueID;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `nil`, indicating that the default audio output device is used. Otherwise the value of this property is a string containing the unique ID of the Core Audio output device to be used for audio output.

Core Audio’s [kAudioDevicePropertyDeviceUID](../../coreaudio/kaudiodevicepropertydeviceuid.md) is a suitable source of audio output device unique IDs.

## See Also

### Configuring audio and video devices

- [preferredVideoDecoderGPURegistryID](preferredvideodecodergpuregistryid.md): The registry identifier for the GPU used for video decoding.
