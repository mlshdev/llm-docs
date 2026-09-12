> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/centerstagecontrolmode-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturedevice/centerstagecontrolmode-swift.enum)

# AVCaptureDevice.CenterStageControlMode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

Constants that indicate the current Center Stage control mode.

## Declaration

```swift
enum CenterStageControlMode
```

## Topics

### Control modes

- [AVCaptureDevice.CenterStageControlMode.user](centerstagecontrolmode-swift.enum/user.md): The user controls Center Stage.
- [AVCaptureDevice.CenterStageControlMode.app](centerstagecontrolmode-swift.enum/app.md): The app controls Center Stage.
- [AVCaptureDevice.CenterStageControlMode.cooperative](centerstagecontrolmode-swift.enum/cooperative.md): A user and app cooperatively share control of Center Stage.

### Initializers

- [init(rawValue:)](centerstagecontrolmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Center Stage

- [isCenterStageActive](iscenterstageactive.md): A Boolean value that indicates whether Center Stage is active on a device.
- [isCenterStageEnabled](iscenterstageenabled.md): A Boolean value that indicates whether a user or an app enabled Center Stage on a device.
- [centerStageRectOfInterest](centerstagerectofinterest.md): The effective region within the output pixel buffer to perform Center Stage framing.
- [centerStageControlMode](centerstagecontrolmode-swift.type.property.md): A value that indicates the current mode of Center Stage control.

# AVCaptureCenterStageControlMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 12.3+ · tvOS 17.0+

Constants that indicate the current Center Stage control mode.

## Declaration

```objectivec
enum AVCaptureCenterStageControlMode : NSInteger;
```

## Topics

### Control modes

- [AVCaptureCenterStageControlModeUser](centerstagecontrolmode-swift.enum/user.md): The user controls Center Stage.
- [AVCaptureCenterStageControlModeApp](centerstagecontrolmode-swift.enum/app.md): The app controls Center Stage.
- [AVCaptureCenterStageControlModeCooperative](centerstagecontrolmode-swift.enum/cooperative.md): A user and app cooperatively share control of Center Stage.

## See Also

### Configuring Center Stage

- [centerStageActive](iscenterstageactive.md): A Boolean value that indicates whether Center Stage is active on a device.
- [centerStageEnabled](iscenterstageenabled.md): A Boolean value that indicates whether a user or an app enabled Center Stage on a device.
- [centerStageRectOfInterest](centerstagerectofinterest.md): The effective region within the output pixel buffer to perform Center Stage framing.
- [centerStageRectOfInterestSupported](centerstagerectofinterestsupported.md)
- [centerStageControlMode](centerstagecontrolmode-swift.type.property.md): A value that indicates the current mode of Center Stage control.
