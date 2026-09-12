> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutzonegroup](https://developer.apple.com/documentation/healthkit/hkworkoutzonegroup)

# HKWorkoutZoneGroup

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A structure that contains zone configuration and time-in-zone data for a quantity type.

## Declaration

```swift
struct HKWorkoutZoneGroup
```

## Mentioned In

- [Accessing workout zone data](accessing-workout-zone-data.md)

<a id="overview"></a>

## Overview

This structure combines an [HKWorkoutZoneConfiguration](hkworkoutzoneconfiguration.md) with an array of [HKWorkoutZoneDuration](hkworkoutzoneduration.md) instances. Access zone groups from [HKWorkout](hkworkout.md) and [HKWorkoutActivity](hkworkoutactivity.md) instances to retrieve zone data for completed workouts, or from [HKWorkoutBuilder](hkworkoutbuilder.md) for real-time zone information during active workouts.

## Topics

### Accessing group properties

- [configuration](hkworkoutzonegroup/configuration.md): A property that specifies the zone configuration that defines the zones for this group.
- [zoneDurations](hkworkoutzonegroup/zonedurations.md): A property that contains the time spent in each zone, ordered from lowest to highest threshold.

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
- [HKWorkoutZoneDuration](hkworkoutzoneduration.md): A structure that represents the time spent in a specific zone during a workout or activity.
- [HKLiveWorkoutZoneUpdate](hkliveworkoutzoneupdate.md): A structure that contains information about zone transitions during a live workout session.
