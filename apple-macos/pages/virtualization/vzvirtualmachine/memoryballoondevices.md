> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/memoryballoondevices](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/memoryballoondevices)

# memoryBalloonDevices (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The array of devices that you use to adjust the amount of memory available to the guest system.

## Declaration

```swift
var memoryBalloonDevices: [VZMemoryBalloonDevice] { get }
```

<a id="Discussion"></a>

## Discussion

If you included a [VZVirtioTraditionalMemoryBalloonDeviceConfiguration](../vzvirtiotraditionalmemoryballoondeviceconfiguration.md) object in the configuration of your VM, this property contains a corresponding [VZVirtioTraditionalMemoryBalloonDevice](../vzvirtiotraditionalmemoryballoondevice.md) object. Use that object to adjust the amount of memory available to the guest operating system.

If you didn’t include a memory balloon object in your configuration, this property contains an empty array.

## See Also

### Configuring VM attributes at runtime

- [consoleDevices](consoledevices.md): The list of configured console devices on the VM.
- [networkDevices](networkdevices.md): The list of configured network devices on the VM.
- [socketDevices](socketdevices.md): The array of socket devices that the VM configures for use ports in the guest VM.
- [directorySharingDevices](directorysharingdevices.md): The list of configured directory-sharing devices on the VM.
- [usbControllers](usbcontrollers.md): The list of runtime USB controller objects.

# memoryBalloonDevices (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The array of devices that you use to adjust the amount of memory available to the guest system.

## Declaration

```objectivec
@property (copy, readonly) NSArray<VZMemoryBalloonDevice *> * memoryBalloonDevices;
```

<a id="Discussion"></a>

## Discussion

If you included a [VZVirtioTraditionalMemoryBalloonDeviceConfiguration](../vzvirtiotraditionalmemoryballoondeviceconfiguration.md) object in the configuration of your VM, this property contains a corresponding [VZVirtioTraditionalMemoryBalloonDevice](../vzvirtiotraditionalmemoryballoondevice.md) object. Use that object to adjust the amount of memory available to the guest operating system.

If you didn’t include a memory balloon object in your configuration, this property contains an empty array.

## See Also

### Configuring VM attributes at runtime

- [consoleDevices](consoledevices.md): The list of configured console devices on the VM.
- [networkDevices](networkdevices.md): The list of configured network devices on the VM.
- [socketDevices](socketdevices.md): The array of socket devices that the VM configures for use ports in the guest VM.
- [directorySharingDevices](directorysharingdevices.md): The list of configured directory-sharing devices on the VM.
- [usbControllers](usbcontrollers.md): The list of runtime USB controller objects.
