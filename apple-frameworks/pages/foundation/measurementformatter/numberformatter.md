> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurementformatter/numberformatter](https://developer.apple.com/documentation/foundation/measurementformatter/numberformatter)

# numberFormatter (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The number formatter used to format the quantity of a measurement.

## Declaration

```swift
@NSCopying var numberFormatter: NumberFormatter! { get set }
```

<a id="Discussion"></a>

## Discussion

If unspecified, an [NumberFormatter](../numberformatter.md) object with [NumberFormatter.Style.decimal](../numberformatter/style/decimal.md) style is used.

## See Also

### Specifying the Format

- [unitOptions](unitoptions-swift.property.md): The options for how the unit is formatted.
- [MeasurementFormatter.UnitOptions](unitoptions-swift.struct.md): Measurement formatter options.
- [unitStyle](unitstyle.md): The unit style.
- [locale](locale.md): The locale of the formatter.

# numberFormatter (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The number formatter used to format the quantity of a measurement.

## Declaration

```objectivec
@property (copy, null_resettable) NSNumberFormatter * numberFormatter;
```

<a id="Discussion"></a>

## Discussion

If unspecified, an [NSNumberFormatter](../numberformatter.md) object with [NSNumberFormatterDecimalStyle](../numberformatter/style/decimal.md) style is used.

## See Also

### Specifying the Format

- [unitOptions](unitoptions-swift.property.md): The options for how the unit is formatted.
- [NSMeasurementFormatterUnitOptions](unitoptions-swift.struct.md): Measurement formatter options.
- [unitStyle](unitstyle.md): The unit style.
- [locale](locale.md): The locale of the formatter.
