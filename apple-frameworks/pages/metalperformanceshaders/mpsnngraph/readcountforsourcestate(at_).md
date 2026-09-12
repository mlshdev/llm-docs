> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnngraph/readcountforsourcestate(at:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsnngraph/readcountforsourcestate(at:))

# readCountForSourceState(at:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.0+ · macOS 10.14.1+ · tvOS 12.1+ · visionOS 1.0+

## Declaration

```swift
func readCountForSourceState(at index: Int) -> Int
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
- [encodeBatch(to:sourceImages:sourceStates:)](encodebatch%28to_sourceimages_sourcestates_%29.md)
- [encodeBatch(to:sourceImages:sourceStates:intermediateImages:destinationStates:)](encodebatch%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [readCountForSourceImage(at:)](readcountforsourceimage%28at_%29.md)
- [reloadFromDataSources()](reloadfromdatasources%28%29.md)

# readCountForSourceStateAtIndex: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.0+ · macOS 10.14.1+ · tvOS 12.1+ · visionOS 1.0+

## Declaration

```objectivec
- (NSUInteger) readCountForSourceStateAtIndex:(NSUInteger) index;
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
- [encodeBatchToCommandBuffer:sourceImages:sourceStates:](encodebatch%28to_sourceimages_sourcestates_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:sourceStates:intermediateImages:destinationStates:](encodebatch%28to_sourceimages_sourcestates_intermediateimages_destinationstates_%29.md)
- [readCountForSourceImageAtIndex:](readcountforsourceimage%28at_%29.md)
- [reloadFromDataSources](reloadfromdatasources%28%29.md)
