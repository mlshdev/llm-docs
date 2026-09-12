> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsnormalizationfilterapplybatch(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsnormalizationfilterapplybatch(_:_:_:_:_:_:_:))

# BNNSNormalizationFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a normalization filter to a set of input objects, writing the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSNormalizationFilterApplyBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ in: UnsafeRawPointer, _ in_stride: Int, _ out: UnsafeMutableRawPointer, _ out_stride: Int, _ training: Bool) -> Int32
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `in`: Pointer to the input data.
- `in_stride`: Increment, in values, between inputs.
- `out`: Pointer to the output data.
- `out_stride`: Increment, in values, between outputs.
- `training`: Set to true during training and false during inference.

## See Also

### Normalization layers

- [BNNS.NormalizationLayer](bnns/normalizationlayer.md): Deprecated. A layer object that wraps a normalization filter and manages its deinitialization.
- [BNNSLayerParametersNormalization](bnnslayerparametersnormalization.md): Deprecated. A structure that contains the parameters of a normalization layer.
- [BNNSFilterCreateLayerNormalization(\_:\_:\_:)](bnnsfiltercreatelayernormalization%28______%29.md): Deprecated. Returns a new normalization layer.
- [BNNSNormalizationFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsnormalizationfilterapplybackwardbatch%28____________________%29.md): Deprecated. Applies a normalization filter backward to generate gradients.

# BNNSNormalizationFilterApplyBatch (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a normalization filter to a set of input objects, writing the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSNormalizationFilterApplyBatch(BNNSFilter filter, size_t batch_size, const void *in, size_t in_stride, void *out, size_t out_stride, bool training);
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `in`: Pointer to the input data.
- `in_stride`: Increment, in values, between inputs.
- `out`: Pointer to the output data.
- `out_stride`: Increment, in values, between outputs.
- `training`: Set to true during training and false during inference.

## See Also

### Normalization layers

- [BNNSLayerParametersNormalization](bnnslayerparametersnormalization.md): Deprecated. A structure that contains the parameters of a normalization layer.
- [BNNSFilterCreateLayerNormalization](bnnsfiltercreatelayernormalization%28______%29.md): Deprecated. Returns a new normalization layer.
- [BNNSNormalizationFilterApplyBackwardBatch](bnnsnormalizationfilterapplybackwardbatch%28____________________%29.md): Deprecated. Applies a normalization filter backward to generate gradients.
