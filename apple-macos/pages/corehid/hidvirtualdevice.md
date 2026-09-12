> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidvirtualdevice](https://developer.apple.com/documentation/corehid/hidvirtualdevice)

# HIDVirtualDevice

**Framework:** Core HID  
**Kind:** Class  
**Availability:** macOS 15.0+

A virtual service to emulate a HID device connected to the system.

## Declaration

```swift
actor HIDVirtualDevice
```

## Mentioned In

- [Creating virtual devices](creatingvirtualdevices.md)

<a id="overview"></a>

## Overview

A HID device is a computer peripheral intended to provide direction to the system from human input. The specification is a broad, industry-wide standard maintained by the [USB Implementers Forum](https://www.usb.org/hid).

A `HIDVirtualDevice` is an object that emulates a HID device connected to the system, without the need for a physical device. Such a tool can be used by an app to emulate a keyboard and dispatch HID reports to the system using [dispatchInputReport(data:timestamp:)](hidvirtualdevice/dispatchinputreport%28data_timestamp_%29.md) that signify key strokes, and could be received by a [HIDDeviceClient](hiddeviceclient.md)listening for such activity in other apps. The virtual device can also receive requests from the system using its [HIDVirtualDeviceDelegate](hidvirtualdevicedelegate.md).

## Topics

### Create a HID virtual device

- [init(properties:)](hidvirtualdevice/init%28properties_%29.md): Creates a virtual HID device.
- [deviceReference](hidvirtualdevice/devicereference.md): The reference to the virtual HID device.
- [activate(delegate:)](hidvirtualdevice/activate%28delegate_%29.md): Activate a newly created virtual device to begin receiving notifications and enable functionality.

### Dispatch input reports

- [dispatchInputReport(data:timestamp:)](hidvirtualdevice/dispatchinputreport%28data_timestamp_%29.md): Dispatch an input report to the system.

### Structures

- [HIDVirtualDevice.Properties](hidvirtualdevice/properties.md): The properties for a virtual HID device.

### Instance Properties

- [hidDevice](hidvirtualdevice/hiddevice.md)

## Relationships

### Conforms To

- [Actor](https://developer.apple.com/documentation/swift/actor)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Simulation

- [Creating virtual devices](creatingvirtualdevices.md): Use and interact with a virtual human interface device for testing and development.
- [HIDVirtualDeviceDelegate](hidvirtualdevicedelegate.md): The delegate to receive notifications for a virtual HID device.
- [HIDVirtualDevice.Properties](hidvirtualdevice/properties.md): The properties for a virtual HID device.
