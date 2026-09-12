> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatstyle/hidesscalename](https://developer.apple.com/documentation/foundation/measurement/formatstyle/hidesscalename)

# hidesScaleName

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The visibility of the unit name of a temperature.

## Declaration

```swift
var hidesScaleName: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set `hidesScaleName` to `true` to exclude the unit name from a formatted temperature string. For example, `90°` rather than `90°F` or `90°C` with the [narrow](unitwidth/narrow.md) unit width, or `90 degrees` rather than `90 degrees Celcius` or `90 degrees Fahrenheit` with the [wide](unitwidth/wide.md) width.

Hiding the unit name only affects the presentation of the measurement. Unless you specify `asProvided` as the `usage`, the system converts the temperature to the unit that the locale uses.

## See Also

### Modifying a measurement format style

- [width](width.md): The width of the measurement unit.
- [Measurement.FormatStyle.UnitWidth](unitwidth.md): Specifies the width of the unit, determining the textual representation.
- [numberFormatStyle](numberformatstyle.md): The formatting of the measurement value.
- [usage](usage.md): The intended purpose of the formatted measurement.
- [locale](locale.md): The locale of the format style.
- [locale(\_:)](locale%28__%29.md): Modifies the measurement format style to use the specified locale.
