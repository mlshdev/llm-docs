> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsactivation](https://developer.apple.com/documentation/accelerate/bnnsactivation)

# BNNSActivation (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of parameters that describe common activation functions.

## Declaration

```swift
struct BNNSActivation
```

## Topics

### Initializers

- [init()](bnnsactivation/init%28%29.md): Returns a new common activation function parameters structure.
- [init(function:alpha:beta:)](bnnsactivation/init%28function_alpha_beta_%29.md): Deprecated. Returns a new common activation function parameters structure that uses the specified function, alpha, and beta.
- [init(function:alpha:beta:iscale:ioffset:ishift:iscale_per_channel:ioffset_per_channel:ishift_per_channel:)](bnnsactivation/init%28function_alpha_beta_iscale_ioffset_ishift_iscale_per_channel_ioffset_per_channel_ishift_per_channel_%29.md): Returns a new common activation function parameters structure that uses the specified function, alpha, beta, integer scale, offset, and shift.

### Instance Properties

- [function](bnnsactivation/function.md): The activation function that the layer applies to its output.
- [alpha](bnnsactivation/alpha.md): The parameter for the alpha of the activation function.
- [beta](bnnsactivation/beta.md): The parameter for the beta of the activation function.
- [iscale](bnnsactivation/iscale.md): Scale for integer functions.
- [ioffset](bnnsactivation/ioffset.md): Offset for integer functions.
- [ishift](bnnsactivation/ishift.md): Shift for integer functions.
- [iscale_per_channel](bnnsactivation/iscale_per_channel.md): Scale per channel for integer functions.
- [ioffset_per_channel](bnnsactivation/ioffset_per_channel.md): Offset per channel for integer functions.
- [ishift_per_channel](bnnsactivation/ishift_per_channel.md): Shift per channel for integer functions.

### Type Methods

- [integerLinearSaturate(scale:offset:shift:)](bnnsactivation/integerlinearsaturate%28scale_offset_shift_%29.md): Deprecated. Returns an activation function that computes an arithmetic shift, preserving sign.
- [integerLinearSaturatePerChannel(scale:offset:shift:)](bnnsactivation/integerlinearsaturateperchannel%28scale_offset_shift_%29.md): Deprecated. Returns an activation function that computes an arithmetic shift, preserving sign for each channel.

### Type Properties

- [identity](bnnsactivation/identity.md): Deprecated. Identity activation function.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Activation layers

- [BNNSFilterCreateVectorActivationLayer(\_:\_:\_:\_:)](bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNS.ActivationLayer](bnns/activationlayer.md): Deprecated. A layer object that wraps an activation filter and manages its deinitialization.
- [BNNSActivationFunction](bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSLayerParametersActivation](bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSFilterCreateLayerActivation(\_:\_:)](bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
- [BNNSDirectApplyActivationBatch(\_:\_:\_:\_:\_:)](bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.
- [applyActivation(activation:axes:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_axes_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies an activation function on the specified axes.
- [applyActivation(activation:input:output:batchSize:filterParameters:)](bnns/applyactivation%28activation_input_output_batchsize_filterparameters_%29.md): Deprecated. Applies the specified activation function.

# BNNSActivation (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of parameters that describe common activation functions.

## Declaration

```objectivec
typedef struct { ... } BNNSActivation;
```

## Topics

### Instance Properties

- [function](bnnsactivation/function.md): The activation function that the layer applies to its output.
- [alpha](bnnsactivation/alpha.md): The parameter for the alpha of the activation function.
- [beta](bnnsactivation/beta.md): The parameter for the beta of the activation function.
- [iscale](bnnsactivation/iscale.md): Scale for integer functions.
- [ioffset](bnnsactivation/ioffset.md): Offset for integer functions.
- [ishift](bnnsactivation/ishift.md): Shift for integer functions.
- [iscale_per_channel](bnnsactivation/iscale_per_channel.md): Scale per channel for integer functions.
- [ioffset_per_channel](bnnsactivation/ioffset_per_channel.md): Offset per channel for integer functions.
- [ishift_per_channel](bnnsactivation/ishift_per_channel.md): Shift per channel for integer functions.

## See Also

### Activation layers

- [BNNSFilterCreateVectorActivationLayer](bnnsfiltercreatevectoractivationlayer%28________%29.md): Deprecated.
- [BNNSActivationFunction](bnnsactivationfunction.md): Constants that describe activation functions.
- [BNNSLayerParametersActivation](bnnslayerparametersactivation.md): Deprecated. A set of parameters that define an activation layer.
- [BNNSFilterCreateLayerActivation](bnnsfiltercreatelayeractivation%28____%29.md): Deprecated. Returns a new activation layer.
- [BNNSDirectApplyActivationBatch](bnnsdirectapplyactivationbatch%28__________%29.md): Deprecated. Applies an activation filter to a set of input objects, writing out the result to a set of output objects.
