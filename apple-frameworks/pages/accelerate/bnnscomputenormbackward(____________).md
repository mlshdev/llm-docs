> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnscomputenormbackward(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnscomputenormbackward(_:_:_:_:_:_:))

# BNNSComputeNormBackward(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

Backpropogates gradients for the compute norm function.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSComputeNormBackward(_ in: UnsafeRawPointer, _ in_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ out: UnsafeRawPointer, _ out_delta: UnsafePointer<BNNSNDArrayDescriptor>, _ norm_type: BNNSNormType, _ axis_flags: UInt32) -> Int32
```

## Parameters

- `in`: The descriptor of the input.
- `in_delta`: The descriptor of the input delta.
- `out`: The descriptor of the output.
- `out_delta`: The descriptor of the output delta.
- `norm_type`: The type of the norm. This function supports only [BNNSL2Norm](bnnsl2norm.md).
- `axis_flags`: The dimensions that the function uses to compute the norm. Set to `0` to specify that the function computes the norm over all dimensions.

## See Also

### Compute norm functions

- [computeNorm(input:output:axes:)](bnns/computenorm%28input_output_axes_%29.md): Deprecated. Computes the Euclidean norm and writes the result to the output tensor.
- [computeNormBackward(input:output:axes:outputGradient:generatingInputGradient:)](bnns/computenormbackward%28input_output_axes_outputgradient_generatinginputgradient_%29.md): Deprecated. Backpropogates gradients for the compute norm function.
- [BNNSComputeNorm(\_:\_:\_:\_:)](bnnscomputenorm%28________%29.md): Deprecated. Computes the specified norm over an entire tensor or the specified axes.
- [BNNSNormType](bnnsnormtype.md): Constants that describe norm types.

# BNNSComputeNormBackward (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 15.0+ (deprecated in 18.0) · iPadOS 15.0+ (deprecated in 18.0) · Mac Catalyst 15.0+ (deprecated in 18.0) · macOS 12.0+ (deprecated in 15.0) · tvOS 15.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 8.0+ (deprecated in 11.0)

Backpropogates gradients for the compute norm function.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSComputeNormBackward(const void *in, BNNSNDArrayDescriptor *in_delta, const void *out, const BNNSNDArrayDescriptor *out_delta, BNNSNormType norm_type, uint32_t axis_flags);
```

## Parameters

- `in`: The descriptor of the input.
- `in_delta`: The descriptor of the input delta.
- `out`: The descriptor of the output.
- `out_delta`: The descriptor of the output delta.
- `norm_type`: The type of the norm. This function supports only [BNNSL2Norm](bnnsl2norm.md).
- `axis_flags`: The dimensions that the function uses to compute the norm. Set to `0` to specify that the function computes the norm over all dimensions.

## See Also

### Compute norm functions

- [BNNSComputeNorm](bnnscomputenorm%28________%29.md): Deprecated. Computes the specified norm over an entire tensor or the specified axes.
- [BNNSNormType](bnnsnormtype.md): Constants that describe norm types.
