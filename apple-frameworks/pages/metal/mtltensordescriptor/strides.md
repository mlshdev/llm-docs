> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensordescriptor/strides](https://developer.apple.com/documentation/metal/mtltensordescriptor/strides)

# strides (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An array of strides, in elements, one for each dimension of this tensor, if applicable.

## Declaration

```swift
@NSCopying var strides: MTLTensorExtents? { get set }
```

<a id="discussion"></a>

## Discussion

The stride value of the array’s first element needs to be exactly `1`, because it is the innermost dimension. The strides for the subsequent dimensions can have different requirements based on the value of other properties. When the [usage](usage.md) property includes the [machineLearning](../mtltensorusage/machinelearning.md) option:

- The second element of the array needs to be a multiple of 64 bytes.
- The rest of the elements in the array need to equal the product of the previous stride multiplied with the size of the previous dimension. For example: `strides[i] = strides[i - 1] * dimensions[i - 1]`.

When [dataType](datatype.md) is [MTLTensorDataType.int2](../mtltensordatatype/int2.md), [MTLTensorDataType.uint2](../mtltensordatatype/uint2.md), [MTLTensorDataType.int4](../mtltensordatatype/int4.md), [MTLTensorDataType.uint4](../mtltensordatatype/uint4.md), [MTLTensorDataType.metalFloat4e2m1](../mtltensordatatype/metalfloat4e2m1.md), [MTLTensorDataType.metalFloat8e4m3](../mtltensordatatype/metalfloat8e4m3.md), [MTLTensorDataType.metalFloat8e5m2](../mtltensordatatype/metalfloat8e5m2.md), or [MTLTensorDataType.metalFloat8ue8m0](../mtltensordatatype/metalfloat8ue8m0.md), all elements of the array, except for the first element, need to be a multiple of 128 bytes.

> **Tip**

> You can improve runtime performance by using strides that are multiples of 128, even when it’s not a requirement.

Only set this property when creating tensors from a buffer.

# strides (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An array of strides, in elements, one for each dimension of this tensor, if applicable.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) MTLTensorExtents * strides;
```

<a id="discussion"></a>

## Discussion

The stride value of the array’s first element needs to be exactly `1`, because it is the innermost dimension. The strides for the subsequent dimensions can have different requirements based on the value of other properties. When the [usage](usage.md) property includes the [MTLTensorUsageMachineLearning](../mtltensorusage/machinelearning.md) option:

- The second element of the array needs to be a multiple of 64 bytes.
- The rest of the elements in the array need to equal the product of the previous stride multiplied with the size of the previous dimension. For example: `strides[i] = strides[i - 1] * dimensions[i - 1]`.

When [dataType](datatype.md) is [MTLTensorDataTypeInt2](../mtltensordatatype/int2.md), [MTLTensorDataTypeUInt2](../mtltensordatatype/uint2.md), [MTLTensorDataTypeInt4](../mtltensordatatype/int4.md), [MTLTensorDataTypeUInt4](../mtltensordatatype/uint4.md), [MTLTensorDataTypeMetalFloat4E2M1](../mtltensordatatype/metalfloat4e2m1.md), [MTLTensorDataTypeMetalFloat8E4M3](../mtltensordatatype/metalfloat8e4m3.md), [MTLTensorDataTypeMetalFloat8E5M2](../mtltensordatatype/metalfloat8e5m2.md), or [MTLTensorDataTypeMetalFloat8UE8M0](../mtltensordatatype/metalfloat8ue8m0.md), all elements of the array, except for the first element, need to be a multiple of 128 bytes.

> **Tip**

> You can improve runtime performance by using strides that are multiples of 128, even when it’s not a requirement.

Only set this property when creating tensors from a buffer.
