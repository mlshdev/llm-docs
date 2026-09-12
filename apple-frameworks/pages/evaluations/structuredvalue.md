> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/structuredvalue](https://developer.apple.com/documentation/evaluations/structuredvalue)

# StructuredValue

**Framework:** Evaluations  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A type-safe representation of JSON values.

## Declaration

```swift
enum StructuredValue
```

<a id="overview"></a>

## Overview

```swift
let name: StructuredValue = "Alice"
let score: StructuredValue = 4.5
let tags: StructuredValue = ["swift", "evaluation"]
```

This type is not `@Generable` due to its recursive array or dictionary structure. For generable argument specifications, use `ArgumentValue` instead.

## Topics

### Primitive values

- [StructuredValue.string(\_:)](structuredvalue/string%28__%29.md): A string value.
- [StructuredValue.int(\_:)](structuredvalue/int%28__%29.md): An integer value.
- [StructuredValue.double(\_:)](structuredvalue/double%28__%29.md): A double-precision floating-point value.
- [StructuredValue.bool(\_:)](structuredvalue/bool%28__%29.md): A Boolean value.
- [StructuredValue.null](structuredvalue/null.md): A null value.

### Collection values

- [StructuredValue.array(\_:)](structuredvalue/array%28__%29.md): An array of `StructuredValue` instances.
- [StructuredValue.dictionary(\_:)](structuredvalue/dictionary%28__%29.md): A dictionary with string keys and `StructuredValue` instances as values.

### Accessing the underlying value

- [value](structuredvalue/value.md): The underlying value.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [ExpressibleByBooleanLiteral](https://developer.apple.com/documentation/swift/expressiblebybooleanliteral)
- [ExpressibleByDictionaryLiteral](https://developer.apple.com/documentation/swift/expressiblebydictionaryliteral)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [ArgumentValue](argumentvalue.md): A primitive, generable value type for argument specifications.
