> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddevicemanager](https://developer.apple.com/documentation/corehid/hiddevicemanager)

# HIDDeviceManager

**Framework:** Core HID  
**Kind:** Class  
**Availability:** macOS 15.0+

A helper for discovering human interface devices (HID) connected to the system.

## Declaration

```swift
actor HIDDeviceManager
```

## Mentioned In

- [Communicating with human interface devices](communicatingwithhiddevices.md)

<a id="overview"></a>

## Overview

Use this class to specify matching criteria to filter all of the discoverable devices connected to the system into devices of interest. This is the main method of receiving a [HIDDeviceClient.DeviceReference](hiddeviceclient/devicereference-swift.struct.md) used to create a [HIDDeviceClient](hiddeviceclient.md).

Matching criteria are specified by creating [HIDDeviceManager.DeviceMatchingCriteria](hiddevicemanager/devicematchingcriteria.md) and passing them to [monitorNotifications(matchingCriteria:)](hiddevicemanager/monitornotifications%28matchingcriteria_%29.md). References to devices that match the criteria are received using [HIDDeviceManager.Notification.deviceMatched(\_:)](hiddevicemanager/notification/devicematched%28__%29.md) notifications.

## Topics

### Create a device manager

- [init()](hiddevicemanager/init%28%29.md): Creates a matching service for HID devices.

### Monitor device notifications

- [monitorNotifications(matchingCriteria:)](hiddevicemanager/monitornotifications%28matchingcriteria_%29.md): Creates an asynchronous stream that receives notifications for devices of interest.
- [HIDDeviceManager.Notification](hiddevicemanager/notification.md): Notifications for HID devices.

### Structures

- [HIDDeviceManager.DeviceMatchingCriteria](hiddevicemanager/devicematchingcriteria.md): Matching criteria used to filter HID devices.

## Relationships

### Conforms To

- [Actor](https://developer.apple.com/documentation/swift/actor)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Discovery

- [Discovering HID devices from Terminal](discoveringhiddevicesfromterminal.md): Identify devices connected to your Mac from the command line.
- [HIDDeviceManager.DeviceMatchingCriteria](hiddevicemanager/devicematchingcriteria.md): Matching criteria used to filter HID devices.
