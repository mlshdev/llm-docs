> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutsession/currentactivity](https://developer.apple.com/documentation/healthkit/hkworkoutsession/currentactivity)

# currentActivity (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 9.0+

The current workout activity.

## Declaration

```swift
@NSCopying var currentActivity: HKWorkoutActivity { get }
```

<a id="Discussion"></a>

## Discussion

This property contains a workout activity that’s currently in progress (an activity with an [endDate](../hkworkoutactivity/enddate.md) property set to `nil`). If you end the activity — for example, by calling [endCurrentActivity(on:)](endcurrentactivity%28on_%29.md) or [updateActivity(uuid:end:completion:)](../hkworkoutbuilder/updateactivity%28uuid_end_completion_%29.md) — the system sets this property to `nil` until you begin a new activity.

## See Also

### Managing workout activities

- [beginNewActivity(configuration:date:metadata:)](beginnewactivity%28configuration_date_metadata_%29.md): Begins a new workout activity in the workout session.
- [endCurrentActivity(on:)](endcurrentactivity%28on_%29.md): Ends the current workout activity.

# currentActivity (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS · visionOS 1.0+ · watchOS 9.0+

The current workout activity.

## Declaration

```objectivec
@property (copy, readonly) HKWorkoutActivity * currentActivity;
```

<a id="Discussion"></a>

## Discussion

This property contains a workout activity that’s currently in progress (an activity with an [endDate](../hkworkoutactivity/enddate.md) property set to `nil`). If you end the activity — for example, by calling [endCurrentActivityOnDate:](endcurrentactivity%28on_%29.md) or [updateActivityWithUUID:endDate:completion:](../hkworkoutbuilder/updateactivity%28uuid_end_completion_%29.md) — the system sets this property to `nil` until you begin a new activity.

## See Also

### Managing workout activities

- [beginNewActivityWithConfiguration:date:metadata:](beginnewactivity%28configuration_date_metadata_%29.md): Begins a new workout activity in the workout session.
- [endCurrentActivityOnDate:](endcurrentactivity%28on_%29.md): Ends the current workout activity.
