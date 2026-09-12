> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnngroupnormalizationdatasource](https://developer.apple.com/documentation/metalperformanceshaders/mpscnngroupnormalizationdatasource)

# MPSCNNGroupNormalizationDataSource (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
protocol MPSCNNGroupNormalizationDataSource : NSCopying, NSObjectProtocol
```

## Topics

### Initializers

- [init(coder:)](mpscnngroupnormalizationdatasource/init%28coder_%29.md)

### Instance Properties

- [numberOfFeatureChannels](mpscnngroupnormalizationdatasource/numberoffeaturechannels.md)
- [numberOfGroups](mpscnngroupnormalizationdatasource/numberofgroups.md)

### Instance Methods

- [beta()](mpscnngroupnormalizationdatasource/beta%28%29.md)
- [copy(with:device:)](mpscnngroupnormalizationdatasource/copy%28with_device_%29.md)
- [encode(with:)](mpscnngroupnormalizationdatasource/encode%28with_%29.md)
- [epsilon()](mpscnngroupnormalizationdatasource/epsilon%28%29.md)
- [gamma()](mpscnngroupnormalizationdatasource/gamma%28%29.md)
- [label()](mpscnngroupnormalizationdatasource/label%28%29.md)
- [updateGammaAndBeta(with:groupNormalizationStateBatch:)](mpscnngroupnormalizationdatasource/updategammaandbeta%28with_groupnormalizationstatebatch_%29.md)
- [updateGammaAndBeta(withGroupNormalizationStateBatch:)](mpscnngroupnormalizationdatasource/updategammaandbeta%28withgroupnormalizationstatebatch_%29.md)

### Type Properties

- [supportsSecureCoding](mpscnngroupnormalizationdatasource/supportssecurecoding.md)

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MPSCNNGroupNormalizationDataSource (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@protocol MPSCNNGroupNormalizationDataSource <NSObject, NSCopying>
```

## Topics

### Instance Properties

- [numberOfFeatureChannels](mpscnngroupnormalizationdatasource/numberoffeaturechannels.md)
- [numberOfGroups](mpscnngroupnormalizationdatasource/numberofgroups.md)

### Instance Methods

- [beta](mpscnngroupnormalizationdatasource/beta%28%29.md)
- [copyWithZone:device:](mpscnngroupnormalizationdatasource/copy%28with_device_%29.md)
- [encodeWithCoder:](mpscnngroupnormalizationdatasource/encode%28with_%29.md)
- [epsilon](mpscnngroupnormalizationdatasource/epsilon%28%29.md)
- [gamma](mpscnngroupnormalizationdatasource/gamma%28%29.md)
- [initWithCoder:](mpscnngroupnormalizationdatasource/init%28coder_%29.md)
- [label](mpscnngroupnormalizationdatasource/label%28%29.md)
- [updateGammaAndBetaWithCommandBuffer:groupNormalizationStateBatch:](mpscnngroupnormalizationdatasource/updategammaandbeta%28with_groupnormalizationstatebatch_%29.md)
- [updateGammaAndBetaWithGroupNormalizationStateBatch:](mpscnngroupnormalizationdatasource/updategammaandbeta%28withgroupnormalizationstatebatch_%29.md)

### Type Properties

- [supportsSecureCoding](mpscnngroupnormalizationdatasource/supportssecurecoding.md)

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)
- [NSObject](../objectivec/nsobjectprotocol.md)
