> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/partialrangethrough](https://developer.apple.com/documentation/swift/partialrangethrough)

# PartialRangeThrough

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A partial interval up to, and including, an upper bound.

## Declaration

```swift
@frozen struct PartialRangeThrough<Bound> where Bound : Comparable
```

<a id="overview"></a>

## Overview

You create `PartialRangeThrough` instances by using the prefix closed range operator (prefix `...`).

```swift
let throughFive = ...5.0
```

You can use a `PartialRangeThrough` instance to quickly check if a value is contained in a particular range of values. For example:

```swift
throughFive.contains(4.0)     // true
throughFive.contains(5.0)     // true
throughFive.contains(6.0)     // false
```

You can use a `PartialRangeThrough` instance of a collection’s indices to represent the range from the start of the collection up to, and including, the partial range’s upper bound.

```swift
let numbers = [10, 20, 30, 40, 50, 60, 70]
print(numbers[...3])
// Prints "[10, 20, 30, 40]"
```

## Topics

### Initializers

- [init(\_:)](partialrangethrough/init%28__%29.md)

### Instance Properties

- [upperBound](partialrangethrough/upperbound.md)

### Default Implementations

- [Decodable Implementations](partialrangethrough/decodable-implementations.md)
- [Encodable Implementations](partialrangethrough/encodable-implementations.md)
- [RangeExpression Implementations](partialrangethrough/rangeexpression-implementations.md)

## Relationships

### Conforms To

- [BNNSGraph.Builder.SliceIndex](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/sliceindex)
- [BitwiseCopyable](bitwisecopyable.md)
- [ConvertibleFromBytes](convertiblefrombytes.md)
- [ConvertibleToBytes](convertibletobytes.md)
- [Copyable](copyable.md)
- [CustomTestStringConvertible](https://developer.apple.com/documentation/testing/customteststringconvertible)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [Escapable](escapable.md)
- [MLShapedArrayRangeExpression](https://developer.apple.com/documentation/coreml/mlshapedarrayrangeexpression)
- [MLTensorRangeExpression](https://developer.apple.com/documentation/coreml/mltensorrangeexpression)
- [NDArray.RangeExpression](https://developer.apple.com/documentation/coreai/ndarray/rangeexpression)
- [RangeExpression](rangeexpression.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Range Expressions

- [PartialRangeUpTo](partialrangeupto.md): A partial half-open interval up to, but not including, an upper bound.
- [PartialRangeFrom](partialrangefrom.md): A partial interval extending upward from a lower bound.
- [RangeExpression](rangeexpression.md): Conforms when `Bound` conforms to `Comparable`, `Copyable`, and `Escapable`. A type that can be used to slice a collection.
- [UnboundedRange\_](unboundedrange_.md): A range expression that represents the entire range of a collection.
