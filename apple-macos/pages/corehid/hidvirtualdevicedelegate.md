> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidvirtualdevicedelegate](https://developer.apple.com/documentation/corehid/hidvirtualdevicedelegate)

# HIDVirtualDeviceDelegate

**Framework:** Core HID  
**Kind:** Protocol  
**Availability:** macOS 15.0+

The delegate to receive notifications for a virtual HID device.

## Declaration

```swift
protocol HIDVirtualDeviceDelegate : Sendable
```

## Mentioned In

- [Creating virtual devices](creatingvirtualdevices.md)

<a id="overview"></a>

## Overview

A delegate must be created and provided to [activate(delegate:)](hidvirtualdevice/activate%28delegate_%29.md) during activation of a virtual HID device. This delegate receives notifications intended for the device, such as a get report request from a client. One delegate can be used for many devices.

## Topics

### Receive notifications for a device

- [hidVirtualDevice(\_:receivedSetReportRequestOfType:id:data:)](hidvirtualdevicedelegate/hidvirtualdevice%28__receivedsetreportrequestoftype_id_data_%29.md): A notification that a set report request has been received from the system.
- [hidVirtualDevice(\_:receivedGetReportRequestOfType:id:maxSize:)](hidvirtualdevicedelegate/hidvirtualdevice%28__receivedgetreportrequestoftype_id_maxsize_%29.md): A notification that a get report request has been received from the system.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Simulation

- [Creating virtual devices](creatingvirtualdevices.md): Use and interact with a virtual human interface device for testing and development.
- [HIDVirtualDevice](hidvirtualdevice.md): A virtual service to emulate a HID device connected to the system.
- [HIDVirtualDevice.Properties](hidvirtualdevice/properties.md): The properties for a virtual HID device.
