> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayrangeexpression](https://developer.apple.com/documentation/coreml/mlshapedarrayrangeexpression)

# MLShapedArrayRangeExpression

**Framework:** Core ML  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An interface for a range expression, which you typically use with subscripts of shaped array types.

## Declaration

```swift
protocol MLShapedArrayRangeExpression
```

## Topics

### Generating relative ranges

- [relative(toShapedArrayAxis:)](mlshapedarrayrangeexpression/relative%28toshapedarrayaxis_%29.md): Returns the range of indices the range expression describes within a collection.

## See Also

### Supporting types

- [Scalar](mlshapedarrayprotocol/scalar-swift.associatedtype.md): Represents the underlying scalar type of the shaped array type.
- [MLShapedArraySlice](mlshapedarrayslice.md): A multidimensional subset of elements from a shaped array type.
- [MLShapedArrayScalar](mlshapedarrayscalar.md): A type that associates a scalar with a shaped array.
