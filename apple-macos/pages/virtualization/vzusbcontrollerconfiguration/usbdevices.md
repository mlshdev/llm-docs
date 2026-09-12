> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbcontrollerconfiguration/usbdevices](https://developer.apple.com/documentation/virtualization/vzusbcontrollerconfiguration/usbdevices)

# usbDevices (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The list of USB devices.

## Declaration

```swift
var usbDevices: [any VZUSBDeviceConfiguration] { get set }
```

<a id="Discussion"></a>

## Discussion

This list represents a set of USB devices that a VM starts with. For each entry in the list, the system creates a corresponding runtime object in the [usbDevices](../vzusbcontroller/usbdevices.md) property.

The list is empty by default.

## See Also

### Related Documentation

- [VZUSBController](../vzusbcontroller.md): A class that represents a USB controller in a VM.
- [VZUSBDeviceConfiguration](../vzusbdeviceconfiguration.md): The protocol for configuring USB devices.
- [VZUSBMassStorageDeviceConfiguration](../vzusbmassstoragedeviceconfiguration.md): The configuration object that represents a USB Mass storage device.

# usbDevices (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The list of USB devices.

## Declaration

```objectivec
@property (copy, readwrite) NSArray<id<VZUSBDeviceConfiguration>> * usbDevices;
```

<a id="Discussion"></a>

## Discussion

This list represents a set of USB devices that a VM starts with. For each entry in the list, the system creates a corresponding runtime object in the [usbDevices](../vzusbcontroller/usbdevices.md) property.

The list is empty by default.

## See Also

### Related Documentation

- [VZUSBController](../vzusbcontroller.md): A class that represents a USB controller in a VM.
- [VZUSBDeviceConfiguration](../vzusbdeviceconfiguration.md): The protocol for configuring USB devices.
- [VZUSBMassStorageDeviceConfiguration](../vzusbmassstoragedeviceconfiguration.md): The configuration object that represents a USB Mass storage device.
