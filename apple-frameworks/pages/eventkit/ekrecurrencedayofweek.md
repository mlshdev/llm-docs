> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrencedayofweek](https://developer.apple.com/documentation/eventkit/ekrecurrencedayofweek)

# EKRecurrenceDayOfWeek (Swift)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that represents the day of the week.

## Declaration

```swift
class EKRecurrenceDayOfWeek
```

## Mentioned In

- [Creating a recurring event](creating-a-recurring-event.md)

<a id="overview"></a>

## Overview

The `EKRecurrenceDayOfWeek` class represents a day of the week for use with an [EKRecurrenceRule](ekrecurrencerule.md) object.

A day of the week can optionally have a week number, indicating a specific day in the recurrence rule’s frequency. For example, a day of the week with a day value of Tuesday and a week number of 2 would represent the second Tuesday of every month in a monthly recurrence rule, and the second Tuesday of every year in a yearly recurrence rule. A day of the week with a week number of 0 ignores its week number.

## Topics

### Creating a Day of the Week

- [EKWeekday](ekweekday.md): The day of the week.
- [init(\_:)](ekrecurrencedayofweek/init%28__%29.md): Creates and returns a day of the week with a given day.
- [init(\_:weekNumber:)](ekrecurrencedayofweek/init%28__weeknumber_%29.md): Creates and returns an autoreleased day of the week with a given day and week number.
- [init(dayOfTheWeek:weekNumber:)](ekrecurrencedayofweek/init%28dayoftheweek_weeknumber_%29.md): Initializes and returns a day of the week with a given day and week number.

### Accessing Properties of a Day of the Week

- [dayOfTheWeek](ekrecurrencedayofweek/dayoftheweek.md): The day of the week.
- [weekNumber](ekrecurrencedayofweek/weeknumber.md): The week number of the day of the week.

### Initializers

- [init(coder:)](ekrecurrencedayofweek/init%28coder_%29.md)

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

## See Also

### Recurrence

- [Creating a recurring event](creating-a-recurring-event.md): Set up an event or reminder that repeats.
- [EKRecurrenceEnd](ekrecurrenceend.md): A class that defines the end of a recurrence rule.
- [EKRecurrenceRule](ekrecurrencerule.md): A class that describes the pattern for a recurring event.

# EKRecurrenceDayOfWeek (Objective-C)

**Framework:** EventKit  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A class that represents the day of the week.

## Declaration

```objectivec
@interface EKRecurrenceDayOfWeek : NSObject
```

## Mentioned In

- [Creating a recurring event](creating-a-recurring-event.md)

<a id="overview"></a>

## Overview

The `EKRecurrenceDayOfWeek` class represents a day of the week for use with an [EKRecurrenceRule](ekrecurrencerule.md) object.

A day of the week can optionally have a week number, indicating a specific day in the recurrence rule’s frequency. For example, a day of the week with a day value of Tuesday and a week number of 2 would represent the second Tuesday of every month in a monthly recurrence rule, and the second Tuesday of every year in a yearly recurrence rule. A day of the week with a week number of 0 ignores its week number.

## Topics

### Creating a Day of the Week

- [EKWeekday](ekweekday.md): The day of the week.
- [dayOfWeek:](ekrecurrencedayofweek/init%28__%29.md): Creates and returns a day of the week with a given day.
- [dayOfWeek:weekNumber:](ekrecurrencedayofweek/init%28__weeknumber_%29.md): Creates and returns an autoreleased day of the week with a given day and week number.
- [initWithDayOfTheWeek:weekNumber:](ekrecurrencedayofweek/init%28dayoftheweek_weeknumber_%29.md): Initializes and returns a day of the week with a given day and week number.

### Accessing Properties of a Day of the Week

- [dayOfTheWeek](ekrecurrencedayofweek/dayoftheweek.md): The day of the week.
- [weekNumber](ekrecurrencedayofweek/weeknumber.md): The week number of the day of the week.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Recurrence

- [Creating a recurring event](creating-a-recurring-event.md): Set up an event or reminder that repeats.
- [EKRecurrenceEnd](ekrecurrenceend.md): A class that defines the end of a recurrence rule.
- [EKRecurrenceRule](ekrecurrencerule.md): A class that describes the pattern for a recurring event.
