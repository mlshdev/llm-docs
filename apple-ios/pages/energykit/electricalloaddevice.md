> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricalloaddevice](https://developer.apple.com/documentation/energykit/electricalloaddevice)

# ElectricalLoadDevice

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

A type that identifies an electrical load device for event submission.

## Declaration

```swift
struct ElectricalLoadDevice
```

## Mentioned In

- [Providing charging history for electric vehicles](providing-informative-charging-history-for-electric-vehicles.md)

<a id="overview"></a>

## Overview

This structure represents the device tied to load events you submit. The device’s [type](electricalloaddevice/type.md) can be an electric vehicle or an HVAC device.

For an example that uses an electrical load device, see [Optimizing home electricity usage](optimizing-home-electricity-usage.md).

## Topics

### Creating a device identifier

- [init(id:name:type:)](electricalloaddevice/init%28id_name_type_%29.md): Initializes an electrical load device identifier.

### Getting device information

- [id](electricalloaddevice/id.md): A unique, stable identifier for a device.
- [name](electricalloaddevice/name.md): A human-readable name for the device.
- [type](electricalloaddevice/type.md): The type of electrical load device.
- [ElectricalLoadDevice.DeviceType](electricalloaddevice/devicetype.md): The type of electrical load device.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Device identification

- [ElectricalLoadEventProtocol](electricalloadeventprotocol.md): A type that can represent an electrical load event.
