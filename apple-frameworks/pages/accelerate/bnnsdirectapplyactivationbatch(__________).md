> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdirectapplyactivationbatch(_:_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsdirectapplyactivationbatch(_:_:_:_:_:))

# BNNSDirectApplyActivationBatch(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies an activation filter to a set of input objects, writing out the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSDirectApplyActivationBatch(_ layer_params: UnsafePointer<BNNSLayerParametersActivation>, _ filter_params: UnsafePointer<BNNSFilterParameters>?, _ batch_size: Int, _ in_stride: Int, _ out_stride: Int) -> Int32
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: Filter runtime parameters.
- `batch_size`: The number of input-output pairs.
- `in_stride`: The increment, in values, between inputs.
- `out_stride`: The increment, in values, between outputs.

<a id="Discussion"></a>

## Discussion

Calling this function is equal to calling [BNNSFilterCreateLayerActivation(\_:\_:)](bnnsfiltercreatelayeractivation%28____%29.md), [BNNSFilterApplyBatch(\_:\_:\_:\_:\_:\_:)](bnnsfilterapplybatch%28____________%29.md), and [BNNSFilterDestroy(\_:)](bnnsfilterdestroy%28__%29.md).

## See Also

### Activation layers

- [BNNSFilterCreateVectorActivationLayer(\_:\_:\_:\_:)](bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNS.ActivationLayer](bnns/activationlayer.md): Deprecated. A layer object that wraps an activation filter and manages its deinitialization.
- [BNNSActivationFunction](bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSActivation](bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSLayerParametersActivation](bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSFilterCreateLayerActivation(\_:\_:)](bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
- [applyActivation(activation:axes:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_axes_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies an activation function on the specified axes.
- [applyActivation(activation:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies the specified activation function.

# BNNSDirectApplyActivationBatch (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Applies an activation filter to a set of input objects, writing out the result to a set of output objects.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
int BNNSDirectApplyActivationBatch(const BNNSLayerParametersActivation *layer_params, const BNNSFilterParameters *filter_params, size_t batch_size, size_t in_stride, size_t out_stride);
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: Filter runtime parameters.
- `batch_size`: The number of input-output pairs.
- `in_stride`: The increment, in values, between inputs.
- `out_stride`: The increment, in values, between outputs.

<a id="Discussion"></a>

## Discussion

Calling this function is equal to calling [BNNSFilterCreateLayerActivation](bnnsfiltercreatelayeractivation%28____%29.md), [BNNSFilterApplyBatch](bnnsfilterapplybatch%28____________%29.md), and [BNNSFilterDestroy](bnnsfilterdestroy%28__%29.md).

## See Also

### Activation layers

- [BNNSFilterCreateVectorActivationLayer](bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNSActivationFunction](bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSActivation](bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSLayerParametersActivation](bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSFilterCreateLayerActivation](bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
