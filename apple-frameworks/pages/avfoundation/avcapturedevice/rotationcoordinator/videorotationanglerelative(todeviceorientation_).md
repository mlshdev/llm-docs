> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/rotationcoordinator/videorotationanglerelative(todeviceorientation:)

# videoRotationAngleRelative(toDeviceOrientation:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An angle the coordinator provides your app to apply to photos or videos it takes with the capture device so that they’re upright relative to an orientation your app provides.

## Declaration

```swift
func videoRotationAngleRelative(toDeviceOrientation deviceOrientation: AVCaptureVideoOrientation) -> CGFloat
```

## Parameters

- `deviceOrientation`: The device orientation to measure the angle against, represented with the [AVCaptureVideoOrientation](../../avcapturevideoorientation.md) enumeration.

<a id="Discussion"></a>

## Discussion

The angle this method returns is distinct from the angles that the [videoRotationAngleForHorizonLevelPreview](videorotationangleforhorizonlevelpreview.md) and [videoRotationAngleForHorizonLevelCapture](videorotationangleforhorizonlevelcapture.md) properties provide. Those angles are relative to the horizon and change dynamically as someone physically rotates the device. This method returns a static angle relative to the orientation your app provides, no matter how the device is physically oriented when your app calls it.

An angle of `0` means the output is in the camera’s unrotated, native sensor orientation. Cameras vary in how they’re physically mounted. The angle for an orientation may differ between the capture devices your app uses. An external camera returns `0` for every orientation because the relationship between the device and the camera is unknown.

Apps typically apply the returned angle to an [AVCaptureConnection](../../avcaptureconnection.md) instance’s [videoRotationAngle](../../avcaptureconnection/videorotationangle.md) property, which describes the angles a connection accepts and how it applies them.

## See Also

### Compensating for a device’s rotation

- [videoRotationAngleForHorizonLevelCapture](videorotationangleforhorizonlevelcapture.md): An angle the coordinator provides your app to apply to photos or videos it captures with the device so that they’re level relative to gravity.
- [videoRotationAngleForHorizonLevelPreview](videorotationangleforhorizonlevelpreview.md): An angle the coordinator provides your app to apply to the preview layer so that it’s level relative to gravity.

# videoRotationAngleRelativeToDeviceOrientation: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+

An angle the coordinator provides your app to apply to photos or videos it takes with the capture device so that they’re upright relative to an orientation your app provides.

## Declaration

```objectivec
- (CGFloat) videoRotationAngleRelativeToDeviceOrientation:(AVCaptureVideoOrientation) deviceOrientation;
```

## Parameters

- `deviceOrientation`: The device orientation to measure the angle against, represented with the [AVCaptureVideoOrientation](../../avcapturevideoorientation.md) enumeration.

<a id="Discussion"></a>

## Discussion

The angle this method returns is distinct from the angles that the [videoRotationAngleForHorizonLevelPreview](videorotationangleforhorizonlevelpreview.md) and [videoRotationAngleForHorizonLevelCapture](videorotationangleforhorizonlevelcapture.md) properties provide. Those angles are relative to the horizon and change dynamically as someone physically rotates the device. This method returns a static angle relative to the orientation your app provides, no matter how the device is physically oriented when your app calls it.

An angle of `0` means the output is in the camera’s unrotated, native sensor orientation. Cameras vary in how they’re physically mounted. The angle for an orientation may differ between the capture devices your app uses. An external camera returns `0` for every orientation because the relationship between the device and the camera is unknown.

Apps typically apply the returned angle to an [AVCaptureConnection](../../avcaptureconnection.md) instance’s [videoRotationAngle](../../avcaptureconnection/videorotationangle.md) property, which describes the angles a connection accepts and how it applies them.

## See Also

### Compensating for a device’s rotation

- [videoRotationAngleForHorizonLevelCapture](videorotationangleforhorizonlevelcapture.md): An angle the coordinator provides your app to apply to photos or videos it captures with the device so that they’re level relative to gravity.
- [videoRotationAngleForHorizonLevelPreview](videorotationangleforhorizonlevelpreview.md): An angle the coordinator provides your app to apply to the preview layer so that it’s level relative to gravity.
