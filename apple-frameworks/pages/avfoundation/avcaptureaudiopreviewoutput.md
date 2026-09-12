> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureaudiopreviewoutput](https://developer.apple.com/documentation/avfoundation/avcaptureaudiopreviewoutput)

# AVCaptureAudioPreviewOutput (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** macOS 10.7+

A capture output that provides a preview of the captured audio.

## Declaration

```swift
class AVCaptureAudioPreviewOutput
```

## Topics

### Creating preview output

- [init()](avcaptureaudiopreviewoutput/init%28%29.md): Creates an audio preview output object.

### Configuring the output

- [volume](avcaptureaudiopreviewoutput/volume.md): The output volume of the audio preview.
- [outputDeviceUniqueID](avcaptureaudiopreviewoutput/outputdeviceuniqueid.md): The unique identifier of the Core Audio output device to use for audio preview.

## Relationships

### Inherits From

- [AVCaptureOutput](avcaptureoutput.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Capture preview

- [AVCaptureVideoPreviewLayer](avcapturevideopreviewlayer.md): A Core Animation layer that displays video from a camera device.

# AVCaptureAudioPreviewOutput (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** macOS 10.7+

A capture output that provides a preview of the captured audio.

## Declaration

```objectivec
@interface AVCaptureAudioPreviewOutput : AVCaptureOutput
```

## Topics

### Creating preview output

- [new](avcaptureaudiopreviewoutput/new.md): Returns a new audio preview output object.
- [init](avcaptureaudiopreviewoutput/init%28%29.md): Creates an audio preview output object.

### Configuring the output

- [volume](avcaptureaudiopreviewoutput/volume.md): The output volume of the audio preview.
- [outputDeviceUniqueID](avcaptureaudiopreviewoutput/outputdeviceuniqueid.md): The unique identifier of the Core Audio output device to use for audio preview.

## Relationships

### Inherits From

- [AVCaptureOutput](avcaptureoutput.md)

## See Also

### Capture preview

- [AVCaptureVideoPreviewLayer](avcapturevideopreviewlayer.md): A Core Animation layer that displays video from a camera device.
