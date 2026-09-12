> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatstyle/locale(_:)](https://developer.apple.com/documentation/foundation/measurement/formatstyle/locale(_:))

# locale(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies the measurement format style to use the specified locale.

## Declaration

```swift
func locale(_ locale: Locale) -> Measurement<UnitType>.FormatStyle
```

## Parameters

- `locale`: The locale to use when formatting a measurement.

<a id="return-value"></a>

## Return Value

A measurement format style with the specified locale.

## See Also

### Modifying a measurement format style

- [width](width.md): The width of the measurement unit.
- [Measurement.FormatStyle.UnitWidth](unitwidth.md): Specifies the width of the unit, determining the textual representation.
- [numberFormatStyle](numberformatstyle.md): The formatting of the measurement value.
- [usage](usage.md): The intended purpose of the formatted measurement.
- [hidesScaleName](hidesscalename.md): Conforms when `UnitType` is `UnitTemperature`. The visibility of the unit name of a temperature.
- [locale](locale.md): The locale of the format style.
