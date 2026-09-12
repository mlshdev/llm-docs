> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfusedfilterapplybatch(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfusedfilterapplybatch(_:_:_:_:_:_:_:))

# BNNSFusedFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a fused filter to a set of input objects, writing the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSFusedFilterApplyBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ in: UnsafeRawPointer, _ in_stride: Int, _ out: UnsafeMutableRawPointer, _ out_stride: Int, _ training: Bool) -> Int32
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `in`: Pointer to the input data.
- `in_stride`: Increment, in values, between inputs.
- `out`: Pointer to the output data.
- `out_stride`: Increment, in values, between outputs.
- `training`: Set to `true` if using batch normalization during training.

## See Also

### Fused layers

- [FusableLayerParameters](fusablelayerparameters.md): Deprecated.
- [BNNS.FusedParametersLayer](bnns/fusedparameterslayer.md): Deprecated. A layer object that wraps a fused layer and manages its deinitialization.
- [BNNS.FusedConvolutionNormalizationLayer](bnns/fusedconvolutionnormalizationlayer.md): Deprecated. A layer object that wraps a fused, convolution normalization layer and manages its deinitialization.
- [BNNS.FusedFullyConnectedNormalizationLayer](bnns/fusedfullyconnectednormalizationlayer.md): Deprecated. A layer object that wraps a fused, fully connected normalization layer and manages its deinitialization.
- [BNNSFilterType](bnnsfiltertype.md): Constants that define the component filters of a fused layer.
- [BNNSFilterCreateFusedLayer(\_:\_:\_:\_:)](bnnsfiltercreatefusedlayer%28________%29.md): Deprecated. Returns a new fused layer.
- [BNNSFusedFilterApplyMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplymultiinputbatch%28________________%29.md): Deprecated. Applies a multiple-input fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies a fused filter backward to generate input gradients.
- [BNNSFusedFilterApplyBackwardMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplybackwardmultiinputbatch%28________________________%29.md): Deprecated. Applies a multiple-input fused filter backward to generate input gradients.

# BNNSFusedFilterApplyBatch (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a fused filter to a set of input objects, writing the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSFusedFilterApplyBatch(BNNSFilter filter, size_t batch_size, const void *in, size_t in_stride, void *out, size_t out_stride, bool training);
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `in`: Pointer to the input data.
- `in_stride`: Increment, in values, between inputs.
- `out`: Pointer to the output data.
- `out_stride`: Increment, in values, between outputs.
- `training`: Set to `true` if using batch normalization during training.

## See Also

### Fused layers

- [BNNSFilterType](bnnsfiltertype.md): Constants that define the component filters of a fused layer.
- [BNNSFilterCreateFusedLayer](bnnsfiltercreatefusedlayer%28________%29.md): Deprecated. Returns a new fused layer.
- [BNNSFusedFilterApplyMultiInputBatch](bnnsfusedfilterapplymultiinputbatch%28________________%29.md): Deprecated. Applies a multiple-input fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyBackwardBatch](bnnsfusedfilterapplybackwardbatch%28______________________%29.md): Deprecated. Applies a fused filter backward to generate input gradients.
- [BNNSFusedFilterApplyBackwardMultiInputBatch](bnnsfusedfilterapplybackwardmultiinputbatch%28________________________%29.md): Deprecated. Applies a multiple-input fused filter backward to generate input gradients.
