> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/energykit/electricvehiclestatusevent/chargingtarget-swift.struct/init(stateofcharge:estimatedcompletiontime:scheduledstarttime:estimatedrangeattarget:)](https://developer.apple.com/documentation/energykit/electricvehiclestatusevent/chargingtarget-swift.struct/init(stateofcharge:estimatedcompletiontime:scheduledstarttime:estimatedrangeattarget:))

# init(stateOfCharge:estimatedCompletionTime:scheduledStartTime:estimatedRangeAtTarget:)

**Framework:** EnergyKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

Creates target information for the desired outcome of charging an electric vehicle.

## Declaration

```swift
init(stateOfCharge: Int, estimatedCompletionTime: Date, scheduledStartTime: Date, estimatedRangeAtTarget: Measurement<UnitLength>? = nil)
```

## Parameters

- `stateOfCharge`: The target state of charge percentage (0-100).
- `estimatedCompletionTime`: The estimated time when charging completes.
- `scheduledStartTime`: The scheduled time when charging starts.
- `estimatedRangeAtTarget`: The estimated range at target state of charge, or `nil` if the range is unavailable.
