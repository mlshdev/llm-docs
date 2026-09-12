> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/variant-swift.struct](https://developer.apple.com/documentation/foundation/locale/variant-swift.struct)

# Locale.Variant

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that represents a locale’s language variant.

## Declaration

```swift
struct Variant
```

<a id="overview"></a>

## Overview

This type corresponds to the Unicode variant subtag, such as `posix`.

## Topics

### Creating a variant

- [init(\_:)](variant-swift.struct/init%28__%29.md): Creates a variant from a BCP 47 identifier.
- [init(stringLiteral:)](variant-swift.struct/init%28stringliteral_%29.md): Creates a variant from a BCP 47 identifier as a string literal.

### Examining variant properties

- [identifier](variant-swift.struct/identifier.md): The variant’s BCP 47 identifier.

### Using defined variants

- [posix](variant-swift.struct/posix.md)

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
- [Locale.Subdivision](subdivision-swift.struct.md): A type that represents a subdivision of a region, such as a state in the US or a province in Canada.
- [variant](variant-swift.property.md): An optional variant used by the locale.
