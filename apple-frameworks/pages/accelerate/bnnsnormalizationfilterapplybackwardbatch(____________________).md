> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsnormalizationfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsnormalizationfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:))

# BNNSNormalizationFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a normalization filter backward to generate gradients.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSNormalizationFilterApplyBackwardBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ in_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>?, _ in_delta_stride: Int, _ out: UnsafeRawPointer?, _ out_stride: Int, _ out_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ out_delta_stride: Int, _ beta_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>?, _ gamma_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>?) -> Int32
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `in_delta`: The descriptor of the input delta.
- `in_delta_stride`: Increment, in values, between input delta objects.
- `out`: Pointer to output object.
- `out_stride`: Increment, in values, between output objects.
- `out_delta`: The descriptor of the output delta.
- `out_delta_stride`: Increment, in values, between output delta objects.
- `beta_delta`: The descriptor of the beta delta.
- `gamma_delta`: The descriptor of the gamma delta.

## See Also

### Normalization layers

- [BNNS.NormalizationLayer](bnns/normalizationlayer.md): Deprecated. A layer object that wraps a normalization filter and manages its deinitialization.
- [BNNSLayerParametersNormalization](bnnslayerparametersnormalization.md): Deprecated. A structure that contains the parameters of a normalization layer.
- [BNNSFilterCreateLayerNormalization(\_:\_:\_:)](bnnsfiltercreatelayernormalization%28______%29.md): Deprecated. Returns a new normalization layer.
- [BNNSNormalizationFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](bnnsnormalizationfilterapplybatch%28______________%29.md): Deprecated. Applies a normalization filter to a set of input objects, writing the result to a set of output objects.

# BNNSNormalizationFilterApplyBackwardBatch (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a normalization filter backward to generate gradients.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSNormalizationFilterApplyBackwardBatch(BNNSFilter filter, size_t batch_size, BNNSNDArrayDescriptor *in_delta, size_t in_delta_stride, const void *out, size_t out_stride, BNNSNDArrayDescriptor *out_delta, size_t out_delta_stride, BNNSNDArrayDescriptor *beta_delta, BNNSNDArrayDescriptor *gamma_delta);
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `in_delta`: The descriptor of the input delta.
- `in_delta_stride`: Increment, in values, between input delta objects.
- `out`: Pointer to output object.
- `out_stride`: Increment, in values, between output objects.
- `out_delta`: The descriptor of the output delta.
- `out_delta_stride`: Increment, in values, between output delta objects.
- `beta_delta`: The descriptor of the beta delta.
- `gamma_delta`: The descriptor of the gamma delta.

## See Also

### Normalization layers

- [BNNSLayerParametersNormalization](bnnslayerparametersnormalization.md): Deprecated. A structure that contains the parameters of a normalization layer.
- [BNNSFilterCreateLayerNormalization](bnnsfiltercreatelayernormalization%28______%29.md): Deprecated. Returns a new normalization layer.
- [BNNSNormalizationFilterApplyBatch](bnnsnormalizationfilterapplybatch%28______________%29.md): Deprecated. Applies a normalization filter to a set of input objects, writing the result to a set of output objects.
