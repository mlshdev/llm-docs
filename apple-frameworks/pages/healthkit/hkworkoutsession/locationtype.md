> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/locationtype](https://developer.apple.com/documentation/healthkit/hkworkoutsession/locationtype)

# locationType (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+ (deprecated in 3.0)

A value that indicates whether the workout session occurred indoors or outdoors.

> Use [workoutConfiguration](workoutconfiguration.md) instead.

## Declaration

```swift
var locationType: HKWorkoutSessionLocationType { get }
```

<a id="Discussion"></a>

## Discussion

For a list of possible location values, see [HKWorkoutSessionLocationType](../hkworkoutsessionlocationtype.md).

## See Also

### Deprecated methods

- [init(activityType:locationType:)](init%28activitytype_locationtype_%29.md): Deprecated. Returns a newly instantiated workout session.
- [init(configuration:)](init%28configuration_%29.md): Deprecated. Returns a newly instantiated workout session.
- [activityType](activitytype.md): Deprecated. The workout activity performed during this session.

# locationType (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+ (deprecated in 3.0)

A value that indicates whether the workout session occurred indoors or outdoors.

> Use [workoutConfiguration](workoutconfiguration.md) instead.

## Declaration

```objectivec
@property (readonly) HKWorkoutSessionLocationType locationType;
```

<a id="Discussion"></a>

## Discussion

For a list of possible location values, see [HKWorkoutSessionLocationType](../hkworkoutsessionlocationtype.md).

## See Also

### Deprecated methods

- [initWithActivityType:locationType:](init%28activitytype_locationtype_%29.md): Deprecated. Returns a newly instantiated workout session.
- [initWithConfiguration:error:](init%28configuration_%29.md): Deprecated. Returns a newly instantiated workout session.
- [activityType](activitytype.md): Deprecated. The workout activity performed during this session.
