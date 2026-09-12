> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsarithmeticunary/init(in:in_type:out:out_type:)](https://developer.apple.com/documentation/accelerate/bnnsarithmeticunary/init(in:in_type:out:out_type:))

# init(in:in_type:out:out_type:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new arithmetic structure that takes a single input from the specified parameters.

> Use BNNSGraph\* APIs

## Declaration

```swift
init(in: BNNSNDArrayDescriptor, in_type: BNNSDescriptorType, out: BNNSNDArrayDescriptor, out_type: BNNSDescriptorType)
```

## Parameters

- `in`: The descriptor of the input.
- `in_type`: The descriptor type of the input.
- `out`: The descriptor of the output.
- `out_type`: The descriptor type of the output.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The input data type must be equal to the output data type. The input size must equal the output size or `1`. Arithmetic layers only support arrays with a data type of `float`, and a data layout of [BNNS.DataLayout.vector](../bnns/datalayout/vector.md), [BNNS.DataLayout.matrixRowMajor](../bnns/datalayout/matrixrowmajor.md), [BNNS.DataLayout.matrixColumnMajor](../bnns/datalayout/matrixcolumnmajor.md), or [BNNS.DataLayout.imageCHW](../bnns/datalayout/imagechw.md).

## See Also

### Creating an Arithmetic Structure

- [init()](init%28%29.md): Deprecated. Returns a new arithmetic structure that takes a single input.
