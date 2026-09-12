> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutevent](https://developer.apple.com/documentation/healthkit/hkworkoutevent)

# HKWorkoutEvent (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object representing an important event during a workout.

## Declaration

```swift
class HKWorkoutEvent
```

<a id="overview"></a>

## Overview

You can use workout events to toggle a workout between an active and an inactive state, or to mark points of interest during a workout.

Workouts start in an active state. A pause event switches it to an inactive state; a resume event switches it back to an active state. Adding a pause event when the workout is already inactive, or a resume event when the workout is already active, does not affect the workout’s state. These events are ignored.

The lap, segment, and marker events are used to identify periods of interest during a workout. Use lap events to partition a workout into segments of equal distance. Segment events mark important periods during the workout, while markers identify important points in time.

## Topics

### Creating workout events

- [init(type:dateInterval:metadata:)](hkworkoutevent/init%28type_dateinterval_metadata_%29.md): Instantiates and returns a new workout event with the specified type, date interval, and metadata.

### Getting property data

- [dateInterval](hkworkoutevent/dateinterval.md): The time and duration of the event.
- [type](hkworkoutevent/type.md): The type of workout event.
- [metadata](hkworkoutevent/metadata.md): The metadata associated with the workout event.

### Determining the event type

- [HKWorkoutEventType](hkworkouteventtype.md): Constants that represent events occurring during a workout.

### Deprecated

- [init(type:date:)](hkworkoutevent/init%28type_date_%29.md): Deprecated. Instantiates and returns a new workout event with the specified type and date.
- [init(type:date:metadata:)](hkworkoutevent/init%28type_date_metadata_%29.md): Deprecated. Instantiates and returns a new workout event with the specified type, date, and metadata.
- [date](hkworkoutevent/date.md): Deprecated. The time when the transition occurred.

### Initializers

- [init(coder:)](hkworkoutevent/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Samples

- [Adding samples to a workout](adding-samples-to-a-workout.md): Create associated samples that add details to a workout.
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md): Read series data from condensed workouts.
- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md): Partition multisport and interval workouts into activities that represent the different parts of the workout.
- [HKWorkout](hkworkout.md): A workout sample that stores information about a single physical activity.
- [HKWorkoutActivity](hkworkoutactivity.md): An object that describes an activity within a longer workout.
- [HKWorkoutBuilder](hkworkoutbuilder.md): A builder object that incrementally constructs a workout.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKWorkoutTypeIdentifier](hkworkouttypeidentifier.md): The workout type identifier.
- [HKWorkoutActivityType](hkworkoutactivitytype.md): The type of activity performed during a workout.
- [HKWorkoutSessionType](hkworkoutsessiontype.md): The type of session.

# HKWorkoutEvent (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

An object representing an important event during a workout.

## Declaration

```objectivec
@interface HKWorkoutEvent : NSObject
```

<a id="overview"></a>

## Overview

You can use workout events to toggle a workout between an active and an inactive state, or to mark points of interest during a workout.

Workouts start in an active state. A pause event switches it to an inactive state; a resume event switches it back to an active state. Adding a pause event when the workout is already inactive, or a resume event when the workout is already active, does not affect the workout’s state. These events are ignored.

The lap, segment, and marker events are used to identify periods of interest during a workout. Use lap events to partition a workout into segments of equal distance. Segment events mark important periods during the workout, while markers identify important points in time.

## Topics

### Creating workout events

- [workoutEventWithType:dateInterval:metadata:](hkworkoutevent/init%28type_dateinterval_metadata_%29.md): Instantiates and returns a new workout event with the specified type, date interval, and metadata.

### Getting property data

- [dateInterval](hkworkoutevent/dateinterval.md): The time and duration of the event.
- [type](hkworkoutevent/type.md): The type of workout event.
- [metadata](hkworkoutevent/metadata.md): The metadata associated with the workout event.

### Determining the event type

- [HKWorkoutEventType](hkworkouteventtype.md): Constants that represent events occurring during a workout.

### Deprecated

- [workoutEventWithType:date:](hkworkoutevent/init%28type_date_%29.md): Deprecated. Instantiates and returns a new workout event with the specified type and date.
- [workoutEventWithType:date:metadata:](hkworkoutevent/init%28type_date_metadata_%29.md): Deprecated. Instantiates and returns a new workout event with the specified type, date, and metadata.
- [date](hkworkoutevent/date.md): Deprecated. The time when the transition occurred.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Samples

- [Adding samples to a workout](adding-samples-to-a-workout.md): Create associated samples that add details to a workout.
- [Accessing condensed workout samples](accessing-condensed-workout-samples.md): Read series data from condensed workouts.
- [Dividing a HealthKit workout into activities](dividing-a-healthkit-workout-into-activities.md): Partition multisport and interval workouts into activities that represent the different parts of the workout.
- [HKWorkout](hkworkout.md): A workout sample that stores information about a single physical activity.
- [HKWorkoutActivity](hkworkoutactivity.md): An object that describes an activity within a longer workout.
- [HKWorkoutBuilder](hkworkoutbuilder.md): A builder object that incrementally constructs a workout.
- [HKWorkoutType](hkworkouttype.md): A type that identifies samples that store information about a workout.
- [HKWorkoutTypeIdentifier](hkworkouttypeidentifier.md): The workout type identifier.
- [HKWorkoutActivityType](hkworkoutactivitytype.md): The type of activity performed during a workout.
- [HKWorkoutSessionType](hkworkoutsessiontype.md): The type of session.
