> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol)

# MLShapedArrayProtocol

**Framework:** Core ML  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An interface that defines a shaped array type.

## Declaration

```swift
protocol MLShapedArrayProtocol<Scalar> : ExpressibleByArrayLiteral, MutableCollection, RandomAccessCollection where Self.Index == Int
```

## Topics

### Creating a shaped array type

- [init(scalars:shape:)](mlshapedarrayprotocol/init%28scalars_shape_%29.md): Creates a shaped array type from an array of values.
- [init(repeating:shape:)](mlshapedarrayprotocol/init%28repeating_shape_%29.md): Creates a shaped array type that initializes every element to the same value.
- [init(identityMatrixOfSize:)](mlshapedarrayprotocol/init%28identitymatrixofsize_%29.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `Scalar.RawSignificand` conforms to `FixedWidthInteger`. Initialize as an identity matrix.
- [init(randomScalarsIn:shape:)](mlshapedarrayprotocol/init%28randomscalarsin_shape_%29.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `Scalar.RawSignificand` conforms to `FixedWidthInteger`. Initialize the shaped array with random scalar values.
- [init(bytesNoCopy:shape:deallocator:)](mlshapedarrayprotocol/init%28bytesnocopy_shape_deallocator_%29.md): Creates a shaped array type from a data pointer.
- [init(bytesNoCopy:shape:strides:deallocator:)](mlshapedarrayprotocol/init%28bytesnocopy_shape_strides_deallocator_%29.md): Creates a shaped array type from a data pointer with memory strides.
- [init(unsafeUninitializedShape:initializingWith:)](mlshapedarrayprotocol/init%28unsafeuninitializedshape_initializingwith_%29.md): Creates a shaped array type from a shape and a closure that initializes its memory.

### Creating a shaped array type from another type

- [init(\_:)](mlshapedarrayprotocol/init%28__%29.md): Creates a shaped array type from a multiarray.
- [init(converting:)](mlshapedarrayprotocol/init%28converting_%29.md): Initialize by converting a MLMultiArray of different scalar type.

### Inspecting a shaped array type

- [shape](mlshapedarrayprotocol/shape.md): An integer array in which each element represents the size of the corresponding dimension.
- [strides](mlshapedarrayprotocol/strides.md): An integer array in which each element is the number of memory locations that spans the length of the corresponding dimension.
- [count](mlshapedarrayprotocol/count.md): The number of elements in the shaped array’s first dimension.
- [isScalar](mlshapedarrayprotocol/isscalar.md): A Boolean value that indicates whether the shaped array lacks a shape.
- [scalarCount](mlshapedarrayprotocol/scalarcount.md): The total number of elements in the shaped array type.
- [scalar](mlshapedarrayprotocol/scalar-swift.property.md): A computed property that returns the first element when the shape isn’t empty, or sets the shaped array’s underlying scalar type.
- [scalars](mlshapedarrayprotocol/scalars.md): A computed property that generates a linear array that contains every element, or assigns the elements of an array to the shaped array’s elements.
- [withUnsafeShapedBufferPointer(\_:)](mlshapedarrayprotocol/withunsafeshapedbufferpointer%28__%29.md): Provides read-only access of the shaped array’s underlying memory to a closure.

### Accessing elements

- [subscript(scalarAt:)](mlshapedarrayprotocol/subscript%28scalarat_%29.md): Accesses an element and a multidimensional location.
- [subscript(\_:)](mlshapedarrayprotocol/subscript%28__%29.md): A slice of the shaped array for the selected leading axes.

### Modifying a shaped array type

- [fill(with:)](mlshapedarrayprotocol/fill%28with_%29.md): Fills the array with a value.
- [withUnsafeMutableShapedBufferPointer(\_:)](mlshapedarrayprotocol/withunsafemutableshapedbufferpointer%28__%29.md): Provides read-write access of the shaped array’s underlying memory to a closure.

### Supporting types

- [Scalar](mlshapedarrayprotocol/scalar-swift.associatedtype.md): Represents the underlying scalar type of the shaped array type.
- [MLShapedArraySlice](mlshapedarrayslice.md): A multidimensional subset of elements from a shaped array type.
- [MLShapedArrayScalar](mlshapedarrayscalar.md): A type that associates a scalar with a shaped array.
- [MLShapedArrayRangeExpression](mlshapedarrayrangeexpression.md): An interface for a range expression, which you typically use with subscripts of shaped array types.

## Relationships

### Inherits From

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

### Conforming Types

- [MLShapedArray](mlshapedarray.md)
- [MLShapedArraySlice](mlshapedarrayslice.md)

## See Also

### Supporting types

- [MLFeatureType](mlfeaturetype.md): The possible types for feature values, input features, and output features.
- [MLShapedArray](mlshapedarray.md): A machine learning collection type that stores scalar values in a multidimensional array.
- [MLMultiArray](mlmultiarray.md): A machine learning collection type that stores numeric values in an array with multiple dimensions.
- [MLSequence](mlsequence.md): A machine learning collection type that stores a series of strings or integers.
