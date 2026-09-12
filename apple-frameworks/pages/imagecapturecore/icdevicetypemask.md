> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicetypemask](https://developer.apple.com/documentation/imagecapturecore/icdevicetypemask)

# ICDeviceTypeMask (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 10.4+ · visionOS 1.0+

Masks for detecting different device types.

## Declaration

```swift
enum ICDeviceTypeMask
```

## Topics

### Constants

- [ICDeviceTypeMask.camera](icdevicetypemask/camera.md): A mask for detecting a camera.
- [ICDeviceTypeMask.scanner](icdevicetypemask/scanner.md): A mask for detecting a scanner.

### Initializers

- [init(rawValue:)](icdevicetypemask/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a Device’s Type and Location

- [type](icdevice/type.md): A combination of the device’s type and its location type.
- [ICDeviceType](icdevicetype.md): The type of image capture device.
- [locationDescription](icdevice/locationdescription.md): A nonlocalized location description for the device.
- [modulePath](icdevice/modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](icdevice/moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationType](icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationTypeMask](icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](icdevice/usblocationid.md): The USB location that the device is occupying.
- [usbProductID](icdevice/usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](icdevice/usbvendorid.md): The USB Vendor ID (VID) associated with the device.

# ICDeviceTypeMask (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 10.4+ · visionOS 1.0+

Masks for detecting different device types.

## Declaration

```objectivec
enum ICDeviceTypeMask : NSUInteger;
```

## Topics

### Constants

- [ICDeviceTypeMaskCamera](icdevicetypemask/camera.md): A mask for detecting a camera.
- [ICDeviceTypeMaskScanner](icdevicetypemask/scanner.md): A mask for detecting a scanner.

## See Also

### Inspecting a Device’s Type and Location

- [type](icdevice/type.md): A combination of the device’s type and its location type.
- [ICDeviceType](icdevicetype.md): The type of image capture device.
- [locationDescription](icdevice/locationdescription.md): A nonlocalized location description for the device.
- [modulePath](icdevice/modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](icdevice/moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationType](icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationTypeMask](icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](icdevice/usblocationid.md): The USB location that the device is occupying.
- [usbProductID](icdevice/usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](icdevice/usbvendorid.md): The USB Vendor ID (VID) associated with the device.
