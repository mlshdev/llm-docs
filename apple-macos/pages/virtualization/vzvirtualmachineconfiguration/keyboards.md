> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration/keyboards](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/keyboards)

# keyboards (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The list of keyboards.

## Declaration

```swift
var keyboards: [VZKeyboardConfiguration] { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an empty array. The default value of this property is an empty array. If your VM exposes one or more keyboards, assign an array of [VZKeyboardConfiguration](../vzkeyboardconfiguration.md) objects to this property.

## See Also

### Adding devices to the VM

- [audioDevices](audiodevices.md): The list of audio devices.
- [consoleDevices](consoledevices.md): The array of console devices that you expose to the guest operating system.
- [customVirtioDevices](customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.
- [directorySharingDevices](directorysharingdevices.md): The list of directory sharing devices.
- [entropyDevices](entropydevices.md): The array of randomization devices that you expose to the guest operating system.
- [graphicsDevices](graphicsdevices.md): The list of graphics devices.
- [networkDevices](networkdevices.md): The array of network devices that you expose to the guest operating system.
- [platform](platform.md): The hardware platform to use.
- [pointingDevices](pointingdevices.md): The list of pointing devices.
- [serialPorts](serialports.md): The array of serial ports that you expose to the guest operating system.
- [socketDevices](socketdevices.md): The socket device that you use to implement port-based communication with the guest operating system.
- [storageDevices](storagedevices.md): The array of storage devices that you expose to the guest operating system.
- [usbControllers](usbcontrollers.md): The list of configured USB controllers for the VM.
- [customVirtioDevices](customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.

# keyboards (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The list of keyboards.

## Declaration

```objectivec
@property (copy) NSArray<VZKeyboardConfiguration *> * keyboards;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is an empty array. The default value of this property is an empty array. If your VM exposes one or more keyboards, assign an array of [VZKeyboardConfiguration](../vzkeyboardconfiguration.md) objects to this property.

## See Also

### Adding devices to the VM

- [audioDevices](audiodevices.md): The list of audio devices.
- [consoleDevices](consoledevices.md): The array of console devices that you expose to the guest operating system.
- [customVirtioDevices](customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.
- [directorySharingDevices](directorysharingdevices.md): The list of directory sharing devices.
- [entropyDevices](entropydevices.md): The array of randomization devices that you expose to the guest operating system.
- [graphicsDevices](graphicsdevices.md): The list of graphics devices.
- [networkDevices](networkdevices.md): The array of network devices that you expose to the guest operating system.
- [platform](platform.md): The hardware platform to use.
- [pointingDevices](pointingdevices.md): The list of pointing devices.
- [serialPorts](serialports.md): The array of serial ports that you expose to the guest operating system.
- [socketDevices](socketdevices.md): The socket device that you use to implement port-based communication with the guest operating system.
- [storageDevices](storagedevices.md): The array of storage devices that you expose to the guest operating system.
- [usbControllers](usbcontrollers.md): The list of configured USB controllers for the VM.
- [customVirtioDevices](customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.
