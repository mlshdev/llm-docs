> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrencedayofweek/init(dayoftheweek:weeknumber:)](https://developer.apple.com/documentation/eventkit/ekrecurrencedayofweek/init(dayoftheweek:weeknumber:))

# init(dayOfTheWeek:weekNumber:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a day of the week with a given day and week number.

## Declaration

```swift
init(dayOfTheWeek: EKWeekday, weekNumber: Int)
```

## Parameters

- `dayOfTheWeek`: The day of the week. Values range from `1` to `7`, with Sunday being `1`.
- `weekNumber`: The week number.

<a id="return-value"></a>

## Return Value

The initialized day of the week.

## See Also

### Creating a Day of the Week

- [EKWeekday](../ekweekday.md): The day of the week.
- [init(\_:)](init%28__%29.md): Creates and returns a day of the week with a given day.
- [init(\_:weekNumber:)](init%28__weeknumber_%29.md): Creates and returns an autoreleased day of the week with a given day and week number.

# initWithDayOfTheWeek:weekNumber: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Initializes and returns a day of the week with a given day and week number.

## Declaration

```objectivec
- (id) initWithDayOfTheWeek:(EKWeekday) dayOfTheWeek weekNumber:(NSInteger) weekNumber;
```

## Parameters

- `dayOfTheWeek`: The day of the week. Values range from `1` to `7`, with Sunday being `1`.
- `weekNumber`: The week number.

<a id="return-value"></a>

## Return Value

The initialized day of the week.

## See Also

### Creating a Day of the Week

- [EKWeekday](../ekweekday.md): The day of the week.
- [dayOfWeek:](init%28__%29.md): Creates and returns a day of the week with a given day.
- [dayOfWeek:weekNumber:](init%28__weeknumber_%29.md): Creates and returns an autoreleased day of the week with a given day and week number.
