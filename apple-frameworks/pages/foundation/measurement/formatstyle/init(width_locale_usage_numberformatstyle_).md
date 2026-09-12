> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatstyle/init(width:locale:usage:numberformatstyle:)](https://developer.apple.com/documentation/foundation/measurement/formatstyle/init(width:locale:usage:numberformatstyle:))

# init(width:locale:usage:numberFormatStyle:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an instance using the provided width, locale, usage type, and number format.

## Declaration

```swift
init(width: Measurement<UnitType>.FormatStyle.UnitWidth, locale: Locale = .autoupdatingCurrent, usage: MeasurementFormatUnitUsage<UnitType> = .general, numberFormatStyle: FloatingPointFormatStyle<Double>? = nil)
```

## Parameters

- `width`: The width of the measurement unit.
- `locale`: The locale to use when formatting the measurement.
- `usage`: The intended purpose of the formatted measurement.
- `numberFormatStyle`: The presentation style of the numeric value.

## See Also

### Creating a measurement format style

- [init(width:locale:usage:hidesScaleName:numberFormatStyle:)](init%28width_locale_usage_hidesscalename_numberformatstyle_%29.md): Conforms when `UnitType` is `UnitTemperature`. Creates an instance using the provided width, locale, usage type, number format, and the option to hide the unit name.
