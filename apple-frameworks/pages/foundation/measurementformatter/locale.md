> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurementformatter/locale](https://developer.apple.com/documentation/foundation/measurementformatter/locale)

# locale (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The locale of the formatter.

## Declaration

```swift
var locale: Locale! { get set }
```

<a id="Discussion"></a>

## Discussion

If unspecified, an [NSLocale](../nslocale.md) object representing the current system locale is used.

## See Also

### Specifying the Format

- [unitOptions](unitoptions-swift.property.md): The options for how the unit is formatted.
- [MeasurementFormatter.UnitOptions](unitoptions-swift.struct.md): Measurement formatter options.
- [unitStyle](unitstyle.md): The unit style.
- [numberFormatter](numberformatter.md): The number formatter used to format the quantity of a measurement.

# locale (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The locale of the formatter.

## Declaration

```objectivec
@property (copy, null_resettable) NSLocale * locale;
```

<a id="Discussion"></a>

## Discussion

If unspecified, an [NSLocale](../nslocale.md) object representing the current system locale is used.

## See Also

### Specifying the Format

- [unitOptions](unitoptions-swift.property.md): The options for how the unit is formatted.
- [NSMeasurementFormatterUnitOptions](unitoptions-swift.struct.md): Measurement formatter options.
- [unitStyle](unitstyle.md): The unit style.
- [numberFormatter](numberformatter.md): The number formatter used to format the quantity of a measurement.
