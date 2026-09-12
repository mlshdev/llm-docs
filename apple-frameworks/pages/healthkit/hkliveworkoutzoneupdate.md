> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkliveworkoutzoneupdate](https://developer.apple.com/documentation/healthkit/hkliveworkoutzoneupdate)

# HKLiveWorkoutZoneUpdate (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS · watchOS 27.0+

A structure that contains information about zone transitions during a live workout session.

## Declaration

```swift
class HKLiveWorkoutZoneUpdate
```

## Mentioned In

- [Accessing workout zone data](accessing-workout-zone-data.md)

<a id="overview"></a>

## Overview

This structure provides details about zone changes as they occur during a workout. The system sends updates to the [HKLiveWorkoutBuilderDelegate](hkliveworkoutbuilderdelegate.md) when the person moves between zones.

## Topics

### Accessing update information

- [lastSampleProcessedDate](hkliveworkoutzoneupdate/lastsampleprocesseddate.md): The timestamp of the most recent processed sample at the time of the update.

### Accessing zone data

- [currentZoneDuration](hkliveworkoutzoneupdate/currentzoneduration.md): A property that contains the zone duration just entered.
- [previousZoneDuration](hkliveworkoutzoneupdate/previouszoneduration.md): A property that contains the zone duration that just completed.
- [zoneGroup](hkliveworkoutzoneupdate/zonegroup.md): The zone group that contains the current duration data.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Workout zones

- [Tracking heart rate zones for workouts](tracking-heart-rate-zones-for-workouts.md): Start a workout on iOS or watchOS and track and display heart rate zones.
- [Accessing workout zone data](accessing-workout-zone-data.md): Provide training insights to people on your app using workout zone data.
- [HKWorkoutZone](hkworkoutzone.md): A structure that represents a single zone with defined thresholds for a quantity type.
- [HKWorkoutZoneConfiguration](hkworkoutzoneconfiguration.md): A structure that defines a complete set of zones for a quantity type.
- [HKWorkoutZoneDuration](hkworkoutzoneduration.md): A structure that represents the time spent in a specific zone during a workout or activity.
- [HKWorkoutZoneGroup](hkworkoutzonegroup.md): A structure that contains zone configuration and time-in-zone data for a quantity type.

# HKLiveWorkoutZoneUpdate (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS · watchOS 27.0+

A structure that contains information about zone transitions during a live workout session.

## Declaration

```objectivec
@interface HKLiveWorkoutZoneUpdate : NSObject
```

## Mentioned In

- [Accessing workout zone data](accessing-workout-zone-data.md)

<a id="overview"></a>

## Overview

This structure provides details about zone changes as they occur during a workout. The system sends updates to the [HKLiveWorkoutBuilderDelegate](hkliveworkoutbuilderdelegate.md) when the person moves between zones.

## Topics

### Accessing update information

- [lastSampleProcessedDate](hkliveworkoutzoneupdate/lastsampleprocesseddate.md): The timestamp of the most recent processed sample at the time of the update.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Workout zones

- [Accessing workout zone data](accessing-workout-zone-data.md): Provide training insights to people on your app using workout zone data.
