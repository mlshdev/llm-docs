> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitysummary/appleexercisetimegoal](https://developer.apple.com/documentation/healthkit/hkactivitysummary/appleexercisetimegoal)

# appleExerciseTimeGoal (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ (deprecated in 27.0) · iPadOS 9.3+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 13.0+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.2+ (deprecated in 27.0)

The user’s daily exercise goal.

## Declaration

```swift
var appleExerciseTimeGoal: HKQuantity { get set }
```

<a id="Discussion"></a>

## Discussion

The [HKQuantity](../hkquantity.md) object for this property must use time units.

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
- [appleExerciseTime](appleexercisetime.md): The amount of time that the user has spent exercising during the specified day.
- [exerciseTimeGoal](exercisetimegoal.md): The user’s daily goal for exercise time.
- [appleStandHours](applestandhours.md): The number hours in the specified day during which the user has stood and moved for at least a minute per hour.
- [standHoursGoal](standhoursgoal.md): The user’s daily goal for stand hours.
- [appleStandHoursGoal](applestandhoursgoal.md): Deprecated. The user’s daily goal for stand hours.
- [HKCategoryValueAppleStandHour](../hkcategoryvalueapplestandhour.md): Categories that the system used to indicate whether the user stood during the sample’s duration.
- [dateComponents(for:)](datecomponents%28for_%29.md): Date components that uniquely identify the day represented by the summary object.

# appleExerciseTimeGoal (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.3+ (deprecated in 27.0) · iPadOS 9.3+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 13.0+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.2+ (deprecated in 27.0)

The user’s daily exercise goal.

## Declaration

```objectivec
@property (nonatomic, strong) HKQuantity * appleExerciseTimeGoal;
```

<a id="Discussion"></a>

## Discussion

The [HKQuantity](../hkquantity.md) object for this property must use time units.

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
- [appleExerciseTime](appleexercisetime.md): The amount of time that the user has spent exercising during the specified day.
- [exerciseTimeGoal](exercisetimegoal.md): The user’s daily goal for exercise time.
- [appleStandHours](applestandhours.md): The number hours in the specified day during which the user has stood and moved for at least a minute per hour.
- [standHoursGoal](standhoursgoal.md): The user’s daily goal for stand hours.
- [appleStandHoursGoal](applestandhoursgoal.md): Deprecated. The user’s daily goal for stand hours.
- [HKCategoryValueAppleStandHour](../hkcategoryvalueapplestandhour.md): Categories that the system used to indicate whether the user stood during the sample’s duration.
- [dateComponentsForCalendar:](datecomponents%28for_%29.md): Date components that uniquely identify the day represented by the summary object.
