> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/moduleversion](https://developer.apple.com/documentation/imagecapturecore/icdevice/moduleversion)

# moduleVersion (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The bundle version of the device module associated with this device.

## Declaration

```swift
var moduleVersion: String? { get }
```

<a id="Discussion"></a>

## Discussion

The bundle version may change if an existing device module associated with this device is updated or a new device module for this device is installed.

## See Also

### Inspecting a Device’s Type and Location

- [type](type.md): A combination of the device’s type and its location type.
- [ICDeviceType](../icdevicetype.md): The type of image capture device.
- [ICDeviceTypeMask](../icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](locationdescription.md): A nonlocalized location description for the device.
- [modulePath](modulepath.md): The file system path of the device module associated with this device.
- [ICDeviceLocationType](../icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationTypeMask](../icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](../icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](usblocationid.md): The USB location that the device is occupying.
- [usbProductID](usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](usbvendorid.md): The USB Vendor ID (VID) associated with the device.

# moduleVersion (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The bundle version of the device module associated with this device.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * moduleVersion;
```

<a id="Discussion"></a>

## Discussion

The bundle version may change if an existing device module associated with this device is updated or a new device module for this device is installed.

## See Also

### Inspecting a Device’s Type and Location

- [type](type.md): A combination of the device’s type and its location type.
- [ICDeviceType](../icdevicetype.md): The type of image capture device.
- [ICDeviceTypeMask](../icdevicetypemask.md): Masks for detecting different device types.
- [locationDescription](locationdescription.md): A nonlocalized location description for the device.
- [modulePath](modulepath.md): The file system path of the device module associated with this device.
- [ICDeviceLocationType](../icdevicelocationtype.md): The location of the image capture device.
- [ICDeviceLocationTypeMask](../icdevicelocationtypemask.md): Masks for detecting different device locations.
- [ICDeviceLocationOptions](../icdevicelocationoptions.md): Options for the location of the image capture device.
- [usbLocationID](usblocationid.md): The USB location that the device is occupying.
- [usbProductID](usbproductid.md): The USB Product ID (PID) associated with the device.
- [usbVendorID](usbvendorid.md): The USB Vendor ID (VID) associated with the device.
