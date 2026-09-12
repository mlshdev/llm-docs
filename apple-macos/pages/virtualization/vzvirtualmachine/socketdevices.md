> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/socketdevices](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/socketdevices)

# socketDevices (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The array of socket devices that the VM configures for use ports in the guest VM.

## Declaration

```swift
var socketDevices: [VZSocketDevice] { get }
```

<a id="Discussion"></a>

## Discussion

If you included a [VZVirtioSocketDeviceConfiguration](../vzvirtiosocketdeviceconfiguration.md) object in the configuration of your VM, this property contains a corresponding [VZVirtioSocketDevice](../vzvirtiosocketdevice.md) object. Use that object to configure the ports your VM makes available to the guest operating system.

If you didn’t include a socket device in your configuration, this property contains an empty array.

## See Also

### Configuring VM attributes at runtime

- [consoleDevices](consoledevices.md): The list of configured console devices on the VM.
- [memoryBalloonDevices](memoryballoondevices.md): The array of devices that you use to adjust the amount of memory available to the guest system.
- [networkDevices](networkdevices.md): The list of configured network devices on the VM.
- [directorySharingDevices](directorysharingdevices.md): The list of configured directory-sharing devices on the VM.
- [usbControllers](usbcontrollers.md): The list of runtime USB controller objects.

# socketDevices (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The array of socket devices that the VM configures for use ports in the guest VM.

## Declaration

```objectivec
@property (copy, readonly) NSArray<VZSocketDevice *> * socketDevices;
```

<a id="Discussion"></a>

## Discussion

If you included a [VZVirtioSocketDeviceConfiguration](../vzvirtiosocketdeviceconfiguration.md) object in the configuration of your VM, this property contains a corresponding [VZVirtioSocketDevice](../vzvirtiosocketdevice.md) object. Use that object to configure the ports your VM makes available to the guest operating system.

If you didn’t include a socket device in your configuration, this property contains an empty array.

## See Also

### Configuring VM attributes at runtime

- [consoleDevices](consoledevices.md): The list of configured console devices on the VM.
- [memoryBalloonDevices](memoryballoondevices.md): The array of devices that you use to adjust the amount of memory available to the guest system.
- [networkDevices](networkdevices.md): The list of configured network devices on the VM.
- [directorySharingDevices](directorysharingdevices.md): The list of configured directory-sharing devices on the VM.
- [usbControllers](usbcontrollers.md): The list of runtime USB controller objects.
