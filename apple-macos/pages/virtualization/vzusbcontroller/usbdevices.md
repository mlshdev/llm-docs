> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbcontroller/usbdevices](https://developer.apple.com/documentation/virtualization/vzusbcontroller/usbdevices)

# usbDevices (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The list of attached USB devices for the controller.

## Declaration

```swift
var usbDevices: [any VZUSBDevice] { get }
```

<a id="Discussion"></a>

## Discussion

If a [VZVirtualMachineConfiguration](../vzvirtualmachineconfiguration.md) contains a USB controller configuration that contains USB devices, those devices appear in the list when you start the virtual machine.

## See Also

### Related Documentation

- [VZUSBDevice](../vzusbdevice.md): A protocol that represents a USB device in a VM.
- [VZUSBDeviceConfiguration](../vzusbdeviceconfiguration.md): The protocol for configuring USB devices.
- [VZUSBControllerConfiguration](../vzusbcontrollerconfiguration.md): The base class for a USB controller configuration.

# usbDevices (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The list of attached USB devices for the controller.

## Declaration

```objectivec
@property (copy, readonly) NSArray<id<VZUSBDevice>> * usbDevices;
```

<a id="Discussion"></a>

## Discussion

If a [VZVirtualMachineConfiguration](../vzvirtualmachineconfiguration.md) contains a USB controller configuration that contains USB devices, those devices appear in the list when you start the virtual machine.

## See Also

### Related Documentation

- [VZUSBDevice](../vzusbdevice.md): A protocol that represents a USB device in a VM.
- [VZUSBDeviceConfiguration](../vzusbdeviceconfiguration.md): The protocol for configuring USB devices.
- [VZUSBControllerConfiguration](../vzusbcontrollerconfiguration.md): The base class for a USB controller configuration.
