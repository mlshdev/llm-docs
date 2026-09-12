> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/manufacturer](https://developer.apple.com/documentation/avfoundation/avcapturedevice/manufacturer)

# manufacturer (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.9+ · tvOS 17.0+ · visionOS 2.1+

A human-readable string for the manufacturer of the device.

## Declaration

```swift
var manufacturer: String { get }
```

<a id="Discussion"></a>

## Discussion

You can use this property to identify capture devices by manufacturer. For all Apple devices, the value of this property is `Apple Inc.`

> **Tip**

>  Devices from third-party manufacturers may not provide identifying text, in which case the value of this property is an empty string.

## See Also

### Identifying a device

- [uniqueID](uniqueid.md): An identifier that uniquely identifies the device.
- [modelID](modelid.md): A model identifier for the device.
- [localizedName](localizedname.md): A localized device name for display in the user interface.
- [deviceType](devicetype-swift.property.md): The type of device, such as a built-in microphone or wide-angle camera.
- [AVCaptureDevice.DeviceType](devicetype-swift.struct.md): A structure that defines the device types the framework supports.
- [position](position-swift.property.md): The physical position of the capture device hardware.
- [AVCaptureDevice.Position](position-swift.enum.md): Constants that indicate the physical position of a capture device.

# manufacturer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.9+ · tvOS 17.0+ · visionOS 2.1+

A human-readable string for the manufacturer of the device.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * manufacturer;
```

<a id="Discussion"></a>

## Discussion

You can use this property to identify capture devices by manufacturer. For all Apple devices, the value of this property is `Apple Inc.`

> **Tip**

>  Devices from third-party manufacturers may not provide identifying text, in which case the value of this property is an empty string.

## See Also

### Identifying a device

- [uniqueID](uniqueid.md): An identifier that uniquely identifies the device.
- [modelID](modelid.md): A model identifier for the device.
- [localizedName](localizedname.md): A localized device name for display in the user interface.
- [deviceType](devicetype-swift.property.md): The type of device, such as a built-in microphone or wide-angle camera.
- [AVCaptureDeviceType](devicetype-swift.struct.md): A structure that defines the device types the framework supports.
- [position](position-swift.property.md): The physical position of the capture device hardware.
- [AVCaptureDevicePosition](position-swift.enum.md): Constants that indicate the physical position of a capture device.
