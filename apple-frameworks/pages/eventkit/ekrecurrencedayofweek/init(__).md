> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekrecurrencedayofweek/init(_:)](https://developer.apple.com/documentation/eventkit/ekrecurrencedayofweek/init(_:))

# init(\_:) (Swift)

**Framework:** EventKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a day of the week with a given day.

## Declaration

```swift
convenience init(_ dayOfTheWeek: EKWeekday)
```

## Parameters

- `dayOfTheWeek`: The day of the week. Values range from `1` to `7`, with Sunday being `1`.

<a id="return-value"></a>

## Return Value

The new day of the week.

<a id="Discussion"></a>

## Discussion

The week number of the returned day of the week is `0`.

## See Also

### Creating a Day of the Week

- [EKWeekday](../ekweekday.md): The day of the week.
- [init(\_:weekNumber:)](init%28__weeknumber_%29.md): Creates and returns an autoreleased day of the week with a given day and week number.
- [init(dayOfTheWeek:weekNumber:)](init%28dayoftheweek_weeknumber_%29.md): Initializes and returns a day of the week with a given day and week number.

# dayOfWeek: (Objective-C)

**Framework:** EventKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a day of the week with a given day.

## Declaration

```objectivec
+ (instancetype) dayOfWeek:(EKWeekday) dayOfTheWeek;
```

## Parameters

- `dayOfTheWeek`: The day of the week. Values range from `1` to `7`, with Sunday being `1`.

<a id="return-value"></a>

## Return Value

The new day of the week.

<a id="Discussion"></a>

## Discussion

The week number of the returned day of the week is `0`.

## See Also

### Creating a Day of the Week

- [EKWeekday](../ekweekday.md): The day of the week.
- [dayOfWeek:weekNumber:](init%28__weeknumber_%29.md): Creates and returns an autoreleased day of the week with a given day and week number.
- [initWithDayOfTheWeek:weekNumber:](init%28dayoftheweek_weeknumber_%29.md): Initializes and returns a day of the week with a given day and week number.
