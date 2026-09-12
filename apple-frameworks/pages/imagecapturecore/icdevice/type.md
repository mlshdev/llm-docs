> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/type](https://developer.apple.com/documentation/imagecapturecore/icdevice/type)

# type (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A combination of the device’s type and its location type.

## Declaration

```swift
var type: ICDeviceType { get }
```

<a id="Discussion"></a>

## Discussion

This property combines the device’s type, for example [ICDeviceType.camera](../icdevicetype/camera.md), with its location type, for example [ICDeviceLocationType.bluetooth](../icdevicelocationtype/bluetooth.md).

To isolate the device’s type, perform bitwise `AND` on this property with an [ICDeviceTypeMask](../icdevicetypemask.md).

To isolate the device’s location type, perform bitwise `AND` on this property with an [ICDeviceLocationTypeMask](../icdevicelocationtypemask.md).

## See Also

### Inspecting a Device’s Type and Location

- [ICDeviceType](../icdevicetype.md): The type of image capture device.
- [ICDeviceTypeMask](../icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](locationdescription.md): A nonlocalized location description for the device.
- [modulePath](modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationType](../icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationTypeMask](../icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](../icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](usblocationid.md): The USB location that the device is occupying.
- [usbProductID](usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](usbvendorid.md): The USB Vendor ID (VID) associated with the device.

# type (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A combination of the device’s type and its location type.

## Declaration

```objectivec
@property (nonatomic, readonly) ICDeviceType type;
```

<a id="Discussion"></a>

## Discussion

This property combines the device’s type, for example [ICDeviceTypeCamera](../icdevicetype/camera.md), with its location type, for example [ICDeviceLocationTypeBluetooth](../icdevicelocationtype/bluetooth.md).

To isolate the device’s type, perform bitwise `AND` on this property with an [ICDeviceTypeMask](../icdevicetypemask.md).

To isolate the device’s location type, perform bitwise `AND` on this property with an [ICDeviceLocationTypeMask](../icdevicelocationtypemask.md).

## See Also

### Inspecting a Device’s Type and Location

- [ICDeviceType](../icdevicetype.md): The type of image capture device.
- [ICDeviceTypeMask](../icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](locationdescription.md): A nonlocalized location description for the device.
- [modulePath](modulepath.md): The file system path of the device module associated with this device.
- [moduleVersion](moduleversion.md): The bundle version of the device module associated with this device.
- [ICDeviceLocationType](../icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationTypeMask](../icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](../icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](usblocationid.md): The USB location that the device is occupying.
- [usbProductID](usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](usbvendorid.md): The USB Vendor ID (VID) associated with the device.
