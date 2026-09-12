> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatstyle/numberformatstyle](https://developer.apple.com/documentation/foundation/measurement/formatstyle/numberformatstyle)

# numberFormatStyle

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The formatting of the measurement value.

## Declaration

```swift
var numberFormatStyle: FloatingPointFormatStyle<Double>?
```

<a id="Discussion"></a>

## Discussion

The `numberFormat` property specifies the formatting of the measurement value. You can customize the precision, grouping, and rounding mode of the measurement by creating a numeric number format style.

The following example shows a customized measurement format style that includes two decimal numbers and excludes separators:

```swift
let volume = Measurement<UnitVolume>(value: 2300, unit: .milliliters)
volume.formatted(.measurement(width: .abbreviated,
                              usage: .asProvided,
                              numberFormatStyle: .number
                                  .precision(.fractionLength(2))
                                  .grouping(.never))) // "2300.00 mL"
```

## See Also

### Modifying a measurement format style

- [width](width.md): The width of the measurement unit.
- [Measurement.FormatStyle.UnitWidth](unitwidth.md): Specifies the width of the unit, determining the textual representation.
- [usage](usage.md): The intended purpose of the formatted measurement.
- [hidesScaleName](hidesscalename.md): Conforms when `UnitType` is `UnitTemperature`. The visibility of the unit name of a temperature.
- [locale](locale.md): The locale of the format style.
- [locale(\_:)](locale%28__%29.md): Modifies the measurement format style to use the specified locale.
