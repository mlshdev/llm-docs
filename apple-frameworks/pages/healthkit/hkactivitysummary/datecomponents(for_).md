> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitysummary/datecomponents(for:)](https://developer.apple.com/documentation/healthkit/hkactivitysummary/datecomponents(for:))

# dateComponents(for:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

Date components that uniquely identify the day represented by the summary object.

## Declaration

```swift
func dateComponents(for calendar: Calendar) -> DateComponents
```

## Parameters

- `calendar`: The calendar used to calculate the date components.

<a id="return-value"></a>

## Return Value

Date components that uniquely specify a day. For example, for the Gregorian calendar, the date components consist of only the era, year, month, and day.

<a id="Discussion"></a>

## Discussion

Each activity summary covers a single day. The day always begins and ends at midnight; however, the day may be longer or shorter than 24 hours (for example, if the user traveled across time zones).

## See Also

### Accessing the summary’s data

- [activityMoveMode](activitymovemode.md): The move mode that they system used for this activity summary.
- [HKActivityMoveMode](../hkactivitymovemode.md): Constants that specify the value measured by the Move ring on the user’s device.
- [activeEnergyBurned](activeenergyburned.md): The amount of active energy the user burned during the specified day.
- [activeEnergyBurnedGoal](activeenergyburnedgoal.md): The user’s daily goal for active energy burned.
- [appleMoveTime](applemovetime.md): The amount of time the user spent performing activities that involve full-body movements during the specified day.
- [appleMoveTimeGoal](applemovetimegoal.md): The user’s daily goal for move time.
- [appleExerciseTime](appleexercisetime.md): The amount of time that the user has spent exercising during the specified day.
- [appleExerciseTimeGoal](appleexercisetimegoal.md): Deprecated. The user’s daily exercise goal.
- [exerciseTimeGoal](exercisetimegoal.md): The user’s daily goal for exercise time.
- [appleStandHours](applestandhours.md): The number hours in the specified day during which the user has stood and moved for at least a minute per hour.
- [standHoursGoal](standhoursgoal.md): The user’s daily goal for stand hours.
- [appleStandHoursGoal](applestandhoursgoal.md): Deprecated. The user’s daily goal for stand hours.
- [HKCategoryValueAppleStandHour](../hkcategoryvalueapplestandhour.md): Categories that the system used to indicate whether the user stood during the sample’s duration.

# dateComponentsForCalendar: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

Date components that uniquely identify the day represented by the summary object.

## Declaration

```objectivec
- (NSDateComponents *) dateComponentsForCalendar:(NSCalendar *) calendar;
```

## Parameters

- `calendar`: The calendar used to calculate the date components.

<a id="return-value"></a>

## Return Value

Date components that uniquely specify a day. For example, for the Gregorian calendar, the date components consist of only the era, year, month, and day.

<a id="Discussion"></a>

## Discussion

Each activity summary covers a single day. The day always begins and ends at midnight; however, the day may be longer or shorter than 24 hours (for example, if the user traveled across time zones).

## See Also

### Accessing the summary’s data

- [activityMoveMode](activitymovemode.md): The move mode that they system used for this activity summary.
- [HKActivityMoveMode](../hkactivitymovemode.md): Constants that specify the value measured by the Move ring on the user’s device.
- [activeEnergyBurned](activeenergyburned.md): The amount of active energy the user burned during the specified day.
- [activeEnergyBurnedGoal](activeenergyburnedgoal.md): The user’s daily goal for active energy burned.
- [appleMoveTime](applemovetime.md): The amount of time the user spent performing activities that involve full-body movements during the specified day.
- [appleMoveTimeGoal](applemovetimegoal.md): The user’s daily goal for move time.
- [appleExerciseTime](appleexercisetime.md): The amount of time that the user has spent exercising during the specified day.
- [appleExerciseTimeGoal](appleexercisetimegoal.md): Deprecated. The user’s daily exercise goal.
- [exerciseTimeGoal](exercisetimegoal.md): The user’s daily goal for exercise time.
- [appleStandHours](applestandhours.md): The number hours in the specified day during which the user has stood and moved for at least a minute per hour.
- [standHoursGoal](standhoursgoal.md): The user’s daily goal for stand hours.
- [appleStandHoursGoal](applestandhoursgoal.md): Deprecated. The user’s daily goal for stand hours.
- [HKCategoryValueAppleStandHour](../hkcategoryvalueapplestandhour.md): Categories that the system used to indicate whether the user stood during the sample’s duration.
