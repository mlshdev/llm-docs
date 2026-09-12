> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutzoneconfiguration](https://developer.apple.com/documentation/healthkit/hkworkoutzoneconfiguration)

# HKWorkoutZoneConfiguration

**Framework:** HealthKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A structure that defines a complete set of zones for a quantity type.

## Declaration

```swift
struct HKWorkoutZoneConfiguration
```

<a id="overview"></a>

## Overview

This structure contains an ordered array of zones and identifies the [source](hkworkoutzoneconfiguration/source-swift.property.md) of the configuration. The system generates zones automatically based on people’s health metrics. People can configure zones manually in Health Settings, or apps can provide custom zones for specific workouts.

## Topics

### Creating zone configurations

- [init(quantityType:zoneBoundaries:)](hkworkoutzoneconfiguration/init%28quantitytype_zoneboundaries_%29.md): Initializes a zone configuration from zone boundaries for the specified quantity type.

### Accessing configuration properties

- [quantityType](hkworkoutzoneconfiguration/quantitytype.md): A property that specifies the quantity type to which the zones apply.
- [zones](hkworkoutzoneconfiguration/zones.md): A property that contains the workout zones, ordered from lowest to highest threshold.

### Identifying the configuration source

- [source](hkworkoutzoneconfiguration/source-swift.property.md): A property that identifies the origin of this zone configuration.
- [HKWorkoutZoneConfiguration.Source](hkworkoutzoneconfiguration/source-swift.enum.md): An enumeration that identifies the origin of the zone configuration.

### Comparing zone configurations

- [==(\_:\_:)](hkworkoutzoneconfiguration/==%28____%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Workout zones

- [Tracking heart rate zones for workouts](tracking-heart-rate-zones-for-workouts.md): Start a workout on iOS or watchOS and track and display heart rate zones.
- [Accessing workout zone data](accessing-workout-zone-data.md): Provide training insights to people on your app using workout zone data.
- [HKWorkoutZone](hkworkoutzone.md): A structure that represents a single zone with defined thresholds for a quantity type.
- [HKWorkoutZoneDuration](hkworkoutzoneduration.md): A structure that represents the time spent in a specific zone during a workout or activity.
- [HKWorkoutZoneGroup](hkworkoutzonegroup.md): A structure that contains zone configuration and time-in-zone data for a quantity type.
- [HKLiveWorkoutZoneUpdate](hkliveworkoutzoneupdate.md): A structure that contains information about zone transitions during a live workout session.
