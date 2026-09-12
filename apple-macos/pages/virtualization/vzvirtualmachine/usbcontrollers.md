> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/usbcontrollers](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/usbcontrollers)

# usbControllers (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The list of runtime USB controller objects.

## Declaration

```swift
var usbControllers: [VZUSBController] { get }
```

<a id="Discussion"></a>

## Discussion

Return an empty array if there isn’t a configured controller USB.

## See Also

### Configuring VM attributes at runtime

- [consoleDevices](consoledevices.md): The list of configured console devices on the VM.
- [memoryBalloonDevices](memoryballoondevices.md): The array of devices that you use to adjust the amount of memory available to the guest system.
- [networkDevices](networkdevices.md): The list of configured network devices on the VM.
- [socketDevices](socketdevices.md): The array of socket devices that the VM configures for use ports in the guest VM.
- [directorySharingDevices](directorysharingdevices.md): The list of configured directory-sharing devices on the VM.

# usbControllers (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The list of runtime USB controller objects.

## Declaration

```objectivec
@property (copy, readonly) NSArray<VZUSBController *> * usbControllers;
```

<a id="Discussion"></a>

## Discussion

Return an empty array if there isn’t a configured controller USB.

## See Also

### Configuring VM attributes at runtime

- [consoleDevices](consoledevices.md): The list of configured console devices on the VM.
- [memoryBalloonDevices](memoryballoondevices.md): The array of devices that you use to adjust the amount of memory available to the guest system.
- [networkDevices](networkdevices.md): The list of configured network devices on the VM.
- [socketDevices](socketdevices.md): The array of socket devices that the VM configures for use ports in the guest VM.
- [directorySharingDevices](directorysharingdevices.md): The list of configured directory-sharing devices on the VM.
