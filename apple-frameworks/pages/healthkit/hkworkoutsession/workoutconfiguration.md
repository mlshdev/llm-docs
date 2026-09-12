> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/workoutconfiguration](https://developer.apple.com/documentation/healthkit/hkworkoutsession/workoutconfiguration)

# workoutConfiguration (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 3.0+

The configuration object that describes this workout.

## Declaration

```swift
@NSCopying var workoutConfiguration: HKWorkoutConfiguration { get }
```

<a id="Discussion"></a>

## Discussion

Returns a copy of the configuration object passed to [init(configuration:)](init%28configuration_%29.md) when instantiating the workout session. Changes made to the returned value have no affect on the workout session.

## See Also

### Accessing session data

- [endDate](enddate.md): The ending time and date for this workout session.
- [startDate](startdate.md): The starting time and date for this workout session.
- [state](state.md): The workout session’s current state.
- [type](type.md): A value that indicates whether the session is a primary session or a mirrored session.

# workoutConfiguration (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 3.0+

The configuration object that describes this workout.

## Declaration

```objectivec
@property (copy, readonly) HKWorkoutConfiguration * workoutConfiguration;
```

<a id="Discussion"></a>

## Discussion

Returns a copy of the configuration object passed to [initWithConfiguration:error:](init%28configuration_%29.md) when instantiating the workout session. Changes made to the returned value have no affect on the workout session.

## See Also

### Accessing session data

- [endDate](enddate.md): The ending time and date for this workout session.
- [startDate](startdate.md): The starting time and date for this workout session.
- [state](state.md): The workout session’s current state.
- [type](type.md): A value that indicates whether the session is a primary session or a mirrored session.
