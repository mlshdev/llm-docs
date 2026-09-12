> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurementformatter/unitstyle](https://developer.apple.com/documentation/foundation/measurementformatter/unitstyle)

# unitStyle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The unit style.

## Declaration

```swift
var unitStyle: Formatter.UnitStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values are [Formatter.UnitStyle.short](../formatter/unitstyle/short.md), [Formatter.UnitStyle.medium](../formatter/unitstyle/medium.md), and [Formatter.UnitStyle.long](../formatter/unitstyle/long.md). The default value is [Formatter.UnitStyle.medium](../formatter/unitstyle/medium.md).

## See Also

### Specifying the Format

- [unitOptions](unitoptions-swift.property.md): The options for how the unit is formatted.
- [MeasurementFormatter.UnitOptions](unitoptions-swift.struct.md): Measurement formatter options.
- [locale](locale.md): The locale of the formatter.
- [numberFormatter](numberformatter.md): The number formatter used to format the quantity of a measurement.

# unitStyle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The unit style.

## Declaration

```objectivec
@property NSFormattingUnitStyle unitStyle;
```

<a id="Discussion"></a>

## Discussion

The possible values are [NSFormattingUnitStyleShort](../formatter/unitstyle/short.md), [NSFormattingUnitStyleMedium](../formatter/unitstyle/medium.md), and [NSFormattingUnitStyleLong](../formatter/unitstyle/long.md). The default value is [NSFormattingUnitStyleMedium](../formatter/unitstyle/medium.md).

## See Also

### Specifying the Format

- [unitOptions](unitoptions-swift.property.md): The options for how the unit is formatted.
- [NSMeasurementFormatterUnitOptions](unitoptions-swift.struct.md): Measurement formatter options.
- [locale](locale.md): The locale of the formatter.
- [numberFormatter](numberformatter.md): The number formatter used to format the quantity of a measurement.
