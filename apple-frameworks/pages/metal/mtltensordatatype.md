> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensordatatype](https://developer.apple.com/documentation/metal/mtltensordatatype)

# MTLTensorDataType (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The possible data types for the elements of a tensor.

## Declaration

```swift
enum MTLTensorDataType
```

## Topics

### Enumeration Cases

- [MTLTensorDataType.bfloat16](mtltensordatatype/bfloat16.md): A 16-bit floating point data type with 8 exponent bits, 7 mantissa bits, and 1 sign bit.
- [MTLTensorDataType.float16](mtltensordatatype/float16.md): A half-precision floating point data type.
- [MTLTensorDataType.float32](mtltensordatatype/float32.md): A single-precision floating point data type.
- [MTLTensorDataType.int16](mtltensordatatype/int16.md): A 16-bit signed integer data type.
- [MTLTensorDataType.int2](mtltensordatatype/int2.md): A 2-bit signed integer data type.
- [MTLTensorDataType.int32](mtltensordatatype/int32.md): A 32-bit signed integer data type.
- [MTLTensorDataType.int4](mtltensordatatype/int4.md): A 4-bit signed integer data type.
- [MTLTensorDataType.int8](mtltensordatatype/int8.md): An 8-bit signed integer data type.
- [MTLTensorDataType.metalFloat4e2m1](mtltensordatatype/metalfloat4e2m1.md): A 4-bit floating point data type with 2 exponent bits, 1 mantissa bit, and 1 sign bit.
- [MTLTensorDataType.metalFloat8e4m3](mtltensordatatype/metalfloat8e4m3.md): An 8-bit floating point data type with 4 exponent bits, 3 mantissa bits, and 1 sign bit.
- [MTLTensorDataType.metalFloat8e5m2](mtltensordatatype/metalfloat8e5m2.md): An 8-bit floating point data type with 5 exponent bits, 2 mantissa bits, and 1 sign bit.
- [MTLTensorDataType.metalFloat8ue8m0](mtltensordatatype/metalfloat8ue8m0.md): An 8-bit floating point data type with 8 exponent bits, 0 mantissa bits, and no sign bit.
- [MTLTensorDataType.none](mtltensordatatype/none.md): An invalid data type.
- [MTLTensorDataType.uint16](mtltensordatatype/uint16.md): A 16-bit unsigned integer data type.
- [MTLTensorDataType.uint2](mtltensordatatype/uint2.md): A 2-bit unsigned integer data type.
- [MTLTensorDataType.uint32](mtltensordatatype/uint32.md): A 32-bit unsigned integer data type.
- [MTLTensorDataType.uint4](mtltensordatatype/uint4.md): A 4-bit unsigned integer data type.
- [MTLTensorDataType.uint8](mtltensordatatype/uint8.md): An 8-bit unsigned integer data type.

### Initializers

- [init(rawValue:)](mtltensordatatype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
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
- [MTLTensorBinding](mtltensorbinding.md): An object that represents a tensor bound to a graphics or compute function or a machine learning function.
- [MTLTensorError](mtltensorerror-swift.struct.md)
- [MTLTensorError.Code](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)

# MTLTensorDataType (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The possible data types for the elements of a tensor.

## Declaration

```objectivec
enum MTLTensorDataType : NSInteger;
```

## Topics

### Enumeration Cases

- [MTLTensorDataTypeBFloat16](mtltensordatatype/bfloat16.md): A 16-bit floating point data type with 8 exponent bits, 7 mantissa bits, and 1 sign bit.
- [MTLTensorDataTypeFloat16](mtltensordatatype/float16.md): A half-precision floating point data type.
- [MTLTensorDataTypeFloat32](mtltensordatatype/float32.md): A single-precision floating point data type.
- [MTLTensorDataTypeInt16](mtltensordatatype/int16.md): A 16-bit signed integer data type.
- [MTLTensorDataTypeInt2](mtltensordatatype/int2.md): A 2-bit signed integer data type.
- [MTLTensorDataTypeInt32](mtltensordatatype/int32.md): A 32-bit signed integer data type.
- [MTLTensorDataTypeInt4](mtltensordatatype/int4.md): A 4-bit signed integer data type.
- [MTLTensorDataTypeInt8](mtltensordatatype/int8.md): An 8-bit signed integer data type.
- [MTLTensorDataTypeMetalFloat4E2M1](mtltensordatatype/metalfloat4e2m1.md): A 4-bit floating point data type with 2 exponent bits, 1 mantissa bit, and 1 sign bit.
- [MTLTensorDataTypeMetalFloat8E4M3](mtltensordatatype/metalfloat8e4m3.md): An 8-bit floating point data type with 4 exponent bits, 3 mantissa bits, and 1 sign bit.
- [MTLTensorDataTypeMetalFloat8E5M2](mtltensordatatype/metalfloat8e5m2.md): An 8-bit floating point data type with 5 exponent bits, 2 mantissa bits, and 1 sign bit.
- [MTLTensorDataTypeMetalFloat8UE8M0](mtltensordatatype/metalfloat8ue8m0.md): An 8-bit floating point data type with 8 exponent bits, 0 mantissa bits, and no sign bit.
- [MTLTensorDataTypeNone](mtltensordatatype/none.md): An invalid data type.
- [MTLTensorDataTypeUInt16](mtltensordatatype/uint16.md): A 16-bit unsigned integer data type.
- [MTLTensorDataTypeUInt2](mtltensordatatype/uint2.md): A 2-bit unsigned integer data type.
- [MTLTensorDataTypeUInt32](mtltensordatatype/uint32.md): A 32-bit unsigned integer data type.
- [MTLTensorDataTypeUInt4](mtltensordatatype/uint4.md): A 4-bit unsigned integer data type.
- [MTLTensorDataTypeUInt8](mtltensordatatype/uint8.md): An 8-bit unsigned integer data type.

## See Also

### Tensors

- [MTLTensor](mtltensor.md): A resource representing a multi-dimensional array that you can use with machine learning workloads.
- [MTLTensorDescriptor](mtltensordescriptor.md): A configuration type for creating new tensor instances.
- [MTLTensorExtents](mtltensorextents.md): An integer array that holds per-dimension values such as tensor sizes, strides, or block factors
- [MTLTensorReferenceType](mtltensorreferencetype.md): An object that represents a tensor in the shading language in a struct or array.
- [MTLTensorUsage](mtltensorusage.md): The contexts in which you can use a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTLTensorBinding](mtltensorbinding.md): An object that represents a tensor bound to a graphics or compute function or a machine learning function.
- [MTLTensorError](mtltensorerror-swift.struct/code.md): The error codes that Metal can raise when you create a tensor.
- [MTLTensorDomain](mtltensordomain.md): An error domain for errors that pertain to creating a tensor.
- [MTL_TENSOR_MAX_RANK](mtl_tensor_max_rank.md)
