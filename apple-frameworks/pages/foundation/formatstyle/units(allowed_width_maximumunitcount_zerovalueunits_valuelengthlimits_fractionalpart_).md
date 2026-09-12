> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/units(allowed:width:maximumunitcount:zerovalueunits:valuelengthlimits:fractionalpart:)](https://developer.apple.com/documentation/foundation/formatstyle/units(allowed:width:maximumunitcount:zerovalueunits:valuelengthlimits:fractionalpart:))

# units(allowed:width:maximumUnitCount:zeroValueUnits:valueLengthLimits:fractionalPart:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a style for formatting a duration range that uses the specified units, with padding/truncating behavior defined as a range.

## Declaration

```swift
static func units<ValueRange>(allowed units: Set<Duration.UnitsFormatStyle.Unit> = [.hours, .minutes, .seconds], width: Duration.UnitsFormatStyle.UnitWidth = .abbreviated, maximumUnitCount: Int? = nil, zeroValueUnits: Duration.UnitsFormatStyle.ZeroValueUnitsDisplayStrategy = .hide, valueLengthLimits: ValueRange, fractionalPart: Duration.UnitsFormatStyle.FractionalPartDisplayStrategy = .hide) -> Self where ValueRange : RangeExpression, ValueRange.Bound == Int
```

## Parameters

- `units`: The units that the formatted string may include.
- `width`: The width of the unit and the spacing between the value and the unit.
- `maximumUnitCount`: The maximum number of duration units, if any, to include in the output string.
- `zeroValueUnits`: The strategy for handling leading units with zero values.
- `valueLengthLimits`: The padding and truncating behavior of the unit value, as a bounded range of `Int` values. The lower bound, if any, expresses the minimum number of digits for all units. The higher bound, if any, expresses the maximum. The style applies leading zeros to units with less than the minimum number of digits, and truncates units above the maximum digits. Defaults to `nil`, which applies no minimum or maximum.
- `fractionalPart`: The strategy for displaying a duration if a formatted string can’t represent it exactly with the allowed units.

<a id="return-value"></a>

## Return Value

A duration units format style that uses the specified units.

<a id="Discussion"></a>

## Discussion

Use the dot-notation form of this method when the call point allows the use of [Duration.UnitsFormatStyle](https://developer.apple.com/documentation/swift/duration/unitsformatstyle). You typically do this when calling the [formatted(\_:)](https://developer.apple.com/documentation/swift/duration/formatted%28_:%29) method of [Duration](https://developer.apple.com/documentation/swift/duration).

The following example creates a duration to represent 1 hour, 10 minutes, 32 seconds, and 400 milliseconds. It then creates a [Duration.UnitsFormatStyle](https://developer.apple.com/documentation/swift/duration/unitsformatstyle) to show the hours, minutes, seconds, and milliseconds parts. Because `valueLengthLimits` is the range `2...3`, the style formats each unit with a minimum of two digits and a maximum of three. This results in zero-padding the hours part as `01 hr`.

```swift
let duration = Duration.seconds(70 * 60 + 32) + Duration.milliseconds(400)
let formatted = duration.formatted(
    .units(
        allowed: [.hours, .minutes, .seconds, .milliseconds],
        valueLengthLimits: 2...3))
// "01 hr, 10 min, 32 sec, 400 ms"
```

## See Also

### Applying duration styles

- [timeDuration](timeduration.md): Conforms when `Self` is `Date.ComponentsFormatStyle`. A style for formatting a duration expressed as a range of dates.
- [Date.ComponentsFormatStyle](../date/componentsformatstyle.md): A style for formatting a date interval in terms of specific date components.
- [time(pattern:)](time%28pattern_%29.md): Conforms when `Self` is `Duration.TimeFormatStyle`. Returns a style for formatting a duration using a provided pattern.
- [units(allowed:width:maximumUnitCount:zeroValueUnits:valueLength:fractionalPart:)](units%28allowed_width_maximumunitcount_zerovalueunits_valuelength_fractionalpart_%29.md): Conforms when `Self` is `Duration.UnitsFormatStyle`. Returns a style for formatting a duration that uses the specified units.
