> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkrecurringpaymentsummaryitem/intervalunit](https://developer.apple.com/documentation/passkit/pkrecurringpaymentsummaryitem/intervalunit)

# intervalUnit (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The amount of time – in calendar units such as day, month, or year – that represents a fraction of the total payment interval.

## Declaration

```swift
var intervalUnit: NSCalendar.Unit { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for the interval unit is [month](../../foundation/nscalendar/unit/month.md).

The supported [NSCalendar.Unit](../../foundation/nscalendar/unit.md) interval units are:

- [minute](../../corefoundation/cfcalendarunit/minute.md)
- [hour](../../corefoundation/cfcalendarunit/hour.md)
- [day](../../corefoundation/cfcalendarunit/day.md)
- [month](../../corefoundation/cfcalendarunit/month.md)
- [year](../../corefoundation/cfcalendarunit/year.md)

To set an interval unit based on a week, set [intervalUnit](intervalunit.md) to [day](../../corefoundation/cfcalendarunit/day.md), and set [intervalCount](intervalcount.md) to a multiple of the number of days per week. To find the number of days for a week in the current calendar, call `NSCalendar.current.maximumRange(of: .weekday)!.count)`.

For example, the code below sets a payment that occurs every two weeks.

```swift
let daysPerWeek = NSCalendar.current.maximumRange(of: .weekday)!.count)

intervalUnit = .day
intervalCount = daysPerWeek * 2
```

## See Also

### Setting the payment interval

- [intervalCount](intervalcount.md): The number of interval units that make up the total payment interval.

# intervalUnit (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 8.0+

The amount of time – in calendar units such as day, month, or year – that represents a fraction of the total payment interval.

## Declaration

```objectivec
@property (nonatomic, assign) NSCalendarUnit intervalUnit;
```

<a id="Discussion"></a>

## Discussion

The default value for the interval unit is [NSCalendarUnitMonth](../../foundation/nscalendar/unit/month.md).

The supported [NSCalendarUnit](../../foundation/nscalendar/unit.md) interval units are:

- [kCFCalendarUnitMinute](../../corefoundation/cfcalendarunit/minute.md)
- [kCFCalendarUnitHour](../../corefoundation/cfcalendarunit/hour.md)
- [kCFCalendarUnitDay](../../corefoundation/cfcalendarunit/day.md)
- [kCFCalendarUnitMonth](../../corefoundation/cfcalendarunit/month.md)
- [kCFCalendarUnitYear](../../corefoundation/cfcalendarunit/year.md)

To set an interval unit based on a week, set [intervalUnit](intervalunit.md) to [kCFCalendarUnitDay](../../corefoundation/cfcalendarunit/day.md), and set [intervalCount](intervalcount.md) to a multiple of the number of days per week. To find the number of days for a week in the current calendar, call `NSCalendar.current.maximumRange(of: .weekday)!.count)`.

For example, the code below sets a payment that occurs every two weeks.

```swift
let daysPerWeek = NSCalendar.current.maximumRange(of: .weekday)!.count)

intervalUnit = .day
intervalCount = daysPerWeek * 2
```

## See Also

### Setting the payment interval

- [intervalCount](intervalcount.md): The number of interval units that make up the total payment interval.
