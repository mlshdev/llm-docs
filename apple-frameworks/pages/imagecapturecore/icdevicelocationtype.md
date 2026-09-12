> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicelocationtype](https://developer.apple.com/documentation/imagecapturecore/icdevicelocationtype)

# ICDeviceLocationType (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · visionOS 1.0+

The location of the image capture device.

## Declaration

```swift
enum ICDeviceLocationType
```

## Topics

### Constants

- [ICDeviceLocationType.bluetooth](icdevicelocationtype/bluetooth.md): A paired Bluetooth device.
- [ICDeviceLocationType.bonjour](icdevicelocationtype/bonjour.md): A supported Bonjour services device.
- [ICDeviceLocationType.local](icdevicelocationtype/local.md): A device that’s directly attached to the Mac through its USB or FireWire port.
- [ICDeviceLocationType.shared](icdevicelocationtype/shared.md): A device that’s shared by other Mac hosts.

### Initializers

- [init(rawValue:)](icdevicelocationtype/init%28rawvalue_%29.md)

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
- [ICDeviceTypeMask](icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](icdevice/locationdescription.md): A nonlocalized location description for the device.
- [modulePath](icdevice/modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](icdevice/moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationTypeMask](icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](icdevice/usblocationid.md): The USB location that the device is occupying.
- [usbProductID](icdevice/usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](icdevice/usbvendorid.md): The USB Vendor ID (VID) associated with the device.

# ICDeviceLocationType (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · visionOS 1.0+

The location of the image capture device.

## Declaration

```objectivec
enum ICDeviceLocationType : NSUInteger;
```

## Topics

### Constants

- [ICDeviceLocationTypeBluetooth](icdevicelocationtype/bluetooth.md): A paired Bluetooth device.
- [ICDeviceLocationTypeBonjour](icdevicelocationtype/bonjour.md): A supported Bonjour services device.
- [ICDeviceLocationTypeLocal](icdevicelocationtype/local.md): A device that’s directly attached to the Mac through its USB or FireWire port.
- [ICDeviceLocationTypeShared](icdevicelocationtype/shared.md): A device that’s shared by other Mac hosts.

## See Also

### Inspecting a Device’s Type and Location

- [type](icdevice/type.md): A combination of the device’s type and its location type.
- [ICDeviceType](icdevicetype.md): The type of image capture device.
- [ICDeviceTypeMask](icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](icdevice/locationdescription.md): A nonlocalized location description for the device.
- [modulePath](icdevice/modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](icdevice/moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationTypeMask](icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](icdevice/usblocationid.md): The USB location that the device is occupying.
- [usbProductID](icdevice/usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](icdevice/usbvendorid.md): The USB Vendor ID (VID) associated with the device.
