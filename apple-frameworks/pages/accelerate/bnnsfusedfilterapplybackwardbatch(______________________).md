> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfusedfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfusedfilterapplybackwardbatch(_:_:_:_:_:_:_:_:_:_:_:))

# BNNSFusedFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a fused filter backward to generate input gradients.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSFusedFilterApplyBackwardBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ in: UnsafeRawPointer?, _ in_stride: Int, _ in_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>?, _ in_delta_stride: Int, _ out: UnsafeRawPointer?, _ out_stride: Int, _ out_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ out_delta_stride: Int, _ delta_parameters: UnsafeMutablePointer<UnsafeMutablePointer<BNNSNDArrayDescriptor>?>?) -> Int32
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `in`: Pointer to input object.
- `in_stride`: Increment, in values, between input objects.
- `in_delta`: The descriptor of the input delta.
- `in_delta_stride`: Increment, in values, between input delta objects.
- `out`: Pointer to output object.
- `out_stride`: Increment, in values, between output objects.
- `out_delta`: The descriptor of the output delta.
- `out_delta_stride`: Increment, in values, between output delta objects.
- `delta_parameters`: Pointer to an array of parameter delta pointers.

## See Also

### Fused layers

- [FusableLayerParameters](fusablelayerparameters.md): Deprecated.
- [BNNS.FusedParametersLayer](bnns/fusedparameterslayer.md): Deprecated. A layer object that wraps a fused layer and manages its deinitialization.
- [BNNS.FusedConvolutionNormalizationLayer](bnns/fusedconvolutionnormalizationlayer.md): Deprecated. A layer object that wraps a fused, convolution normalization layer and manages its deinitialization.
- [BNNS.FusedFullyConnectedNormalizationLayer](bnns/fusedfullyconnectednormalizationlayer.md): Deprecated. A layer object that wraps a fused, fully connected normalization layer and manages its deinitialization.
- [BNNSFilterType](bnnsfiltertype.md): Constants that define the component filters of a fused layer.
- [BNNSFilterCreateFusedLayer(\_:\_:\_:\_:)](bnnsfiltercreatefusedlayer%28________%29.md): Deprecated. Returns a new fused layer.
- [BNNSFusedFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplybatch%28______________%29.md): Deprecated. Applies a fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplymultiinputbatch%28________________%29.md): Deprecated. Applies a multiple-input fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyBackwardMultiInputBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsfusedfilterapplybackwardmultiinputbatch%28________________________%29.md): Deprecated. Applies a multiple-input fused filter backward to generate input gradients.

# BNNSFusedFilterApplyBackwardBatch (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a fused filter backward to generate input gradients.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSFusedFilterApplyBackwardBatch(BNNSFilter filter, size_t batch_size, const void *in, size_t in_stride, BNNSNDArrayDescriptor *in_delta, size_t in_delta_stride, const void *out, size_t out_stride, BNNSNDArrayDescriptor *out_delta, size_t out_delta_stride, BNNSNDArrayDescriptor **delta_parameters);
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `in`: Pointer to input object.
- `in_stride`: Increment, in values, between input objects.
- `in_delta`: The descriptor of the input delta.
- `in_delta_stride`: Increment, in values, between input delta objects.
- `out`: Pointer to output object.
- `out_stride`: Increment, in values, between output objects.
- `out_delta`: The descriptor of the output delta.
- `out_delta_stride`: Increment, in values, between output delta objects.
- `delta_parameters`: Pointer to an array of parameter delta pointers.

## See Also

### Fused layers

- [BNNSFilterType](bnnsfiltertype.md): Constants that define the component filters of a fused layer.
- [BNNSFilterCreateFusedLayer](bnnsfiltercreatefusedlayer%28________%29.md): Deprecated. Returns a new fused layer.
- [BNNSFusedFilterApplyBatch](bnnsfusedfilterapplybatch%28______________%29.md): Deprecated. Applies a fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyMultiInputBatch](bnnsfusedfilterapplymultiinputbatch%28________________%29.md): Deprecated. Applies a multiple-input fused filter to a set of input objects, writing the result to a set of output objects.
- [BNNSFusedFilterApplyBackwardMultiInputBatch](bnnsfusedfilterapplybackwardmultiinputbatch%28________________________%29.md): Deprecated. Applies a multiple-input fused filter backward to generate input gradients.
