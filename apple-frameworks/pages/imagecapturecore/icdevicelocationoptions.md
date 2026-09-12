> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicelocationoptions](https://developer.apple.com/documentation/imagecapturecore/icdevicelocationoptions)

# ICDeviceLocationOptions (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Options for the location of the image capture device.

## Declaration

```swift
struct ICDeviceLocationOptions
```

## Topics

### Creating Location Options

- [init(rawValue:)](icdevicelocationoptions/init%28rawvalue_%29.md): Creates ImageCaptureCore location options.

### Determining a Location

- [descriptionBluetooth](icdevicelocationoptions/descriptionbluetooth.md): A paired Bluetooth device.
- [descriptionFireWire](icdevicelocationoptions/descriptionfirewire.md): A device that’s directly attached to the Mac through its FireWire port.
- [descriptionMassStorage](icdevicelocationoptions/descriptionmassstorage.md): A mass storage device.
- [descriptionUSB](icdevicelocationoptions/descriptionusb.md): A device that’s directly attached to the Mac through its USB port.

## Relationships

### Conforms To

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
- [ICDeviceLocationTypeMask](icdevicelocationtypemask.md): Masks for detecting different device locations.
- [usbLocationID](icdevice/usblocationid.md): The USB location that the device is occupying.
- [usbProductID](icdevice/usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](icdevice/usbvendorid.md): The USB Vendor ID (VID) associated with the device.

# ICDeviceLocationOptions (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Options for the location of the image capture device.

## Declaration

```objectivec
typedef NSString * ICDeviceLocationOptions;
```

## Topics

### Determining a Location

- [ICDeviceLocationDescriptionBluetooth](icdevicelocationoptions/descriptionbluetooth.md): A paired Bluetooth device.
- [ICDeviceLocationDescriptionFireWire](icdevicelocationoptions/descriptionfirewire.md): A device that’s directly attached to the Mac through its FireWire port.
- [ICDeviceLocationDescriptionMassStorage](icdevicelocationoptions/descriptionmassstorage.md): A mass storage device.
- [ICDeviceLocationDescriptionUSB](icdevicelocationoptions/descriptionusb.md): A device that’s directly attached to the Mac through its USB port.

## See Also

### Inspecting a Device’s Type and Location

- [type](icdevice/type.md): A combination of the device’s type and its location type.
- [ICDeviceType](icdevicetype.md): The type of image capture device.
- [ICDeviceTypeMask](icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](icdevice/locationdescription.md): A nonlocalized location description for the device.
- [modulePath](icdevice/modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](icdevice/moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationType](icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationTypeMask](icdevicelocationtypemask.md): Masks for detecting different device locations.
- [usbLocationID](icdevice/usblocationid.md): The USB location that the device is occupying.
- [usbProductID](icdevice/usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](icdevice/usbvendorid.md): The USB Vendor ID (VID) associated with the device.
