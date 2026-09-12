> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/workoutevents](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/workoutevents)

# workoutEvents (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

The list of events added to the workout.

## Declaration

```swift
var workoutEvents: [HKWorkoutEvent] { get }
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Adding events to the workout

- [addWorkoutEvents(\_:completion:)](addworkoutevents%28__completion_%29.md): Adds a workout event to the builder.

# workoutEvents (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

The list of events added to the workout.

## Declaration

```objectivec
@property (copy, readonly) NSArray<HKWorkoutEvent *> * workoutEvents;
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Adding events to the workout

- [addWorkoutEvents:completion:](addworkoutevents%28__completion_%29.md): Adds a workout event to the builder.
