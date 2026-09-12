> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkworkoutbuilder/workoutactivities](https://developer.apple.com/documentation/healthkit/hkworkoutbuilder/workoutactivities)

# workoutActivities (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
var workoutActivities: [HKWorkoutActivity] { get }
```

## See Also

### Managing workout activities

- [addWorkoutActivity(\_:completion:)](addworkoutactivity%28__completion_%29.md): Adds a workout activity to the workout builder.
- [updateActivity(uuid:adding:completion:)](updateactivity%28uuid_adding_completion_%29.md): Adds metadata to a workout activity that you’ve already added to the workout builder.
- [updateActivity(uuid:end:completion:)](updateactivity%28uuid_end_completion_%29.md): Sets the end date for a workout activity that you’ve already added to the workout builder.

# workoutActivities (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
@property (copy, readonly) NSArray<HKWorkoutActivity *> * workoutActivities;
```

## See Also

### Managing workout activities

- [addWorkoutActivity:completion:](addworkoutactivity%28__completion_%29.md): Adds a workout activity to the workout builder.
- [updateActivityWithUUID:addMedatata:completion:](updateactivity%28uuid_adding_completion_%29.md): Adds metadata to a workout activity that you’ve already added to the workout builder.
- [updateActivityWithUUID:endDate:completion:](updateactivity%28uuid_end_completion_%29.md): Sets the end date for a workout activity that you’ve already added to the workout builder.
