> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatstyle/usage](https://developer.apple.com/documentation/foundation/measurement/formatstyle/usage)

# usage

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The intended purpose of the formatted measurement.

## Declaration

```swift
var usage: MeasurementFormatUnitUsage<UnitType>?
```

<a id="Discussion"></a>

## Discussion

You can use the `usage` property to specify the intended purpose of the formatted measurement. The default option, `general`, formats the measurement with the default unit for the current locale. The `asProvided` option formats the measurement using the specified unit, ignoring the unit that the locale uses.

The following example shows a formatted temperature using the default unit for the `en_US` locale and using a provided Celsius unit:

```swift
let temperature = Measurement<UnitTemperature>(value: 36.8, unit: .celsius)
temperature.formatted()
// 98°F

temperature.formatted(.measurement(width: .abbreviated, usage: .asProvided))
// 36.8°C
```

All unit types have `general` and `asProvided` options. Some subclasses have additional options, such as the following:

[UnitTemperature](../../unittemperature.md)

- `person`
- `weather`

[UnitLength](../../unitlength.md)

- `person`
- `personHeight`
- `road`

[UnitEnergy](../../unitenergy.md)

- `food`
- `workout`

[UnitMass](../../unitmass.md)

- `personWeight`

## See Also

### Modifying a measurement format style

- [width](width.md): The width of the measurement unit.
- [Measurement.FormatStyle.UnitWidth](unitwidth.md): Specifies the width of the unit, determining the textual representation.
- [numberFormatStyle](numberformatstyle.md): The formatting of the measurement value.
- [hidesScaleName](hidesscalename.md): Conforms when `UnitType` is `UnitTemperature`. The visibility of the unit name of a temperature.
- [locale](locale.md): The locale of the format style.
- [locale(\_:)](locale%28__%29.md): Modifies the measurement format style to use the specified locale.
