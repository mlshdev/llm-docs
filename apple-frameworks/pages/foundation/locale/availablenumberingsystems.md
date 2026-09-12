> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/availablenumberingsystems](https://developer.apple.com/documentation/foundation/locale/availablenumberingsystems)

# availableNumberingSystems

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An array containing all the valid numbering systems for the locale.

## Declaration

```swift
var availableNumberingSystems: [Locale.NumberingSystem] { get }
```

<a id="Discussion"></a>

## Discussion

The following snippet creates a locale for Arabic as used in United Arab Emirites. For this locale, there are two numbering systems available: `latn` (Latin digits) and `arab` (Arabic-Indic digits).

```swift
let uae = Locale(identifier: "ar-AE") // Arabic / U.A.E.
let numberingSystems = uae.availableNumberingSystems
print("\(numberingSystems.map{$0.identifier})") // ["latn","arab"]
```

## See Also

### Getting measurement and counting components

- [currency](currency-swift.property.md): The currency used by the locale.
- [Locale.Currency](currency-swift.struct.md): A type that represents the currency system used by a locale, like dollars or euros.
- [measurementSystem](measurementsystem-swift.property.md): The measurement system used by the locale, like metric or the US system.
- [Locale.MeasurementSystem](measurementsystem-swift.struct.md): A type that represents the measurement system used by a locale, like metric or the US system.
- [numberingSystem](numberingsystem-swift.property.md): The numbering system used by the locale.
- [Locale.NumberingSystem](numberingsystem-swift.struct.md): A type that represents the numbering system used in a locale.
