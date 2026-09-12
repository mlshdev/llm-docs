> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsondecoder/nonconformingfloatdecodingstrategy-swift.enum](https://developer.apple.com/documentation/foundation/jsondecoder/nonconformingfloatdecodingstrategy-swift.enum)

# JSONDecoder.NonConformingFloatDecodingStrategy

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategies for encoding nonconforming floating-point numbers, also known as IEEE 754 exceptional values.

## Declaration

```swift
enum NonConformingFloatDecodingStrategy
```

<a id="overview"></a>

## Overview

The IEEE 754 floating-point specification defines exceptional values, which include [infinity](https://developer.apple.com/documentation/swift/floatingpoint/infinity) and [nan](https://developer.apple.com/documentation/swift/floatingpoint/nan).

## Topics

### Exceptional Values

- [JSONDecoder.NonConformingFloatDecodingStrategy.convertFromString(positiveInfinity:negativeInfinity:nan:)](nonconformingfloatdecodingstrategy-swift.enum/convertfromstring%28positiveinfinity_negativeinfinity_nan_%29.md): The strategy that decodes exceptional floating-point values from a specified string representation.
- [JSONDecoder.NonConformingFloatDecodingStrategy.throw](nonconformingfloatdecodingstrategy-swift.enum/throw.md): The strategy that throws an error upon decoding an exceptional floating-point value.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Decoding Exceptional Numbers

- [nonConformingFloatDecodingStrategy](nonconformingfloatdecodingstrategy-swift.property.md): The strategy used by a decoder when it encounters exceptional floating-point values.
