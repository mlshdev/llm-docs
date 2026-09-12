> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/allowedunits](https://developer.apple.com/documentation/foundation/datecomponentsformatter/allowedunits)

# allowedUnits (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The bitmask of calendrical units such as day and month to include in the output string.

## Declaration

```swift
var allowedUnits: NSCalendar.Unit { get set }
```

<a id="Discussion"></a>

## Discussion

The allowed calendar units are:

- [year](../nscalendar/unit/year.md)
- [month](../nscalendar/unit/month.md)
- [weekOfMonth](../nscalendar/unit/weekofmonth.md)
- [day](../nscalendar/unit/day.md)
- [hour](../nscalendar/unit/hour.md)
- [minute](../nscalendar/unit/minute.md)
- [second](../nscalendar/unit/second.md)

Assigning any other calendar units to this property results in an exception.

## See Also

### Configuring the Formatter Options

- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [calendar](calendar.md): The default calendar to use when formatting date components.
- [collapsesLargestUnit](collapseslargestunit.md): A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.
- [includesApproximationPhrase](includesapproximationphrase.md): A Boolean value indicating whether the resulting phrase reflects an inexact time value.
- [includesTimeRemainingPhrase](includestimeremainingphrase.md): A Boolean value indicating whether output strings reflect the amount of time remaining.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [unitsStyle](unitsstyle-swift.property.md): The formatting style for unit names.
- [zeroFormattingBehavior](zeroformattingbehavior-swift.property.md): The formatting style for units whose value is 0.

# allowedUnits (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The bitmask of calendrical units such as day and month to include in the output string.

## Declaration

```objectivec
@property NSCalendarUnit allowedUnits;
```

<a id="Discussion"></a>

## Discussion

The allowed calendar units are:

- [NSCalendarUnitYear](../nscalendar/unit/year.md)
- [NSCalendarUnitMonth](../nscalendar/unit/month.md)
- [NSCalendarUnitWeekOfMonth](../nscalendar/unit/weekofmonth.md)
- [NSCalendarUnitDay](../nscalendar/unit/day.md)
- [NSCalendarUnitHour](../nscalendar/unit/hour.md)
- [NSCalendarUnitMinute](../nscalendar/unit/minute.md)
- [NSCalendarUnitSecond](../nscalendar/unit/second.md)

Assigning any other calendar units to this property results in an exception.

## See Also

### Configuring the Formatter Options

- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [calendar](calendar.md): The default calendar to use when formatting date components.
- [collapsesLargestUnit](collapseslargestunit.md): A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.
- [includesApproximationPhrase](includesapproximationphrase.md): A Boolean value indicating whether the resulting phrase reflects an inexact time value.
- [includesTimeRemainingPhrase](includestimeremainingphrase.md): A Boolean value indicating whether output strings reflect the amount of time remaining.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [unitsStyle](unitsstyle-swift.property.md): The formatting style for unit names.
- [zeroFormattingBehavior](zeroformattingbehavior-swift.property.md): The formatting style for units whose value is 0.
