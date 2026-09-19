> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkworkoutsession/startdate

# startDate (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

The starting time and date for this workout session.

## Declaration

```swift
var startDate: Date? { get }
```

<a id="Discussion"></a>

## Discussion

This property is set to `nil` when the workout session is initialized. The system assigns a start date when the session’s state changes to [HKWorkoutSessionState.running](../hkworkoutsessionstate/running.md).

## See Also

### Accessing session data

- [endDate](enddate.md): The ending time and date for this workout session.
- [state](state.md): The workout session’s current state.
- [type](type.md): A value that indicates whether the session is a primary session or a mirrored session.
- [workoutConfiguration](workoutconfiguration.md): The configuration object that describes this workout.

# startDate (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 2.0+

The starting time and date for this workout session.

## Declaration

```objectivec
@property (readonly, nullable) NSDate * startDate;
```

<a id="Discussion"></a>

## Discussion

This property is set to `nil` when the workout session is initialized. The system assigns a start date when the session’s state changes to [HKWorkoutSessionStateRunning](../hkworkoutsessionstate/running.md).

## See Also

### Accessing session data

- [endDate](enddate.md): The ending time and date for this workout session.
- [state](state.md): The workout session’s current state.
- [type](type.md): A value that indicates whether the session is a primary session or a mirrored session.
- [workoutConfiguration](workoutconfiguration.md): The configuration object that describes this workout.
