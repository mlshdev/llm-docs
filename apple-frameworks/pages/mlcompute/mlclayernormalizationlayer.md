> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclayernormalizationlayer](https://developer.apple.com/documentation/mlcompute/mlclayernormalizationlayer)

# MLCLayerNormalizationLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that applies layer normalization over inputs.

## Declaration

```swift
class MLCLayerNormalizationLayer
```

## Topics

### Creating Layer Normalization Layers

- [init(normalizedShape:beta:gamma:varianceEpsilon:)](mlclayernormalizationlayer/init%28normalizedshape_beta_gamma_varianceepsilon_%29-5i2aa.md): Deprecated. Creates a normalization layer with a shape, beta and gamma tensors, and variance epsilon you specify.
- [init(normalizedShape:beta:gamma:varianceEpsilon:)](mlclayernormalizationlayer/init%28normalizedshape_beta_gamma_varianceepsilon_%29-28e6g.md): Deprecated. Creates a normalization layer with a shape, optional beta and gamma tensors, and variance epsilon you specify.

### Inspecting Layer Normalization Layers

- [normalizedShape](mlclayernormalizationlayer/normalizedshape-8ujvv.md): Deprecated. The shape of the axes where normalization occurs.
- [beta](mlclayernormalizationlayer/beta.md): Deprecated. The beta tensor.
- [gamma](mlclayernormalizationlayer/gamma.md): Deprecated. The gamma tensor.
- [varianceEpsilon](mlclayernormalizationlayer/varianceepsilon.md): Deprecated. The variance epsilon you use for numerical stability.
- [betaParameter](mlclayernormalizationlayer/betaparameter.md): Deprecated. The beta tensor parameter you use for optimizer updates.
- [gammaParameter](mlclayernormalizationlayer/gammaparameter.md): Deprecated. The gamma tensor parameter you use for optimizer updates.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Normalization Layers

- [MLCBatchNormalizationLayer](mlcbatchnormalizationlayer.md): Deprecated. A layer that normalizes a batch of inputs.
- [MLCGroupNormalizationLayer](mlcgroupnormalizationlayer.md): Deprecated. A layer that divides the channels into groups for normalization.
- [MLCInstanceNormalizationLayer](mlcinstancenormalizationlayer.md): Deprecated. A layer that normalizes all features of one channel.
- [MLCDropoutLayer](mlcdropoutlayer.md): Deprecated. A layer that deactivates neurons randomly to avoid overfitting.

# MLCLayerNormalizationLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that applies layer normalization over inputs.

## Declaration

```objectivec
@interface MLCLayerNormalizationLayer : MLCLayer
```

## Topics

### Inspecting Layer Normalization Layers

- [normalizedShape](mlclayernormalizationlayer/normalizedshape-2cz6k.md): Deprecated. The shape of the axes where normalization occurs.
- [beta](mlclayernormalizationlayer/beta.md): Deprecated. The beta tensor.
- [gamma](mlclayernormalizationlayer/gamma.md): Deprecated. The gamma tensor.
- [varianceEpsilon](mlclayernormalizationlayer/varianceepsilon.md): Deprecated. The variance epsilon you use for numerical stability.
- [betaParameter](mlclayernormalizationlayer/betaparameter.md): Deprecated. The beta tensor parameter you use for optimizer updates.
- [gammaParameter](mlclayernormalizationlayer/gammaparameter.md): Deprecated. The gamma tensor parameter you use for optimizer updates.

### Type Methods

- [layerWithNormalizedShape:beta:gamma:varianceEpsilon:](mlclayernormalizationlayer/layerwithnormalizedshape_beta_gamma_varianceepsilon_.md): Deprecated. Creates a normalization layer with a shape, beta and gamma tensors, and variance epsilon you specify.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Normalization Layers

- [MLCBatchNormalizationLayer](mlcbatchnormalizationlayer.md): Deprecated. A layer that normalizes a batch of inputs.
- [MLCGroupNormalizationLayer](mlcgroupnormalizationlayer.md): Deprecated. A layer that divides the channels into groups for normalization.
- [MLCInstanceNormalizationLayer](mlcinstancenormalizationlayer.md): Deprecated. A layer that normalizes all features of one channel.
- [MLCDropoutLayer](mlcdropoutlayer.md): Deprecated. A layer that deactivates neurons randomly to avoid overfitting.
