> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnspermutefilterapplybackwardbatch(_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnspermutefilterapplybackwardbatch(_:_:_:_:_:_:))

# BNNSPermuteFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a permute filter backward to generate gradients.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSPermuteFilterApplyBackwardBatch(_ filter: BNNSFilter?, _ batch_size: Int, _ in_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ in_delta_stride: Int, _ out_delta: UnsafePointer<BNNSNDArrayDescriptor>, _ out_delta_stride: Int) -> Int32
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: Number of input-output pairs to process.
- `in_delta`: The descriptor of the input delta.
- `in_delta_stride`: Increment, in values, between input delta objects.
- `out_delta`: The descriptor of the output delta.
- `out_delta_stride`: Increment, in values, between output delta objects.

## See Also

### Permute layers

- [BNNS.PermuteLayer](bnns/permutelayer.md): Deprecated. A layer object that wraps a permute filter and manages its deinitialization.
- [BNNSLayerParametersPermute](bnnslayerparameterspermute.md): Deprecated. A structure that contains the parameters of a permute layer.
- [BNNSFilterCreateLayerPermute(\_:\_:)](bnnsfiltercreatelayerpermute%28____%29.md): Deprecated. Returns a new permute layer.

# BNNSPermuteFilterApplyBackwardBatch (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a permute filter backward to generate gradients.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSPermuteFilterApplyBackwardBatch(BNNSFilter filter, size_t batch_size, BNNSNDArrayDescriptor *in_delta, size_t in_delta_stride, const BNNSNDArrayDescriptor *out_delta, size_t out_delta_stride);
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: Number of input-output pairs to process.
- `in_delta`: The descriptor of the input delta.
- `in_delta_stride`: Increment, in values, between input delta objects.
- `out_delta`: The descriptor of the output delta.
- `out_delta_stride`: Increment, in values, between output delta objects.

## See Also

### Permute layers

- [BNNSLayerParametersPermute](bnnslayerparameterspermute.md): Deprecated. A structure that contains the parameters of a permute layer.
- [BNNSFilterCreateLayerPermute](bnnsfiltercreatelayerpermute%28____%29.md): Deprecated. Returns a new permute layer.
