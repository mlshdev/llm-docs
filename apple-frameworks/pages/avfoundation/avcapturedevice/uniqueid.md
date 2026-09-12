> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/uniqueid](https://developer.apple.com/documentation/avfoundation/avcapturedevice/uniqueid)

# uniqueID (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An identifier that uniquely identifies the device.

## Declaration

```swift
var uniqueID: String { get }
```

<a id="Discussion"></a>

## Discussion

Capture devices have a unique identifier that persists on one system across device connections and disconnections, application restarts, and reboots of the system itself. You can store the value returned by this property to recall or track the status of a specific device in the future.

## See Also

### Identifying a device

- [modelID](modelid.md): A model identifier for the device.
- [localizedName](localizedname.md): A localized device name for display in the user interface.
- [manufacturer](manufacturer.md): A human-readable string for the manufacturer of the device.
- [deviceType](devicetype-swift.property.md): The type of device, such as a built-in microphone or wide-angle camera.
- [AVCaptureDevice.DeviceType](devicetype-swift.struct.md): A structure that defines the device types the framework supports.
- [position](position-swift.property.md): The physical position of the capture device hardware.
- [AVCaptureDevice.Position](position-swift.enum.md): Constants that indicate the physical position of a capture device.

# uniqueID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+ · visionOS 1.0+

An identifier that uniquely identifies the device.

## Declaration

```objectivec
@property (nonatomic, readonly) NSString * uniqueID;
```

<a id="Discussion"></a>

## Discussion

Capture devices have a unique identifier that persists on one system across device connections and disconnections, application restarts, and reboots of the system itself. You can store the value returned by this property to recall or track the status of a specific device in the future.

## See Also

### Identifying a device

- [modelID](modelid.md): A model identifier for the device.
- [localizedName](localizedname.md): A localized device name for display in the user interface.
- [manufacturer](manufacturer.md): A human-readable string for the manufacturer of the device.
- [deviceType](devicetype-swift.property.md): The type of device, such as a built-in microphone or wide-angle camera.
- [AVCaptureDeviceType](devicetype-swift.struct.md): A structure that defines the device types the framework supports.
- [position](position-swift.property.md): The physical position of the capture device hardware.
- [AVCaptureDevicePosition](position-swift.enum.md): Constants that indicate the physical position of a capture device.
