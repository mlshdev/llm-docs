> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/calendar](https://developer.apple.com/documentation/foundation/datecomponentsformatter/calendar)

# calendar (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default calendar to use when formatting date components.

## Declaration

```swift
var calendar: Calendar? { get set }
```

<a id="Discussion"></a>

## Discussion

The formatter uses the calendar in this property to format values that do not have an inherent calendar of their own. For example, the formatter uses this calendar when formatting an [TimeInterval](../timeinterval.md) value.

The default value of this property is the calendar returned by the [autoupdatingCurrent](../nscalendar/autoupdatingcurrent.md) method of [NSCalendar](../nscalendar.md). Setting this property to `nil` causes the formatter to use the Gregorian calendar with the `en_US_POSIX` locale.

## See Also

### Configuring the Formatter Options

- [allowedUnits](allowedunits.md): The bitmask of calendrical units such as day and month to include in the output string.
- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [collapsesLargestUnit](collapseslargestunit.md): A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.
- [includesApproximationPhrase](includesapproximationphrase.md): A Boolean value indicating whether the resulting phrase reflects an inexact time value.
- [includesTimeRemainingPhrase](includestimeremainingphrase.md): A Boolean value indicating whether output strings reflect the amount of time remaining.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [unitsStyle](unitsstyle-swift.property.md): The formatting style for unit names.
- [zeroFormattingBehavior](zeroformattingbehavior-swift.property.md): The formatting style for units whose value is 0.

# calendar (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default calendar to use when formatting date components.

## Declaration

```objectivec
@property (copy, nullable) NSCalendar * calendar;
```

<a id="Discussion"></a>

## Discussion

The formatter uses the calendar in this property to format values that do not have an inherent calendar of their own. For example, the formatter uses this calendar when formatting an [NSTimeInterval](../timeinterval.md) value.

The default value of this property is the calendar returned by the [autoupdatingCurrentCalendar](../nscalendar/autoupdatingcurrent.md) method of [NSCalendar](../nscalendar.md). Setting this property to `nil` causes the formatter to use the Gregorian calendar with the `en_US_POSIX` locale.

## See Also

### Configuring the Formatter Options

- [allowedUnits](allowedunits.md): The bitmask of calendrical units such as day and month to include in the output string.
- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [collapsesLargestUnit](collapseslargestunit.md): A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.
- [includesApproximationPhrase](includesapproximationphrase.md): A Boolean value indicating whether the resulting phrase reflects an inexact time value.
- [includesTimeRemainingPhrase](includestimeremainingphrase.md): A Boolean value indicating whether output strings reflect the amount of time remaining.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [unitsStyle](unitsstyle-swift.property.md): The formatting style for unit names.
- [zeroFormattingBehavior](zeroformattingbehavior-swift.property.md): The formatting style for units whose value is 0.
