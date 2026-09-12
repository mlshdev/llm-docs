> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorreferencetype](https://developer.apple.com/documentation/metal/mtltensorreferencetype)

# MTLTensorReferenceType (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that represents a tensor in the shading language in a struct or array.

## Declaration

```swift
class MTLTensorReferenceType
```

## Topics

### Instance Properties

- [access](mtltensorreferencetype/access.md): A value that represents the read/write permissions of the tensor.
- [auxiliaryPlanes](mtltensorreferencetype/auxiliaryplanes.md): The auxiliary planes that this tensor reference requires.
- [dimensions](mtltensorreferencetype/dimensions.md): The array of sizes, in elements, one for each dimension of this tensor.
- [indexType](mtltensorreferencetype/indextype.md): The data format you use for indexing into the tensor.
- [tensorDataType](mtltensorreferencetype/tensordatatype.md): The underlying data format of the tensor.

## Relationships

### Inherits From

- [MTLType](mtltype.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Tensors

- [MTLTensor](mtltensor.md): A resource representing a multi-dimensional array that you can use with machine learning workloads.
- [MTLTensorDescriptor](mtltensordescriptor.md): A configuration type for creating new tensor instances.
- [MTLTensorExtents](mtltensorextents.md): An integer array that holds per-dimension values such as tensor sizes, strides, or block factors
- [MTLTensorUsage](mtltensorusage.md): The contexts in which you can use a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTLTensorBinding](mtltensorbinding.md): An object that represents a tensor bound to a graphics or compute function or a machine learning function.
- [MTLTensorError](mtltensorerror-swift.struct.md)
- [MTLTensorError.Code](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDataType](mtltensordatatype.md): The possible data types for the elements of a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)

# MTLTensorReferenceType (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that represents a tensor in the shading language in a struct or array.

## Declaration

```objectivec
@interface MTLTensorReferenceType : MTLType
```

## Topics

### Instance Properties

- [access](mtltensorreferencetype/access.md): A value that represents the read/write permissions of the tensor.
- [auxiliaryPlanes](mtltensorreferencetype/auxiliaryplanes.md): The auxiliary planes that this tensor reference requires.
- [dimensions](mtltensorreferencetype/dimensions.md): The array of sizes, in elements, one for each dimension of this tensor.
- [indexType](mtltensorreferencetype/indextype.md): The data format you use for indexing into the tensor.
- [tensorDataType](mtltensorreferencetype/tensordatatype.md): The underlying data format of the tensor.

## Relationships

### Inherits From

- [MTLType](mtltype.md)

## See Also

### Tensors

- [MTLTensor](mtltensor.md): A resource representing a multi-dimensional array that you can use with machine learning workloads.
- [MTLTensorDescriptor](mtltensordescriptor.md): A configuration type for creating new tensor instances.
- [MTLTensorExtents](mtltensorextents.md): An integer array that holds per-dimension values such as tensor sizes, strides, or block factors
- [MTLTensorUsage](mtltensorusage.md): The contexts in which you can use a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTLTensorBinding](mtltensorbinding.md): An object that represents a tensor bound to a graphics or compute function or a machine learning function.
- [MTLTensorError](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDataType](mtltensordatatype.md): The possible data types for the elements of a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)
