> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/consoledevices](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/consoledevices)

# consoleDevices (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The list of configured console devices on the VM.

## Declaration

```swift
var consoleDevices: [VZConsoleDevice] { get }
```

<a id="Discussion"></a>

## Discussion

Return an empty array if there are no console devices configured.

## See Also

### Configuring VM attributes at runtime

- [memoryBalloonDevices](memoryballoondevices.md): The array of devices that you use to adjust the amount of memory available to the guest system.
- [networkDevices](networkdevices.md): The list of configured network devices on the VM.
- [socketDevices](socketdevices.md): The array of socket devices that the VM configures for use ports in the guest VM.
- [directorySharingDevices](directorysharingdevices.md): The list of configured directory-sharing devices on the VM.
- [usbControllers](usbcontrollers.md): The list of runtime USB controller objects.

# consoleDevices (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

The list of configured console devices on the VM.

## Declaration

```objectivec
@property (copy, readonly) NSArray<VZConsoleDevice *> * consoleDevices;
```

<a id="Discussion"></a>

## Discussion

Return an empty array if there are no console devices configured.

## See Also

### Configuring VM attributes at runtime

- [memoryBalloonDevices](memoryballoondevices.md): The array of devices that you use to adjust the amount of memory available to the guest system.
- [networkDevices](networkdevices.md): The list of configured network devices on the VM.
- [socketDevices](socketdevices.md): The array of socket devices that the VM configures for use ports in the guest VM.
- [directorySharingDevices](directorysharingdevices.md): The list of configured directory-sharing devices on the VM.
- [usbControllers](usbcontrollers.md): The list of runtime USB controller objects.
