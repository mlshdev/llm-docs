> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/duration/unitsformatstyle/init(allowedunits:width:maximumunitcount:zerovalueunits:valuelengthlimits:fractionalpart:)](https://developer.apple.com/documentation/swift/duration/unitsformatstyle/init(allowedunits:width:maximumunitcount:zerovalueunits:valuelengthlimits:fractionalpart:))

# init(allowedUnits:width:maximumUnitCount:zeroValueUnits:valueLengthLimits:fractionalPart:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a units format style using the given parameters.

## Declaration

```swift
init<ValueRange>(allowedUnits: Set<Duration.UnitsFormatStyle.Unit>, width: Duration.UnitsFormatStyle.UnitWidth, maximumUnitCount: Int? = nil, zeroValueUnits: Duration.UnitsFormatStyle.ZeroValueUnitsDisplayStrategy = .hide, valueLengthLimits: ValueRange, fractionalPart: Duration.UnitsFormatStyle.FractionalPartDisplayStrategy = .hide) where ValueRange : RangeExpression, ValueRange.Bound == Int
```

## Parameters

- `allowedUnits`: The units that the formatted string may include.
- `width`: The width of the unit and the spacing between the value and the unit.
- `maximumUnitCount`: The maximum number of duration units to include in the output string.
- `zeroValueUnits`: The strategy for handling leading units with zero values.
- `valueLengthLimits`: The padding or truncating behavior of the unit value, as a bounded range of `Int` values.
- `fractionalPart`: The strategy for displaying a duration if a formatted string can’t represent it exactly with the allowed units.

<a id="discussion"></a>

## Discussion

Use this convenience function in situations that expect a [Duration.UnitsFormatStyle](../unitsformatstyle.md), such as [formatted(\_:)](../formatted%28__%29.md), as an alternative to using the full initializer.

## See Also

### Creating a units format style

- [init(allowedUnits:width:maximumUnitCount:zeroValueUnits:valueLength:fractionalPart:)](init%28allowedunits_width_maximumunitcount_zerovalueunits_valuelength_fractionalpart_%29.md): Creates a units format style using the given parameters.
