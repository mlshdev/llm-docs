> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnslayerparametersnormalization/normalization_axis](https://developer.apple.com/documentation/accelerate/bnnslayerparametersnormalization/normalization_axis)

# normalization_axis (Swift)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 14.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0) · watchOS 7.0+ (deprecated in 11.0)

The axis on which a layer normalization operation starts normalization.

> Use BNNSGraph\* APIs

## Declaration

```swift
var normalization_axis: Int
```

## See Also

### Instance Properties

- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [beta_desc](beta_desc.md): Deprecated. The descriptor of the beta or bias.
- [gamma_desc](gamma_desc.md): Deprecated. The descriptor of the gamma or scale.
- [moving_mean_desc](moving_mean_desc.md): Deprecated. The descriptor of the moving mean.
- [moving_variance_desc](moving_variance_desc.md): Deprecated. The descriptor of the moving variance.
- [momentum](momentum.md): Deprecated. A value, between 0 and 1, the normalization operation uses to update the moving mean and moving variance during training.
- [epsilon](epsilon.md): Deprecated. The epsilon in the computation of the standard deviation.
- [activation](activation.md): Deprecated. The activation function that the layer applies to the output.
- [num_groups](num_groups.md): Deprecated. The number of groups over which the layer computes normalization statistics.

# normalization_axis (Objective-C)

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The axis on which a layer normalization operation starts normalization.

## Declaration

```objectivec
size_t normalization_axis;
```

## See Also

### Instance Properties

- [i_desc](i_desc.md): Deprecated. The descriptor of the input.
- [o_desc](o_desc.md): Deprecated. The descriptor of the output.
- [beta_desc](beta_desc.md): Deprecated. The descriptor of the beta or bias.
- [gamma_desc](gamma_desc.md): Deprecated. The descriptor of the gamma or scale.
- [moving_mean_desc](moving_mean_desc.md): Deprecated. The descriptor of the moving mean.
- [moving_variance_desc](moving_variance_desc.md): Deprecated. The descriptor of the moving variance.
- [momentum](momentum.md): Deprecated. A value, between 0 and 1, the normalization operation uses to update the moving mean and moving variance during training.
- [epsilon](epsilon.md): Deprecated. The epsilon in the computation of the standard deviation.
- [activation](activation.md): Deprecated. The activation function that the layer applies to the output.
- [num_groups](num_groups.md): Deprecated. The number of groups over which the layer computes normalization statistics.
