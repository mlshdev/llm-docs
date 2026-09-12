> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorextents](https://developer.apple.com/documentation/metal/mtltensorextents)

# MTLTensorExtents (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An integer array that holds per-dimension values such as tensor sizes, strides, or block factors

## Declaration

```swift
class MTLTensorExtents
```

<a id="overview"></a>

## Overview

Supports a rank between `0` and [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md).

## Topics

### Initializers

- [init(\_:)](mtltensorextents/init%28__%29.md): Creates a tensor with extents from an array of dimension values.

### Instance Properties

- [extents](mtltensorextents/extents.md): Retrieves the extents for this object.
- [rank](mtltensorextents/rank.md): The number of values in the extents object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Tensors

- [MTLTensor](mtltensor.md): A resource representing a multi-dimensional array that you can use with machine learning workloads.
- [MTLTensorDescriptor](mtltensordescriptor.md): A configuration type for creating new tensor instances.
- [MTLTensorReferenceType](mtltensorreferencetype.md): An object that represents a tensor in the shading language in a struct or array.
- [MTLTensorUsage](mtltensorusage.md): The contexts in which you can use a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTLTensorBinding](mtltensorbinding.md): An object that represents a tensor bound to a graphics or compute function or a machine learning function.
- [MTLTensorError](mtltensorerror-swift.struct.md)
- [MTLTensorError.Code](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDataType](mtltensordatatype.md): The possible data types for the elements of a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)

# MTLTensorExtents (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An integer array that holds per-dimension values such as tensor sizes, strides, or block factors

## Declaration

```objectivec
@interface MTLTensorExtents : NSObject
```

<a id="overview"></a>

## Overview

Supports a rank between `0` and [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md).

## Topics

### Instance Properties

- [rank](mtltensorextents/rank.md): The number of values in the extents object.

### Instance Methods

- [extentAtDimensionIndex:](mtltensorextents/extentatdimensionindex_.md): Returns the value at the specified dimension index.
- [initWithRank:values:](mtltensorextents/initwithrank_values_.md): Creates an extents object with the rank and values you provide.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Tensors

- [MTLTensor](mtltensor.md): A resource representing a multi-dimensional array that you can use with machine learning workloads.
- [MTLTensorDescriptor](mtltensordescriptor.md): A configuration type for creating new tensor instances.
- [MTLTensorReferenceType](mtltensorreferencetype.md): An object that represents a tensor in the shading language in a struct or array.
- [MTLTensorUsage](mtltensorusage.md): The contexts in which you can use a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTLTensorBinding](mtltensorbinding.md): An object that represents a tensor bound to a graphics or compute function or a machine learning function.
- [MTLTensorError](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDataType](mtltensordatatype.md): The possible data types for the elements of a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)
