> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfiltercreatepoolinglayer(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfiltercreatepoolinglayer(_:_:_:_:))

# BNNSFilterCreatePoolingLayer(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Returns a pooling  filter, initialized with input, output, layer, and filter parameters.

> Use [BNNSFilterCreateLayerPooling(\_:\_:)](bnnsfiltercreatelayerpooling%28____%29.md) instead.

## Declaration

```swift
func BNNSFilterCreatePoolingLayer(_ in_desc: UnsafePointer<BNNSImageStackDescriptor>, _ out_desc: UnsafePointer<BNNSImageStackDescriptor>, _ layer_params: UnsafePointer<BNNSPoolingLayerParameters>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> BNNSFilter?
```

## Parameters

- `in_desc`: Pointer to a `BNNSImageStackDescriptor` struct describing the input
- `out_desc`: Pointer to a `v` struct describing the output
- `layer_params`: Pointer to a `BNNSPoolingLayerParameters` struct describing the layer parameters
- `filter_params`: Pointer to a `BNNSFilterParameters` struct describing the filter parameters

<a id="return-value"></a>

## Return Value

A BNNSFilter object representing a pooling filter configured with the specified  parameters

## See Also

### Pooling layers

- [BNNSPoolingLayerParameters](bnnspoolinglayerparameters.md): Deprecated. A structure containing pooling layer parameters.
- [BNNS.PoolingLayer](bnns/poolinglayer.md): Deprecated. A layer object that wraps a pooling filter and manages its deinitialization.
- [BNNSPoolingFunction](bnnspoolingfunction.md): Constants that describe pooling functions.
- [BNNSPoolingFunctionAverage](bnnspoolingfunctionaverage.md): Deprecated.
- [BNNSPoolingFunctionMax](bnnspoolingfunctionmax.md): Deprecated.
- [BNNSLayerParametersPooling](bnnslayerparameterspooling.md): Deprecated. A structure that contains the parameters of a pooling layer.
- [BNNSFilterCreateLayerPooling(\_:\_:)](bnnsfiltercreatelayerpooling%28____%29.md): Deprecated. Returns a new pooling layer.
- [BNNSPoolingFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybatch%28________________%29.md): Deprecated. Applies a pooling filter to a set of input objects, writing the result to a set of output objects.
- [BNNSPoolingFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients.
- [BNNSPoolingFilterApplyBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybatchex%28__________________%29.md): Deprecated. Applies a pooling filter to a set of input objects with support for multiple data types for indices.
- [BNNSPoolingFilterApplyBackwardBatchEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnspoolingfilterapplybackwardbatchex%28____________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients with support for multiple data types for indices.

# BNNSFilterCreatePoolingLayer (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Returns a pooling  filter, initialized with input, output, layer, and filter parameters.

> Use [BNNSFilterCreateLayerPooling](bnnsfiltercreatelayerpooling%28____%29.md) instead.

## Declaration

```objectivec
BNNSFilterBNNSFilterCreatePoolingLayer(const BNNSImageStackDescriptor *in_desc, const BNNSImageStackDescriptor *out_desc, const BNNSPoolingLayerParameters *layer_params, const BNNSFilterParameters *filter_params);
```

## Parameters

- `in_desc`: Pointer to a `BNNSImageStackDescriptor` struct describing the input
- `out_desc`: Pointer to a `v` struct describing the output
- `layer_params`: Pointer to a `BNNSPoolingLayerParameters` struct describing the layer parameters
- `filter_params`: Pointer to a `BNNSFilterParameters` struct describing the filter parameters

<a id="return-value"></a>

## Return Value

A BNNSFilter object representing a pooling filter configured with the specified  parameters

## See Also

### Pooling layers

- [BNNSPoolingLayerParameters](bnnspoolinglayerparameters.md): Deprecated. A structure containing pooling layer parameters.
- [BNNSPoolingFunction](bnnspoolingfunction.md): Constants that describe pooling functions.
- [BNNSLayerParametersPooling](bnnslayerparameterspooling.md): Deprecated. A structure that contains the parameters of a pooling layer.
- [BNNSFilterCreateLayerPooling](bnnsfiltercreatelayerpooling%28____%29.md): Deprecated. Returns a new pooling layer.
- [BNNSPoolingFilterApplyBatch](bnnspoolingfilterapplybatch%28________________%29.md): Deprecated. Applies a pooling filter to a set of input objects, writing the result to a set of output objects.
- [BNNSPoolingFilterApplyBackwardBatch](bnnspoolingfilterapplybackwardbatch%28__________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients.
- [BNNSPoolingFilterApplyBatchEx](bnnspoolingfilterapplybatchex%28__________________%29.md): Deprecated. Applies a pooling filter to a set of input objects with support for multiple data types for indices.
- [BNNSPoolingFilterApplyBackwardBatchEx](bnnspoolingfilterapplybackwardbatchex%28____________________________%29.md): Deprecated. Applies a pooling filter backward to generate gradients with support for multiple data types for indices.
