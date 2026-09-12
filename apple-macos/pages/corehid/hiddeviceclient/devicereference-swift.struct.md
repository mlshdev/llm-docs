> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/devicereference-swift.struct](https://developer.apple.com/documentation/corehid/hiddeviceclient/devicereference-swift.struct)

# HIDDeviceClient.DeviceReference

**Framework:** Core HID  
**Kind:** Structure  
**Availability:** macOS 15.0+

A reference to a HID device on the system.

## Declaration

```swift
struct DeviceReference
```

<a id="overview"></a>

## Overview

A device reference exists for every discovered device. Use it to create an [HIDDeviceClient](../hiddeviceclient.md), and maintain the reference until someone removes the device.

## Topics

### Instance Properties

- [deviceID](devicereference-swift.struct/deviceid.md): The unique ID for the associated HID device.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Create a device client

- [init(deviceReference:)](init%28devicereference_%29.md): Creates a client for a HID device.
- [deviceReference](devicereference-swift.property.md): The reference to the HID device used to create the HID client device.
