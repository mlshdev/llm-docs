> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitysummary/appleexercisetime](https://developer.apple.com/documentation/healthkit/hkactivitysummary/appleexercisetime)

# appleExerciseTime (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

The amount of time that the user has spent exercising during the specified day.

## Declaration

```swift
var appleExerciseTime: HKQuantity { get set }
```

<a id="Discussion"></a>

## Discussion

Exercise time measures every full minute of movement that equals or exceeds the intensity of a brisk walk.

Apple watch automatically records exercise time. By default, the watch uses the accelerometer to estimate the intensity of the user’s movement. However, during workout sessions, the watch uses additional sensors, like the heart rate sensor and GPS, to generate estimates. [HKWorkoutSession](../hkworkoutsession.md) sessions also contribute to the exercise time.  For more information, see [Fill the Activity rings](../hkworkout.md#Fill-the-Activity-rings).

The [HKQuantity](../hkquantity.md) object for this property must use units of time, such as [hour()](../hkunit/hour%28%29.md), [minute()](../hkunit/minute%28%29.md), or [second()](../hkunit/second%28%29.md).

## See Also

### Related Documentation

- [appleExerciseTime](../hkquantitytypeidentifier/appleexercisetime.md): A quantity sample type that measures the amount of time the user spent exercising.

### Accessing the summary’s data

- [activityMoveMode](activitymovemode.md): The move mode that they system used for this activity summary.
- [HKActivityMoveMode](../hkactivitymovemode.md): Constants that specify the value measured by the Move ring on the user’s device.
- [activeEnergyBurned](activeenergyburned.md): The amount of active energy the user burned during the specified day.
- [activeEnergyBurnedGoal](activeenergyburnedgoal.md): The user’s daily goal for active energy burned.
- [appleMoveTime](applemovetime.md): The amount of time the user spent performing activities that involve full-body movements during the specified day.
- [appleMoveTimeGoal](applemovetimegoal.md): The user’s daily goal for move time.
- [appleExerciseTimeGoal](appleexercisetimegoal.md): Deprecated. The user’s daily exercise goal.
- [exerciseTimeGoal](exercisetimegoal.md): The user’s daily goal for exercise time.
- [appleStandHours](applestandhours.md): The number hours in the specified day during which the user has stood and moved for at least a minute per hour.
- [standHoursGoal](standhoursgoal.md): The user’s daily goal for stand hours.
- [appleStandHoursGoal](applestandhoursgoal.md): Deprecated. The user’s daily goal for stand hours.
- [HKCategoryValueAppleStandHour](../hkcategoryvalueapplestandhour.md): Categories that the system used to indicate whether the user stood during the sample’s duration.
- [dateComponents(for:)](datecomponents%28for_%29.md): Date components that uniquely identify the day represented by the summary object.

# appleExerciseTime (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

The amount of time that the user has spent exercising during the specified day.

## Declaration

```objectivec
@property (nonatomic, strong) HKQuantity * appleExerciseTime;
```

<a id="Discussion"></a>

## Discussion

Exercise time measures every full minute of movement that equals or exceeds the intensity of a brisk walk.

Apple watch automatically records exercise time. By default, the watch uses the accelerometer to estimate the intensity of the user’s movement. However, during workout sessions, the watch uses additional sensors, like the heart rate sensor and GPS, to generate estimates. [HKWorkoutSession](../hkworkoutsession.md) sessions also contribute to the exercise time.  For more information, see [Fill the Activity rings](../hkworkout.md#Fill-the-Activity-rings).

The [HKQuantity](../hkquantity.md) object for this property must use units of time, such as [hourUnit](../hkunit/hour%28%29.md), [minuteUnit](../hkunit/minute%28%29.md), or [secondUnit](../hkunit/second%28%29.md).

## See Also

### Related Documentation

- [HKQuantityTypeIdentifierAppleExerciseTime](../hkquantitytypeidentifier/appleexercisetime.md): A quantity sample type that measures the amount of time the user spent exercising.

### Accessing the summary’s data

- [activityMoveMode](activitymovemode.md): The move mode that they system used for this activity summary.
- [HKActivityMoveMode](../hkactivitymovemode.md): Constants that specify the value measured by the Move ring on the user’s device.
- [activeEnergyBurned](activeenergyburned.md): The amount of active energy the user burned during the specified day.
- [activeEnergyBurnedGoal](activeenergyburnedgoal.md): The user’s daily goal for active energy burned.
- [appleMoveTime](applemovetime.md): The amount of time the user spent performing activities that involve full-body movements during the specified day.
- [appleMoveTimeGoal](applemovetimegoal.md): The user’s daily goal for move time.
- [appleExerciseTimeGoal](appleexercisetimegoal.md): Deprecated. The user’s daily exercise goal.
- [exerciseTimeGoal](exercisetimegoal.md): The user’s daily goal for exercise time.
- [appleStandHours](applestandhours.md): The number hours in the specified day during which the user has stood and moved for at least a minute per hour.
- [standHoursGoal](standhoursgoal.md): The user’s daily goal for stand hours.
- [appleStandHoursGoal](applestandhoursgoal.md): Deprecated. The user’s daily goal for stand hours.
- [HKCategoryValueAppleStandHour](../hkcategoryvalueapplestandhour.md): Categories that the system used to indicate whether the user stood during the sample’s duration.
- [dateComponentsForCalendar:](datecomponents%28for_%29.md): Date components that uniquely identify the day represented by the summary object.
