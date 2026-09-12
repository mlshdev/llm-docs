> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddevicemanager/notification](https://developer.apple.com/documentation/corehid/hiddevicemanager/notification)

# HIDDeviceManager.Notification

**Framework:** Core HID  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

Notifications for HID devices.

## Declaration

```swift
enum Notification
```

<a id="overview"></a>

## Overview

You can receive these notifications using [monitorNotifications(matchingCriteria:)](monitornotifications%28matchingcriteria_%29.md).

## Topics

### Enumeration Cases

- [HIDDeviceManager.Notification.deviceMatched(\_:)](notification/devicematched%28__%29.md): A notification that a device matched the device criteria.
- [HIDDeviceManager.Notification.deviceRemoved(\_:)](notification/deviceremoved%28__%29.md): A notification that a previously matched device was removed from the system.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Monitor device notifications

- [monitorNotifications(matchingCriteria:)](monitornotifications%28matchingcriteria_%29.md): Creates an asynchronous stream that receives notifications for devices of interest.
