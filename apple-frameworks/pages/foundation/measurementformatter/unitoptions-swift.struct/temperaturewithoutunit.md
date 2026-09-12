> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/measurementformatter/unitoptions-swift.struct/temperaturewithoutunit](https://developer.apple.com/documentation/foundation/measurementformatter/unitoptions-swift.struct/temperaturewithoutunit)

# temperatureWithoutUnit (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```swift
static var temperatureWithoutUnit: MeasurementFormatter.UnitOptions { get }
```

<a id="Discussion"></a>

## Discussion

Specifies that representations of a measurement with the `NSTemperatureUnit` unit omit the letter denoting the temperature scale. For example, a temperature measurement with value equal to 72 using the [degreeFahrenheit()](../../../healthkit/hkunit/degreefahrenheit%28%29.md) would be represented as `72°` rather than `72°F`.

## See Also

### Working with options

- [providedUnit](providedunit.md)
- [naturalScale](naturalscale.md)

# NSMeasurementFormatterUnitOptionsTemperatureWithoutUnit (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

## Declaration

```objectivec
NSMeasurementFormatterUnitOptionsTemperatureWithoutUnit
```

<a id="Discussion"></a>

## Discussion

Specifies that representations of a measurement with the `NSTemperatureUnit` unit omit the letter denoting the temperature scale. For example, a temperature measurement with value equal to 72 using the [degreeFahrenheitUnit](../../../healthkit/hkunit/degreefahrenheit%28%29.md) would be represented as `72°` rather than `72°F`.

## See Also

### Working with options

- [NSMeasurementFormatterUnitOptionsProvidedUnit](providedunit.md)
- [NSMeasurementFormatterUnitOptionsNaturalScale](naturalscale.md)
