> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkout/zonegroupsbytype](https://developer.apple.com/documentation/healthkit/hkworkout/zonegroupsbytype)

# zoneGroupsByType

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A property that contains a dictionary that maps quantity types to their zone groups for this workout.

## Declaration

```swift
var zoneGroupsByType: [HKQuantityType : HKWorkoutZoneGroup]? { get }
```

## Mentioned In

- [Accessing workout zone data](../accessing-workout-zone-data.md)

<a id="discussion"></a>

## Discussion

This property provides zone data for the workout’s primary activity, covering the full workout duration. Access zone groups for individual activities using [zoneGroupsByType](../hkworkoutactivity/zonegroupsbytype.md).

## See Also

### Accessing zone data

- [zoneGroup(for:)](zonegroup%28for_%29.md): Returns the current zone group for the specified quantity type.
