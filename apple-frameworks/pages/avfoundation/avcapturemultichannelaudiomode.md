> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturemultichannelaudiomode](https://developer.apple.com/documentation/avfoundation/avcapturemultichannelaudiomode)

# AVCaptureMultichannelAudioMode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Constants that indicate the modes of multichannel audio.

## Declaration

```swift
enum AVCaptureMultichannelAudioMode
```

## Topics

### Modes

- [AVCaptureMultichannelAudioMode.none](avcapturemultichannelaudiomode/none.md): A mode that indicates there’s no multichannel audio.
- [AVCaptureMultichannelAudioMode.stereo](avcapturemultichannelaudiomode/stereo.md): A mode that indicates the recording uses stereo audio.
- [AVCaptureMultichannelAudioMode.firstOrderAmbisonics](avcapturemultichannelaudiomode/firstorderambisonics.md): An audio mode that indicates the recording uses first-order ambisonics.

### Initializers

- [init(rawValue:)](avcapturemultichannelaudiomode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring audio properties

- [isMultichannelAudioModeSupported(\_:)](avcapturedeviceinput/ismultichannelaudiomodesupported%28__%29.md): A Boolean value that indicates whether the input supports the specified multichannel audio mode.
- [multichannelAudioMode](avcapturedeviceinput/multichannelaudiomode.md): The multichannel audio mode to apply when recording audio.
- [isWindNoiseRemovalSupported](avcapturedeviceinput/iswindnoiseremovalsupported.md)
- [isWindNoiseRemovalEnabled](avcapturedeviceinput/iswindnoiseremovalenabled.md)

# AVCaptureMultichannelAudioMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Constants that indicate the modes of multichannel audio.

## Declaration

```objectivec
enum AVCaptureMultichannelAudioMode : NSInteger;
```

## Topics

### Modes

- [AVCaptureMultichannelAudioModeNone](avcapturemultichannelaudiomode/none.md): A mode that indicates there’s no multichannel audio.
- [AVCaptureMultichannelAudioModeStereo](avcapturemultichannelaudiomode/stereo.md): A mode that indicates the recording uses stereo audio.
- [AVCaptureMultichannelAudioModeFirstOrderAmbisonics](avcapturemultichannelaudiomode/firstorderambisonics.md): An audio mode that indicates the recording uses first-order ambisonics.

## See Also

### Configuring audio properties

- [isMultichannelAudioModeSupported:](avcapturedeviceinput/ismultichannelaudiomodesupported%28__%29.md): A Boolean value that indicates whether the input supports the specified multichannel audio mode.
- [multichannelAudioMode](avcapturedeviceinput/multichannelaudiomode.md): The multichannel audio mode to apply when recording audio.
- [windNoiseRemovalSupported](avcapturedeviceinput/iswindnoiseremovalsupported.md)
- [windNoiseRemovalEnabled](avcapturedeviceinput/iswindnoiseremovalenabled.md)
