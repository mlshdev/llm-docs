> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekweekday](https://developer.apple.com/documentation/eventkit/ekweekday)

# EKWeekday (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The day of the week.

## Declaration

```swift
@frozen enum EKWeekday
```

## Topics

### Constants

- [EKWeekday.sunday](ekweekday/sunday.md): The value for Sunday.
- [EKWeekday.monday](ekweekday/monday.md): The value for Monday.
- [EKWeekday.tuesday](ekweekday/tuesday.md): The value for Tuesday.
- [EKWeekday.wednesday](ekweekday/wednesday.md): The value for Wednesday.
- [EKWeekday.thursday](ekweekday/thursday.md): The value for Thursday.
- [EKWeekday.friday](ekweekday/friday.md): The value for Friday.
- [EKWeekday.saturday](ekweekday/saturday.md): The value for Saturday.

### Deprecated

- [EKSunday](ekweekday/eksunday.md): Deprecated. The value for Sunday.
- [EKMonday](ekweekday/ekmonday.md): Deprecated. The value for Monday.
- [EKTuesday](ekweekday/ektuesday.md): Deprecated. The value for Tuesday.
- [EKWednesday](ekweekday/ekwednesday.md): Deprecated. The value for Wednesday.
- [EKThursday](ekweekday/ekthursday.md): Deprecated. The value for Thursday.
- [EKFriday](ekweekday/ekfriday.md): Deprecated. The value for Friday.
- [EKSaturday](ekweekday/eksaturday.md): Deprecated. The value for Saturday.

### Initializers

- [init(rawValue:)](ekweekday/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Day of the Week

- [init(\_:)](ekrecurrencedayofweek/init%28__%29.md): Creates and returns a day of the week with a given day.
- [init(\_:weekNumber:)](ekrecurrencedayofweek/init%28__weeknumber_%29.md): Creates and returns an autoreleased day of the week with a given day and week number.
- [init(dayOfTheWeek:weekNumber:)](ekrecurrencedayofweek/init%28dayoftheweek_weeknumber_%29.md): Initializes and returns a day of the week with a given day and week number.

# EKWeekday (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The day of the week.

## Declaration

```objectivec
enum EKWeekday : NSInteger;
```

## Topics

### Constants

- [EKWeekdaySunday](ekweekday/sunday.md): The value for Sunday.
- [EKWeekdayMonday](ekweekday/monday.md): The value for Monday.
- [EKWeekdayTuesday](ekweekday/tuesday.md): The value for Tuesday.
- [EKWeekdayWednesday](ekweekday/wednesday.md): The value for Wednesday.
- [EKWeekdayThursday](ekweekday/thursday.md): The value for Thursday.
- [EKWeekdayFriday](ekweekday/friday.md): The value for Friday.
- [EKWeekdaySaturday](ekweekday/saturday.md): The value for Saturday.

### Deprecated

- [EKSunday](ekweekday/eksunday.md): Deprecated. The value for Sunday.
- [EKMonday](ekweekday/ekmonday.md): Deprecated. The value for Monday.
- [EKTuesday](ekweekday/ektuesday.md): Deprecated. The value for Tuesday.
- [EKWednesday](ekweekday/ekwednesday.md): Deprecated. The value for Wednesday.
- [EKThursday](ekweekday/ekthursday.md): Deprecated. The value for Thursday.
- [EKFriday](ekweekday/ekfriday.md): Deprecated. The value for Friday.
- [EKSaturday](ekweekday/eksaturday.md): Deprecated. The value for Saturday.

## See Also

### Creating a Day of the Week

- [dayOfWeek:](ekrecurrencedayofweek/init%28__%29.md): Creates and returns a day of the week with a given day.
- [dayOfWeek:weekNumber:](ekrecurrencedayofweek/init%28__weeknumber_%29.md): Creates and returns an autoreleased day of the week with a given day and week number.
- [initWithDayOfTheWeek:weekNumber:](ekrecurrencedayofweek/init%28dayoftheweek_weeknumber_%29.md): Initializes and returns a day of the week with a given day and week number.
