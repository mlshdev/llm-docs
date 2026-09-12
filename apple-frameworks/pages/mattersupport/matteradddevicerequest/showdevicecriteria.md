> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddevicerequest/showdevicecriteria](https://developer.apple.com/documentation/mattersupport/matteradddevicerequest/showdevicecriteria)

# showDeviceCriteria

**Framework:** MatterSupport  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

A predicate that filters what devices appear in the picker.

## Declaration

```swift
var showDeviceCriteria: MatterAddDeviceRequest.DeviceCriteria
```

<a id="discussion"></a>

## Discussion

During setup user interface flows, the system may present a picker to choose the device to set up. Only devices that match the specified criteria appear in the picker.

Use `.allDevices` to display all devices. Use `.not(...)` to hide blocked devices, such as those already paired in the ecosystem.

## See Also

### Defining the device criteria

- [MatterAddDeviceRequest.DeviceCriteria](devicecriteria.md): A predicate to match against possible devices that may appear in the picker.
