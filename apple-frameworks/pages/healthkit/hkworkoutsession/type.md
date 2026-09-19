> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkworkoutsession/type

# type (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 10.0+

A value that indicates whether the session is a primary session or a mirrored session.

## Declaration

```swift
var type: HKWorkoutSessionType { get }
```

## See Also

### Accessing session data

- [endDate](enddate.md): The ending time and date for this workout session.
- [startDate](startdate.md): The starting time and date for this workout session.
- [state](state.md): The workout session’s current state.
- [workoutConfiguration](workoutconfiguration.md): The configuration object that describes this workout.

# type (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 10.0+

A value that indicates whether the session is a primary session or a mirrored session.

## Declaration

```objectivec
@property (readonly) HKWorkoutSessionType type;
```

## See Also

### Accessing session data

- [endDate](enddate.md): The ending time and date for this workout session.
- [startDate](startdate.md): The starting time and date for this workout session.
- [state](state.md): The workout session’s current state.
- [workoutConfiguration](workoutconfiguration.md): The configuration object that describes this workout.
