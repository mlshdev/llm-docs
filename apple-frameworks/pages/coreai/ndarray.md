> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray](https://developer.apple.com/documentation/coreai/ndarray)

# NDArray

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A multidimensional array of scalar values used for model inference.

## Declaration

```swift
struct NDArray
```

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](integrating-on-device-ai-models-in-your-app-with-core-ai.md)

<a id="overview"></a>

## Overview

An `NDArray` stores data in a layout defined by its [shape](ndarray/shape.md), [scalarType](ndarray/scalartype-swift.property.md), and [strides](ndarray/strides.md).

## Topics

### Creating an array

- [init(shape:scalarType:)](ndarray/init%28shape_scalartype_%29.md): Creates an array with the specified shape and scalar type.
- [init(shape:scalarType:strides:)](ndarray/init%28shape_scalartype_strides_%29.md): Creates an array with the specified shape, scalar type, and strides.
- [init(shape:scalarType:strides:interleaveLayout:)](ndarray/init%28shape_scalartype_strides_interleavelayout_%29.md): Initialize an NDArray with the provided shape, scalar type, strides, and interleaved dimension.
- [init(scalars:shape:)](ndarray/init%28scalars_shape_%29.md): Initialize an ndArray with a copy of some sequence of scalars, stored in the ndArray in row-major order.
- [init(descriptor:)](ndarray/init%28descriptor_%29.md): Creates an array with the shape and preferred strides from the specified descriptor.

### Inspecting an array

- [shape](ndarray/shape.md): The length of each dimension of the array.
- [scalarType](ndarray/scalartype-swift.property.md): The scalar type of the array.
- [strides](ndarray/strides.md): The distance, in elements, between consecutive values along each dimension.
- [interleaveLayout](ndarray/interleavelayout-swift.property.md): Returns the interleaved layout of this ndArray, or `nil` if there is no interleave.

### Accessing elements

- [view(as:)](ndarray/view%28as_%29.md): Returns a read-only, typed view of this array’s elements.
- [mutableView(as:)](ndarray/mutableview%28as_%29.md): Returns a mutable, typed view of this array’s elements.
- [rawView()](ndarray/rawview%28%29.md): Returns a read-only, raw view of this array’s storage.
- [mutableRawView()](ndarray/mutablerawview%28%29.md): Returns a mutable, raw view of this array’s storage.

### Accessing views

- [NDArray.View](ndarray/view.md): An immutable non-owning view over the contents of a `NDArray`.
- [NDArray.MutableView](ndarray/mutableview.md): A mutable view over the storage of a tensor.
- [NDArray.RawView](ndarray/rawview.md): A type-erased immutable view over the memory owned by a tensor.
- [NDArray.MutableRawView](ndarray/mutablerawview.md): A type-erased mutable view over the memory owned by a tensor.

### Defining scalar types

- [NDArray.ScalarType](ndarray/scalartype-swift.enum.md): The possible scalar types.

### Describing interleaved layouts

- [NDArray.InterleaveLayout](ndarray/interleavelayout-swift.struct.md): Describes the interleaved memory layout of an ndArray dimension.

### Supporting subscripts

- [NDArray.RangeExpression](ndarray/rangeexpression.md)

## Relationships

### Conforms To

- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InferenceValue.MutableViewRepresentable](inferencevalue/mutableviewrepresentable.md)
- [InferenceValue.ViewRepresentable](inferencevalue/viewrepresentable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Multidimensional arrays

- [NDArrayDescriptor](ndarraydescriptor.md): A description of an array’s shape, scalar type, and memory layout expectations.
