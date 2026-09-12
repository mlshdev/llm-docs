> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdirectapplyreduction(_:_:)](https://developer.apple.com/documentation/accelerate/bnnsdirectapplyreduction(_:_:))

# BNNSDirectApplyReduction(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Applies a reduction operation directly to an input tensor.

## Declaration

```swift
func BNNSDirectApplyReduction(_ layer_params: UnsafePointer<BNNSLayerParametersReduction>, _ filter_params: UnsafePointer<BNNSFilterParameters>?) -> Int32
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: Filter runtime parameters.

## See Also

### Reduction layers

- [BNNS.ReductionLayer](bnns/reductionlayer.md): Deprecated. A layer object that wraps a reduction filter and manages its deinitialization.
- [applyReduction(\_:input:output:weights:filterParameters:)](bnns/applyreduction%28__input_output_weights_filterparameters_%29.md): Applies the specified reduction function.
- [BNNSReduceFunction](bnnsreducefunction.md): Constants that describe reduction functions.
- [BNNSLayerParametersReduction](bnnslayerparametersreduction.md): A set of parameters that define a reduction layer.
- [BNNSFilterCreateLayerReduction(\_:\_:)](bnnsfiltercreatelayerreduction%28____%29.md): Deprecated. Returns a new reduction layer.

# BNNSDirectApplyReduction (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Applies a reduction operation directly to an input tensor.

## Declaration

```objectivec
int BNNSDirectApplyReduction(const BNNSLayerParametersReduction *layer_params, const BNNSFilterParameters *filter_params);
```

## Parameters

- `layer_params`: Layer parameters.
- `filter_params`: Filter runtime parameters.

## See Also

### Reduction layers

- [BNNSReduceFunction](bnnsreducefunction.md): Constants that describe reduction functions.
- [BNNSLayerParametersReduction](bnnslayerparametersreduction.md): A set of parameters that define a reduction layer.
- [BNNSFilterCreateLayerReduction](bnnsfiltercreatelayerreduction%28____%29.md): Deprecated. Returns a new reduction layer.
