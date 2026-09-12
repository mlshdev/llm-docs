> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfiltercreateconvolutionlayer(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfiltercreateconvolutionlayer(_:_:_:_:))

# BNNSFilterCreateConvolutionLayer(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Returns a convolution filter, initialized with input, output, layer, and filter parameters.

> Use [BNNSFilterCreateLayerConvolution(\_:\_:)](bnnsfiltercreatelayerconvolution%28____%29.md) instead.

## Declaration

```swift
func BNNSFilterCreateConvolutionLayer(_ in_desc: UnsafePointer<BNNSImageStackDescriptor>, _ out_desc: UnsafePointer<BNNSImageStackDescriptor>, _ layer_params: UnsafePointer<BNNSConvolutionLayerParameters>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> BNNSFilter?
```

## Parameters

- `in_desc`: Pointer to a `BNNSImageStackDescriptor` struct describing the input
- `out_desc`: Pointer to a `BNNSImageStackDescriptor` struct describing the output
- `layer_params`: Pointer to a `BNNSConvolutionLayerParameters` struct describing the layer parameters
- `filter_params`: Pointer to a `BNNSFilterParameters` struct describing the filter parameters

<a id="return-value"></a>

## Return Value

A BNNSFilter object representing a convolution filter configured with the specified  parameters

## See Also

### Convolution layers

- [BNNSConvolutionLayerParameters](bnnsconvolutionlayerparameters.md): Deprecated. A structure containing convolution parameters.
- [BNNS.ConvolutionLayer](bnns/convolutionlayer.md): Deprecated. A layer object that wraps a convolution filter and manages its deinitialization.
- [BNNSLayerParametersConvolution](bnnslayerparametersconvolution.md): Deprecated. A structure that contains the parameters of a convolution layer.
- [BNNSFilterCreateLayerConvolution(\_:\_:)](bnnsfiltercreatelayerconvolution%28____%29.md): Deprecated. Returns a new convolution layer.
- [BNNSFilterCreateLayerTransposedConvolution(\_:\_:)](bnnsfiltercreatelayertransposedconvolution%28____%29.md): Deprecated. Returns a new transposed convolution layer.

# BNNSFilterCreateConvolutionLayer (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 10.0+ (deprecated in 14.0) · iPadOS 10.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.12+ (deprecated in 11.0) · tvOS 10.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 7.0)

Returns a convolution filter, initialized with input, output, layer, and filter parameters.

> Use [BNNSFilterCreateLayerConvolution](bnnsfiltercreatelayerconvolution%28____%29.md) instead.

## Declaration

```objectivec
BNNSFilterBNNSFilterCreateConvolutionLayer(const BNNSImageStackDescriptor *in_desc, const BNNSImageStackDescriptor *out_desc, const BNNSConvolutionLayerParameters *layer_params, const BNNSFilterParameters *filter_params);
```

## Parameters

- `in_desc`: Pointer to a `BNNSImageStackDescriptor` struct describing the input
- `out_desc`: Pointer to a `BNNSImageStackDescriptor` struct describing the output
- `layer_params`: Pointer to a `BNNSConvolutionLayerParameters` struct describing the layer parameters
- `filter_params`: Pointer to a `BNNSFilterParameters` struct describing the filter parameters

<a id="return-value"></a>

## Return Value

A BNNSFilter object representing a convolution filter configured with the specified  parameters

## See Also

### Convolution layers

- [BNNSConvolutionLayerParameters](bnnsconvolutionlayerparameters.md): Deprecated. A structure containing convolution parameters.
- [BNNSLayerParametersConvolution](bnnslayerparametersconvolution.md): Deprecated. A structure that contains the parameters of a convolution layer.
- [BNNSFilterCreateLayerConvolution](bnnsfiltercreatelayerconvolution%28____%29.md): Deprecated. Returns a new convolution layer.
- [BNNSFilterCreateLayerTransposedConvolution](bnnsfiltercreatelayertransposedconvolution%28____%29.md): Deprecated. Returns a new transposed convolution layer.
