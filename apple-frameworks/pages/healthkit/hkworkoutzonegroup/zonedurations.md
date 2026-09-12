> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutzonegroup/zonedurations](https://developer.apple.com/documentation/healthkit/hkworkoutzonegroup/zonedurations)

# zoneDurations

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A property that contains the time spent in each zone, ordered from lowest to highest threshold.

## Declaration

```swift
let zoneDurations: [HKWorkoutZoneDuration]
```

<a id="discussion"></a>

## Discussion

Each element in this array corresponds to a zone in the group’s configuration and specifies the duration in seconds.

## See Also

### Accessing group properties

- [configuration](configuration.md): A property that specifies the zone configuration that defines the zones for this group.
