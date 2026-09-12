> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensordomain](https://developer.apple.com/documentation/metal/mtltensordomain)

# MTLTensorDomain (Swift)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An error domain for errors that pertain to creating a tensor.

## Declaration

```swift
let MTLTensorDomain: String
```

## See Also

### Tensors

- [MTLTensor](mtltensor.md): A resource representing a multi-dimensional array that you can use with machine learning workloads.
- [MTLTensorDescriptor](mtltensordescriptor.md): A configuration type for creating new tensor instances.
- [MTLTensorExtents](mtltensorextents.md): An integer array that holds per-dimension values such as tensor sizes, strides, or block factors
- [MTLTensorReferenceType](mtltensorreferencetype.md): An object that represents a tensor in the shading language in a struct or array.
- [MTLTensorUsage](mtltensorusage.md): The contexts in which you can use a tensor.
- [MTLTensorBinding](mtltensorbinding.md): An object that represents a tensor bound to a graphics or compute function or a machine learning function.
- [MTLTensorError](mtltensorerror-swift.struct.md)
- [MTLTensorError.Code](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDataType](mtltensordatatype.md): The possible data types for the elements of a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)

# MTLTensorDomain (Objective-C)

**Framework:** Metal  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An error domain for errors that pertain to creating a tensor.

## Declaration

```objectivec
extern NSErrorDomain const MTLTensorDomain;
```

## See Also

### Tensors

- [MTLTensor](mtltensor.md): A resource representing a multi-dimensional array that you can use with machine learning workloads.
- [MTLTensorDescriptor](mtltensordescriptor.md): A configuration type for creating new tensor instances.
- [MTLTensorExtents](mtltensorextents.md): An integer array that holds per-dimension values such as tensor sizes, strides, or block factors
- [MTLTensorReferenceType](mtltensorreferencetype.md): An object that represents a tensor in the shading language in a struct or array.
- [MTLTensorUsage](mtltensorusage.md): The contexts in which you can use a tensor.
- [MTLTensorBinding](mtltensorbinding.md): An object that represents a tensor bound to a graphics or compute function or a machine learning function.
- [MTLTensorError](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDataType](mtltensordatatype.md): The possible data types for the elements of a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)
