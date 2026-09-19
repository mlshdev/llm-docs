> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/energykit/electricvehiclestatusevent/chargingtarget-swift.struct/scheduledstarttime

# scheduledStartTime

**Framework:** EnergyKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst

A scheduled time for when charging starts.

## Declaration

```swift
let scheduledStartTime: Date
```

## See Also

### Getting target information

- [stateOfCharge](stateofcharge.md): Target state of charge for this charging session (0-100)
- [estimatedCompletionTime](estimatedcompletiontime.md): An estimated time of when charging completes.
- [estimatedRangeAtTarget](estimatedrangeattarget.md): An estimated range of driving distance for the target state of charge.
