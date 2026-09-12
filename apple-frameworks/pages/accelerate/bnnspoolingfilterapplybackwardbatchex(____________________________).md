> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnspoolingfilterapplybackwardbatchex(_:_:_:_:_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnspoolingfilterapplybackwardbatchex(_:_:_:_:_:_:_:_:_:_:_:_:_:_:))

# BNNSPoolingFilterApplyBackwardBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Applies a pooling filter backward to generate gradients with support for multiple data types for indices.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSPoolingFilterApplyBackwardBatchEx(_ filter: BNNSFilter?, _ batch_size: Int, _ in: UnsafeRawPointer?, _ in_stride: Int, _ in_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>?, _ in_delta_stride: Int, _ out: UnsafeRawPointer?, _ out_stride: Int, _ out_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ out_delta_stride: Int, _ bias_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>?, _ indices_data_type: BNNSDataType, _ indices: UnsafeRawPointer?, _ idx_stride: Int) -> Int32
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `in`: A pointer to the input data.
- `in_stride`: The increment, in values, between inputs.
- `in_delta`: A pointer to the input delta descriptor.
- `in_delta_stride`: The increment, in values, between input delta objects.
- `out`: A pointer to the output descriptor.
- `out_stride`: The increment, in values, between outputs.
- `out_delta`: A pointer to the output delta descriptor.
- `out_delta_stride`: The increment, in values, between output delta objects.
- `bias_delta`: A pointer to the bias descriptor.
- `indices_data_type`: The data type of the indices data.
- `indices`: A pointer to the indices data.
- `idx_stride`: The increment, in values, between indices.

<a id="Discussion"></a>

## Discussion

This function is an extension to [BNNSPoolingFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md) that supports 32- and 64-bit unsigned-integer indices for max pooling and unpooling.

## See Also

### Pooling layers

- [BNNSPoolingLayerParameters](bnnspoolinglayerparameters.md): Deprecated. A structure containing pooling layer parameters.
- [BNNSFilterCreatePoolingLayer(\_:\_:\_:\_:)](bnnsfiltercreatepoolinglayer%28________%29.md): Deprecated. Returns a pooling filter, initialized with input, output, layer, and filter parameters.
- [BNNS.PoolingLayer](bnns/poolinglayer.md): Deprecated. A layer object that wraps a pooling filter and manages its deinitialization.
- [BNNSPoolingFunction](bnnspoolingfunction.md): Constants that describe pooling functions.
- [BNNSPoolingFunctionAverage](bnnspoolingfunctionaverage.md): Deprecated.
- [BNNSPoolingFunctionMax](bnnspoolingfunctionmax.md): Deprecated.
- [BNNSLayerParametersPooling](bnnslayerparameterspooling.md): Deprecated. A structure that contains the parameters of a pooling layer.
- [BNNSFilterCreateLayerPooling(\_:\_:)](bnnsfiltercreatelayerpooling%28____%29.md): Deprecated. Returns a new pooling layer.
- [BNNSPoolingFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybatch%28________________%29.md): Deprecated. Applies a pooling filter to a set of input objects, writing the result to a set of output objects.
- [BNNSPoolingFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients.
- [BNNSPoolingFilterApplyBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybatchex%28__________________%29.md): Deprecated. Applies a pooling filter to a set of input objects with support for multiple data types for indices.

# BNNSPoolingFilterApplyBackwardBatchEx (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 9.0+ (deprecated in 11.0)

Applies a pooling filter backward to generate gradients with support for multiple data types for indices.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSPoolingFilterApplyBackwardBatchEx(BNNSFilter filter, size_t batch_size, const void *in, size_t in_stride, BNNSNDArrayDescriptor *in_delta, size_t in_delta_stride, const void *out, size_t out_stride, BNNSNDArrayDescriptor *out_delta, size_t out_delta_stride, BNNSNDArrayDescriptor *bias_delta, const BNNSDataType indices_data_type, const void *indices, size_t idx_stride);
```

## Parameters

- `filter`: The filter to apply.
- `batch_size`: The number of input-output pairs.
- `in`: A pointer to the input data.
- `in_stride`: The increment, in values, between inputs.
- `in_delta`: A pointer to the input delta descriptor.
- `in_delta_stride`: The increment, in values, between input delta objects.
- `out`: A pointer to the output descriptor.
- `out_stride`: The increment, in values, between outputs.
- `out_delta`: A pointer to the output delta descriptor.
- `out_delta_stride`: The increment, in values, between output delta objects.
- `bias_delta`: A pointer to the bias descriptor.
- `indices_data_type`: The data type of the indices data.
- `indices`: A pointer to the indices data.
- `idx_stride`: The increment, in values, between indices.

<a id="Discussion"></a>

## Discussion

This function is an extension to [BNNSPoolingFilterApplyBackwardBatch](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md) that supports 32- and 64-bit unsigned-integer indices for max pooling and unpooling.

## See Also

### Pooling layers

- [BNNSPoolingLayerParameters](bnnspoolinglayerparameters.md): Deprecated. A structure containing pooling layer parameters.
- [BNNSFilterCreatePoolingLayer](bnnsfiltercreatepoolinglayer%28________%29.md): Deprecated. Returns a pooling filter, initialized with input, output, layer, and filter parameters.
- [BNNSPoolingFunction](bnnspoolingfunction.md): Constants that describe pooling functions.
- [BNNSLayerParametersPooling](bnnslayerparameterspooling.md): Deprecated. A structure that contains the parameters of a pooling layer.
- [BNNSFilterCreateLayerPooling](bnnsfiltercreatelayerpooling%28____%29.md): Deprecated. Returns a new pooling layer.
- [BNNSPoolingFilterApplyBatch](bnnspoolingfilterapplybatch%28________________%29.md): Deprecated. Applies a pooling filter to a set of input objects, writing the result to a set of output objects.
- [BNNSPoolingFilterApplyBackwardBatch](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients.
- [BNNSPoolingFilterApplyBatchEx](bnnspoolingfilterapplybatchex%28__________________%29.md): Deprecated. Applies a pooling filter to a set of input objects with support for multiple data types for indices.
