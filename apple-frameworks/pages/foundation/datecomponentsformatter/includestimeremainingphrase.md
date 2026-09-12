> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/includestimeremainingphrase](https://developer.apple.com/documentation/foundation/datecomponentsformatter/includestimeremainingphrase)

# includesTimeRemainingPhrase (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether output strings reflect the amount of time remaining.

## Declaration

```swift
var includesTimeRemainingPhrase: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) results in output strings like “30 minutes remaining”.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Formatter Options

- [allowedUnits](allowedunits.md): The bitmask of calendrical units such as day and month to include in the output string.
- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [calendar](calendar.md): The default calendar to use when formatting date components.
- [collapsesLargestUnit](collapseslargestunit.md): A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.
- [includesApproximationPhrase](includesapproximationphrase.md): A Boolean value indicating whether the resulting phrase reflects an inexact time value.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [unitsStyle](unitsstyle-swift.property.md): The formatting style for unit names.
- [zeroFormattingBehavior](zeroformattingbehavior-swift.property.md): The formatting style for units whose value is 0.

# includesTimeRemainingPhrase (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether output strings reflect the amount of time remaining.

## Declaration

```objectivec
@property BOOL includesTimeRemainingPhrase;
```

<a id="Discussion"></a>

## Discussion

Setting this property to [true](https://developer.apple.com/documentation/swift/true) results in output strings like “30 minutes remaining”.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Formatter Options

- [allowedUnits](allowedunits.md): The bitmask of calendrical units such as day and month to include in the output string.
- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [calendar](calendar.md): The default calendar to use when formatting date components.
- [collapsesLargestUnit](collapseslargestunit.md): A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.
- [includesApproximationPhrase](includesapproximationphrase.md): A Boolean value indicating whether the resulting phrase reflects an inexact time value.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [unitsStyle](unitsstyle-swift.property.md): The formatting style for unit names.
- [zeroFormattingBehavior](zeroformattingbehavior-swift.property.md): The formatting style for units whose value is 0.
