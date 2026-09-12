> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceinput/ismultichannelaudiomodesupported(_:)](https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/ismultichannelaudiomodesupported(_:))

# isMultichannelAudioModeSupported(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether the input supports the specified multichannel audio mode.

## Declaration

```swift
func isMultichannelAudioModeSupported(_ multichannelAudioMode: AVCaptureMultichannelAudioMode) -> Bool
```

## Parameters

- `multichannelAudioMode`: The multichannel audio mode to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the input supports the mode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can only set the [multichannelAudioMode](multichannelaudiomode.md) property if the input supports the value.

> **Note**

>  Multichannel audio modes aren’t supported when used in with [AVCaptureMultiCamSession](../avcapturemulticamsession.md).

## See Also

### Configuring audio properties

- [multichannelAudioMode](multichannelaudiomode.md): The multichannel audio mode to apply when recording audio.
- [AVCaptureMultichannelAudioMode](../avcapturemultichannelaudiomode.md): Constants that indicate the modes of multichannel audio.
- [isWindNoiseRemovalSupported](iswindnoiseremovalsupported.md)
- [isWindNoiseRemovalEnabled](iswindnoiseremovalenabled.md)

# isMultichannelAudioModeSupported: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether the input supports the specified multichannel audio mode.

## Declaration

```objectivec
- (BOOL) isMultichannelAudioModeSupported:(AVCaptureMultichannelAudioMode) multichannelAudioMode;
```

## Parameters

- `multichannelAudioMode`: The multichannel audio mode to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the input supports the mode; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can only set the [multichannelAudioMode](multichannelaudiomode.md) property if the input supports the value.

> **Note**

>  Multichannel audio modes aren’t supported when used in with [AVCaptureMultiCamSession](../avcapturemulticamsession.md).

## See Also

### Configuring audio properties

- [multichannelAudioMode](multichannelaudiomode.md): The multichannel audio mode to apply when recording audio.
- [AVCaptureMultichannelAudioMode](../avcapturemultichannelaudiomode.md): Constants that indicate the modes of multichannel audio.
- [windNoiseRemovalSupported](iswindnoiseremovalsupported.md)
- [windNoiseRemovalEnabled](iswindnoiseremovalenabled.md)
