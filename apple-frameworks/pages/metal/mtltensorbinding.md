> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorbinding](https://developer.apple.com/documentation/metal/mtltensorbinding)

# MTLTensorBinding (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that represents a tensor bound to a graphics or compute function or a machine learning function.

## Declaration

```swift
protocol MTLTensorBinding : MTLBinding
```

## Topics

### Instance Properties

- [auxiliaryPlanes](mtltensorbinding/auxiliaryplanes.md): An array of the tensor’s auxiliary planes.
- [dimensions](mtltensorbinding/dimensions.md): The array of sizes, in elements, one for each dimension of this tensor.
- [indexType](mtltensorbinding/indextype.md): The data format you use for indexing into the tensor.
- [tensorDataType](mtltensorbinding/tensordatatype.md): The underlying data format of this tensor.

## Relationships

### Inherits From

- [MTLBinding](mtlbinding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tensors

- [MTLTensor](mtltensor.md): A resource representing a multi-dimensional array that you can use with machine learning workloads.
- [MTLTensorDescriptor](mtltensordescriptor.md): A configuration type for creating new tensor instances.
- [MTLTensorExtents](mtltensorextents.md): An integer array that holds per-dimension values such as tensor sizes, strides, or block factors
- [MTLTensorReferenceType](mtltensorreferencetype.md): An object that represents a tensor in the shading language in a struct or array.
- [MTLTensorUsage](mtltensorusage.md): The contexts in which you can use a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTLTensorError](mtltensorerror-swift.struct.md)
- [MTLTensorError.Code](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDataType](mtltensordatatype.md): The possible data types for the elements of a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)

# MTLTensorBinding (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that represents a tensor bound to a graphics or compute function or a machine learning function.

## Declaration

```objectivec
@protocol MTLTensorBinding <MTLBinding>
```

## Topics

### Instance Properties

- [auxiliaryPlanes](mtltensorbinding/auxiliaryplanes.md): An array of the tensor’s auxiliary planes.
- [dimensions](mtltensorbinding/dimensions.md): The array of sizes, in elements, one for each dimension of this tensor.
- [indexType](mtltensorbinding/indextype.md): The data format you use for indexing into the tensor.
- [tensorDataType](mtltensorbinding/tensordatatype.md): The underlying data format of this tensor.

## Relationships

### Inherits From

- [MTLBinding](mtlbinding.md)

## See Also

### Tensors

- [MTLTensor](mtltensor.md): A resource representing a multi-dimensional array that you can use with machine learning workloads.
- [MTLTensorDescriptor](mtltensordescriptor.md): A configuration type for creating new tensor instances.
- [MTLTensorExtents](mtltensorextents.md): An integer array that holds per-dimension values such as tensor sizes, strides, or block factors
- [MTLTensorReferenceType](mtltensorreferencetype.md): An object that represents a tensor in the shading language in a struct or array.
- [MTLTensorUsage](mtltensorusage.md): The contexts in which you can use a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTLTensorError](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDataType](mtltensordatatype.md): The possible data types for the elements of a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)
