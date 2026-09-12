> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorusage](https://developer.apple.com/documentation/metal/mtltensorusage)

# MTLTensorUsage (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The contexts in which you can use a tensor.

## Declaration

```swift
struct MTLTensorUsage
```

## Topics

### Initializers

- [init(rawValue:)](mtltensorusage/init%28rawvalue_%29.md)

### Type Properties

- [compute](mtltensorusage/compute.md): A tensor context that applies to compute encoders.
- [machineLearning](mtltensorusage/machinelearning.md): A tensor context that applies to machine learning encoders.
- [render](mtltensorusage/render.md): A tensor context that applies to render encoders.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Tensors

- [MTLTensor](mtltensor.md): A resource representing a multi-dimensional array that you can use with machine learning workloads.
- [MTLTensorDescriptor](mtltensordescriptor.md): A configuration type for creating new tensor instances.
- [MTLTensorExtents](mtltensorextents.md): An integer array that holds per-dimension values such as tensor sizes, strides, or block factors
- [MTLTensorReferenceType](mtltensorreferencetype.md): An object that represents a tensor in the shading language in a struct or array.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTLTensorBinding](mtltensorbinding.md): An object that represents a tensor bound to a graphics or compute function or a machine learning function.
- [MTLTensorError](mtltensorerror-swift.struct.md)
- [MTLTensorError.Code](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDataType](mtltensordatatype.md): The possible data types for the elements of a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)

# MTLTensorUsage (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The contexts in which you can use a tensor.

## Declaration

```objectivec
enum MTLTensorUsage : NSUInteger;
```

## Topics

### Enumeration Cases

- [MTLTensorUsageCompute](mtltensorusage/compute.md): A tensor context that applies to compute encoders.
- [MTLTensorUsageMachineLearning](mtltensorusage/machinelearning.md): A tensor context that applies to machine learning encoders.
- [MTLTensorUsageRender](mtltensorusage/render.md): A tensor context that applies to render encoders.

## See Also

### Tensors

- [MTLTensor](mtltensor.md): A resource representing a multi-dimensional array that you can use with machine learning workloads.
- [MTLTensorDescriptor](mtltensordescriptor.md): A configuration type for creating new tensor instances.
- [MTLTensorExtents](mtltensorextents.md): An integer array that holds per-dimension values such as tensor sizes, strides, or block factors
- [MTLTensorReferenceType](mtltensorreferencetype.md): An object that represents a tensor in the shading language in a struct or array.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTLTensorBinding](mtltensorbinding.md): An object that represents a tensor bound to a graphics or compute function or a machine learning function.
- [MTLTensorError](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDataType](mtltensordatatype.md): The possible data types for the elements of a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)
