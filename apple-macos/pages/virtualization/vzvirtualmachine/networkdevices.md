> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachine/networkdevices](https://developer.apple.com/documentation/virtualization/vzvirtualmachine/networkdevices)

# networkDevices (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The list of configured network devices on the VM.

## Declaration

```swift
var networkDevices: [VZNetworkDevice] { get }
```

<a id="Discussion"></a>

## Discussion

Returns an empty array if there are no configured network devices.

## See Also

### Configuring VM attributes at runtime

- [consoleDevices](consoledevices.md): The list of configured console devices on the VM.
- [memoryBalloonDevices](memoryballoondevices.md): The array of devices that you use to adjust the amount of memory available to the guest system.
- [socketDevices](socketdevices.md): The array of socket devices that the VM configures for use ports in the guest VM.
- [directorySharingDevices](directorysharingdevices.md): The list of configured directory-sharing devices on the VM.
- [usbControllers](usbcontrollers.md): The list of runtime USB controller objects.

# networkDevices (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The list of configured network devices on the VM.

## Declaration

```objectivec
@property (copy, readonly) NSArray<VZNetworkDevice *> * networkDevices;
```

<a id="Discussion"></a>

## Discussion

Returns an empty array if there are no configured network devices.

## See Also

### Configuring VM attributes at runtime

- [consoleDevices](consoledevices.md): The list of configured console devices on the VM.
- [memoryBalloonDevices](memoryballoondevices.md): The array of devices that you use to adjust the amount of memory available to the guest system.
- [socketDevices](socketdevices.md): The array of socket devices that the VM configures for use ports in the guest VM.
- [directorySharingDevices](directorysharingdevices.md): The list of configured directory-sharing devices on the VM.
- [usbControllers](usbcontrollers.md): The list of runtime USB controller objects.
