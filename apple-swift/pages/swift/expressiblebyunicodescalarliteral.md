> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/expressiblebyunicodescalarliteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)

# ExpressibleByUnicodeScalarLiteral

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can be initialized with a string literal containing a single Unicode scalar value.

## Declaration

```swift
protocol ExpressibleByUnicodeScalarLiteral
```

<a id="overview"></a>

## Overview

The `String`, `StaticString`, `Character`, and `Unicode.Scalar` types all conform to the `ExpressibleByUnicodeScalarLiteral` protocol. You can initialize a variable of any of these types using a string literal that holds a single Unicode scalar.

```swift
let ñ: Unicode.Scalar = "ñ"
print(ñ)
// Prints "ñ"
```

<a id="Conforming-to-ExpressibleByUnicodeScalarLiteral"></a>

## Conforming to ExpressibleByUnicodeScalarLiteral

To add `ExpressibleByUnicodeScalarLiteral` conformance to your custom type, implement the required initializer.

## Topics

### Associated Types

- [UnicodeScalarLiteralType](expressiblebyunicodescalarliteral/unicodescalarliteraltype.md): A type that represents a Unicode scalar literal.

### Initializers

- [init(unicodeScalarLiteral:)](expressiblebyunicodescalarliteral/init%28unicodescalarliteral_%29.md): Creates an instance initialized to the given value.

## Relationships

### Inherited By

- [ExpressibleByExtendedGraphemeClusterLiteral](expressiblebyextendedgraphemeclusterliteral.md)
- [ExpressibleByStringInterpolation](expressiblebystringinterpolation.md)
- [ExpressibleByStringLiteral](expressiblebystringliteral.md)
- [StringProtocol](stringprotocol.md)

### Conforming Types

- [Character](character.md)
- [StaticString](staticstring.md)
- [String](string.md)
- [String.LocalizationValue](string/localizationvalue.md)
- [Substring](substring.md)
- [Unicode.Scalar](unicode/scalar.md)

## See Also

### String Literals

- [ExpressibleByStringLiteral](expressiblebystringliteral.md): A type that can be initialized with a string literal.
- [ExpressibleByExtendedGraphemeClusterLiteral](expressiblebyextendedgraphemeclusterliteral.md): A type that can be initialized with a string literal containing a single extended grapheme cluster.
- [ExpressibleByStringInterpolation](expressiblebystringinterpolation.md): A type that can be initialized by string interpolation with a string literal that includes expressions.
- [StringInterpolationProtocol](stringinterpolationprotocol.md): Represents the contents of a string literal with interpolations while it’s being built up.
- [DefaultStringInterpolation](defaultstringinterpolation.md): Represents a string literal with interpolations while it’s being built up.
