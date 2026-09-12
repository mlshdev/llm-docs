> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/state](https://developer.apple.com/documentation/healthkit/hkworkoutsession/state)

# state (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

The workout session’s current state.

## Declaration

```swift
var state: HKWorkoutSessionState { get }
```

<a id="Discussion"></a>

## Discussion

For a list of possible session states, see [HKWorkoutSessionState](../hkworkoutsessionstate.md).

## See Also

### Accessing session data

- [endDate](enddate.md): The ending time and date for this workout session.
- [startDate](startdate.md): The starting time and date for this workout session.
- [type](type.md): A value that indicates whether the session is a primary session or a mirrored session.
- [workoutConfiguration](workoutconfiguration.md): The configuration object that describes this workout.

# state (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

The workout session’s current state.

## Declaration

```objectivec
@property (readonly) HKWorkoutSessionState state;
```

<a id="Discussion"></a>

## Discussion

For a list of possible session states, see [HKWorkoutSessionState](../hkworkoutsessionstate.md).

## See Also

### Accessing session data

- [endDate](enddate.md): The ending time and date for this workout session.
- [startDate](startdate.md): The starting time and date for this workout session.
- [type](type.md): A value that indicates whether the session is a primary session or a mirrored session.
- [workoutConfiguration](workoutconfiguration.md): The configuration object that describes this workout.
