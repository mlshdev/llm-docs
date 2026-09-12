> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutzoneduration](https://developer.apple.com/documentation/healthkit/hkworkoutzoneduration)

# HKWorkoutZoneDuration

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A structure that represents the time spent in a specific zone during a workout or activity.

## Declaration

```swift
struct HKWorkoutZoneDuration
```

<a id="overview"></a>

## Overview

This structure pairs a zone with the duration of time the person spent in that zone. The system calculates durations based on quantity samples collected during the workout.

## Topics

### Accessing duration properties

- [zone](hkworkoutzoneduration/zone.md): A property that identifies the workout zone.
- [duration](hkworkoutzoneduration/duration.md): A property that specifies the time spent in this zone, measured in seconds.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Workout zones

- [Tracking heart rate zones for workouts](tracking-heart-rate-zones-for-workouts.md): Start a workout on iOS or watchOS and track and display heart rate zones.
- [Accessing workout zone data](accessing-workout-zone-data.md): Provide training insights to people on your app using workout zone data.
- [HKWorkoutZone](hkworkoutzone.md): A structure that represents a single zone with defined thresholds for a quantity type.
- [HKWorkoutZoneConfiguration](hkworkoutzoneconfiguration.md): A structure that defines a complete set of zones for a quantity type.
- [HKWorkoutZoneGroup](hkworkoutzonegroup.md): A structure that contains zone configuration and time-in-zone data for a quantity type.
- [HKLiveWorkoutZoneUpdate](hkliveworkoutzoneupdate.md): A structure that contains information about zone transitions during a live workout session.
