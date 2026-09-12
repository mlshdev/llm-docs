> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/rotationcoordinator/previewlayer](https://developer.apple.com/documentation/avfoundation/avcapturedevice/rotationcoordinator/previewlayer)

# previewLayer (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The layer that displays a camera preview the coordinator calculates a video rotation angle for.

## Declaration

```swift
weak var previewLayer: CALayer? { get }
```

<a id="Discussion"></a>

## Discussion

The coordinator updates its [videoRotationAngleForHorizonLevelPreview](videorotationangleforhorizonlevelpreview.md) property by monitoring the layer and the physical rotation of [device](device.md).

## See Also

### Inspecting a coordinator’s configuration

- [device](device.md): The capture device the coordinator monitors to track its physical rotation.

# previewLayer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The layer that displays a camera preview the coordinator calculates a video rotation angle for.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) CALayer * previewLayer;
```

<a id="Discussion"></a>

## Discussion

The coordinator updates its [videoRotationAngleForHorizonLevelPreview](videorotationangleforhorizonlevelpreview.md) property by monitoring the layer and the physical rotation of [device](device.md).

## See Also

### Inspecting a coordinator’s configuration

- [device](device.md): The capture device the coordinator monitors to track its physical rotation.
