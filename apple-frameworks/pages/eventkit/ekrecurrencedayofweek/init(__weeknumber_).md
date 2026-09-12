> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrencedayofweek/init(_:weeknumber:)](https://developer.apple.com/documentation/eventkit/ekrecurrencedayofweek/init(_:weeknumber:))

# init(\_:weekNumber:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an autoreleased day of the week with a given day and week number.

## Declaration

```swift
convenience init(_ dayOfTheWeek: EKWeekday, weekNumber: Int)
```

## Parameters

- `dayOfTheWeek`: The day of the week. Values range from `1` to `7`, with Sunday being `1`.
- `weekNumber`: The week number.

<a id="return-value"></a>

## Return Value

The new day of the week.

## See Also

### Creating a Day of the Week

- [EKWeekday](../ekweekday.md): The day of the week.
- [init(\_:)](init%28__%29.md): Creates and returns a day of the week with a given day.
- [init(dayOfTheWeek:weekNumber:)](init%28dayoftheweek_weeknumber_%29.md): Initializes and returns a day of the week with a given day and week number.

# dayOfWeek:weekNumber: (Objective-C)

**Framework:** EventKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns an autoreleased day of the week with a given day and week number.

## Declaration

```objectivec
+ (instancetype) dayOfWeek:(EKWeekday) dayOfTheWeek weekNumber:(NSInteger) weekNumber;
```

## Parameters

- `dayOfTheWeek`: The day of the week. Values range from `1` to `7`, with Sunday being `1`.
- `weekNumber`: The week number.

<a id="return-value"></a>

## Return Value

The new day of the week.

## See Also

### Creating a Day of the Week

- [EKWeekday](../ekweekday.md): The day of the week.
- [dayOfWeek:](init%28__%29.md): Creates and returns a day of the week with a given day.
- [initWithDayOfTheWeek:weekNumber:](init%28dayoftheweek_weeknumber_%29.md): Initializes and returns a day of the week with a given day and week number.
