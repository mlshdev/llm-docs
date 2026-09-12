> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersreduction](https://developer.apple.com/documentation/accelerate/bnnslayerparametersreduction)

# BNNSLayerParametersReduction (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of parameters that define a reduction layer.

## Declaration

```swift
struct BNNSLayerParametersReduction
```

## Topics

### Initializers

- [init(i_desc:o_desc:w_desc:reduce_func:epsilon:)](bnnslayerparametersreduction/init%28i_desc_o_desc_w_desc_reduce_func_epsilon_%29.md): Returns a structure containing the parameters of a reduction layer from the specified parameters.
- [init()](bnnslayerparametersreduction/init%28%29.md): Returns a structure containing the parameters of a reduction layer.

### Instance Properties

- [i_desc](bnnslayerparametersreduction/i_desc.md): The descriptor of the input.
- [o_desc](bnnslayerparametersreduction/o_desc.md): The descriptor of the output.
- [w_desc](bnnslayerparametersreduction/w_desc.md): The descriptor of the weights.
- [reduce_func](bnnslayerparametersreduction/reduce_func.md): The variable that specifies the reduction function.
- [epsilon](bnnslayerparametersreduction/epsilon.md): A value that the operation adds to each element when computing the sum of logarithms.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Reduction layers

- [BNNS.ReductionLayer](bnns/reductionlayer.md): Deprecated. A layer object that wraps a reduction filter and manages its deinitialization.
- [applyReduction(\_:input:output:weights:filterParameters:)](bnns/applyreduction%28__input_output_weights_filterparameters_%29.md): Applies the specified reduction function.
- [BNNSReduceFunction](bnnsreducefunction.md): Constants that describe reduction functions.
- [BNNSFilterCreateLayerReduction(\_:\_:)](bnnsfiltercreatelayerreduction%28____%29.md): Deprecated. Returns a new reduction layer.
- [BNNSDirectApplyReduction(\_:\_:)](bnnsdirectapplyreduction%28____%29.md): Applies a reduction operation directly to an input tensor.

# BNNSLayerParametersReduction (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of parameters that define a reduction layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersReduction;
```

## Topics

### Instance Properties

- [i_desc](bnnslayerparametersreduction/i_desc.md): The descriptor of the input.
- [o_desc](bnnslayerparametersreduction/o_desc.md): The descriptor of the output.
- [w_desc](bnnslayerparametersreduction/w_desc.md): The descriptor of the weights.
- [reduce_func](bnnslayerparametersreduction/reduce_func.md): The variable that specifies the reduction function.
- [epsilon](bnnslayerparametersreduction/epsilon.md): A value that the operation adds to each element when computing the sum of logarithms.

## See Also

### Reduction layers

- [BNNSReduceFunction](bnnsreducefunction.md): Constants that describe reduction functions.
- [BNNSFilterCreateLayerReduction](bnnsfiltercreatelayerreduction%28____%29.md): Deprecated. Returns a new reduction layer.
- [BNNSDirectApplyReduction](bnnsdirectapplyreduction%28____%29.md): Applies a reduction operation directly to an input tensor.
