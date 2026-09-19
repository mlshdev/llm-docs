> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkworkoutzoneconfiguration/source-swift.property

# source

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A property that identifies the origin of this zone configuration.

## Declaration

```swift
let source: HKWorkoutZoneConfiguration.Source
```

## Mentioned In

- [Accessing workout zone data](../accessing-workout-zone-data.md)

<a id="discussion"></a>

## Discussion

The source indicates whether the system generated the zones automatically, the person configured them manually in Health Settings, or an app provided them for a specific workout.

## See Also

### Identifying the configuration source

- [HKWorkoutZoneConfiguration.Source](source-swift.enum.md): An enumeration that identifies the origin of the zone configuration.
