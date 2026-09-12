> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehiclestatusevent/chargingtarget-swift.struct](https://developer.apple.com/documentation/energykit/electricvehiclestatusevent/chargingtarget-swift.struct)

# ElectricVehicleStatusEvent.ChargingTarget

**Framework:** EnergyKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

The desired target when charging an electric vehicle.

## Declaration

```swift
struct ChargingTarget
```

<a id="overview"></a>

## Overview

Charging targets represent a person’s intent, such as their desired state of charge or charging range, and planning data, such as their selected start time or estimated completion time. Combined, this information describes the desired outcome of a charging session.

Use charging target values when a person configures charging preferences in your app or when the vehicle supports scheduled charging features.

## Topics

### Creating charging targets

- [init(stateOfCharge:estimatedCompletionTime:scheduledStartTime:estimatedRangeAtTarget:)](chargingtarget-swift.struct/init%28stateofcharge_estimatedcompletiontime_scheduledstarttime_estimatedrangeattarget_%29.md): Creates target information for the desired outcome of charging an electric vehicle.

### Getting target information

- [stateOfCharge](chargingtarget-swift.struct/stateofcharge.md): Target state of charge for this charging session (0-100)
- [estimatedCompletionTime](chargingtarget-swift.struct/estimatedcompletiontime.md): An estimated time of when charging completes.
- [scheduledStartTime](chargingtarget-swift.struct/scheduledstarttime.md): A scheduled time for when charging starts.
- [estimatedRangeAtTarget](chargingtarget-swift.struct/estimatedrangeattarget.md): An estimated range of driving distance for the target state of charge.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting charging targets

- [chargingTarget](chargingtarget-swift.property.md): The desired target when charging an electric vehicle.
