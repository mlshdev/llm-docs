> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devicetype-swift.struct](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicetype-swift.struct)

# AVCaptureDevice.DeviceType (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 2.1+

A structure that defines the device types the framework supports.

## Declaration

```swift
struct DeviceType
```

<a id="Discussion"></a>

## Discussion

Use the device type constants to retrieve devices using an [AVCaptureDevice.DiscoverySession](discoverysession.md) object, or when calling the [default(\_:for:position:)](default%28__for_position_%29.md) method.

## Topics

### Cameras

- [builtInWideAngleCamera](devicetype-swift.struct/builtinwideanglecamera.md): A built-in wide-angle camera device type.
- [builtInUltraWideCamera](devicetype-swift.struct/builtinultrawidecamera.md): A built-in camera device type with a shorter focal length than a wide-angle camera.
- [builtInTelephotoCamera](devicetype-swift.struct/builtintelephotocamera.md): A built-in camera device type with a longer focal length than a wide-angle camera.
- [builtInDualCamera](devicetype-swift.struct/builtindualcamera.md): A built-in camera device type that consists of a wide-angle and telephoto camera.
- [builtInDualWideCamera](devicetype-swift.struct/builtindualwidecamera.md): A built-in camera device type that consists of two cameras of fixed focal length, one ultrawide angle and one wide angle.
- [builtInTripleCamera](devicetype-swift.struct/builtintriplecamera.md): A built-in camera device type that consists of three cameras of fixed focal length, one ultrawide angle, one wide angle, and one telephoto.
- [continuityCamera](devicetype-swift.struct/continuitycamera.md): A Continuity Camera device type.
- [builtInDuoCamera](devicetype-swift.struct/builtinduocamera.md): Deprecated. A built-in dual camera device type.

### Microphones

- [microphone](devicetype-swift.struct/microphone.md): A microphone device type.
- [builtInMicrophone](devicetype-swift.struct/builtinmicrophone.md): Deprecated. A built-in microphone.

### External devices

- [external](devicetype-swift.struct/external.md): An external device type.
- [externalUnknown](devicetype-swift.struct/externalunknown.md): Deprecated. An unknown external device type.

### Desk View

- [deskViewCamera](devicetype-swift.struct/deskviewcamera.md): A virtual overhead camera that captures a user’s desk.

### Depth sensing

- [builtInLiDARDepthCamera](devicetype-swift.struct/builtinlidardepthcamera.md): A device that consists of two cameras, one LiDAR and one YUV.
- [builtInTrueDepthCamera](devicetype-swift.struct/builtintruedepthcamera.md): A device that consists of two cameras, one Infrared and one YUV.

### Initializers

- [init(rawValue:)](devicetype-swift.struct/init%28rawvalue_%29.md): Creates a capture device type with a string value.

## Relationships

### Conforms To

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
- [position](position-swift.property.md): The physical position of the capture device hardware.
- [AVCaptureDevice.Position](position-swift.enum.md): Constants that indicate the physical position of a capture device.

# AVCaptureDeviceType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 2.1+

A structure that defines the device types the framework supports.

## Declaration

```objectivec
typedef NSString * AVCaptureDeviceType;
```

<a id="Discussion"></a>

## Discussion

Use the device type constants to retrieve devices using an [AVCaptureDeviceDiscoverySession](discoverysession.md) object, or when calling the [defaultDeviceWithDeviceType:mediaType:position:](default%28__for_position_%29.md) method.

## Topics

### Cameras

- [AVCaptureDeviceTypeBuiltInWideAngleCamera](devicetype-swift.struct/builtinwideanglecamera.md): A built-in wide-angle camera device type.
- [AVCaptureDeviceTypeBuiltInUltraWideCamera](devicetype-swift.struct/builtinultrawidecamera.md): A built-in camera device type with a shorter focal length than a wide-angle camera.
- [AVCaptureDeviceTypeBuiltInTelephotoCamera](devicetype-swift.struct/builtintelephotocamera.md): A built-in camera device type with a longer focal length than a wide-angle camera.
- [AVCaptureDeviceTypeBuiltInDualCamera](devicetype-swift.struct/builtindualcamera.md): A built-in camera device type that consists of a wide-angle and telephoto camera.
- [AVCaptureDeviceTypeBuiltInDualWideCamera](devicetype-swift.struct/builtindualwidecamera.md): A built-in camera device type that consists of two cameras of fixed focal length, one ultrawide angle and one wide angle.
- [AVCaptureDeviceTypeBuiltInTripleCamera](devicetype-swift.struct/builtintriplecamera.md): A built-in camera device type that consists of three cameras of fixed focal length, one ultrawide angle, one wide angle, and one telephoto.
- [AVCaptureDeviceTypeContinuityCamera](devicetype-swift.struct/continuitycamera.md): A Continuity Camera device type.
- [AVCaptureDeviceTypeBuiltInDuoCamera](devicetype-swift.struct/builtinduocamera.md): Deprecated. A built-in dual camera device type.

### Microphones

- [AVCaptureDeviceTypeMicrophone](devicetype-swift.struct/microphone.md): A microphone device type.
- [AVCaptureDeviceTypeBuiltInMicrophone](devicetype-swift.struct/builtinmicrophone.md): Deprecated. A built-in microphone.

### External devices

- [AVCaptureDeviceTypeExternal](devicetype-swift.struct/external.md): An external device type.
- [AVCaptureDeviceTypeExternalUnknown](devicetype-swift.struct/externalunknown.md): Deprecated. An unknown external device type.

### Desk View

- [AVCaptureDeviceTypeDeskViewCamera](devicetype-swift.struct/deskviewcamera.md): A virtual overhead camera that captures a user’s desk.

### Depth sensing

- [AVCaptureDeviceTypeBuiltInLiDARDepthCamera](devicetype-swift.struct/builtinlidardepthcamera.md): A device that consists of two cameras, one LiDAR and one YUV.
- [AVCaptureDeviceTypeBuiltInTrueDepthCamera](devicetype-swift.struct/builtintruedepthcamera.md): A device that consists of two cameras, one Infrared and one YUV.

## See Also

### Identifying a device

- [uniqueID](uniqueid.md): An identifier that uniquely identifies the device.
- [modelID](modelid.md): A model identifier for the device.
- [localizedName](localizedname.md): A localized device name for display in the user interface.
- [manufacturer](manufacturer.md): A human-readable string for the manufacturer of the device.
- [deviceType](devicetype-swift.property.md): The type of device, such as a built-in microphone or wide-angle camera.
- [position](position-swift.property.md): The physical position of the capture device hardware.
- [AVCaptureDevicePosition](position-swift.enum.md): Constants that indicate the physical position of a capture device.
