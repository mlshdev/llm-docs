> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/startactivity(with:)](https://developer.apple.com/documentation/healthkit/hkworkoutsession/startactivity(with:))

# startActivity(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 5.0+

Starts the workout session activity, and sets the start date.

## Declaration

```swift
func startActivity(with date: Date?)
```

## Parameters

- `date`: The start date for the workout session.

## See Also

### Related Documentation

- [HKWorkoutSessionState.running](../hkworkoutsessionstate/running.md): The workout session is running.

### Managing the workout

- [prepare()](prepare%28%29.md): Prepares the workout session.
- [pause()](pause%28%29.md): Pauses the workout session.
- [resume()](resume%28%29.md): Resumes the workout session.
- [stopActivity(with:)](stopactivity%28with_%29.md): Stops the workout session activity, and sets the end date.
- [end()](end%28%29.md): Ends the workout session.

# startActivityWithDate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 5.0+

Starts the workout session activity, and sets the start date.

## Declaration

```objectivec
- (void) startActivityWithDate:(NSDate *) date;
```

## Parameters

- `date`: The start date for the workout session.

## See Also

### Related Documentation

- [HKWorkoutSessionStateRunning](../hkworkoutsessionstate/running.md): The workout session is running.

### Managing the workout

- [prepare](prepare%28%29.md): Prepares the workout session.
- [pause](pause%28%29.md): Pauses the workout session.
- [resume](resume%28%29.md): Resumes the workout session.
- [stopActivityWithDate:](stopactivity%28with_%29.md): Stops the workout session activity, and sets the end date.
- [end](end%28%29.md): Ends the workout session.
