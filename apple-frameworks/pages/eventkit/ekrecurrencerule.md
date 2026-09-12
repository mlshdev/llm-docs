> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrencerule](https://developer.apple.com/documentation/eventkit/ekrecurrencerule)

# EKRecurrenceRule (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that describes the pattern for a recurring event.

## Declaration

```swift
class EKRecurrenceRule
```

## Mentioned In

- [Creating a recurring event](creating-a-recurring-event.md)

<a id="overview"></a>

## Overview

After you create a recurrence rule, assign it to an event with the method of [EKEvent](ekevent.md).

Recurrence rules can have an end, represented by an [EKRecurrenceEnd](ekrecurrenceend.md) object. The end can be based on a specific date or a maximum number of occurrences.

> **Note**

>  It is currently not possible to directly modify an `EKRecurrenceRule` or any of its properties. This functionality is achieved by creating a new `EKRecurrenceRule` and setting an event or reminder to use the newly created rule.

## Topics

### Creating a Basic Recurrence Rule

- [EKSpan](ekspan.md): An object that indicates whether modifications should apply to a single event or all future events of a recurring event.
- [init(recurrenceWith:interval:end:)](ekrecurrencerule/init%28recurrencewith_interval_end_%29.md): Initializes and returns a simple recurrence rule with a given frequency, interval, and end.

### Creating a Complex Recurrence Rule

- [init(recurrenceWith:interval:daysOfTheWeek:daysOfTheMonth:monthsOfTheYear:weeksOfTheYear:daysOfTheYear:setPositions:end:)](ekrecurrencerule/init%28recurrencewith_interval_daysoftheweek_daysofthemonth_monthsoftheyear_weeksoftheyear_daysoftheyear_setpositions_end_%29.md): Initializes and returns a recurrence rule with a given frequency and additional scheduling information.

### Accessing Recurrence Rule Properties

- [EKRecurrenceFrequency](ekrecurrencefrequency.md): The frequency for recurrence rules.
- [calendarIdentifier](ekrecurrencerule/calendaridentifier.md): The identifier for the recurrence rule’s calendar.
- [recurrenceEnd](ekrecurrencerule/recurrenceend.md): Indicates when the recurrence rule ends.
- [frequency](ekrecurrencerule/frequency.md): The frequency of the recurrence rule.
- [interval](ekrecurrencerule/interval.md): Specifies how often the recurrence rule repeats over the unit of time indicated by its frequency.
- [firstDayOfTheWeek](ekrecurrencerule/firstdayoftheweek.md): Indicates which day of the week the recurrence rule treats as the first day of the week.
- [daysOfTheWeek](ekrecurrencerule/daysoftheweek.md): The days of the week associated with the recurrence rule, as an array of [EKRecurrenceDayOfWeek](ekrecurrencedayofweek.md) objects.
- [daysOfTheMonth](ekrecurrencerule/daysofthemonth.md): The days of the month associated with the recurrence rule, as an array of `NSNumber` objects.
- [daysOfTheYear](ekrecurrencerule/daysoftheyear.md): The days of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [weeksOfTheYear](ekrecurrencerule/weeksoftheyear.md): The weeks of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [monthsOfTheYear](ekrecurrencerule/monthsoftheyear.md): The months of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [setPositions](ekrecurrencerule/setpositions.md): An array of ordinal numbers that filters which recurrences to include in the recurrence rule’s frequency.
- [EK_LOSE_FRACTIONAL_SECONDS_DO_NOT_USE()](ek_lose_fractional_seconds_do_not_use%28%29.md): Deprecated. A deprecated function.

### Initializers

- [init(recurrenceWithFrequency:interval:daysOfTheWeek:daysOfTheMonth:monthsOfTheYear:weeksOfTheYear:daysOfTheYear:setPositions:end:)](ekrecurrencerule/init%28recurrencewithfrequency_interval_daysoftheweek_daysofthemonth_monthsoftheyear_weeksoftheyear_daysoftheyear_setpositions_end_%29.md)
- [init(recurrenceWithFrequency:interval:end:)](ekrecurrencerule/init%28recurrencewithfrequency_interval_end_%29.md)

## Relationships

### Inherits From

- [EKObject](ekobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Recurrence

- [Creating a recurring event](creating-a-recurring-event.md): Set up an event or reminder that repeats.
- [EKRecurrenceDayOfWeek](ekrecurrencedayofweek.md): A class that represents the day of the week.
- [EKRecurrenceEnd](ekrecurrenceend.md): A class that defines the end of a recurrence rule.

# EKRecurrenceRule (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that describes the pattern for a recurring event.

## Declaration

```objectivec
@interface EKRecurrenceRule : EKObject
```

## Mentioned In

- [Creating a recurring event](creating-a-recurring-event.md)

<a id="overview"></a>

## Overview

After you create a recurrence rule, assign it to an event with the method of [EKEvent](ekevent.md).

Recurrence rules can have an end, represented by an [EKRecurrenceEnd](ekrecurrenceend.md) object. The end can be based on a specific date or a maximum number of occurrences.

> **Note**

>  It is currently not possible to directly modify an `EKRecurrenceRule` or any of its properties. This functionality is achieved by creating a new `EKRecurrenceRule` and setting an event or reminder to use the newly created rule.

## Topics

### Creating a Basic Recurrence Rule

- [EKSpan](ekspan.md): An object that indicates whether modifications should apply to a single event or all future events of a recurring event.
- [initRecurrenceWithFrequency:interval:end:](ekrecurrencerule/init%28recurrencewith_interval_end_%29.md): Initializes and returns a simple recurrence rule with a given frequency, interval, and end.

### Creating a Complex Recurrence Rule

- [initRecurrenceWithFrequency:interval:daysOfTheWeek:daysOfTheMonth:monthsOfTheYear:weeksOfTheYear:daysOfTheYear:setPositions:end:](ekrecurrencerule/init%28recurrencewith_interval_daysoftheweek_daysofthemonth_monthsoftheyear_weeksoftheyear_daysoftheyear_setpositions_end_%29.md): Initializes and returns a recurrence rule with a given frequency and additional scheduling information.

### Accessing Recurrence Rule Properties

- [EKRecurrenceFrequency](ekrecurrencefrequency.md): The frequency for recurrence rules.
- [calendarIdentifier](ekrecurrencerule/calendaridentifier.md): The identifier for the recurrence rule’s calendar.
- [recurrenceEnd](ekrecurrencerule/recurrenceend.md): Indicates when the recurrence rule ends.
- [frequency](ekrecurrencerule/frequency.md): The frequency of the recurrence rule.
- [interval](ekrecurrencerule/interval.md): Specifies how often the recurrence rule repeats over the unit of time indicated by its frequency.
- [firstDayOfTheWeek](ekrecurrencerule/firstdayoftheweek.md): Indicates which day of the week the recurrence rule treats as the first day of the week.
- [daysOfTheWeek](ekrecurrencerule/daysoftheweek.md): The days of the week associated with the recurrence rule, as an array of [EKRecurrenceDayOfWeek](ekrecurrencedayofweek.md) objects.
- [daysOfTheMonth](ekrecurrencerule/daysofthemonth.md): The days of the month associated with the recurrence rule, as an array of `NSNumber` objects.
- [daysOfTheYear](ekrecurrencerule/daysoftheyear.md): The days of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [weeksOfTheYear](ekrecurrencerule/weeksoftheyear.md): The weeks of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [monthsOfTheYear](ekrecurrencerule/monthsoftheyear.md): The months of the year associated with the recurrence rule, as an array of `NSNumber` objects.
- [setPositions](ekrecurrencerule/setpositions.md): An array of ordinal numbers that filters which recurrences to include in the recurrence rule’s frequency.
- [EK_LOSE_FRACTIONAL_SECONDS_DO_NOT_USE](ek_lose_fractional_seconds_do_not_use%28%29.md): Deprecated. A deprecated function.

## Relationships

### Inherits From

- [EKObject](ekobject.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Recurrence

- [Creating a recurring event](creating-a-recurring-event.md): Set up an event or reminder that repeats.
- [EKRecurrenceDayOfWeek](ekrecurrencedayofweek.md): A class that represents the day of the week.
- [EKRecurrenceEnd](ekrecurrenceend.md): A class that defines the end of a recurrence rule.
