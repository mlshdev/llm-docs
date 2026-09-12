> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/norm](https://developer.apple.com/documentation/accelerate/bnns/norm)

# BNNS.Norm

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Constants that describe norm types.

> Use the BNNSGraph API instead.

## Declaration

```swift
@frozen struct Norm
```

## Topics

### Norm Types

- [taxicab](norm/taxicab.md): Deprecated. A constant that represents the taxicab norm.
- [l1](norm/l1.md): Deprecated. A constant that represents the L1 norm.
- [euclidean](norm/euclidean.md): Deprecated. A constant that represents the Euclidean norm.
- [l2](norm/l2.md): Deprecated. A constant that represents the L2 norm.
- [maximum](norm/maximum.md): Deprecated. A constant that represents the maximum norm.
- [lInfinity](norm/linfinity.md): Deprecated. A constant that represents the maximum norm.

### Raw Values

- [init(rawValue:)](norm/init%28rawvalue_%29.md): Deprecated. Creates a new instance with the specified raw value.
- [rawValue](norm/rawvalue.md): Deprecated. The corresponding value of the raw type.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating an Embedding Layer

- [init(input:output:dictionary:paddingIndex:maximumNorm:normType:scalesGradientByFrequency:filterParameters:)](embeddinglayer/init%28input_output_dictionary_paddingindex_maximumnorm_normtype_scalesgradientbyfrequency_filterparameters_%29.md): Deprecated. Returns a new embedding layer.
