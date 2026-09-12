> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/unitsstyle-swift.property](https://developer.apple.com/documentation/foundation/datecomponentsformatter/unitsstyle-swift.property)

# unitsStyle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The formatting style for unit names.

## Declaration

```swift
var unitsStyle: DateComponentsFormatter.UnitsStyle { get set }
```

<a id="Discussion"></a>

## Discussion

Configures the strings to use (if any) for unit names such as days, hours, minutes, and seconds. Use this property to specify whether you want abbreviated or shortened versions of unit names—for example, `hrs` instead of `hours`.

The default value of this property is [DateComponentsFormatter.UnitsStyle.positional](unitsstyle-swift.enum/positional.md).

## See Also

### Configuring the Formatter Options

- [allowedUnits](allowedunits.md): The bitmask of calendrical units such as day and month to include in the output string.
- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [calendar](calendar.md): The default calendar to use when formatting date components.
- [collapsesLargestUnit](collapseslargestunit.md): A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.
- [includesApproximationPhrase](includesapproximationphrase.md): A Boolean value indicating whether the resulting phrase reflects an inexact time value.
- [includesTimeRemainingPhrase](includestimeremainingphrase.md): A Boolean value indicating whether output strings reflect the amount of time remaining.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [zeroFormattingBehavior](zeroformattingbehavior-swift.property.md): The formatting style for units whose value is 0.

# unitsStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The formatting style for unit names.

## Declaration

```objectivec
@property NSDateComponentsFormatterUnitsStyle unitsStyle;
```

<a id="Discussion"></a>

## Discussion

Configures the strings to use (if any) for unit names such as days, hours, minutes, and seconds. Use this property to specify whether you want abbreviated or shortened versions of unit names—for example, `hrs` instead of `hours`.

The default value of this property is [NSDateComponentsFormatterUnitsStylePositional](unitsstyle-swift.enum/positional.md).

## See Also

### Configuring the Formatter Options

- [allowedUnits](allowedunits.md): The bitmask of calendrical units such as day and month to include in the output string.
- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [calendar](calendar.md): The default calendar to use when formatting date components.
- [collapsesLargestUnit](collapseslargestunit.md): A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.
- [includesApproximationPhrase](includesapproximationphrase.md): A Boolean value indicating whether the resulting phrase reflects an inexact time value.
- [includesTimeRemainingPhrase](includestimeremainingphrase.md): A Boolean value indicating whether output strings reflect the amount of time remaining.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [zeroFormattingBehavior](zeroformattingbehavior-swift.property.md): The formatting style for units whose value is 0.
