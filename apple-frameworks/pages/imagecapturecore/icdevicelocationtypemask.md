> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicelocationtypemask](https://developer.apple.com/documentation/imagecapturecore/icdevicelocationtypemask)

# ICDeviceLocationTypeMask (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 10.4+ · visionOS 1.0+

Masks for detecting different device locations.

## Declaration

```swift
enum ICDeviceLocationTypeMask
```

## Topics

### Constants

- [ICDeviceLocationTypeMask.bluetooth](icdevicelocationtypemask/bluetooth.md): A mask for detecting a paired Bluetooth device.
- [ICDeviceLocationTypeMask.bonjour](icdevicelocationtypemask/bonjour.md): A mask for detecting a network device that publishes a Bonjour service.
- [ICDeviceLocationTypeMask.local](icdevicelocationtypemask/local.md): A mask for detecting a local device, such as USB or FireWire.
- [ICDeviceLocationTypeMask.remote](icdevicelocationtypemask/remote.md): A mask for detecting a remote device, such as a shared, Bonjour, or Bluetooth device.
- [ICDeviceLocationTypeMask.shared](icdevicelocationtypemask/shared.md): A mask for detecting a device shared by another Mac host.

### Initializers

- [init(rawValue:)](icdevicelocationtypemask/init%28rawvalue_%29.md)

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
- [ICDeviceLocationType](icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationOptions](icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](icdevice/usblocationid.md): The USB location that the device is occupying.
- [usbProductID](icdevice/usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](icdevice/usbvendorid.md): The USB Vendor ID (VID) associated with the device.

# ICDeviceLocationTypeMask (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Enumeration  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 10.4+ · visionOS 1.0+

Masks for detecting different device locations.

## Declaration

```objectivec
enum ICDeviceLocationTypeMask : NSUInteger;
```

## Topics

### Constants

- [ICDeviceLocationTypeMaskBluetooth](icdevicelocationtypemask/bluetooth.md): A mask for detecting a paired Bluetooth device.
- [ICDeviceLocationTypeMaskBonjour](icdevicelocationtypemask/bonjour.md): A mask for detecting a network device that publishes a Bonjour service.
- [ICDeviceLocationTypeMaskLocal](icdevicelocationtypemask/local.md): A mask for detecting a local device, such as USB or FireWire.
- [ICDeviceLocationTypeMaskRemote](icdevicelocationtypemask/remote.md): A mask for detecting a remote device, such as a shared, Bonjour, or Bluetooth device.
- [ICDeviceLocationTypeMaskShared](icdevicelocationtypemask/shared.md): A mask for detecting a device shared by another Mac host.

## See Also

### Inspecting a Device’s Type and Location

- [type](icdevice/type.md): A combination of the device’s type and its location type.
- [ICDeviceType](icdevicetype.md): The type of image capture device.
- [ICDeviceTypeMask](icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](icdevice/locationdescription.md): A nonlocalized location description for the device.
- [modulePath](icdevice/modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](icdevice/moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationType](icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationOptions](icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](icdevice/usblocationid.md): The USB location that the device is occupying.
- [usbProductID](icdevice/usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](icdevice/usbvendorid.md): The USB Vendor ID (VID) associated with the device.
