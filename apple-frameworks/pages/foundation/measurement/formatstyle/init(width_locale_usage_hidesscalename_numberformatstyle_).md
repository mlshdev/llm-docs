> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurement/formatstyle/init(width:locale:usage:hidesscalename:numberformatstyle:)](https://developer.apple.com/documentation/foundation/measurement/formatstyle/init(width:locale:usage:hidesscalename:numberformatstyle:))

# init(width:locale:usage:hidesScaleName:numberFormatStyle:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an instance using the provided width, locale, usage type, number format, and the option to hide the unit name.

## Declaration

```swift
init(width: Measurement<UnitType>.FormatStyle.UnitWidth = .abbreviated, locale: Locale = .autoupdatingCurrent, usage: MeasurementFormatUnitUsage<UnitType> = .general, hidesScaleName: Bool = false, numberFormatStyle: FloatingPointFormatStyle<Double>? = nil)
```

## Parameters

- `width`: The width of the measurement unit.
- `locale`: The locale to use when formatting the measurement.
- `usage`: The intended purpose of the formatted measurement.
- `hidesScaleName`: An option to hide the unit name of a measurement.
- `numberFormatStyle`: The presentation style of the numeric value.

## See Also

### Creating a measurement format style

- [init(width:locale:usage:numberFormatStyle:)](init%28width_locale_usage_numberformatstyle_%29.md): Creates an instance using the provided width, locale, usage type, and number format.
