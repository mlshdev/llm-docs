> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitysummary/applemovetime](https://developer.apple.com/documentation/healthkit/hkactivitysummary/applemovetime)

# appleMoveTime (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The amount of time the user spent performing activities that involve full-body movements during the specified day.

## Declaration

```swift
var appleMoveTime: HKQuantity { get set }
```

<a id="Discussion"></a>

## Discussion

Move time measures every full minute where the watch detects active, full-body movements, like walking, running, or playing in the playground. For younger users, HealthKit’s activity summary can track move time instead of active energy burned. For more information, see [HKActivityMoveMode.appleMoveTime](../hkactivitymovemode/applemovetime.md).

The [HKQuantity](../hkquantity.md) object for this property must use units of time, such as [hour()](../hkunit/hour%28%29.md), [minute()](../hkunit/minute%28%29.md), or [second()](../hkunit/second%28%29.md).

## See Also

### Accessing the summary’s data

- [activityMoveMode](activitymovemode.md): The move mode that they system used for this activity summary.
- [HKActivityMoveMode](../hkactivitymovemode.md): Constants that specify the value measured by the Move ring on the user’s device.
- [activeEnergyBurned](activeenergyburned.md): The amount of active energy the user burned during the specified day.
- [activeEnergyBurnedGoal](activeenergyburnedgoal.md): The user’s daily goal for active energy burned.
- [appleMoveTimeGoal](applemovetimegoal.md): The user’s daily goal for move time.
- [appleExerciseTime](appleexercisetime.md): The amount of time that the user has spent exercising during the specified day.
- [appleExerciseTimeGoal](appleexercisetimegoal.md): Deprecated. The user’s daily exercise goal.
- [exerciseTimeGoal](exercisetimegoal.md): The user’s daily goal for exercise time.
- [appleStandHours](applestandhours.md): The number hours in the specified day during which the user has stood and moved for at least a minute per hour.
- [standHoursGoal](standhoursgoal.md): The user’s daily goal for stand hours.
- [appleStandHoursGoal](applestandhoursgoal.md): Deprecated. The user’s daily goal for stand hours.
- [HKCategoryValueAppleStandHour](../hkcategoryvalueapplestandhour.md): Categories that the system used to indicate whether the user stood during the sample’s duration.
- [dateComponents(for:)](datecomponents%28for_%29.md): Date components that uniquely identify the day represented by the summary object.

# appleMoveTime (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The amount of time the user spent performing activities that involve full-body movements during the specified day.

## Declaration

```objectivec
@property (nonatomic, strong) HKQuantity * appleMoveTime;
```

<a id="Discussion"></a>

## Discussion

Move time measures every full minute where the watch detects active, full-body movements, like walking, running, or playing in the playground. For younger users, HealthKit’s activity summary can track move time instead of active energy burned. For more information, see [HKActivityMoveModeAppleMoveTime](../hkactivitymovemode/applemovetime.md).

The [HKQuantity](../hkquantity.md) object for this property must use units of time, such as [hourUnit](../hkunit/hour%28%29.md), [minuteUnit](../hkunit/minute%28%29.md), or [secondUnit](../hkunit/second%28%29.md).

## See Also

### Accessing the summary’s data

- [activityMoveMode](activitymovemode.md): The move mode that they system used for this activity summary.
- [HKActivityMoveMode](../hkactivitymovemode.md): Constants that specify the value measured by the Move ring on the user’s device.
- [activeEnergyBurned](activeenergyburned.md): The amount of active energy the user burned during the specified day.
- [activeEnergyBurnedGoal](activeenergyburnedgoal.md): The user’s daily goal for active energy burned.
- [appleMoveTimeGoal](applemovetimegoal.md): The user’s daily goal for move time.
- [appleExerciseTime](appleexercisetime.md): The amount of time that the user has spent exercising during the specified day.
- [appleExerciseTimeGoal](appleexercisetimegoal.md): Deprecated. The user’s daily exercise goal.
- [exerciseTimeGoal](exercisetimegoal.md): The user’s daily goal for exercise time.
- [appleStandHours](applestandhours.md): The number hours in the specified day during which the user has stood and moved for at least a minute per hour.
- [standHoursGoal](standhoursgoal.md): The user’s daily goal for stand hours.
- [appleStandHoursGoal](applestandhoursgoal.md): Deprecated. The user’s daily goal for stand hours.
- [HKCategoryValueAppleStandHour](../hkcategoryvalueapplestandhour.md): Categories that the system used to indicate whether the user stood during the sample’s duration.
- [dateComponentsForCalendar:](datecomponents%28for_%29.md): Date components that uniquely identify the day represented by the summary object.
