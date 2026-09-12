> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutzonegroup/configuration](https://developer.apple.com/documentation/healthkit/hkworkoutzonegroup/configuration)

# configuration

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A property that specifies the zone configuration that defines the zones for this group.

## Declaration

```swift
let configuration: HKWorkoutZoneConfiguration
```

<a id="discussion"></a>

## Discussion

This configuration identifies the source of the zones and contains the zone definitions that the system uses to calculate durations.

## See Also

### Accessing group properties

- [zoneDurations](zonedurations.md): A property that contains the time spent in each zone, ordered from lowest to highest threshold.
