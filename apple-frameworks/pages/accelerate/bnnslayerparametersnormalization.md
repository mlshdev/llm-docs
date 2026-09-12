> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersnormalization](https://developer.apple.com/documentation/accelerate/bnnslayerparametersnormalization)

# BNNSLayerParametersNormalization (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

A structure that contains the parameters of a normalization layer.

> Use BNNSGraph\* APIs

## Declaration

```swift
struct BNNSLayerParametersNormalization
```

## Topics

### Initializers

- [init(i_desc:o_desc:beta_desc:gamma_desc:moving_mean_desc:moving_variance_desc:momentum:epsilon:activation:num_groups:normalization_axis:)](bnnslayerparametersnormalization/init%28i_desc_o_desc_beta_desc_gamma_desc_moving_mean_desc_moving_variance_desc_momentum_epsilon_activation_num_groups_normalization_axis_%29.md): Deprecated. Returns a new normalization layer parameters structure from the specified parameters.
- [init()](bnnslayerparametersnormalization/init%28%29.md): Deprecated. Returns a new normalization layer parameters structure.

### Instance Properties

- [i_desc](bnnslayerparametersnormalization/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparametersnormalization/o_desc.md): Deprecated. The descriptor of the output.
- [beta_desc](bnnslayerparametersnormalization/beta_desc.md): Deprecated. The descriptor of the beta or bias.
- [gamma_desc](bnnslayerparametersnormalization/gamma_desc.md): Deprecated. The descriptor of the gamma or scale.
- [moving_mean_desc](bnnslayerparametersnormalization/moving_mean_desc.md): Deprecated. The descriptor of the moving mean.
- [moving_variance_desc](bnnslayerparametersnormalization/moving_variance_desc.md): Deprecated. The descriptor of the moving variance.
- [momentum](bnnslayerparametersnormalization/momentum.md): Deprecated. A value, between 0 and 1, the normalization operation uses to update the moving mean and moving variance during training.
- [epsilon](bnnslayerparametersnormalization/epsilon.md): Deprecated. The epsilon in the computation of the standard deviation.
- [activation](bnnslayerparametersnormalization/activation.md): Deprecated. The activation function that the layer applies to the output.
- [num_groups](bnnslayerparametersnormalization/num_groups.md): Deprecated. The number of groups over which the layer computes normalization statistics.
- [normalization_axis](bnnslayerparametersnormalization/normalization_axis.md): Deprecated. The axis on which a layer normalization operation starts normalization.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Normalization layers

- [BNNS.NormalizationLayer](bnns/normalizationlayer.md): Deprecated. A layer object that wraps a normalization filter and manages its deinitialization.
- [BNNSFilterCreateLayerNormalization(\_:\_:\_:)](bnnsfiltercreatelayernormalization%28______%29.md): Deprecated. Returns a new normalization layer.
- [BNNSNormalizationFilterApplyBatch(\_:\_:\_:\_:\_:\_:\_:)](bnnsnormalizationfilterapplybatch%28______________%29.md): Deprecated. Applies a normalization filter to a set of input objects, writing the result to a set of output objects.
- [BNNSNormalizationFilterApplyBackwardBatch(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](bnnsnormalizationfilterapplybackwardbatch%28____________________%29.md): Deprecated. Applies a normalization filter backward to generate gradients.

# BNNSLayerParametersNormalization (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure that contains the parameters of a normalization layer.

## Declaration

```objectivec
typedef struct { ... } BNNSLayerParametersNormalization;
```

## Topics

### Instance Properties

- [i_desc](bnnslayerparametersnormalization/i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](bnnslayerparametersnormalization/o_desc.md): Deprecated. The descriptor of the output.
- [beta_desc](bnnslayerparametersnormalization/beta_desc.md): Deprecated. The descriptor of the beta or bias.
- [gamma_desc](bnnslayerparametersnormalization/gamma_desc.md): Deprecated. The descriptor of the gamma or scale.
- [moving_mean_desc](bnnslayerparametersnormalization/moving_mean_desc.md): Deprecated. The descriptor of the moving mean.
- [moving_variance_desc](bnnslayerparametersnormalization/moving_variance_desc.md): Deprecated. The descriptor of the moving variance.
- [momentum](bnnslayerparametersnormalization/momentum.md): Deprecated. A value, between 0 and 1, the normalization operation uses to update the moving mean and moving variance during training.
- [epsilon](bnnslayerparametersnormalization/epsilon.md): Deprecated. The epsilon in the computation of the standard deviation.
- [activation](bnnslayerparametersnormalization/activation.md): Deprecated. The activation function that the layer applies to the output.
- [num_groups](bnnslayerparametersnormalization/num_groups.md): Deprecated. The number of groups over which the layer computes normalization statistics.
- [normalization_axis](bnnslayerparametersnormalization/normalization_axis.md): Deprecated. The axis on which a layer normalization operation starts normalization.

## See Also

### Normalization layers

- [BNNSFilterCreateLayerNormalization](bnnsfiltercreatelayernormalization%28______%29.md): Deprecated. Returns a new normalization layer.
- [BNNSNormalizationFilterApplyBatch](bnnsnormalizationfilterapplybatch%28______________%29.md): Deprecated. Applies a normalization filter to a set of input objects, writing the result to a set of output objects.
- [BNNSNormalizationFilterApplyBackwardBatch](bnnsnormalizationfilterapplybackwardbatch%28____________________%29.md): Deprecated. Applies a normalization filter backward to generate gradients.
