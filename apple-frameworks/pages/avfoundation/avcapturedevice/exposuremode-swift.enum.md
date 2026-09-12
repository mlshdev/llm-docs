> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/exposuremode-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturedevice/exposuremode-swift.enum)

# AVCaptureDevice.ExposureMode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Constants that specify the exposure mode of a capture device.

## Declaration

```swift
enum ExposureMode
```

## Topics

### Exposure modes

- [AVCaptureDevice.ExposureMode.locked](exposuremode-swift.enum/locked.md): A mode that locks exposure for the device.
- [AVCaptureDevice.ExposureMode.autoExpose](exposuremode-swift.enum/autoexpose.md): A mode that automatically adjusts the exposure one time, and then locks exposure for the device.
- [AVCaptureDevice.ExposureMode.continuousAutoExposure](exposuremode-swift.enum/continuousautoexposure.md): A mode that continuously monitors exposure levels and automatically adjusts exposure when necessary.
- [AVCaptureDevice.ExposureMode.custom](exposuremode-swift.enum/custom.md): A mode where an app manually sets the exposure duration and ISO values.

### Initializers

- [init(rawValue:)](exposuremode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the exposure mode

- [isExposureModeSupported(\_:)](isexposuremodesupported%28__%29.md): Returns a Boolean value that indicates whether a device supports the specified exposure mode.
- [exposureMode](exposuremode-swift.property.md): The exposure mode for the device.

# AVCaptureExposureMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

Constants that specify the exposure mode of a capture device.

## Declaration

```objectivec
enum AVCaptureExposureMode : NSInteger;
```

## Topics

### Exposure modes

- [AVCaptureExposureModeLocked](exposuremode-swift.enum/locked.md): A mode that locks exposure for the device.
- [AVCaptureExposureModeAutoExpose](exposuremode-swift.enum/autoexpose.md): A mode that automatically adjusts the exposure one time, and then locks exposure for the device.
- [AVCaptureExposureModeContinuousAutoExposure](exposuremode-swift.enum/continuousautoexposure.md): A mode that continuously monitors exposure levels and automatically adjusts exposure when necessary.
- [AVCaptureExposureModeCustom](exposuremode-swift.enum/custom.md): A mode where an app manually sets the exposure duration and ISO values.

## See Also

### Managing the exposure mode

- [isExposureModeSupported:](isexposuremodesupported%28__%29.md): Returns a Boolean value that indicates whether a device supports the specified exposure mode.
- [exposureMode](exposuremode-swift.property.md): The exposure mode for the device.
