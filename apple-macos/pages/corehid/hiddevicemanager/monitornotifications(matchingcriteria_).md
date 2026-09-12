> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddevicemanager/monitornotifications(matchingcriteria:)](https://developer.apple.com/documentation/corehid/hiddevicemanager/monitornotifications(matchingcriteria:))

# monitorNotifications(matchingCriteria:)

**Framework:** Core HID  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Creates an asynchronous stream that receives notifications for devices of interest.

## Declaration

```swift
func monitorNotifications(matchingCriteria: [HIDDeviceManager.DeviceMatchingCriteria]) -> AsyncThrowingStream<HIDDeviceManager.Notification, any Error>
```

## Parameters

- `matchingCriteria`: A set of [HIDDeviceManager.DeviceMatchingCriteria](devicematchingcriteria.md) for matching devices connected to the system. Criteria are considered separately, if one set is specified that matches one device, with a second set that matches five other devices, all six devices are matched. Matched devices result in a [HIDDeviceManager.Notification.deviceMatched(\_:)](notification/devicematched%28__%29.md) notification. Matched devices are ready for connections using [HIDDeviceClient](../hiddeviceclient.md) until a [HIDDeviceManager.Notification.deviceRemoved(\_:)](notification/deviceremoved%28__%29.md) notification is received for the device.

<a id="return-value"></a>

## Return Value

An asynchronous stream that receives notifications.

## Mentioned In

- [Communicating with human interface devices](../communicatingwithhiddevices.md)

<a id="discussion"></a>

## Discussion

Notifications come in asynchronously from the manager at arbitrary times when relevant events occur.

Example usage:

```swift
let searchCriteria = HIDDeviceManager.DeviceMatchingCriteria(primaryUsage: .genericDesktop(.keyboard), isBuiltIn: false)
for await notification in await manager.monitorNotifications(matchingCriteria: [searchCriteria]) {
    switch notification {
    case .deviceMatched(let deviceReference):
        client = HIDDeviceClient(deviceReference: deviceReference)
        break
    case .deviceRemoved(_):
        continue
    }
}
```

> **Throws**

> [HIDDeviceError](../hiddeviceerror.md) if there is an issue with setup.

## See Also

### Monitor device notifications

- [HIDDeviceManager.Notification](notification.md): Notifications for HID devices.
