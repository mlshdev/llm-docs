> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/rotationcoordinator/device](https://developer.apple.com/documentation/avfoundation/avcapturedevice/rotationcoordinator/device)

# device (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The capture device the coordinator monitors to track its physical rotation.

## Declaration

```swift
weak var device: AVCaptureDevice? { get }
```

<a id="Discussion"></a>

## Discussion

The coordinator updates its [videoRotationAngleForHorizonLevelCapture](videorotationangleforhorizonlevelcapture.md) property by monitoring the device’s physical rotation.

## See Also

### Inspecting a coordinator’s configuration

- [previewLayer](previewlayer.md): The layer that displays a camera preview the coordinator calculates a video rotation angle for.

# device (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The capture device the coordinator monitors to track its physical rotation.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) AVCaptureDevice * device;
```

<a id="Discussion"></a>

## Discussion

The coordinator updates its [videoRotationAngleForHorizonLevelCapture](videorotationangleforhorizonlevelcapture.md) property by monitoring the device’s physical rotation.

## See Also

### Inspecting a coordinator’s configuration

- [previewLayer](previewlayer.md): The layer that displays a camera preview the coordinator calculates a video rotation angle for.
