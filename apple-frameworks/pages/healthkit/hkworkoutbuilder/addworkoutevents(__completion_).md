> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/addworkoutevents(_:completion:)

# addWorkoutEvents(\_:completion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Adds a workout event to the builder.

## Declaration

```swift
func addWorkoutEvents(_ workoutEvents: [HKWorkoutEvent], completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func addWorkoutEvents(_ workoutEvents: [HKWorkoutEvent]) async throws
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Adding events to the workout

- [workoutEvents](workoutevents.md): The list of events added to the workout.

# addWorkoutEvents:completion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 5.0+

Adds a workout event to the builder.

## Declaration

```objectivec
- (void) addWorkoutEvents:(NSArray<HKWorkoutEvent *> *) workoutEvents completion:(void (^)(BOOL success, NSError *error)) completion;
```

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Adding events to the workout

- [workoutEvents](workoutevents.md): The list of events added to the workout.
