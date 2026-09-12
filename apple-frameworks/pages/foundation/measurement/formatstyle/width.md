> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatstyle/width](https://developer.apple.com/documentation/foundation/measurement/formatstyle/width)

# width

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The width of the measurement unit.

## Declaration

```swift
var width: Measurement<UnitType>.FormatStyle.UnitWidth
```

<a id="Discussion"></a>

## Discussion

The `width` property specifies the display of the measurement unit. The possible values are [abbreviated](unitwidth/abbreviated.md), [narrow](unitwidth/narrow.md), and [wide](unitwidth/wide.md). The format style represents the unit in the shortest notation available.

The following example shows *100 degrees Fahrenheit* in each width for the `en_US` locale.

```swift
let temperatureMeasurement = Measurement<UnitTemperature>(value: 100, unit: .fahrenheit)
temperatureMeasurement.formatted(.measurement(width: .wide)) // 100 degrees Fahrenheit
temperatureMeasurement.formatted(.measurement(width: .abbreviated)) // 100°F
temperatureMeasurement.formatted(.measurement(width: .narrow)) // 100°
```

## See Also

### Modifying a measurement format style

- [Measurement.FormatStyle.UnitWidth](unitwidth.md): Specifies the width of the unit, determining the textual representation.
- [numberFormatStyle](numberformatstyle.md): The formatting of the measurement value.
- [usage](usage.md): The intended purpose of the formatted measurement.
- [hidesScaleName](hidesscalename.md): Conforms when `UnitType` is `UnitTemperature`. The visibility of the unit name of a temperature.
- [locale](locale.md): The locale of the format style.
- [locale(\_:)](locale%28__%29.md): Modifies the measurement format style to use the specified locale.
