> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/numberingsystem-swift.property](https://developer.apple.com/documentation/foundation/locale/numberingsystem-swift.property)

# numberingSystem

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The numbering system used by the locale.

## Declaration

```swift
var numberingSystem: Locale.NumberingSystem { get }
```

<a id="Discussion"></a>

## Discussion

This property corresponds to the `nu` key of the Unicode BCP 47 extension.

For locale instances created with the `nu` specifier (such as `en-US@nu=jpanfin`), or with a custom [Locale.Components](components.md), this property represents the custom numbering system. Otherwise, it represents the locale’s default numbering system.

## See Also

### Getting measurement and counting components

- [currency](currency-swift.property.md): The currency used by the locale.
- [Locale.Currency](currency-swift.struct.md): A type that represents the currency system used by a locale, like dollars or euros.
- [measurementSystem](measurementsystem-swift.property.md): The measurement system used by the locale, like metric or the US system.
- [Locale.MeasurementSystem](measurementsystem-swift.struct.md): A type that represents the measurement system used by a locale, like metric or the US system.
- [availableNumberingSystems](availablenumberingsystems.md): An array containing all the valid numbering systems for the locale.
- [Locale.NumberingSystem](numberingsystem-swift.struct.md): A type that represents the numbering system used in a locale.
