> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsapplymultiheadattention(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsapplymultiheadattention(_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# BNNSApplyMultiheadAttention(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a mutihead attention filter to a set of input objects, writing the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSApplyMultiheadAttention(_ F: BNNSFilter?, _ batch_size: Int, _ query: UnsafeRawPointer, _ query_stride: Int, _ key: UnsafeRawPointer, _ key_stride: Int, _ key_mask: UnsafePointer<BNNSNDArrayDescriptor>?, _ key_mask_stride: Int, _ value: UnsafeRawPointer, _ value_stride: Int, _ output: UnsafeMutableRawPointer, _ output_stride: Int, _ add_to_attention: UnsafePointer<BNNSNDArrayDescriptor>?, _ backprop_cache_size: UnsafeMutablePointer<Int>?, _ backprop_cache: UnsafeMutableRawPointer?, _ workspace_size: UnsafeMutablePointer<Int>?, _ workspace: UnsafeMutableRawPointer?) -> Int32
```

## Parameters

- `F`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `query`: Pointer to the data for query input matrix.
- `query_stride`: Batch stride for query.
- `key`: Pointer to the data for key input matrix.
- `key_stride`: Batch stride for key.
- `key_mask`: Mask applied to key for ignoring entries.
- `key_mask_stride`: Batch stride for key mask.
- `value`: Pointer to the data for value input matrix.
- `value_stride`: Batch stride for value.
- `output`: Pointer to the data for output matrix
- `output_stride`: Batch stride for output.
- `add_to_attention`: Pointer to the 2D tensor that’s used as part of the mask function prior to softmax in the attention calculation.
- `backprop_cache_size`: The size of the back propagation cache, in bytes.
- `backprop_cache`: A cache that stores intermediate results that BNNS can use to accelerate a future call to this function.
- `workspace_size`: The size of the array workspace, in bytes.
- `workspace`: A scratch buffer used during the calculation.

<a id="Discussion"></a>

## Discussion

Provide `key_mask` as a 1D tensor containing `source_length` elements. Where the elements evaluate to true, the attention operation ignores the corresponding elements of the key matrix.

## See Also

### Multihead attention layers

- [BNNSMHAProjectionParameters](bnnsmhaprojectionparameters.md): A structure that contains multihead attention projection parameters.
- [BNNSLayerParametersMultiheadAttention](bnnslayerparametersmultiheadattention.md): Deprecated. A structure that contains the parameters of a multihead attention layer.
- [BNNSFilterCreateLayerMultiheadAttention(\_:\_:)](bnnsfiltercreatelayermultiheadattention%28____%29.md): Deprecated. Returns a new multihead attention layer.
- [BNNSApplyMultiheadAttentionBackward(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsapplymultiheadattentionbackward%28______________________________________________%29.md): Deprecated. Applies a multihead attention filter backward to generate gradients.

# BNNSApplyMultiheadAttention (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies a mutihead attention filter to a set of input objects, writing the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSApplyMultiheadAttention(BNNSFilter F, size_t batch_size, const void *query, size_t query_stride, const void *key, size_t key_stride, const BNNSNDArrayDescriptor *key_mask, size_t key_mask_stride, const void *value, size_t value_stride, void *output, size_t output_stride, const BNNSNDArrayDescriptor *add_to_attention, size_t *backprop_cache_size, void *backprop_cache, size_t *workspace_size, void *workspace);
```

## Parameters

- `F`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `query`: Pointer to the data for query input matrix.
- `query_stride`: Batch stride for query.
- `key`: Pointer to the data for key input matrix.
- `key_stride`: Batch stride for key.
- `key_mask`: Mask applied to key for ignoring entries.
- `key_mask_stride`: Batch stride for key mask.
- `value`: Pointer to the data for value input matrix.
- `value_stride`: Batch stride for value.
- `output`: Pointer to the data for output matrix
- `output_stride`: Batch stride for output.
- `add_to_attention`: Pointer to the 2D tensor that’s used as part of the mask function prior to softmax in the attention calculation.
- `backprop_cache_size`: The size of the back propagation cache, in bytes.
- `backprop_cache`: A cache that stores intermediate results that BNNS can use to accelerate a future call to this function.
- `workspace_size`: The size of the array workspace, in bytes.
- `workspace`: A scratch buffer used during the calculation.

<a id="Discussion"></a>

## Discussion

Provide `key_mask` as a 1D tensor containing `source_length` elements. Where the elements evaluate to true, the attention operation ignores the corresponding elements of the key matrix.

## See Also

### Multihead attention layers

- [BNNSMHAProjectionParameters](bnnsmhaprojectionparameters.md): A structure that contains multihead attention projection parameters.
- [BNNSLayerParametersMultiheadAttention](bnnslayerparametersmultiheadattention.md): Deprecated. A structure that contains the parameters of a multihead attention layer.
- [BNNSFilterCreateLayerMultiheadAttention](bnnsfiltercreatelayermultiheadattention%28____%29.md): Deprecated. Returns a new multihead attention layer.
- [BNNSApplyMultiheadAttentionBackward](bnnsapplymultiheadattentionbackward%28______________________________________________%29.md): Deprecated. Applies a multihead attention filter backward to generate gradients.
