> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehiclestatusevent/status-swift.enum](https://developer.apple.com/documentation/energykit/electricvehiclestatusevent/status-swift.enum)

# ElectricVehicleStatusEvent.Status

**Framework:** EnergyKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

The status of an electric vehicle’s charger connection.

## Declaration

```swift
enum Status
```

<a id="overview"></a>

## Overview

Status represents a discrete snapshot without providing information about the session’s continuity, which can pair with the [ElectricVehicleLoadEvent](../electricvehicleloadevent.md) that tracks session-based energy flow.

## Topics

### Connection states

- [ElectricVehicleStatusEvent.Status.chargerPluggedIn](status-swift.enum/chargerpluggedin.md): A status that indicates when the charger connects to the vehicle.
- [ElectricVehicleStatusEvent.Status.chargerUnplugged](status-swift.enum/chargerunplugged.md): A status that indicates when the charger disconnects from the vehicle.

### Charging states

- [ElectricVehicleStatusEvent.Status.chargingActive(\_:)](status-swift.enum/chargingactive%28__%29.md): A status that indicates that the vehicle is actively charging.
- [ElectricVehicleStatusEvent.Status.chargingIdle(\_:)](status-swift.enum/chargingidle%28__%29.md): A status that indicates the charger is connected but the vehicle isn’t charging.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting status information

- [status](status-swift.property.md): The current status of the vehicle relative to charger connection.
- [stateOfCharge](stateofcharge.md): A state of charge as a percentage at the time of the status event.
- [energy](energy.md): A state of charge in milliwatt-hours at the time of the status event.
- [estimatedRange](estimatedrange.md): An estimated range of driving distance based on the current energy state.
