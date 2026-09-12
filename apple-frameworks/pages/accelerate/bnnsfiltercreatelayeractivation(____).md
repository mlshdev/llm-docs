> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfiltercreatelayeractivation(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfiltercreatelayeractivation(_:_:))

# BNNSFilterCreateLayerActivation(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new activation layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
func BNNSFilterCreateLayerActivation(_ layer_params: UnsafePointer<BNNSLayerParametersActivation>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> BNNSFilter?
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: The filter runtime parameters.

## See Also

### Activation layers

- [BNNSFilterCreateVectorActivationLayer(\_:\_:\_:\_:)](bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNS.ActivationLayer](bnns/activationlayer.md): Deprecated. A layer object that wraps an activation filter and manages its deinitialization.
- [BNNSActivationFunction](bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSActivation](bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSLayerParametersActivation](bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSDirectApplyActivationBatch(\_:\_:\_:\_:\_:)](bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.
- [applyActivation(activation:axes:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_axes_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies an activation function on the specified axes.
- [applyActivation(activation:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies the specified activation function.

# BNNSFilterCreateLayerActivation (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

Returns a new activation layer.

> Use BNNSGraph\* APIs

## Declaration

```objectivec
BNNSFilterBNNSFilterCreateLayerActivation(const BNNSLayerParametersActivation *layer_params, const BNNSFilterParameters *filter_params);
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: The filter runtime parameters.

## See Also

### Activation layers

- [BNNSFilterCreateVectorActivationLayer](bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNSActivationFunction](bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSActivation](bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSLayerParametersActivation](bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSDirectApplyActivationBatch](bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.
