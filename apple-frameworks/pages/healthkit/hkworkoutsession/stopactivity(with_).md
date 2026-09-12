> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/stopactivity(with:)](https://developer.apple.com/documentation/healthkit/hkworkoutsession/stopactivity(with:))

# stopActivity(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 5.0+

Stops the workout session activity, and sets the end date.

## Declaration

```swift
func stopActivity(with date: Date?)
```

## Parameters

- `date`: The end date for the workout session. This must be equal to or after the start date.

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Related Documentation

- [HKWorkoutSessionState.stopped](../hkworkoutsessionstate/stopped.md): The session has stopped.

### Managing the workout

- [prepare()](prepare%28%29.md): Prepares the workout session.
- [startActivity(with:)](startactivity%28with_%29.md): Starts the workout session activity, and sets the start date.
- [pause()](pause%28%29.md): Pauses the workout session.
- [resume()](resume%28%29.md): Resumes the workout session.
- [end()](end%28%29.md): Ends the workout session.

# stopActivityWithDate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 5.0+

Stops the workout session activity, and sets the end date.

## Declaration

```objectivec
- (void) stopActivityWithDate:(NSDate *) date;
```

## Parameters

- `date`: The end date for the workout session. This must be equal to or after the start date.

## Mentioned In

- [Running workout sessions](../running-workout-sessions.md)

## See Also

### Related Documentation

- [HKWorkoutSessionStateStopped](../hkworkoutsessionstate/stopped.md): The session has stopped.

### Managing the workout

- [prepare](prepare%28%29.md): Prepares the workout session.
- [startActivityWithDate:](startactivity%28with_%29.md): Starts the workout session activity, and sets the start date.
- [pause](pause%28%29.md): Pauses the workout session.
- [resume](resume%28%29.md): Resumes the workout session.
- [end](end%28%29.md): Ends the workout session.
