> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/argumentvalue](https://developer.apple.com/documentation/evaluations/argumentvalue)

# ArgumentValue

**Framework:** Evaluations  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A primitive, generable value type for argument specifications.

## Declaration

```swift
enum ArgumentValue
```

<a id="overview"></a>

## Overview

```swift
let city: ArgumentValue = "San Francisco"
let count: ArgumentValue = 5
let score: ArgumentValue = 0.95
```

Unlike `StructuredValue`, this enum only contains primitive types (no recursive array or dictionary) that allows it to work with the `@Generable` macro.

## Topics

### Values

- [ArgumentValue.string(\_:)](argumentvalue/string%28__%29.md): A string value.
- [ArgumentValue.int(\_:)](argumentvalue/int%28__%29.md): An integer value.
- [ArgumentValue.double(\_:)](argumentvalue/double%28__%29.md): A double-precision floating-point value.
- [ArgumentValue.bool(\_:)](argumentvalue/bool%28__%29.md): A Boolean value.

### Converting values

- [structuredValue](argumentvalue/structuredvalue.md): The equivalent structured value representation of this argument value.
- [StructuredValue](structuredvalue.md): A type-safe representation of JSON values.

## Relationships

### Conforms To

- [ConvertibleFromGeneratedContent](../foundationmodels/convertiblefromgeneratedcontent.md)
- [ConvertibleToGeneratedContent](../foundationmodels/convertibletogeneratedcontent.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByBooleanLiteral](https://developer.apple.com/documentation/swift/expressiblebybooleanliteral)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Generable](../foundationmodels/generable.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [InstructionsRepresentable](../foundationmodels/instructionsrepresentable.md)
- [PromptRepresentable](../foundationmodels/promptrepresentable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [StructuredValue](structuredvalue.md): A type-safe representation of JSON values.
