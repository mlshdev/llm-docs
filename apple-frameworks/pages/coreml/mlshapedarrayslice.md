> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayslice](https://developer.apple.com/documentation/coreml/mlshapedarrayslice)

# MLShapedArraySlice

**Framework:** Core ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A multidimensional subset of elements from a shaped array type.

## Declaration

```swift
struct MLShapedArraySlice<Scalar> where Scalar : MLShapedArrayScalar
```

## Topics

### Creating a shaped array slice

- [init(scalar:)](mlshapedarrayslice/init%28scalar_%29.md): Creates a shaped array slice with exactly one value and zero dimensions.
- [init(scalars:shape:)](mlshapedarrayslice/init%28scalars_shape_%29.md): Initialize with a sequence and the shape.
- [init(mutating:shape:)](mlshapedarrayslice/init%28mutating_shape_%29.md): Creates a new `MLShapedArraySlice` using a pixel buffer as the backing storage.

### Creating a shaped array slice from another type

- [init(\_:)](mlshapedarrayslice/init%28__%29.md): Creates a new MLShapedArraySlice using a `MLMultiArray` as a backing storage.
- [init(concatenating:alongAxis:)](mlshapedarrayslice/init%28concatenating_alongaxis_%29.md): Merges a sequence of shaped arrays into one shaped array along an axis.

### Creating a shaped array slice with pointers to memory

- [init(unsafeUninitializedShape:initializingWith:)](mlshapedarrayslice/init%28unsafeuninitializedshape_initializingwith_%29.md): Creates a shaped array slice from a shape and a closure that initializes its memory.

### Creating a shaped array slice with data

- [init(data:shape:)](mlshapedarrayslice/init%28data_shape_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Creates a shaped array with a defined data and shape.
- [init(data:shape:strides:)](mlshapedarrayslice/init%28data_shape_strides_%29.md): Creates a shaped array with defined data, shape, and strides.

### Shaping the array slice

- [changingLayout(to:)](mlshapedarrayslice/changinglayout%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a copy with the specified buffer layout.
- [expandingShape(at:)](mlshapedarrayslice/expandingshape%28at_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new shaped array with expanded dimensions
- [reshaped(to:)](mlshapedarrayslice/reshaped%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new reshaped shaped array.
- [squeezingShape()](mlshapedarrayslice/squeezingshape%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new squeezed shaped array.
- [transposed()](mlshapedarrayslice/transposed%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new transposed shaped array
- [transposed(permutation:)](mlshapedarrayslice/transposed%28permutation_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new transposed shaped array using a custom permutation.

### Modifying a shaped array type

- [withUnsafeMutableShapedBufferPointer(using:\_:)](mlshapedarrayslice/withunsafemutableshapedbufferpointer%28using___%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Calls the given closure with a pointer to the array’s mutable storage that has a specified buffer layout.

### Encoding and decoding an array slice

- [init(from:)](mlshapedarrayslice/init%28from_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `Decodable`. Creates an array slice from the passed decoder.
- [encode(to:)](mlshapedarrayslice/encode%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `Encodable`. Encodes the array slice.

### Default Implementations

- [Decodable Implementations](mlshapedarrayslice/decodable-implementations.md)
- [Encodable Implementations](mlshapedarrayslice/encodable-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [MLShapedArrayProtocol](mlshapedarrayprotocol.md)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Supporting types

- [Scalar](mlshapedarrayprotocol/scalar-swift.associatedtype.md): Represents the underlying scalar type of the shaped array type.
- [MLShapedArrayScalar](mlshapedarrayscalar.md): A type that associates a scalar with a shaped array.
- [MLShapedArrayRangeExpression](mlshapedarrayrangeexpression.md): An interface for a range expression, which you typically use with subscripts of shaped array types.
