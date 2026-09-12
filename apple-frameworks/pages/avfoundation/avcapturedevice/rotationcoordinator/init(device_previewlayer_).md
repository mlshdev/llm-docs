> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/rotationcoordinator/init(device:previewlayer:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/rotationcoordinator/init(device:previewlayer:))

# init(device:previewLayer:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Creates a coordinator that provides separate compensation angles for content your app takes with a capture device, and for your app’s camera preview.

## Declaration

```swift
init(device: AVCaptureDevice, previewLayer: CALayer?)
```

## Parameters

- `device`: A capture device the new coordinator monitors to track its physical rotation to calculate its [videoRotationAngleForHorizonLevelCapture](videorotationangleforhorizonlevelcapture.md) property.
- `previewLayer`: A layer that displays a camera preview the new coordinator monitors to calculate its [videoRotationAngleForHorizonLevelPreview](videorotationangleforhorizonlevelpreview.md) property.

# initWithDevice:previewLayer: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Creates a coordinator that provides separate compensation angles for content your app takes with a capture device, and for your app’s camera preview.

## Declaration

```objectivec
- (instancetype) initWithDevice:(AVCaptureDevice *) device previewLayer:(CALayer *) previewLayer;
```

## Parameters

- `device`: A capture device the new coordinator monitors to track its physical rotation to calculate its [videoRotationAngleForHorizonLevelCapture](videorotationangleforhorizonlevelcapture.md) property.
- `previewLayer`: A layer that displays a camera preview the new coordinator monitors to calculate its [videoRotationAngleForHorizonLevelPreview](videorotationangleforhorizonlevelpreview.md) property.
