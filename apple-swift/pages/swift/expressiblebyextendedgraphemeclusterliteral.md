> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/expressiblebyextendedgraphemeclusterliteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)

# ExpressibleByExtendedGraphemeClusterLiteral

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can be initialized with a string literal containing a single extended grapheme cluster.

## Declaration

```swift
protocol ExpressibleByExtendedGraphemeClusterLiteral : ExpressibleByUnicodeScalarLiteral
```

<a id="overview"></a>

## Overview

An *extended grapheme cluster* is a group of one or more Unicode scalar values that approximates a single user-perceived character.  Many individual characters, such as “é”, “김”, and “🇮🇳”, can be made up of multiple Unicode scalar values. These code points are combined by Unicode’s boundary algorithms into extended grapheme clusters.

The `String`, `StaticString`, and `Character` types conform to the `ExpressibleByExtendedGraphemeClusterLiteral` protocol. You can initialize a variable or constant of any of these types using a string literal that holds a single character.

```swift
let snowflake: Character = "❄︎"
print(snowflake)
// Prints "❄︎"
```

<a id="Conforming-to-ExpressibleByExtendedGraphemeClusterLiteral"></a>

## Conforming to ExpressibleByExtendedGraphemeClusterLiteral

To add `ExpressibleByExtendedGraphemeClusterLiteral` conformance to your custom type, implement the required initializer.

## Topics

### Associated Types

- [ExtendedGraphemeClusterLiteralType](expressiblebyextendedgraphemeclusterliteral/extendedgraphemeclusterliteraltype.md): A type that represents an extended grapheme cluster literal.

### Initializers

- [init(extendedGraphemeClusterLiteral:)](expressiblebyextendedgraphemeclusterliteral/init%28extendedgraphemeclusterliteral_%29.md): Creates an instance initialized to the given value.

## Relationships

### Inherits From

- [ExpressibleByUnicodeScalarLiteral](expressiblebyunicodescalarliteral.md)

### Inherited By

- [ExpressibleByStringInterpolation](expressiblebystringinterpolation.md)
- [ExpressibleByStringLiteral](expressiblebystringliteral.md)
- [StringProtocol](stringprotocol.md)

### Conforming Types

- [Character](character.md)
- [StaticString](staticstring.md)
- [String](string.md)
- [String.LocalizationValue](string/localizationvalue.md)
- [Substring](substring.md)

## See Also

### String Literals

- [ExpressibleByStringLiteral](expressiblebystringliteral.md): A type that can be initialized with a string literal.
- [ExpressibleByUnicodeScalarLiteral](expressiblebyunicodescalarliteral.md): A type that can be initialized with a string literal containing a single Unicode scalar value.
- [ExpressibleByStringInterpolation](expressiblebystringinterpolation.md): A type that can be initialized by string interpolation with a string literal that includes expressions.
- [StringInterpolationProtocol](stringinterpolationprotocol.md): Represents the contents of a string literal with interpolations while it’s being built up.
- [DefaultStringInterpolation](defaultstringinterpolation.md): Represents a string literal with interpolations while it’s being built up.
