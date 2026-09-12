> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/endcurrentactivity(on:)](https://developer.apple.com/documentation/healthkit/hkworkoutsession/endcurrentactivity(on:))

# endCurrentActivity(on:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 9.0+

Ends the current workout activity.

## Declaration

```swift
func endCurrentActivity(on date: Date)
```

## Parameters

- `date`: The end date and time for the activity.

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

<a id="Discussion"></a>

## Discussion

This method asynchronously ends the current activity. HealthKit calls the session delegate’s [workoutSession(\_:didEndActivityWith:date:)](../hkworkoutsessiondelegate/workoutsession%28__didendactivitywith_date_%29.md) method after the activity ends. HealthKit stops collecting data related to this activity.

## See Also

### Managing workout activities

- [currentActivity](currentactivity.md): The current workout activity.
- [beginNewActivity(configuration:date:metadata:)](beginnewactivity%28configuration_date_metadata_%29.md): Begins a new workout activity in the workout session.

# endCurrentActivityOnDate: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 9.0+

Ends the current workout activity.

## Declaration

```objectivec
- (void) endCurrentActivityOnDate:(NSDate *) date;
```

## Parameters

- `date`: The end date and time for the activity.

## Mentioned In

- [Dividing a HealthKit workout into activities](../dividing-a-healthkit-workout-into-activities.md)

<a id="Discussion"></a>

## Discussion

This method asynchronously ends the current activity. HealthKit calls the session delegate’s [workoutSession:didEndActivityWithConfiguration:date:](../hkworkoutsessiondelegate/workoutsession%28__didendactivitywith_date_%29.md) method after the activity ends. HealthKit stops collecting data related to this activity.

## See Also

### Managing workout activities

- [currentActivity](currentactivity.md): The current workout activity.
- [beginNewActivityWithConfiguration:date:metadata:](beginnewactivity%28configuration_date_metadata_%29.md): Begins a new workout activity in the workout session.
