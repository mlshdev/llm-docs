> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatstyle/locale](https://developer.apple.com/documentation/foundation/measurement/formatstyle/locale)

# locale

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The locale of the format style.

## Declaration

```swift
var locale: Locale
```

<a id="Discussion"></a>

## Discussion

By default, the format style displays a measurement in the unit that `locale` specifies. The default value is [autoupdatingCurrent](../../locale/autoupdatingcurrent.md).

## See Also

### Modifying a measurement format style

- [width](width.md): The width of the measurement unit.
- [Measurement.FormatStyle.UnitWidth](unitwidth.md): Specifies the width of the unit, determining the textual representation.
- [numberFormatStyle](numberformatstyle.md): The formatting of the measurement value.
- [usage](usage.md): The intended purpose of the formatted measurement.
- [hidesScaleName](hidesscalename.md): Conforms when `UnitType` is `UnitTemperature`. The visibility of the unit name of a temperature.
- [locale(\_:)](locale%28__%29.md): Modifies the measurement format style to use the specified locale.
