> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/expressiblebystringliteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)

# ExpressibleByStringLiteral

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that can be initialized with a string literal.

## Declaration

```swift
protocol ExpressibleByStringLiteral : ExpressibleByExtendedGraphemeClusterLiteral
```

<a id="overview"></a>

## Overview

The `String` and `StaticString` types conform to the `ExpressibleByStringLiteral` protocol. You can initialize a variable or constant of either of these types using a string literal of any length.

```swift
let picnicGuest = "Deserving porcupine"
```

<a id="Conforming-to-ExpressibleByStringLiteral"></a>

## Conforming to ExpressibleByStringLiteral

To add `ExpressibleByStringLiteral` conformance to your custom type, implement the required initializer.

## Topics

### Associated Types

- [StringLiteralType](expressiblebystringliteral/stringliteraltype.md): A type that represents a string literal.

### Initializers

- [init(stringLiteral:)](expressiblebystringliteral/init%28stringliteral_%29.md): Creates an instance initialized to the given string value.

## Relationships

### Inherits From

- [ExpressibleByExtendedGraphemeClusterLiteral](expressiblebyextendedgraphemeclusterliteral.md)
- [ExpressibleByUnicodeScalarLiteral](expressiblebyunicodescalarliteral.md)

### Inherited By

- [ExpressibleByStringInterpolation](expressiblebystringinterpolation.md)
- [StringProtocol](stringprotocol.md)

### Conforming Types

- [StaticString](staticstring.md)
- [String](string.md)
- [String.LocalizationValue](string/localizationvalue.md)
- [Substring](substring.md)

## See Also

### String Literals

- [ExpressibleByExtendedGraphemeClusterLiteral](expressiblebyextendedgraphemeclusterliteral.md): A type that can be initialized with a string literal containing a single extended grapheme cluster.
- [ExpressibleByUnicodeScalarLiteral](expressiblebyunicodescalarliteral.md): A type that can be initialized with a string literal containing a single Unicode scalar value.
- [ExpressibleByStringInterpolation](expressiblebystringinterpolation.md): A type that can be initialized by string interpolation with a string literal that includes expressions.
- [StringInterpolationProtocol](stringinterpolationprotocol.md): Represents the contents of a string literal with interpolations while it’s being built up.
- [DefaultStringInterpolation](defaultstringinterpolation.md): Represents a string literal with interpolations while it’s being built up.
