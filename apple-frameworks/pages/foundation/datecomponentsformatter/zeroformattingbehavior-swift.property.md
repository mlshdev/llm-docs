> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/zeroformattingbehavior-swift.property](https://developer.apple.com/documentation/foundation/datecomponentsformatter/zeroformattingbehavior-swift.property)

# zeroFormattingBehavior (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The formatting style for units whose value is 0.

## Declaration

```swift
var zeroFormattingBehavior: DateComponentsFormatter.ZeroFormattingBehavior { get set }
```

<a id="Discussion"></a>

## Discussion

When the value for a particular unit is 0, the zero formatting behavior determines whether that value is retained or omitted from any resulting strings. For example, when the formatting behavior is [dropTrailing](zeroformattingbehavior-swift.struct/droptrailing.md), the value of one hour, ten minutes, and zero seconds would omit the mention of seconds.

The default value of this property is [default](zeroformattingbehavior-swift.struct/default.md).

## See Also

### Configuring the Formatter Options

- [allowedUnits](allowedunits.md): The bitmask of calendrical units such as day and month to include in the output string.
- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [calendar](calendar.md): The default calendar to use when formatting date components.
- [collapsesLargestUnit](collapseslargestunit.md): A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.
- [includesApproximationPhrase](includesapproximationphrase.md): A Boolean value indicating whether the resulting phrase reflects an inexact time value.
- [includesTimeRemainingPhrase](includestimeremainingphrase.md): A Boolean value indicating whether output strings reflect the amount of time remaining.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [unitsStyle](unitsstyle-swift.property.md): The formatting style for unit names.

# zeroFormattingBehavior (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The formatting style for units whose value is 0.

## Declaration

```objectivec
@property NSDateComponentsFormatterZeroFormattingBehavior zeroFormattingBehavior;
```

<a id="Discussion"></a>

## Discussion

When the value for a particular unit is 0, the zero formatting behavior determines whether that value is retained or omitted from any resulting strings. For example, when the formatting behavior is [NSDateComponentsFormatterZeroFormattingBehaviorDropTrailing](zeroformattingbehavior-swift.struct/droptrailing.md), the value of one hour, ten minutes, and zero seconds would omit the mention of seconds.

The default value of this property is [NSDateComponentsFormatterZeroFormattingBehaviorDefault](zeroformattingbehavior-swift.struct/default.md).

## See Also

### Configuring the Formatter Options

- [allowedUnits](allowedunits.md): The bitmask of calendrical units such as day and month to include in the output string.
- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [calendar](calendar.md): The default calendar to use when formatting date components.
- [collapsesLargestUnit](collapseslargestunit.md): A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.
- [includesApproximationPhrase](includesapproximationphrase.md): A Boolean value indicating whether the resulting phrase reflects an inexact time value.
- [includesTimeRemainingPhrase](includestimeremainingphrase.md): A Boolean value indicating whether output strings reflect the amount of time remaining.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [unitsStyle](unitsstyle-swift.property.md): The formatting style for unit names.
