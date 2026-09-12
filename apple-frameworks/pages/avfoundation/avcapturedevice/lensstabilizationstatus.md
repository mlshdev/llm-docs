> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/lensstabilizationstatus](https://developer.apple.com/documentation/avfoundation/avcapturedevice/lensstabilizationstatus)

# AVCaptureDevice.LensStabilizationStatus (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Constants that indicate the status of optical image stabilization hardware during a bracketed photo capture.

## Declaration

```swift
enum LensStabilizationStatus
```

## Topics

### Lens stabilization values

- [AVCaptureDevice.LensStabilizationStatus.unsupported](lensstabilizationstatus/unsupported.md): Lens stabilization isn’t available on the device or device configuration that captured this photo.
- [AVCaptureDevice.LensStabilizationStatus.off](lensstabilizationstatus/off.md): Lens stabilization isn’t specified for this photo capture.
- [AVCaptureDevice.LensStabilizationStatus.active](lensstabilizationstatus/active.md): Lens stabilization was active for the full duration of the photo capture.
- [AVCaptureDevice.LensStabilizationStatus.outOfRange](lensstabilizationstatus/outofrange.md): Lens stabilization was enabled for the photo capture, but device motion or capture duration exceeded the stabilization module’s correction limits.
- [AVCaptureDevice.LensStabilizationStatus.unavailable](lensstabilizationstatus/unavailable.md): Lens stabilization was temporarily unavailable during the photo capture.

### Initializers

- [init(rawValue:)](lensstabilizationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVCaptureLensStabilizationStatus (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Constants that indicate the status of optical image stabilization hardware during a bracketed photo capture.

## Declaration

```objectivec
enum AVCaptureLensStabilizationStatus : NSInteger;
```

## Topics

### Lens stabilization values

- [AVCaptureLensStabilizationStatusUnsupported](lensstabilizationstatus/unsupported.md): Lens stabilization isn’t available on the device or device configuration that captured this photo.
- [AVCaptureLensStabilizationStatusOff](lensstabilizationstatus/off.md): Lens stabilization isn’t specified for this photo capture.
- [AVCaptureLensStabilizationStatusActive](lensstabilizationstatus/active.md): Lens stabilization was active for the full duration of the photo capture.
- [AVCaptureLensStabilizationStatusOutOfRange](lensstabilizationstatus/outofrange.md): Lens stabilization was enabled for the photo capture, but device motion or capture duration exceeded the stabilization module’s correction limits.
- [AVCaptureLensStabilizationStatusUnavailable](lensstabilizationstatus/unavailable.md): Lens stabilization was temporarily unavailable during the photo capture.
