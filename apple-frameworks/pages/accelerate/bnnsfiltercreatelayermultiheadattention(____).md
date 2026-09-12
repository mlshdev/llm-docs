> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfiltercreatelayermultiheadattention(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfiltercreatelayermultiheadattention(_:_:))

# BNNSFilterCreateLayerMultiheadAttention(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new multihead attention layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSFilterCreateLayerMultiheadAttention(_ layer_params: UnsafePointer<BNNSLayerParametersMultiheadAttention>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> BNNSFilter?
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: The filter runtime parameters.

## See Also

### Multihead attention layers

- [BNNSMHAProjectionParameters](bnnsmhaprojectionparameters.md): A structure that contains multihead attention projection parameters.
- [BNNSLayerParametersMultiheadAttention](bnnslayerparametersmultiheadattention.md): Deprecated. A structure that contains the parameters of a multihead attention layer.
- [BNNSApplyMultiheadAttention(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsapplymultiheadattention%28__________________________________%29.md): Deprecated. Applies a mutihead attention filter to a set of input objects, writing the result to a set of output objects.
- [BNNSApplyMultiheadAttentionBackward(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsapplymultiheadattentionbackward%28______________________________________________%29.md): Deprecated. Applies a multihead attention filter backward to generate gradients.

# BNNSFilterCreateLayerMultiheadAttention (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new multihead attention layer.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
BNNSFilterBNNSFilterCreateLayerMultiheadAttention(const BNNSLayerParametersMultiheadAttention *layer_params, const BNNSFilterParameters *filter_params);
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: The filter runtime parameters.

## See Also

### Multihead attention layers

- [BNNSMHAProjectionParameters](bnnsmhaprojectionparameters.md): A structure that contains multihead attention projection parameters.
- [BNNSLayerParametersMultiheadAttention](bnnslayerparametersmultiheadattention.md): Deprecated. A structure that contains the parameters of a multihead attention layer.
- [BNNSApplyMultiheadAttention](bnnsapplymultiheadattention%28__________________________________%29.md): Deprecated. Applies a mutihead attention filter to a set of input objects, writing the result to a set of output objects.
- [BNNSApplyMultiheadAttentionBackward](bnnsapplymultiheadattentionbackward%28______________________________________________%29.md): Deprecated. Applies a multihead attention filter backward to generate gradients.
