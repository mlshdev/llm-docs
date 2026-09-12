> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarray](https://developer.apple.com/documentation/coreml/mlshapedarray)

# MLShapedArray

**Framework:** Core ML  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A machine learning collection type that stores scalar values in a multidimensional array.

## Declaration

```swift
struct MLShapedArray<Scalar> where Scalar : MLShapedArrayScalar
```

<a id="overview"></a>

## Overview

A shaped array is a multidimensional array type that’s the Swift counterpart to [MLMultiArray](mlmultiarray.md). [MLShapedArray](mlshapedarray.md) is one of the underlying types of `MLFeatureValue` that stores scalar values. You can convert a shaped array to an [MLMultiArray](mlmultiarray.md) with its [init(\_:)](https://developer.apple.com/documentation/coreml/mlmultiarray/init%28_:%29-wk41) initializer, and convert back to a shaped array with its [init(\_:)](mlshapedarray/init%28__%29.md) initializer. All elements in an [MLShapedArray](mlshapedarray.md) are of the same type, and that type must conform to [MLShapedArrayScalar](mlshapedarrayscalar.md):

- [Int32](https://developer.apple.com/documentation/swift/int32)
- [Float](https://developer.apple.com/documentation/swift/float)
- [Double](https://developer.apple.com/documentation/swift/double)

Each dimension in a shaped array is typically significant or meaningful. For example, a model could have an input that accepts images as a three-dimensional array of pixels, C x H x W. The first dimension, *C*,\_ \_represents the number of color channels, and the second and third dimensions, *H* and *W*, represent the image’s height and width, respectively. The number of dimensions and size of each dimension define the shaped array’s *shape*.

> **Note**

>  Some models use a one-dimensional multiarray for an input or output. This type of shaped array is conceptually identical to a conventional [Array](https://developer.apple.com/documentation/swift/array).

A shaped array’s [shape](mlmultiarray/shape.md) property is an integer array in which each element defines the size of the corresponding dimension. To inspect the shape and constraints of a model’s multiarray input or output feature:

1. Access the model’s [modelDescription](mlmodel/modeldescription.md) property.
2. Find the multiarray input or output feature in the model description’s [inputDescriptionsByName](mlmodeldescription/inputdescriptionsbyname.md) or [outputDescriptionsByName](mlmodeldescription/outputdescriptionsbyname.md) property, respectively.
3. Access the feature description’s [multiArrayConstraint](mlfeaturedescription/multiarrayconstraint.md) property.
4. Inspect the multiarray constraint’s [shape](mlmultiarrayconstraint/shape.md) and [shapeConstraint](mlmultiarrayconstraint/shapeconstraint.md).

## Topics

### Creating a shaped array

- [init(scalar:)](mlshapedarray/init%28scalar_%29.md): Creates a shaped array with exactly one value and zero dimensions.
- [init(scalars:shape:)](mlshapedarray/init%28scalars_shape_%29.md): Initialize with a sequence and the shape.
- [init(mutating:shape:)](mlshapedarray/init%28mutating_shape_%29.md): Creates a new `MLShapedArray` using a pixel buffer as the backing storage.

### Creating a shaped array from another type

- [init(\_:)](mlshapedarray/init%28__%29.md)
- [init(concatenating:alongAxis:)](mlshapedarray/init%28concatenating_alongaxis_%29.md): Merges a sequence of shaped arrays into one shaped array along an axis.

### Creating a shaped array with pointers to memory

- [init(unsafeUninitializedShape:initializingWith:)](mlshapedarray/init%28unsafeuninitializedshape_initializingwith_%29.md): Creates a shaped array from a shape and a closure that initializes its memory.

### Creating a shaped array from data

- [init(data:shape:)](mlshapedarray/init%28data_shape_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Creates a shaped array from a block of data and a shape.
- [init(data:shape:strides:)](mlshapedarray/init%28data_shape_strides_%29.md): Creates a shaped array from a block of data, a shape, and strides.

### Shaping the array

- [changingLayout(to:)](mlshapedarray/changinglayout%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a copy with the specified buffer layout.
- [expandingShape(at:)](mlshapedarray/expandingshape%28at_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new shaped array with expanded dimensions.
- [reshaped(to:)](mlshapedarray/reshaped%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new reshaped shaped array.
- [squeezingShape()](mlshapedarray/squeezingshape%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new squeezed shaped array.
- [transposed()](mlshapedarray/transposed%28%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a new transposed shaped array.
- [transposed(permutation:)](mlshapedarray/transposed%28permutation_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Returns a transposed shaped array using a custom permutation.

### Reading and writing the pixel buffer

- [withMutablePixelBufferIfAvailable(\_:)](mlshapedarray/withmutablepixelbufferifavailable%28__%29.md): Writes to the underlying pixel buffer.
- [withPixelBufferIfAvailable(\_:)](mlshapedarray/withpixelbufferifavailable%28__%29.md): Reads the underlying pixel buffer.

### Modifying a shaped array

- [withUnsafeMutableShapedBufferPointer(using:\_:)](mlshapedarray/withunsafemutableshapedbufferpointer%28using___%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Calls the given closure with a pointer to the array’s mutable storage that has a specified buffer layout.

### Encoding and decoding

- [init(from:)](mlshapedarray/init%28from_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `Decodable`. Creates a shaped array from a decoder.
- [encode(to:)](mlshapedarray/encode%28to_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar` and `Encodable`. Encode a shaped array.

### Default Implementations

- [CustomStringConvertible Implementations](mlshapedarray/customstringconvertible-implementations.md)
- [Decodable Implementations](mlshapedarray/decodable-implementations.md)
- [Encodable Implementations](mlshapedarray/encodable-implementations.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
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

- [MLFeatureType](mlfeaturetype.md): The possible types for feature values, input features, and output features.
- [MLShapedArrayProtocol](mlshapedarrayprotocol.md): An interface that defines a shaped array type.
- [MLMultiArray](mlmultiarray.md): A machine learning collection type that stores numeric values in an array with multiple dimensions.
- [MLSequence](mlsequence.md): A machine learning collection type that stores a series of strings or integers.
