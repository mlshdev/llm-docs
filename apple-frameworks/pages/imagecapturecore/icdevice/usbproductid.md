> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/usbproductid](https://developer.apple.com/documentation/imagecapturecore/icdevice/usbproductid)

# usbProductID (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The USB Product ID (PID) associated with the device.

## Declaration

```swift
var usbProductID: Int32 { get }
```

## See Also

### Inspecting a Device’s Type and Location

- [type](type.md): A combination of the device’s type and its location type.
- [ICDeviceType](../icdevicetype.md): The type of image capture device.
- [ICDeviceTypeMask](../icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](locationdescription.md): A nonlocalized location description for the device.
- [modulePath](modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationType](../icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationTypeMask](../icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](../icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](usblocationid.md): The USB location that the device is occupying.
- [usbVendorID](usbvendorid.md): The USB Vendor ID (VID) associated with the device.

# usbProductID (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The USB Product ID (PID) associated with the device.

## Declaration

```objectivec
@property (nonatomic, readonly) int usbProductID;
```

## See Also

### Inspecting a Device’s Type and Location

- [type](type.md): A combination of the device’s type and its location type.
- [ICDeviceType](../icdevicetype.md): The type of image capture device.
- [ICDeviceTypeMask](../icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](locationdescription.md): A nonlocalized location description for the device.
- [modulePath](modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationType](../icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationTypeMask](../icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](../icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](usblocationid.md): The USB location that the device is occupying.
- [usbVendorID](usbvendorid.md): The USB Vendor ID (VID) associated with the device.
