> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsarithmeticbinary/init(in1:in1_type:in2:in2_type:out:out_type:)](https://developer.apple.com/documentation/accelerate/bnnsarithmeticbinary/init(in1:in1_type:in2:in2_type:out:out_type:))

# init(in1:in1_type:in2:in2_type:out:out_type:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new arithmetic structure that takes two inputs from the specified parameters.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(in1: BNNSNDArrayDescriptor, in1_type: BNNSDescriptorType, in2: BNNSNDArrayDescriptor, in2_type: BNNSDescriptorType, out: BNNSNDArrayDescriptor, out_type: BNNSDescriptorType)
```

## Parameters

- `in1`: The descriptor of the first input.
- `in1_type`: The descriptor type of the first input.
- `in2`: The descriptor of the second input.
- `in2_type`: The descriptor type of the second input.
- `out`: The descriptor of the output.
- `out_type`: The descriptor type of the output.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The data types of the inputs must be equal to the output data type. The size of the inputs must either 1, or the maximum size of either input and the output. Arithmetic layers only support arrays with a data type of `float`, and a data layout of [BNNS.DataLayout.vector](../bnns/datalayout/vector.md), [BNNS.DataLayout.matrixRowMajor](../bnns/datalayout/matrixrowmajor.md), [BNNS.DataLayout.matrixColumnMajor](../bnns/datalayout/matrixcolumnmajor.md), or [BNNS.DataLayout.imageCHW](../bnns/datalayout/imagechw.md).

## See Also

### Creating an Arithmetic Structure

- [init()](init%28%29.md): Deprecated. Returns a new arithmetic structure that takes two inputs.
