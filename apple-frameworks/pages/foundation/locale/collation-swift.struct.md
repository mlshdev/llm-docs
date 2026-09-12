> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/collation-swift.struct](https://developer.apple.com/documentation/foundation/locale/collation-swift.struct)

# Locale.Collation

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that represents the string sort order used by the locale.

## Declaration

```swift
struct Collation
```

## Topics

### Creating a collation

- [init(\_:)](collation-swift.struct/init%28__%29.md): Creates a collation from a BCP 47 identifier.
- [init(stringLiteral:)](collation-swift.struct/init%28stringliteral_%29.md): Creates a collation from a BCP 47 identifier as a string literal.

### Examining collation properties

- [identifier](collation-swift.struct/identifier.md): The collation’s BCP 47 identifier.

### Using special-purpose collations

- [standard](collation-swift.struct/standard.md): A collation that provides the default ordering for each language.
- [searchRules](collation-swift.struct/searchrules.md): A collation used for string search.

### Type Properties

- [availableCollations](collation-swift.struct/availablecollations.md): A list of available collations on the system.

### Type Methods

- [availableCollations(for:)](collation-swift.struct/availablecollations%28for_%29.md): A list of available collations for the specified `language` in the order that it is most likely to make a difference.

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

### Getting ordering components

- [collation](collation-swift.property.md): The string sort order of the locale.
