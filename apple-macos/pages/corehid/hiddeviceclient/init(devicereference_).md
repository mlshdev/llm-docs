> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/init(devicereference:)](https://developer.apple.com/documentation/corehid/hiddeviceclient/init(devicereference:))

# init(deviceReference:)

**Framework:** Core HID  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a client for a HID device.

## Declaration

```swift
init?(deviceReference: HIDDeviceClient.DeviceReference)
```

## Parameters

- `deviceReference`: The reference to the target HID device that arrive using [HIDDeviceManager](../hiddevicemanager.md). For more details, see [HIDDeviceClient.DeviceReference](devicereference-swift.struct.md).

<a id="discussion"></a>

## Discussion

After creating a [HIDDeviceClient](../hiddeviceclient.md), notifications about the associated device arrive in [monitorNotifications(reportIDsToMonitor:elementsToMonitor:)](monitornotifications%28reportidstomonitor_elementstomonitor_%29.md).

## See Also

### Create a device client

- [HIDDeviceClient.DeviceReference](devicereference-swift.struct.md): A reference to a HID device on the system.
- [deviceReference](devicereference-swift.property.md): The reference to the HID device used to create the HID client device.
