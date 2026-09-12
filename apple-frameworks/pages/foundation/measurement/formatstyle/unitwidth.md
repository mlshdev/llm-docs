> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatstyle/unitwidth](https://developer.apple.com/documentation/foundation/measurement/formatstyle/unitwidth)

# Measurement.FormatStyle.UnitWidth

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Specifies the width of the unit, determining the textual representation.

## Declaration

```swift
struct UnitWidth
```

## Topics

### Unit widths

- [wide](unitwidth/wide.md): A unit width that shows the full unit name.
- [abbreviated](unitwidth/abbreviated.md): An abbreviated unit width.
- [narrow](unitwidth/narrow.md): The shortest unit width.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Modifying a measurement format style

- [width](width.md): The width of the measurement unit.
- [numberFormatStyle](numberformatstyle.md): The formatting of the measurement value.
- [usage](usage.md): The intended purpose of the formatted measurement.
- [hidesScaleName](hidesscalename.md): Conforms when `UnitType` is `UnitTemperature`. The visibility of the unit name of a temperature.
- [locale](locale.md): The locale of the format style.
- [locale(\_:)](locale%28__%29.md): Modifies the measurement format style to use the specified locale.
