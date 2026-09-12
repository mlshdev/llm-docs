> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutzone](https://developer.apple.com/documentation/healthkit/hkworkoutzone)

# HKWorkoutZone

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A structure that represents a single zone with defined thresholds for a quantity type.

## Declaration

```swift
struct HKWorkoutZone
```

<a id="overview"></a>

## Overview

The system creates workout zones as part of an [HKWorkoutZoneConfiguration](hkworkoutzoneconfiguration.md). This structure defines the minimum and maximum values that determine when a quantity type measurement falls within the zone. For example, a heart rate zone might have a minimum of 136.8 beats per minute and a maximum of 147.6 beats per minute.

## Topics

### Accessing zone properties

- [index](hkworkoutzone/index.md): The zero-based index of the zone within the containing zone configuration, ordered from lowest to highest threshold.
- [minimum](hkworkoutzone/minimum.md): The minimum threshold for the zone.
- [maximum](hkworkoutzone/maximum.md): The maximum threshold for the zone.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Workout zones

- [Tracking heart rate zones for workouts](tracking-heart-rate-zones-for-workouts.md): Start a workout on iOS or watchOS and track and display heart rate zones.
- [Accessing workout zone data](accessing-workout-zone-data.md): Provide training insights to people on your app using workout zone data.
- [HKWorkoutZoneConfiguration](hkworkoutzoneconfiguration.md): A structure that defines a complete set of zones for a quantity type.
- [HKWorkoutZoneDuration](hkworkoutzoneduration.md): A structure that represents the time spent in a specific zone during a workout or activity.
- [HKWorkoutZoneGroup](hkworkoutzonegroup.md): A structure that contains zone configuration and time-in-zone data for a quantity type.
- [HKLiveWorkoutZoneUpdate](hkliveworkoutzoneupdate.md): A structure that contains information about zone transitions during a live workout session.
