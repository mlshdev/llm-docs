> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatted()](https://developer.apple.com/documentation/foundation/measurement/formatted())

# formatted()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a locale-aware string representation of a measurement using the default measurement format style.

## Declaration

```swift
func formatted() -> String
```

<a id="return-value"></a>

## Return Value

A string, formatted according to the default style.

<a id="Discussion"></a>

## Discussion

Use the [formatted()](formatted%28%29.md) method to apply the default format style to a measurement, such as in the following example:

```swift
let string = Measurement<UnitTemperature>(value: 38, unit: .celsius).formatted()
// For locale: en_US: 100.4°F
```

The default measurement format style uses an [abbreviated](formatstyle/unitwidth/abbreviated.md) unit width, the general usage type, and the default number format style. To customize the formatted measurement string, use the [formatted(\_:)](formatted%28__%29.md) method and include a [Measurement.FormatStyle](formatstyle.md).

## See Also

### Formatting a Measurement

- [formatted(\_:)](formatted%28__%29.md): Conforms when `UnitType` inherits `Dimension`. Generates a locale-aware string representation of a measurement using the provided measurement format style.
- [Measurement.FormatStyle](formatstyle.md): Conforms when `UnitType` inherits `Dimension`. A type that provides localized representations of measurements.
- [Measurement.AttributedStyle](attributedstyle.md): Conforms when `UnitType` inherits `Dimension`. A type that provides localized representations of measurements with an attributed string.
