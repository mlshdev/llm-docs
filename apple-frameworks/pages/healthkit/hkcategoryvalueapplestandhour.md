> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkcategoryvalueapplestandhour](https://developer.apple.com/documentation/healthkit/hkcategoryvalueapplestandhour)

# HKCategoryValueAppleStandHour (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Categories that the system used to indicate whether the user stood during the sample’s duration.

## Declaration

```swift
enum HKCategoryValueAppleStandHour
```

## Topics

### Constants

- [HKCategoryValueAppleStandHour.stood](hkcategoryvalueapplestandhour/stood.md): The user stood up and moved for at least one continuous minute during the sample.
- [HKCategoryValueAppleStandHour.idle](hkcategoryvalueapplestandhour/idle.md): The user didn’t stand up and move for at least one continuous minute during the sample.

### Initializers

- [init(rawValue:)](hkcategoryvalueapplestandhour/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HKCategoryValuePredicateProviding](hkcategoryvaluepredicateproviding.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the summary’s data

- [activityMoveMode](hkactivitysummary/activitymovemode.md): The move mode that they system used for this activity summary.
- [HKActivityMoveMode](hkactivitymovemode.md): Constants that specify the value measured by the Move ring on the user’s device.
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
- [dateComponents(for:)](hkactivitysummary/datecomponents%28for_%29.md): Date components that uniquely identify the day represented by the summary object.

# HKCategoryValueAppleStandHour (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Categories that the system used to indicate whether the user stood during the sample’s duration.

## Declaration

```objectivec
enum HKCategoryValueAppleStandHour : NSInteger;
```

## Topics

### Constants

- [HKCategoryValueAppleStandHourStood](hkcategoryvalueapplestandhour/stood.md): The user stood up and moved for at least one continuous minute during the sample.
- [HKCategoryValueAppleStandHourIdle](hkcategoryvalueapplestandhour/idle.md): The user didn’t stand up and move for at least one continuous minute during the sample.

## See Also

### Accessing the summary’s data

- [activityMoveMode](hkactivitysummary/activitymovemode.md): The move mode that they system used for this activity summary.
- [HKActivityMoveMode](hkactivitymovemode.md): Constants that specify the value measured by the Move ring on the user’s device.
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
- [dateComponentsForCalendar:](hkactivitysummary/datecomponents%28for_%29.md): Date components that uniquely identify the day represented by the summary object.
