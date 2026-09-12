> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayscalar](https://developer.apple.com/documentation/coreml/mlshapedarrayscalar)

# MLShapedArrayScalar

**Framework:** Core ML  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type that associates a scalar with a shaped array.

## Declaration

```swift
protocol MLShapedArrayScalar
```

## Topics

### Determining the underlying type

- [multiArrayDataType](mlshapedarrayscalar/multiarraydatatype.md): The shaped array’s scalar type as a multiarray data type.

## See Also

### Supporting types

- [Scalar](mlshapedarrayprotocol/scalar-swift.associatedtype.md): Represents the underlying scalar type of the shaped array type.
- [MLShapedArraySlice](mlshapedarrayslice.md): A multidimensional subset of elements from a shaped array type.
- [MLShapedArrayRangeExpression](mlshapedarrayrangeexpression.md): An interface for a range expression, which you typically use with subscripts of shaped array types.
