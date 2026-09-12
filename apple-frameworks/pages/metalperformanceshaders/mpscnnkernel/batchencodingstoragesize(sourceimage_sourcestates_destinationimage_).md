> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnkernel/batchencodingstoragesize(sourceimage:sourcestates:destinationimage:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnkernel/batchencodingstoragesize(sourceimage:sourcestates:destinationimage:))

# batchEncodingStorageSize(sourceImage:sourceStates:destinationImage:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func batchEncodingStorageSize(sourceImage: [MPSImage], sourceStates: [[MPSState]]?, destinationImage: [MPSImage]?) -> Int
```

## See Also

### Instance Methods

- [encode(commandBuffer:sourceImage:)](encode%28commandbuffer_sourceimage_%29.md)
- [encode(commandBuffer:sourceImage:destinationImage:)](encode%28commandbuffer_sourceimage_destinationimage_%29.md): Encodes a kernel into a command buffer. The ensuing operation proceeds out-of-place.
- [appendBatchBarrier()](appendbatchbarrier%28%29.md)
- [destinationImageDescriptor(sourceImages:sourceStates:)](destinationimagedescriptor%28sourceimages_sourcestates_%29.md)
- [encode(commandBuffer:sourceImage:destinationState:destinationImage:)](encode%28commandbuffer_sourceimage_destinationstate_destinationimage_%29.md)
- [encode(commandBuffer:sourceImage:destinationState:destinationStateIsTemporary:)](encode%28commandbuffer_sourceimage_destinationstate_destinationstateistemporary_%29.md)
- [encodeBatch(commandBuffer:sourceImages:)](encodebatch%28commandbuffer_sourceimages_%29.md)
- [encodeBatch(commandBuffer:sourceImages:destinationImages:)](encodebatch%28commandbuffer_sourceimages_destinationimages_%29.md)
- [encodeBatch(commandBuffer:sourceImages:destinationStates:destinationImages:)](encodebatch%28commandbuffer_sourceimages_destinationstates_destinationimages_%29.md)
- [encodeBatch(commandBuffer:sourceImages:destinationStates:destinationStateIsTemporary:)](encodebatch%28commandbuffer_sourceimages_destinationstates_destinationstateistemporary_%29.md)
- [encodingStorageSize(sourceImage:sourceStates:destinationImage:)](encodingstoragesize%28sourceimage_sourcestates_destinationimage_%29.md)
- [isResultStateReusedAcrossBatch()](isresultstatereusedacrossbatch%28%29.md)
- [resultState(sourceImage:sourceStates:destinationImage:)](resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [resultStateBatch(sourceImage:sourceStates:destinationImage:)](resultstatebatch%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultState(commandBuffer:sourceImage:sourceStates:destinationImage:)](temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)

# batchEncodingStorageSizeForSourceImage:sourceStates:destinationImage: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (NSUInteger) batchEncodingStorageSizeForSourceImage:(MPSImageBatch *) sourceImage sourceStates:(NSArray<NSArray<MPSState *> *> *) sourceStates destinationImage:(MPSImageBatch *) destinationImage;
```

## See Also

### Instance Methods

- [encodeToCommandBuffer:sourceImage:](encode%28commandbuffer_sourceimage_%29.md)
- [encodeToCommandBuffer:sourceImage:destinationImage:](encode%28commandbuffer_sourceimage_destinationimage_%29.md): Encodes a kernel into a command buffer. The ensuing operation proceeds out-of-place.
- [appendBatchBarrier](appendbatchbarrier%28%29.md)
- [destinationImageDescriptorForSourceImages:sourceStates:](destinationimagedescriptor%28sourceimages_sourcestates_%29.md)
- [encodeToCommandBuffer:sourceImage:destinationState:destinationImage:](encode%28commandbuffer_sourceimage_destinationstate_destinationimage_%29.md)
- [encodeToCommandBuffer:sourceImage:destinationState:destinationStateIsTemporary:](encode%28commandbuffer_sourceimage_destinationstate_destinationstateistemporary_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:](encodebatch%28commandbuffer_sourceimages_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:destinationImages:](encodebatch%28commandbuffer_sourceimages_destinationimages_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:destinationStates:destinationImages:](encodebatch%28commandbuffer_sourceimages_destinationstates_destinationimages_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:destinationStates:destinationStateIsTemporary:](encodebatch%28commandbuffer_sourceimages_destinationstates_destinationstateistemporary_%29.md)
- [encodingStorageSizeForSourceImage:sourceStates:destinationImage:](encodingstoragesize%28sourceimage_sourcestates_destinationimage_%29.md)
- [isResultStateReusedAcrossBatch](isresultstatereusedacrossbatch%28%29.md)
- [resultStateForSourceImage:sourceStates:destinationImage:](resultstate%28sourceimage_sourcestates_destinationimage_%29.md)
- [resultStateBatchForSourceImage:sourceStates:destinationImage:](resultstatebatch%28sourceimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateForCommandBuffer:sourceImage:sourceStates:destinationImage:](temporaryresultstate%28commandbuffer_sourceimage_sourcestates_destinationimage_%29.md)
