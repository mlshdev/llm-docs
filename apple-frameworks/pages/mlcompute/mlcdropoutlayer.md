> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcdropoutlayer](https://developer.apple.com/documentation/mlcompute/mlcdropoutlayer)

# MLCDropoutLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that deactivates neurons randomly to avoid overfitting.

## Declaration

```swift
class MLCDropoutLayer
```

## Topics

### Creating Dropout Layers

- [init(rate:seed:)](mlcdropoutlayer/init%28rate_seed_%29.md): Deprecated. Creates a dropout layer with the probability rate and random number generator seed you specify.

### Inspecting a Dropout Layer

- [rate](mlcdropoutlayer/rate.md): Deprecated. The dropout rate you use for each element.
- [seed](mlcdropoutlayer/seed.md): Deprecated. The seed you use to generate random numbers.

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

- [MLCLayerNormalizationLayer](mlclayernormalizationlayer.md): Deprecated. A layer that applies layer normalization over inputs.
- [MLCBatchNormalizationLayer](mlcbatchnormalizationlayer.md): Deprecated. A layer that normalizes a batch of inputs.
- [MLCGroupNormalizationLayer](mlcgroupnormalizationlayer.md): Deprecated. A layer that divides the channels into groups for normalization.
- [MLCInstanceNormalizationLayer](mlcinstancenormalizationlayer.md): Deprecated. A layer that normalizes all features of one channel.

# MLCDropoutLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that deactivates neurons randomly to avoid overfitting.

## Declaration

```objectivec
@interface MLCDropoutLayer : MLCLayer
```

## Topics

### Creating Dropout Layers

- [layerWithRate:seed:](mlcdropoutlayer/init%28rate_seed_%29.md): Deprecated. Creates a dropout layer with the probability rate and random number generator seed you specify.

### Inspecting a Dropout Layer

- [rate](mlcdropoutlayer/rate.md): Deprecated. The dropout rate you use for each element.
- [seed](mlcdropoutlayer/seed.md): Deprecated. The seed you use to generate random numbers.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Normalization Layers

- [MLCLayerNormalizationLayer](mlclayernormalizationlayer.md): Deprecated. A layer that applies layer normalization over inputs.
- [MLCBatchNormalizationLayer](mlcbatchnormalizationlayer.md): Deprecated. A layer that normalizes a batch of inputs.
- [MLCGroupNormalizationLayer](mlcgroupnormalizationlayer.md): Deprecated. A layer that divides the channels into groups for normalization.
- [MLCInstanceNormalizationLayer](mlcinstancenormalizationlayer.md): Deprecated. A layer that normalizes all features of one channel.
