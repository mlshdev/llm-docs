> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/enddate](https://developer.apple.com/documentation/healthkit/hkworkoutsession/enddate)

# endDate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

The ending time and date for this workout session.

## Declaration

```swift
var endDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

This property is set to `nil` when the workout session is initialized. The system assigns an end date when the session’s state changes to [HKWorkoutSessionState.ended](../hkworkoutsessionstate/ended.md).

## See Also

### Accessing session data

- [startDate](startdate.md): The starting time and date for this workout session.
- [state](state.md): The workout session’s current state.
- [type](type.md): A value that indicates whether the session is a primary session or a mirrored session.
- [workoutConfiguration](workoutconfiguration.md): The configuration object that describes this workout.

# endDate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

The ending time and date for this workout session.

## Declaration

```objectivec
@property (readonly, nullable) NSDate * endDate;
```

<a id="Discussion"></a>

## Discussion

This property is set to `nil` when the workout session is initialized. The system assigns an end date when the session’s state changes to [HKWorkoutSessionStateEnded](../hkworkoutsessionstate/ended.md).

## See Also

### Accessing session data

- [startDate](startdate.md): The starting time and date for this workout session.
- [state](state.md): The workout session’s current state.
- [type](type.md): A value that indicates whether the session is a primary session or a mirrored session.
- [workoutConfiguration](workoutconfiguration.md): The configuration object that describes this workout.
