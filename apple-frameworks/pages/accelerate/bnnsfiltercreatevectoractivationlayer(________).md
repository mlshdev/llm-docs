> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsfiltercreatevectoractivationlayer(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/bnnsfiltercreatevectoractivationlayer(_:_:_:_:))

# BNNSFilterCreateVectorActivationLayer(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.13+ (deprecated in 11.0) · tvOS 11.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 7.0)

> Use [BNNSFilterCreateLayerActivation(\_:\_:)](bnnsfiltercreatelayeractivation%28____%29.md) instead.

## Declaration

```swift
func BNNSFilterCreateVectorActivationLayer(_ in_desc: UnsafePointer<BNNSVectorDescriptor>, _ out_desc: UnsafePointer<BNNSVectorDescriptor>, _ activation: UnsafePointer<BNNSActivation>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> BNNSFilter?
```

## See Also

### Activation layers

- [BNNS.ActivationLayer](bnns/activationlayer.md): Deprecated. A layer object that wraps an activation filter and manages its deinitialization.
- [BNNSActivationFunction](bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSActivation](bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSLayerParametersActivation](bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSFilterCreateLayerActivation(\_:\_:)](bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
- [BNNSDirectApplyActivationBatch(\_:\_:\_:\_:\_:)](bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.
- [applyActivation(activation:axes:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_axes_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies an activation function on the specified axes.
- [applyActivation(activation:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies the specified activation function.

# BNNSFilterCreateVectorActivationLayer (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · macOS 10.13+ (deprecated in 11.0) · tvOS 11.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 7.0)

> Use [BNNSFilterCreateLayerActivation](bnnsfiltercreatelayeractivation%28____%29.md) instead.

## Declaration

```objectivec
BNNSFilterBNNSFilterCreateVectorActivationLayer(const BNNSVectorDescriptor *in_desc, const BNNSVectorDescriptor *out_desc, const BNNSActivation *activation, const BNNSFilterParameters *filter_params);
```

## See Also

### Activation layers

- [BNNSActivationFunction](bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSActivation](bnnsactivation.md): A set of parameters that describe common activation functions.
- [BNNSLayerParametersActivation](bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSFilterCreateLayerActivation](bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
- [BNNSDirectApplyActivationBatch](bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.
