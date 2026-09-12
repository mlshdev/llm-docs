> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devicetype-swift.property](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicetype-swift.property)

# deviceType (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The type of device, such as a built-in microphone or wide-angle camera.

## Declaration

```swift
var deviceType: AVCaptureDevice.DeviceType { get }
```

<a id="Discussion"></a>

## Discussion

Use the [default(\_:for:position:)](default%28__for_position_%29.md) method or the [AVCaptureDevice.DiscoverySession](discoverysession.md) class to find capture devices by device type.

## See Also

### Identifying a device

- [uniqueID](uniqueid.md): An identifier that uniquely identifies the device.
- [modelID](modelid.md): A model identifier for the device.
- [localizedName](localizedname.md): A localized device name for display in the user interface.
- [manufacturer](manufacturer.md): A human-readable string for the manufacturer of the device.
- [AVCaptureDevice.DeviceType](devicetype-swift.struct.md): A structure that defines the device types the framework supports.
- [position](position-swift.property.md): The physical position of the capture device hardware.
- [AVCaptureDevice.Position](position-swift.enum.md): Constants that indicate the physical position of a capture device.

# deviceType (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

The type of device, such as a built-in microphone or wide-angle camera.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureDeviceType deviceType;
```

<a id="Discussion"></a>

## Discussion

Use the [defaultDeviceWithDeviceType:mediaType:position:](default%28__for_position_%29.md) method or the [AVCaptureDeviceDiscoverySession](discoverysession.md) class to find capture devices by device type.

## See Also

### Identifying a device

- [uniqueID](uniqueid.md): An identifier that uniquely identifies the device.
- [modelID](modelid.md): A model identifier for the device.
- [localizedName](localizedname.md): A localized device name for display in the user interface.
- [manufacturer](manufacturer.md): A human-readable string for the manufacturer of the device.
- [AVCaptureDeviceType](devicetype-swift.struct.md): A structure that defines the device types the framework supports.
- [position](position-swift.property.md): The physical position of the capture device hardware.
- [AVCaptureDevicePosition](position-swift.enum.md): Constants that indicate the physical position of a capture device.
