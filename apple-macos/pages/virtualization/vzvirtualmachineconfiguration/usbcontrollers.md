> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration/usbcontrollers](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/usbcontrollers)

# usbControllers (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The list of configured USB controllers for the VM.

## Declaration

```swift
var usbControllers: [VZUSBControllerConfiguration] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to attach USB controllers to the VM configuration, as in the following example:

```swift
// Configure and start the virtual machine.
let usbControllerConfiguration = VZXHCIControllerConfiguration()

let vmConfiguration = VZVirtualMachineConfiguration()
vmConfiguration.usbControllers = [usbControllerConfiguration]

let virtualMachine = VZVirtualMachine(configuration: vmConfiguration)
try await virtualMachine.start()
```

This property contains an empty array if the `VZVirtualMachineConfiguration` doesn’t have any configured USB controllers.

## See Also

### Related Documentation

- [VZUSBControllerConfiguration](../vzusbcontrollerconfiguration.md): The base class for a USB controller configuration.

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
- [socketDevices](socketdevices.md): The socket device that you use to implement port-based communication with the guest operating system.
- [storageDevices](storagedevices.md): The array of storage devices that you expose to the guest operating system.
- [customVirtioDevices](customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.

# usbControllers (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The list of configured USB controllers for the VM.

## Declaration

```objectivec
@property (copy, readwrite) NSArray<VZUSBControllerConfiguration *> * usbControllers;
```

<a id="Discussion"></a>

## Discussion

Use this property to attach USB controllers to the VM configuration, as in the following example:

```swift
// Configure and start the virtual machine.
let usbControllerConfiguration = VZXHCIControllerConfiguration()

let vmConfiguration = VZVirtualMachineConfiguration()
vmConfiguration.usbControllers = [usbControllerConfiguration]

let virtualMachine = VZVirtualMachine(configuration: vmConfiguration)
try await virtualMachine.start()
```

This property contains an empty array if the `VZVirtualMachineConfiguration` doesn’t have any configured USB controllers.

## See Also

### Related Documentation

- [VZUSBControllerConfiguration](../vzusbcontrollerconfiguration.md): The base class for a USB controller configuration.

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
- [socketDevices](socketdevices.md): The socket device that you use to implement port-based communication with the guest operating system.
- [storageDevices](storagedevices.md): The array of storage devices that you expose to the guest operating system.
- [customVirtioDevices](customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.
