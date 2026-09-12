> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricalloadeventprotocol](https://developer.apple.com/documentation/energykit/electricalloadeventprotocol)

# ElectricalLoadEventProtocol

**Framework:** EnergyKit  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst

A type that can represent an electrical load event.

## Declaration

```swift
protocol ElectricalLoadEventProtocol : Decodable, Encodable, Identifiable, Sendable
```

## Mentioned In

- [Providing charging history for electric vehicles](providing-informative-charging-history-for-electric-vehicles.md)

<a id="overview"></a>

## Overview

Don’t declare new conformances to `ElectricalLoadEventProtocol`. Only [ElectricVehicleLoadEvent](electricvehicleloadevent.md) and [ElectricHVACLoadEvent](electrichvacloadevent.md) can conform to `ElectricalLoadEventProtocol`.

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [ElectricHVACLoadEvent](electrichvacloadevent.md)
- [ElectricVehicleLoadEvent](electricvehicleloadevent.md)
- [ElectricVehicleStatusEvent](electricvehiclestatusevent.md)

## See Also

### Device identification

- [ElectricalLoadDevice](electricalloaddevice.md): A type that identifies an electrical load device for event submission.
