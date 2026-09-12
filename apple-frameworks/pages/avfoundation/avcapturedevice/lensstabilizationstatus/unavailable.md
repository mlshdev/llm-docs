> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/lensstabilizationstatus/unavailable](https://developer.apple.com/documentation/avfoundation/avcapturedevice/lensstabilizationstatus/unavailable)

# AVCaptureDevice.LensStabilizationStatus.unavailable (Swift)

**Framework:** AVFoundation  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Lens stabilization was temporarily unavailable during the photo capture.

## Declaration

```swift
case unavailable
```

## See Also

### Lens stabilization values

- [AVCaptureDevice.LensStabilizationStatus.unsupported](unsupported.md): Lens stabilization isn’t available on the device or device configuration that captured this photo.
- [AVCaptureDevice.LensStabilizationStatus.off](off.md): Lens stabilization isn’t specified for this photo capture.
- [AVCaptureDevice.LensStabilizationStatus.active](active.md): Lens stabilization was active for the full duration of the photo capture.
- [AVCaptureDevice.LensStabilizationStatus.outOfRange](outofrange.md): Lens stabilization was enabled for the photo capture, but device motion or capture duration exceeded the stabilization module’s correction limits.

# AVCaptureLensStabilizationStatusUnavailable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Lens stabilization was temporarily unavailable during the photo capture.

## Declaration

```objectivec
AVCaptureLensStabilizationStatusUnavailable
```

## See Also

### Lens stabilization values

- [AVCaptureLensStabilizationStatusUnsupported](unsupported.md): Lens stabilization isn’t available on the device or device configuration that captured this photo.
- [AVCaptureLensStabilizationStatusOff](off.md): Lens stabilization isn’t specified for this photo capture.
- [AVCaptureLensStabilizationStatusActive](active.md): Lens stabilization was active for the full duration of the photo capture.
- [AVCaptureLensStabilizationStatusOutOfRange](outofrange.md): Lens stabilization was enabled for the photo capture, but device motion or capture duration exceeded the stabilization module’s correction limits.
