> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnngraph/encodebatch(to:sourceimages:sourcestates:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnngraph/encodebatch(to:sourceimages:sourcestates:))

# encodeBatch(to:sourceImages:sourceStates:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(to commandBuffer: any MTLCommandBuffer, sourceImages: [[MPSImage]], sourceStates: [[MPSState]]?) -> [MPSImage]?
```

## See Also

### Instance Methods

- [encode(to:sourceImages:)](encode%28to_sourceimages_%29.md)
- [encode(to:sourceImages:sourceStates:intermediateImages:destinationStates:)](encode%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [MPSState](../mpsstate.md): An opaque data container for large storage in MPS CNN filters.
- [MPSNNBinaryGradientState](../mpsnnbinarygradientstate.md): A class representing the state of a gradient binary kernel when it was encoded.
- [MPSNNGradientState](../mpsnngradientstate.md): A class representing the state of a gradient kernel when it was encoded.
- [executeAsync(withSourceImages:completionHandler:)](executeasync%28withsourceimages_completionhandler_%29.md)
- [MPSNNGraphCompletionHandler](../mpsnngraphcompletionhandler.md): A notification when an asynchronous graph execution has finished.
- [encodeBatch(to:sourceImages:sourceStates:intermediateImages:destinationStates:)](encodebatch%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [readCountForSourceImage(at:)](readcountforsourceimage%28at_%29.md)
- [readCountForSourceState(at:)](readcountforsourcestate%28at_%29.md)
- [reloadFromDataSources()](reloadfromdatasources%28%29.md)

# encodeBatchToCommandBuffer:sourceImages:sourceStates: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSImageBatch *) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImages:(NSArray<NSArray<MPSImage *> *> *) sourceImages sourceStates:(NSArray<NSArray<MPSState *> *> *) sourceStates;
```

## See Also

### Instance Methods

- [encodeToCommandBuffer:sourceImages:](encode%28to_sourceimages_%29.md)
- [encodeToCommandBuffer:sourceImages:sourceStates:intermediateImages:destinationStates:](encode%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [MPSState](../mpsstate.md): An opaque data container for large storage in MPS CNN filters.
- [MPSNNBinaryGradientState](../mpsnnbinarygradientstate.md): A class representing the state of a gradient binary kernel when it was encoded.
- [MPSNNGradientState](../mpsnngradientstate.md): A class representing the state of a gradient kernel when it was encoded.
- [executeAsyncWithSourceImages:completionHandler:](executeasync%28withsourceimages_completionhandler_%29.md)
- [MPSNNGraphCompletionHandler](../mpsnngraphcompletionhandler.md): A notification when an asynchronous graph execution has finished.
- [encodeBatchToCommandBuffer:sourceImages:sourceStates:intermediateImages:destinationStates:](encodebatch%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [readCountForSourceImageAtIndex:](readcountforsourceimage%28at_%29.md)
- [readCountForSourceStateAtIndex:](readcountforsourcestate%28at_%29.md)
- [reloadFromDataSources](reloadfromdatasources%28%29.md)
