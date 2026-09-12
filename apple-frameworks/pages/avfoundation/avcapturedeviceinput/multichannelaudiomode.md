> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceinput/multichannelaudiomode](https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/multichannelaudiomode)

# multichannelAudioMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

The multichannel audio mode to apply when recording audio.

## Declaration

```swift
var multichannelAudioMode: AVCaptureMultichannelAudioMode { get set }
```

<a id="Discussion"></a>

## Discussion

This property only takes effect when the system routes audio through the built-in microphone. The system ignores the value when an external microphone is in use.

The default value is [AVCaptureMultichannelAudioMode.none](../avcapturemultichannelaudiomode/none.md), which indicates to use single channel audio recording.

## See Also

### Configuring audio properties

- [isMultichannelAudioModeSupported(\_:)](ismultichannelaudiomodesupported%28__%29.md): A Boolean value that indicates whether the input supports the specified multichannel audio mode.
- [AVCaptureMultichannelAudioMode](../avcapturemultichannelaudiomode.md): Constants that indicate the modes of multichannel audio.
- [isWindNoiseRemovalSupported](iswindnoiseremovalsupported.md)
- [isWindNoiseRemovalEnabled](iswindnoiseremovalenabled.md)

# multichannelAudioMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

The multichannel audio mode to apply when recording audio.

## Declaration

```objectivec
@property (nonatomic) AVCaptureMultichannelAudioMode multichannelAudioMode;
```

<a id="Discussion"></a>

## Discussion

This property only takes effect when the system routes audio through the built-in microphone. The system ignores the value when an external microphone is in use.

The default value is [AVCaptureMultichannelAudioModeNone](../avcapturemultichannelaudiomode/none.md), which indicates to use single channel audio recording.

## See Also

### Configuring audio properties

- [isMultichannelAudioModeSupported:](ismultichannelaudiomodesupported%28__%29.md): A Boolean value that indicates whether the input supports the specified multichannel audio mode.
- [AVCaptureMultichannelAudioMode](../avcapturemultichannelaudiomode.md): Constants that indicate the modes of multichannel audio.
- [windNoiseRemovalSupported](iswindnoiseremovalsupported.md)
- [windNoiseRemovalEnabled](iswindnoiseremovalenabled.md)
