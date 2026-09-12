> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/measurementsystem-swift.property](https://developer.apple.com/documentation/foundation/locale/measurementsystem-swift.property)

# measurementSystem

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The measurement system used by the locale, like metric or the US system.

## Declaration

```swift
var measurementSystem: Locale.MeasurementSystem { get }
```

<a id="Discussion"></a>

## Discussion

When called on the special [Locale](../locale.md) instances [current](current.md) or [autoupdatingCurrent](autoupdatingcurrent.md), if the user overrode the default measurement system, this property provides the user’s preference.

This property corresponds to the `ms` key of the Unicode BCP 47 extension.

For locale instances created with the `ms` specifier (such as `en-US@ms=metric`), or with a custom [Locale.Components](components.md), this property represents the custom measurement system. Otherwise, it represents the locale’s default measurement system.

## See Also

### Getting measurement and counting components

- [currency](currency-swift.property.md): The currency used by the locale.
- [Locale.Currency](currency-swift.struct.md): A type that represents the currency system used by a locale, like dollars or euros.
- [Locale.MeasurementSystem](measurementsystem-swift.struct.md): A type that represents the measurement system used by a locale, like metric or the US system.
- [numberingSystem](numberingsystem-swift.property.md): The numbering system used by the locale.
- [availableNumberingSystems](availablenumberingsystems.md): An array containing all the valid numbering systems for the locale.
- [Locale.NumberingSystem](numberingsystem-swift.struct.md): A type that represents the numbering system used in a locale.
