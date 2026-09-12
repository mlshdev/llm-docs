> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarraydescriptor](https://developer.apple.com/documentation/coreai/ndarraydescriptor)

# NDArrayDescriptor

**Framework:** Core AI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A description of an array’s shape, scalar type, and memory layout expectations.

## Declaration

```swift
struct NDArrayDescriptor
```

<a id="overview"></a>

## Overview

You obtain an `NDArrayDescriptor` from an [InferenceFunctionDescriptor](inferencefunctiondescriptor.md) by querying the descriptor of a specific input or output:

```swift
let valueDescriptor = functionDescriptor.inputDescriptor(of: "x")!
guard case .ndArray(let ndArrayDescriptor) = valueDescriptor else { ... }
```

The descriptor contains the expectations for an array value that you provide to an [InferenceFunction](inferencefunction.md). Most expectations are strict: for example, if the descriptor specifies [scalarType](ndarraydescriptor/scalartype.md) as `.float32`, the array you provide must use `.float32`.

## Topics

### Inspecting descriptor properties

- [shape](ndarraydescriptor/shape.md): The length of each dimension of the array.
- [scalarType](ndarraydescriptor/scalartype.md): The scalar type of the array.
- [rank](ndarraydescriptor/rank.md): The number of dimensions in the array.
- [hasDynamicShape](ndarraydescriptor/hasdynamicshape.md): A Boolean value that indicates whether the shape has any dynamic dimensions.
- [interleaveLayout](ndarraydescriptor/interleavelayout.md): Returns the interleaved layout of this ndArray, or `nil` if there is no interleave.

### Computing layout

- [minimumByteCount](ndarraydescriptor/minimumbytecount.md): The minimum number of bytes needed for storage with this descriptor’s shape and preferred strides.
- [preferredStrides](ndarraydescriptor/preferredstrides.md): The strides that avoid data layout transformations during inference.

### Resolving dynamic shapes

- [resolvingDynamicDimensions(\_:)](ndarraydescriptor/resolvingdynamicdimensions%28__%29.md): Returns a new descriptor with all dynamic dimensions replaced by concrete values.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Multidimensional arrays

- [NDArray](ndarray.md): A multidimensional array of scalar values used for model inference.
