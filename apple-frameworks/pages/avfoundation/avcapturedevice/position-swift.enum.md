> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/position-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturedevice/position-swift.enum)

# AVCaptureDevice.Position (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Constants that indicate the physical position of a capture device.

## Declaration

```swift
enum Position
```

## Topics

### Positions

- [AVCaptureDevice.Position.front](position-swift.enum/front.md): A position on the user-facing side of an iOS device.
- [AVCaptureDevice.Position.back](position-swift.enum/back.md): A position on the subject-facing side of an iOS device.
- [AVCaptureDevice.Position.unspecified](position-swift.enum/unspecified.md): A position that’s unspecified.

### Initializers

- [init(rawValue:)](position-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Identifying a device

- [uniqueID](uniqueid.md): An identifier that uniquely identifies the device.
- [modelID](modelid.md): A model identifier for the device.
- [localizedName](localizedname.md): A localized device name for display in the user interface.
- [manufacturer](manufacturer.md): A human-readable string for the manufacturer of the device.
- [deviceType](devicetype-swift.property.md): The type of device, such as a built-in microphone or wide-angle camera.
- [AVCaptureDevice.DeviceType](devicetype-swift.struct.md): A structure that defines the device types the framework supports.
- [position](position-swift.property.md): The physical position of the capture device hardware.

# AVCaptureDevicePosition (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

Constants that indicate the physical position of a capture device.

## Declaration

```objectivec
enum AVCaptureDevicePosition : NSInteger;
```

## Topics

### Positions

- [AVCaptureDevicePositionFront](position-swift.enum/front.md): A position on the user-facing side of an iOS device.
- [AVCaptureDevicePositionBack](position-swift.enum/back.md): A position on the subject-facing side of an iOS device.
- [AVCaptureDevicePositionUnspecified](position-swift.enum/unspecified.md): A position that’s unspecified.

## See Also

### Identifying a device

- [uniqueID](uniqueid.md): An identifier that uniquely identifies the device.
- [modelID](modelid.md): A model identifier for the device.
- [localizedName](localizedname.md): A localized device name for display in the user interface.
- [manufacturer](manufacturer.md): A human-readable string for the manufacturer of the device.
- [deviceType](devicetype-swift.property.md): The type of device, such as a built-in microphone or wide-angle camera.
- [AVCaptureDeviceType](devicetype-swift.struct.md): A structure that defines the device types the framework supports.
- [position](position-swift.property.md): The physical position of the capture device hardware.
