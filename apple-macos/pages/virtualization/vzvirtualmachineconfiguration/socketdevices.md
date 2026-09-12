> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration/socketdevices](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/socketdevices)

# socketDevices (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The socket device that you use to implement port-based communication with the guest operating system.

## Declaration

```swift
var socketDevices: [VZSocketDeviceConfiguration] { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an empty array. If your VM supports port-based communication with sockets, create a single [VZVirtioSocketDeviceConfiguration](../vzvirtiosocketdeviceconfiguration.md) object, add it to an array, and assign it to this property. After initializing the virtual machine, use the object in its [socketDevices](../vzvirtualmachine/socketdevices.md) property to configure the port information and handlers.

## See Also

### Adding devices to the VM

- [audioDevices](audiodevices.md): The list of audio devices.
- [consoleDevices](consoledevices.md): The array of console devices that you expose to the guest operating system.
- [customVirtioDevices](customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.
- [directorySharingDevices](directorysharingdevices.md): The list of directory sharing devices.
- [entropyDevices](entropydevices.md): The array of randomization devices that you expose to the guest operating system.
- [graphicsDevices](graphicsdevices.md): The list of graphics devices.
- [keyboards](keyboards.md): The list of keyboards.
- [networkDevices](networkdevices.md): The array of network devices that you expose to the guest operating system.
- [platform](platform.md): The hardware platform to use.
- [pointingDevices](pointingdevices.md): The list of pointing devices.
- [serialPorts](serialports.md): The array of serial ports that you expose to the guest operating system.
- [storageDevices](storagedevices.md): The array of storage devices that you expose to the guest operating system.
- [usbControllers](usbcontrollers.md): The list of configured USB controllers for the VM.
- [customVirtioDevices](customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.

# socketDevices (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The socket device that you use to implement port-based communication with the guest operating system.

## Declaration

```objectivec
@property (copy, readwrite) NSArray<VZSocketDeviceConfiguration *> * socketDevices;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an empty array. If your VM supports port-based communication with sockets, create a single [VZVirtioSocketDeviceConfiguration](../vzvirtiosocketdeviceconfiguration.md) object, add it to an array, and assign it to this property. After initializing the virtual machine, use the object in its [socketDevices](../vzvirtualmachine/socketdevices.md) property to configure the port information and handlers.

## See Also

### Adding devices to the VM

- [audioDevices](audiodevices.md): The list of audio devices.
- [consoleDevices](consoledevices.md): The array of console devices that you expose to the guest operating system.
- [customVirtioDevices](customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.
- [directorySharingDevices](directorysharingdevices.md): The list of directory sharing devices.
- [entropyDevices](entropydevices.md): The array of randomization devices that you expose to the guest operating system.
- [graphicsDevices](graphicsdevices.md): The list of graphics devices.
- [keyboards](keyboards.md): The list of keyboards.
- [networkDevices](networkdevices.md): The array of network devices that you expose to the guest operating system.
- [platform](platform.md): The hardware platform to use.
- [pointingDevices](pointingdevices.md): The list of pointing devices.
- [serialPorts](serialports.md): The array of serial ports that you expose to the guest operating system.
- [storageDevices](storagedevices.md): The array of storage devices that you expose to the guest operating system.
- [usbControllers](usbcontrollers.md): The list of configured USB controllers for the VM.
- [customVirtioDevices](customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.
