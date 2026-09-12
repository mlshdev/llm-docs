> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdtoken](https://developer.apple.com/documentation/usdkit/usdtoken)

# USDToken

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

An interned, efficiently compared string that names prims, properties, and other scene-description identifiers.

## Declaration

```swift
struct USDToken
```

## Topics

### Creating a token

- [init()](usdtoken/init%28%29.md)
- [init(\_:)](usdtoken/init%28__%29.md)
- [init(namespaceComponents:)](usdtoken/init%28namespacecomponents_%29.md): Creates a namespaced token by joining `components` with `:`.

### Inspecting the token

- [string](usdtoken/string.md)
- [isEmpty](usdtoken/isempty.md)
- [namespaceComponents](usdtoken/namespacecomponents.md): The token split into its namespace components, separated by `:`.

### Stripping namespaces

- [strippingLeadingNamespace()](usdtoken/strippingleadingnamespace%28%29.md): Returns this token with its leading namespace component removed.
- [strippingNamespacePrefix(\_:)](usdtoken/strippingnamespaceprefix%28__%29.md): Returns this token with the given namespace prefix removed.

### Validating identifiers

- [isValidIdentifier(\_:namespaced:)](usdtoken/isvalididentifier%28__namespaced_%29.md): Returns a Boolean value that indicates whether the given string is a valid USD identifier.

## Relationships

### Conforms To

- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
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
- [USDPrim.Attribute.Value](usdprim/attribute/value.md)
- [USDStage.Object.MetadataValue](usdstage/object/metadatavalue.md)
- [USDValueProtocol](usdvalueprotocol.md)

## See Also

### Values and tokens

- [USDValue](usdvalue.md): A type-erased container for a value stored in a Universal Scene Description file.
- [USDValueProtocol](usdvalueprotocol.md): A type that can be wrapped in a [USDValue](usdvalue.md).
