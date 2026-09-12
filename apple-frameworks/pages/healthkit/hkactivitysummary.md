> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkactivitysummary](https://developer.apple.com/documentation/healthkit/hkactivitysummary)

# HKActivitySummary (Swift)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

An object that contains the move, exercise, and stand data for a given day.

## Declaration

```swift
class HKActivitySummary
```

## Mentioned In

- [Executing Activity Summary Queries](executing-activity-summary-queries.md)

<a id="overview"></a>

## Overview

You can read [HKActivitySummary](hkactivitysummary.md) objects from the HealthKit store using an [HKActivitySummaryQuery](hkactivitysummaryquery.md) object. Unlike the [HKSample](hksample.md) subclasses,  [HKActivitySummary](hkactivitysummary.md) instances are mutable, but changes made to the object’s properties have no affect on the values in the HealthKit store.

You can instantiate your own [HKActivitySummary](hkactivitysummary.md) objects (if needed), but you can’t save [HKActivitySummary](hkactivitysummary.md) objects to the store.

You can display an active summary in iOS using the [HKActivityRingView](../healthkitui/hkactivityringview.md) class or in watchOS using the [WKInterfaceActivityRing](https://developer.apple.com/documentation/watchkit/wkinterfaceactivityring) class.

## Topics

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
- [HKCategoryValueAppleStandHour](hkcategoryvalueapplestandhour.md): Categories that the system used to indicate whether the user stood during the sample’s duration.
- [dateComponents(for:)](hkactivitysummary/datecomponents%28for_%29.md): Date components that uniquely identify the day represented by the summary object.

### Specifying predicate key paths

- [HKPredicateKeyPathDateComponents](hkpredicatekeypathdatecomponents.md): The key path for accessing an activity summary’s date components.

### Initializers

- [init(coder:)](hkactivitysummary/init%28coder_%29.md)

### Instance Properties

- [isPaused](hkactivitysummary/ispaused.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Activity rings

- [HKActivitySummaryQueryDescriptor](hkactivitysummaryquerydescriptor.md): A query interface that reads activity summaries using Swift concurrency.
- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKActivityRingView](../healthkitui/hkactivityringview.md): A view that uses the Move, Exercise, and Stand activity rings to display data from a HealthKit activity summary object.
- [HKActivityMoveModeObject](hkactivitymovemodeobject.md): An object that contains a movement mode value.

# HKActivitySummary (Objective-C)

**Framework:** HealthKit  
**Kind:** Class  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.2+

An object that contains the move, exercise, and stand data for a given day.

## Declaration

```objectivec
@interface HKActivitySummary : NSObject
```

## Mentioned In

- [Executing Activity Summary Queries](executing-activity-summary-queries.md)

<a id="overview"></a>

## Overview

You can read [HKActivitySummary](hkactivitysummary.md) objects from the HealthKit store using an [HKActivitySummaryQuery](hkactivitysummaryquery.md) object. Unlike the [HKSample](hksample.md) subclasses,  [HKActivitySummary](hkactivitysummary.md) instances are mutable, but changes made to the object’s properties have no affect on the values in the HealthKit store.

You can instantiate your own [HKActivitySummary](hkactivitysummary.md) objects (if needed), but you can’t save [HKActivitySummary](hkactivitysummary.md) objects to the store.

You can display an active summary in iOS using the [HKActivityRingView](../healthkitui/hkactivityringview.md) class or in watchOS using the [WKInterfaceActivityRing](https://developer.apple.com/documentation/watchkit/wkinterfaceactivityring) class.

## Topics

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
- [HKCategoryValueAppleStandHour](hkcategoryvalueapplestandhour.md): Categories that the system used to indicate whether the user stood during the sample’s duration.
- [dateComponentsForCalendar:](hkactivitysummary/datecomponents%28for_%29.md): Date components that uniquely identify the day represented by the summary object.

### Specifying predicate key paths

- [HKPredicateKeyPathDateComponents](hkpredicatekeypathdatecomponents.md): The key path for accessing an activity summary’s date components.

### Instance Properties

- [paused](hkactivitysummary/ispaused.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Activity rings

- [HKActivitySummaryQuery](hkactivitysummaryquery.md): A query for reading activity summary objects from the HealthKit store.
- [HKActivityRingView](../healthkitui/hkactivityringview.md): A view that uses the Move, Exercise, and Stand activity rings to display data from a HealthKit activity summary object.
- [HKActivityMoveModeObject](hkactivitymovemodeobject.md): An object that contains a movement mode value.
