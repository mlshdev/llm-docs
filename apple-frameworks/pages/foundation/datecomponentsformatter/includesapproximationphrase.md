> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponentsformatter/includesapproximationphrase](https://developer.apple.com/documentation/foundation/datecomponentsformatter/includesapproximationphrase)

# includesApproximationPhrase (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the resulting phrase reflects an inexact time value.

## Declaration

```swift
var includesApproximationPhrase: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting the value of this property to [true](https://developer.apple.com/documentation/swift/true) adds phrasing to output strings to reflect that the given time value is approximate and not exact. Using this property yields more correct phrasing than simply prepending the string “About” to an output string.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Formatter Options

- [allowedUnits](allowedunits.md): The bitmask of calendrical units such as day and month to include in the output string.
- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [calendar](calendar.md): The default calendar to use when formatting date components.
- [collapsesLargestUnit](collapseslargestunit.md): A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.
- [includesTimeRemainingPhrase](includestimeremainingphrase.md): A Boolean value indicating whether output strings reflect the amount of time remaining.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [unitsStyle](unitsstyle-swift.property.md): The formatting style for unit names.
- [zeroFormattingBehavior](zeroformattingbehavior-swift.property.md): The formatting style for units whose value is 0.

# includesApproximationPhrase (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the resulting phrase reflects an inexact time value.

## Declaration

```objectivec
@property BOOL includesApproximationPhrase;
```

<a id="Discussion"></a>

## Discussion

Setting the value of this property to [true](https://developer.apple.com/documentation/swift/true) adds phrasing to output strings to reflect that the given time value is approximate and not exact. Using this property yields more correct phrasing than simply prepending the string “About” to an output string.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the Formatter Options

- [allowedUnits](allowedunits.md): The bitmask of calendrical units such as day and month to include in the output string.
- [allowsFractionalUnits](allowsfractionalunits.md): A Boolean indicating whether non-integer units may be used for values.
- [calendar](calendar.md): The default calendar to use when formatting date components.
- [collapsesLargestUnit](collapseslargestunit.md): A Boolean value indicating whether to collapse the largest unit into smaller units when a certain threshold is met.
- [includesTimeRemainingPhrase](includestimeremainingphrase.md): A Boolean value indicating whether output strings reflect the amount of time remaining.
- [maximumUnitCount](maximumunitcount.md): The maximum number of time units to include in the output string.
- [unitsStyle](unitsstyle-swift.property.md): The formatting style for unit names.
- [zeroFormattingBehavior](zeroformattingbehavior-swift.property.md): The formatting style for units whose value is 0.
