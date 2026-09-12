> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicetype](https://developer.apple.com/documentation/imagecapturecore/icdevicetype)

# ICDeviceType (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The type of image capture device.

## Declaration

```swift
enum ICDeviceType
```

## Topics

### Constants

- [ICDeviceType.camera](icdevicetype/camera.md): The device is a camera.
- [ICDeviceType.scanner](icdevicetype/scanner.md): The device is a scanner.

### Initializers

- [init(rawValue:)](icdevicetype/init%28rawvalue_%29.md)

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
- [ICDeviceTypeMask](icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](icdevice/locationdescription.md): A nonlocalized location description for the device.
- [modulePath](icdevice/modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](icdevice/moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationType](icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationTypeMask](icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](icdevice/usblocationid.md): The USB location that the device is occupying.
- [usbProductID](icdevice/usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](icdevice/usbvendorid.md): The USB Vendor ID (VID) associated with the device.

# ICDeviceType (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The type of image capture device.

## Declaration

```objectivec
enum ICDeviceType : NSUInteger;
```

## Topics

### Constants

- [ICDeviceTypeCamera](icdevicetype/camera.md): The device is a camera.
- [ICDeviceTypeScanner](icdevicetype/scanner.md): The device is a scanner.

## See Also

### Inspecting a Device’s Type and Location

- [type](icdevice/type.md): A combination of the device’s type and its location type.
- [ICDeviceTypeMask](icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](icdevice/locationdescription.md): A nonlocalized location description for the device.
- [modulePath](icdevice/modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](icdevice/moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationType](icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationTypeMask](icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](icdevice/usblocationid.md): The USB location that the device is occupying.
- [usbProductID](icdevice/usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](icdevice/usbvendorid.md): The USB Vendor ID (VID) associated with the device.
