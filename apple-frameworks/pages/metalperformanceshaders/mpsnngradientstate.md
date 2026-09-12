> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnngradientstate](https://developer.apple.com/documentation/metalperformanceshaders/mpsnngradientstate)

# MPSNNGradientState (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A class representing the state of a gradient kernel when it was encoded.

## Declaration

```swift
class MPSNNGradientState
```

## Relationships

### Inherits From

- [MPSState](mpsstate.md)

### Inherited By

- [MPSCNNBatchNormalizationState](mpscnnbatchnormalizationstate.md)
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md)
- [MPSCNNDropoutGradientState](mpscnndropoutgradientstate.md)
- [MPSCNNGroupNormalizationGradientState](mpscnngroupnormalizationgradientstate.md)
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Instance Methods

- [encode(to:sourceImages:)](mpsnngraph/encode%28to_sourceimages_%29.md)
- [encode(to:sourceImages:sourceStates:intermediateImages:destinationStates:)](mpsnngraph/encode%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [MPSState](mpsstate.md): An opaque data container for large storage in MPS CNN filters.
- [MPSNNBinaryGradientState](mpsnnbinarygradientstate.md): A class representing the state of a gradient binary kernel when it was encoded.
- [executeAsync(withSourceImages:completionHandler:)](mpsnngraph/executeasync%28withsourceimages_completionhandler_%29.md)
- [MPSNNGraphCompletionHandler](mpsnngraphcompletionhandler.md): A notification when an asynchronous graph execution has finished.
- [encodeBatch(to:sourceImages:sourceStates:)](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_%29.md)
- [encodeBatch(to:sourceImages:sourceStates:intermediateImages:destinationStates:)](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [readCountForSourceImage(at:)](mpsnngraph/readcountforsourceimage%28at_%29.md)
- [readCountForSourceState(at:)](mpsnngraph/readcountforsourcestate%28at_%29.md)
- [reloadFromDataSources()](mpsnngraph/reloadfromdatasources%28%29.md)

# MPSNNGradientState (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

A class representing the state of a gradient kernel when it was encoded.

## Declaration

```objectivec
@interface MPSNNGradientState : MPSState
```

## Relationships

### Inherits From

- [MPSState](mpsstate.md)

### Inherited By

- [MPSCNNBatchNormalizationState](mpscnnbatchnormalizationstate.md)
- [MPSCNNConvolutionGradientState](mpscnnconvolutiongradientstate.md)
- [MPSCNNDropoutGradientState](mpscnndropoutgradientstate.md)
- [MPSCNNGroupNormalizationGradientState](mpscnngroupnormalizationgradientstate.md)
- [MPSCNNInstanceNormalizationGradientState](mpscnninstancenormalizationgradientstate.md)

## See Also

### Instance Methods

- [encodeToCommandBuffer:sourceImages:](mpsnngraph/encode%28to_sourceimages_%29.md)
- [encodeToCommandBuffer:sourceImages:sourceStates:intermediateImages:destinationStates:](mpsnngraph/encode%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [MPSState](mpsstate.md): An opaque data container for large storage in MPS CNN filters.
- [MPSNNBinaryGradientState](mpsnnbinarygradientstate.md): A class representing the state of a gradient binary kernel when it was encoded.
- [executeAsyncWithSourceImages:completionHandler:](mpsnngraph/executeasync%28withsourceimages_completionhandler_%29.md)
- [MPSNNGraphCompletionHandler](mpsnngraphcompletionhandler.md): A notification when an asynchronous graph execution has finished.
- [encodeBatchToCommandBuffer:sourceImages:sourceStates:](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:sourceStates:intermediateImages:destinationStates:](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [readCountForSourceImageAtIndex:](mpsnngraph/readcountforsourceimage%28at_%29.md)
- [readCountForSourceStateAtIndex:](mpsnngraph/readcountforsourcestate%28at_%29.md)
- [reloadFromDataSources](mpsnngraph/reloadfromdatasources%28%29.md)
