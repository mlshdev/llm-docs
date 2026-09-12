> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/collapseslargestunit](https://developer.apple.com/documentation/foundation/datecomponentsformatter/collapseslargestunit)

# collapsesLargestUnit (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.

## Declaration

```swift
var collapsesLargestUnit: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

An example of when this property might apply is when expressing 63 seconds worth of time. When this property is set to [true](https://developer.apple.com/documentation/swift/true), the formatted value would be “63s”. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the formatted value would be “1m 3s”.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Formatter Options

- [allowedUnits](allowedunits.md): The bitmask of calendrical units such as day and month to include in the output string.
- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [calendar](calendar.md): The default calendar to use when formatting date components.
- [includesApproximationPhrase](includesapproximationphrase.md): A Boolean value indicating whether the resulting phrase reflects an inexact time value.
- [includesTimeRemainingPhrase](includestimeremainingphrase.md): A Boolean value indicating whether output strings reflect the amount of time remaining.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [unitsStyle](unitsstyle-swift.property.md): The formatting style for unit names.
- [zeroFormattingBehavior](zeroformattingbehavior-swift.property.md): The formatting style for units whose value is 0.

# collapsesLargestUnit (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.

## Declaration

```objectivec
@property BOOL collapsesLargestUnit;
```

<a id="Discussion"></a>

## Discussion

An example of when this property might apply is when expressing 63 seconds worth of time. When this property is set to [true](https://developer.apple.com/documentation/swift/true), the formatted value would be “63s”. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the formatted value would be “1m 3s”.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Formatter Options

- [allowedUnits](allowedunits.md): The bitmask of calendrical units such as day and month to include in the output string.
- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [calendar](calendar.md): The default calendar to use when formatting date components.
- [includesApproximationPhrase](includesapproximationphrase.md): A Boolean value indicating whether the resulting phrase reflects an inexact time value.
- [includesTimeRemainingPhrase](includestimeremainingphrase.md): A Boolean value indicating whether output strings reflect the amount of time remaining.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [unitsStyle](unitsstyle-swift.property.md): The formatting style for unit names.
- [zeroFormattingBehavior](zeroformattingbehavior-swift.property.md): The formatting style for units whose value is 0.
