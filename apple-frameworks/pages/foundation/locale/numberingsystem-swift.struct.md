> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/numberingsystem-swift.struct](https://developer.apple.com/documentation/foundation/locale/numberingsystem-swift.struct)

# Locale.NumberingSystem

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that represents the numbering system used in a locale.

## Declaration

```swift
struct NumberingSystem
```

## Topics

### Creating a numbering system instance

- [init(\_:)](numberingsystem-swift.struct/init%28__%29.md): Creates a numbering system instance from a BCP 47 identifier.
- [init(stringLiteral:)](numberingsystem-swift.struct/init%28stringliteral_%29.md): Creates a numbering system instance from a BCP 47 identifier as a string literal.

### Examining numbering system properties

- [identifier](numberingsystem-swift.struct/identifier.md): The numbering system’s BCP 47 identifier.

### Type Properties

- [availableNumberingSystems](numberingsystem-swift.struct/availablenumberingsystems.md): A list of available numbering systems on the system.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting measurement and counting components

- [currency](currency-swift.property.md): The currency used by the locale.
- [Locale.Currency](currency-swift.struct.md): A type that represents the currency system used by a locale, like dollars or euros.
- [measurementSystem](measurementsystem-swift.property.md): The measurement system used by the locale, like metric or the US system.
- [Locale.MeasurementSystem](measurementsystem-swift.struct.md): A type that represents the measurement system used by a locale, like metric or the US system.
- [numberingSystem](numberingsystem-swift.property.md): The numbering system used by the locale.
- [availableNumberingSystems](availablenumberingsystems.md): An array containing all the valid numbering systems for the locale.
