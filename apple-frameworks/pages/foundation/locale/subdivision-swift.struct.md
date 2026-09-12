> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/subdivision-swift.struct](https://developer.apple.com/documentation/foundation/locale/subdivision-swift.struct)

# Locale.Subdivision

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that represents a subdivision of a region, such as a state in the US or a province in Canada.

## Declaration

```swift
struct Subdivision
```

## Topics

### Creating a subdivision

- [init(\_:)](subdivision-swift.struct/init%28__%29.md): Creates a sudivision from a Unicode identifier.
- [subdivision(for:)](subdivision-swift.struct/subdivision%28for_%29.md): Returns the subdivision representing the given region as a whole.
- [init(stringLiteral:)](subdivision-swift.struct/init%28stringliteral_%29.md): Creates a sudivision from a Unicode identifier as a string literal.

### Examining subdivision properties

- [identifier](subdivision-swift.struct/identifier.md): The subdivision’s Unicode identifier.

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

### Getting region components

- [region](region-swift.property.md): The region used by the locale.
- [Locale.Region](region-swift.struct.md): A type that represents a geographic region, for use in specifying a locale or language.
- [subdivision](subdivision-swift.property.md): The optional subdivision of the region used by this locale.
- [variant](variant-swift.property.md): An optional variant used by the locale.
- [Locale.Variant](variant-swift.struct.md): A type that represents a locale’s language variant.
