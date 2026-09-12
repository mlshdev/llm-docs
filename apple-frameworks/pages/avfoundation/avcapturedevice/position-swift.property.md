> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/position-swift.property](https://developer.apple.com/documentation/avfoundation/avcapturedevice/position-swift.property)

# position (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The physical position of the capture device hardware.

## Declaration

```swift
var position: AVCaptureDevice.Position { get }
```

<a id="Discussion"></a>

## Discussion

This property value is key-value observable.

## See Also

### Identifying a device

- [uniqueID](uniqueid.md): An identifier that uniquely identifies the device.
- [modelID](modelid.md): A model identifier for the device.
- [localizedName](localizedname.md): A localized device name for display in the user interface.
- [manufacturer](manufacturer.md): A human-readable string for the manufacturer of the device.
- [deviceType](devicetype-swift.property.md): The type of device, such as a built-in microphone or wide-angle camera.
- [AVCaptureDevice.DeviceType](devicetype-swift.struct.md): A structure that defines the device types the framework supports.
- [AVCaptureDevice.Position](position-swift.enum.md): Constants that indicate the physical position of a capture device.

# position (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

The physical position of the capture device hardware.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureDevicePosition position;
```

<a id="Discussion"></a>

## Discussion

This property value is key-value observable.

## See Also

### Identifying a device

- [uniqueID](uniqueid.md): An identifier that uniquely identifies the device.
- [modelID](modelid.md): A model identifier for the device.
- [localizedName](localizedname.md): A localized device name for display in the user interface.
- [manufacturer](manufacturer.md): A human-readable string for the manufacturer of the device.
- [deviceType](devicetype-swift.property.md): The type of device, such as a built-in microphone or wide-angle camera.
- [AVCaptureDeviceType](devicetype-swift.struct.md): A structure that defines the device types the framework supports.
- [AVCaptureDevicePosition](position-swift.enum.md): Constants that indicate the physical position of a capture device.
