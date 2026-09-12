> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnngraphcompletionhandler](https://developer.apple.com/documentation/metalperformanceshaders/mpsnngraphcompletionhandler)

# MPSNNGraphCompletionHandler (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A notification when an asynchronous graph execution has finished.

## Declaration

```swift
typealias MPSNNGraphCompletionHandler = (MPSImage?, (any Error)?) -> Void
```

## See Also

### Instance Methods

- [encode(to:sourceImages:)](mpsnngraph/encode%28to_sourceimages_%29.md)
- [encode(to:sourceImages:sourceStates:intermediateImages:destinationStates:)](mpsnngraph/encode%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [MPSState](mpsstate.md): An opaque data container for large storage in MPS CNN filters.
- [MPSNNBinaryGradientState](mpsnnbinarygradientstate.md): A class representing the state of a gradient binary kernel when it was encoded.
- [MPSNNGradientState](mpsnngradientstate.md): A class representing the state of a gradient kernel when it was encoded.
- [executeAsync(withSourceImages:completionHandler:)](mpsnngraph/executeasync%28withsourceimages_completionhandler_%29.md)
- [encodeBatch(to:sourceImages:sourceStates:)](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_%29.md)
- [encodeBatch(to:sourceImages:sourceStates:intermediateImages:destinationStates:)](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [readCountForSourceImage(at:)](mpsnngraph/readcountforsourceimage%28at_%29.md)
- [readCountForSourceState(at:)](mpsnngraph/readcountforsourcestate%28at_%29.md)
- [reloadFromDataSources()](mpsnngraph/reloadfromdatasources%28%29.md)

# MPSNNGraphCompletionHandler (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A notification when an asynchronous graph execution has finished.

## Declaration

```objectivec
typedef void (^)(MPSImage *, NSError *) MPSNNGraphCompletionHandler;
```

## See Also

### Instance Methods

- [encodeToCommandBuffer:sourceImages:](mpsnngraph/encode%28to_sourceimages_%29.md)
- [encodeToCommandBuffer:sourceImages:sourceStates:intermediateImages:destinationStates:](mpsnngraph/encode%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [MPSState](mpsstate.md): An opaque data container for large storage in MPS CNN filters.
- [MPSNNBinaryGradientState](mpsnnbinarygradientstate.md): A class representing the state of a gradient binary kernel when it was encoded.
- [MPSNNGradientState](mpsnngradientstate.md): A class representing the state of a gradient kernel when it was encoded.
- [executeAsyncWithSourceImages:completionHandler:](mpsnngraph/executeasync%28withsourceimages_completionhandler_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:sourceStates:](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:sourceStates:intermediateImages:destinationStates:](mpsnngraph/encodebatch%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [readCountForSourceImageAtIndex:](mpsnngraph/readcountforsourceimage%28at_%29.md)
- [readCountForSourceStateAtIndex:](mpsnngraph/readcountforsourcestate%28at_%29.md)
- [reloadFromDataSources](mpsnngraph/reloadfromdatasources%28%29.md)
