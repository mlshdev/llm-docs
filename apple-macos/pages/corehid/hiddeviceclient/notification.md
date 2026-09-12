> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/notification](https://developer.apple.com/documentation/corehid/hiddeviceclient/notification)

# HIDDeviceClient.Notification

**Framework:** Core HID  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

Notifications for a HID device.

## Declaration

```swift
enum Notification
```

<a id="overview"></a>

## Overview

You can receive these notifications using [monitorNotifications(reportIDsToMonitor:elementsToMonitor:)](monitornotifications%28reportidstomonitor_elementstomonitor_%29.md).

## Topics

### Enumeration Cases

- [HIDDeviceClient.Notification.deviceRemoved](notification/deviceremoved.md): A notification that the device is no longer connected to the system.
- [HIDDeviceClient.Notification.deviceSeized](notification/deviceseized.md): A notification that the device was seized by another client.
- [HIDDeviceClient.Notification.deviceUnseized](notification/deviceunseized.md): A notification that the device is no longer seized.
- [HIDDeviceClient.Notification.elementUpdates(values:)](notification/elementupdates%28values_%29.md): A notification that elements of the device were updated.
- [HIDDeviceClient.Notification.inputReport(id:data:timestamp:)](notification/inputreport%28id_data_timestamp_%29.md): A notification that an input report was received from the device.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitor device notifications

- [monitorNotifications(reportIDsToMonitor:elementsToMonitor:)](monitornotifications%28reportidstomonitor_elementstomonitor_%29.md): Creates an asynchronous that receives notifications about the associated device.
