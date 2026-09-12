> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitymovemode](https://developer.apple.com/documentation/healthkit/hkactivitymovemode)

# HKActivityMoveMode (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Constants that specify the value measured by the Move ring on the user’s device.

## Declaration

```swift
enum HKActivityMoveMode
```

<a id="overview"></a>

## Overview

For younger users, HealthKit’s activity summary can track move time instead of active energy burned:

- HealthKit encourages users under 13 years old to track move time.
- Users 13 to 18 years old can choose to track move time or active energy burned.
- All users over 18 years old track active energy burned.

## Topics

### Move Modes

- [HKActivityMoveMode.activeEnergy](hkactivitymovemode/activeenergy.md): A value that indicates the Move ring measures active energy burned.
- [HKActivityMoveMode.appleMoveTime](hkactivitymovemode/applemovetime.md): A value that indicates the Activity app’s Move ring measures Apple Move Time.

### Initializers

- [init(rawValue:)](hkactivitymovemode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the summary’s data

- [activityMoveMode](hkactivitysummary/activitymovemode.md): The move mode that they system used for this activity summary.
- [activeEnergyBurned](hkactivitysummary/activeenergyburned.md): The amount of active energy the user burned during the specified day.
- [activeEnergyBurnedGoal](hkactivitysummary/activeenergyburnedgoal.md): The user’s daily goal for active energy burned.
- [appleMoveTime](hkactivitysummary/applemovetime.md): The amount of time the user spent performing activities that involve full-body movements during the specified day.
- [appleMoveTimeGoal](hkactivitysummary/applemovetimegoal.md): The user’s daily goal for move time.
- [appleExerciseTime](hkactivitysummary/appleexercisetime.md): The amount of time that the user has spent exercising during the specified day.
- [appleExerciseTimeGoal](hkactivitysummary/appleexercisetimegoal.md): Deprecated. The user’s daily exercise goal.
- [exerciseTimeGoal](hkactivitysummary/exercisetimegoal.md): The user’s daily goal for exercise time.
- [appleStandHours](hkactivitysummary/applestandhours.md): The number hours in the specified day during which the user has stood and moved for at least a minute per hour.
- [standHoursGoal](hkactivitysummary/standhoursgoal.md): The user’s daily goal for stand hours.
- [appleStandHoursGoal](hkactivitysummary/applestandhoursgoal.md): Deprecated. The user’s daily goal for stand hours.
- [HKCategoryValueAppleStandHour](hkcategoryvalueapplestandhour.md): Categories that the system used to indicate whether the user stood during the sample’s duration.
- [dateComponents(for:)](hkactivitysummary/datecomponents%28for_%29.md): Date components that uniquely identify the day represented by the summary object.

# HKActivityMoveMode (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Constants that specify the value measured by the Move ring on the user’s device.

## Declaration

```objectivec
enum HKActivityMoveMode : NSInteger;
```

<a id="overview"></a>

## Overview

For younger users, HealthKit’s activity summary can track move time instead of active energy burned:

- HealthKit encourages users under 13 years old to track move time.
- Users 13 to 18 years old can choose to track move time or active energy burned.
- All users over 18 years old track active energy burned.

## Topics

### Move Modes

- [HKActivityMoveModeActiveEnergy](hkactivitymovemode/activeenergy.md): A value that indicates the Move ring measures active energy burned.
- [HKActivityMoveModeAppleMoveTime](hkactivitymovemode/applemovetime.md): A value that indicates the Activity app’s Move ring measures Apple Move Time.

## See Also

### Accessing the summary’s data

- [activityMoveMode](hkactivitysummary/activitymovemode.md): The move mode that they system used for this activity summary.
- [activeEnergyBurned](hkactivitysummary/activeenergyburned.md): The amount of active energy the user burned during the specified day.
- [activeEnergyBurnedGoal](hkactivitysummary/activeenergyburnedgoal.md): The user’s daily goal for active energy burned.
- [appleMoveTime](hkactivitysummary/applemovetime.md): The amount of time the user spent performing activities that involve full-body movements during the specified day.
- [appleMoveTimeGoal](hkactivitysummary/applemovetimegoal.md): The user’s daily goal for move time.
- [appleExerciseTime](hkactivitysummary/appleexercisetime.md): The amount of time that the user has spent exercising during the specified day.
- [appleExerciseTimeGoal](hkactivitysummary/appleexercisetimegoal.md): Deprecated. The user’s daily exercise goal.
- [exerciseTimeGoal](hkactivitysummary/exercisetimegoal.md): The user’s daily goal for exercise time.
- [appleStandHours](hkactivitysummary/applestandhours.md): The number hours in the specified day during which the user has stood and moved for at least a minute per hour.
- [standHoursGoal](hkactivitysummary/standhoursgoal.md): The user’s daily goal for stand hours.
- [appleStandHoursGoal](hkactivitysummary/applestandhoursgoal.md): Deprecated. The user’s daily goal for stand hours.
- [HKCategoryValueAppleStandHour](hkcategoryvalueapplestandhour.md): Categories that the system used to indicate whether the user stood during the sample’s duration.
- [dateComponentsForCalendar:](hkactivitysummary/datecomponents%28for_%29.md): Date components that uniquely identify the day represented by the summary object.
