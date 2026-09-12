> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/applyreduction(_:input:output:weights:filterparameters:)](https://developer.apple.com/documentation/accelerate/bnns/applyreduction(_:input:output:weights:filterparameters:))

# applyReduction(\_:input:output:weights:filterParameters:)

**Framework:** Accelerate  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Applies the specified reduction function.

## Declaration

```swift
static func applyReduction(_ reductionFunction: BNNS.ReductionFunction, input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, weights: BNNSNDArrayDescriptor?, filterParameters: BNNSFilterParameters? = nil) throws
```

## Parameters

- `reductionFunction`: The variable that specifies the reduction function.
- `input`: The descriptor of the input.
- `output`: The descriptor of the output.
- `weights`: The descriptor of the weights.
- `filterParameters`: The filter runtime parameters.

## See Also

### Reduction layers

- [BNNS.ReductionLayer](reductionlayer.md): Deprecated. A layer object that wraps a reduction filter and manages its deinitialization.
- [BNNSReduceFunction](../bnnsreducefunction.md): Constants that describe reduction functions.
- [BNNSLayerParametersReduction](../bnnslayerparametersreduction.md): A set of parameters that define a reduction layer.
- [BNNSFilterCreateLayerReduction(\_:\_:)](../bnnsfiltercreatelayerreduction%28____%29.md): Deprecated. Returns a new reduction layer.
- [BNNSDirectApplyReduction(\_:\_:)](../bnnsdirectapplyreduction%28____%29.md): Applies a reduction operation directly to an input tensor.
