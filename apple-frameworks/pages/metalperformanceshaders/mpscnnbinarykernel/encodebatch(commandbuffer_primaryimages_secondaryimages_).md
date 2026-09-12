> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbinarykernel/encodebatch(commandbuffer:primaryimages:secondaryimages:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbinarykernel/encodebatch(commandbuffer:primaryimages:secondaryimages:))

# encodeBatch(commandBuffer:primaryImages:secondaryImages:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(commandBuffer: any MTLCommandBuffer, primaryImages primaryImage: [MPSImage], secondaryImages secondaryImage: [MPSImage]) -> [MPSImage]
```

## See Also

### Instance Methods

- [encode(commandBuffer:primaryImage:secondaryImage:)](encode%28commandbuffer_primaryimage_secondaryimage_%29.md)
- [encode(commandBuffer:primaryImage:secondaryImage:destinationImage:)](encode%28commandbuffer_primaryimage_secondaryimage_destinationimage_%29.md)
- [appendBatchBarrier()](appendbatchbarrier%28%29.md)
- [batchEncodingStorageSize(primaryImage:secondaryImage:sourceStates:destinationImage:)](batchencodingstoragesize%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [destinationImageDescriptor(forSourceImages:sourceStates:)](destinationimagedescriptor%28forsourceimages_sourcestates_%29.md)
- [encode(commandBuffer:primaryImage:secondaryImage:destinationState:destinationStateIsTemporary:)](encode%28commandbuffer_primaryimage_secondaryimage_destinationstate_destinationstateistemporary_%29.md)
- [encodeBatch(commandBuffer:primaryImages:secondaryImages:destinationImages:)](encodebatch%28commandbuffer_primaryimages_secondaryimages_destinationimages_%29.md)
- [encodeBatch(commandBuffer:primaryImages:secondaryImages:destinationStates:destinationStateIsTemporary:)](encodebatch%28commandbuffer_primaryimages_secondaryimages_destinationstates_destinationstateistemporary_%29.md)
- [encodingStorageSize(primaryImage:secondaryImage:sourceStates:destinationImage:)](encodingstoragesize%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [isResultStateReusedAcrossBatch()](isresultstatereusedacrossbatch%28%29.md)
- [resultState(primaryImage:secondaryImage:sourceStates:destinationImage:)](resultstate%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [resultStateBatch(primaryImage:secondaryImage:sourceStates:destinationImage:)](resultstatebatch%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [temporaryResultState(commandBuffer:primaryImage:secondaryImage:sourceStates:destinationImage:)](temporaryresultstate%28commandbuffer_primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateBatch(commandBuffer:primaryImage:secondaryImage:sourceStates:destinationImage:)](temporaryresultstatebatch%28commandbuffer_primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)

# encodeBatchToCommandBuffer:primaryImages:secondaryImages: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSImageBatch *) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer primaryImages:(MPSImageBatch *) primaryImage secondaryImages:(MPSImageBatch *) secondaryImage;
```

## See Also

### Instance Methods

- [encodeToCommandBuffer:primaryImage:secondaryImage:](encode%28commandbuffer_primaryimage_secondaryimage_%29.md)
- [encodeToCommandBuffer:primaryImage:secondaryImage:destinationImage:](encode%28commandbuffer_primaryimage_secondaryimage_destinationimage_%29.md)
- [appendBatchBarrier](appendbatchbarrier%28%29.md)
- [batchEncodingStorageSizeForPrimaryImage:secondaryImage:sourceStates:destinationImage:](batchencodingstoragesize%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [destinationImageDescriptorForSourceImages:sourceStates:](destinationimagedescriptor%28forsourceimages_sourcestates_%29.md)
- [encodeToCommandBuffer:primaryImage:secondaryImage:destinationState:destinationStateIsTemporary:](encode%28commandbuffer_primaryimage_secondaryimage_destinationstate_destinationstateistemporary_%29.md)
- [encodeBatchToCommandBuffer:primaryImages:secondaryImages:destinationImages:](encodebatch%28commandbuffer_primaryimages_secondaryimages_destinationimages_%29.md)
- [encodeBatchToCommandBuffer:primaryImages:secondaryImages:destinationStates:destinationStateIsTemporary:](encodebatch%28commandbuffer_primaryimages_secondaryimages_destinationstates_destinationstateistemporary_%29.md)
- [encodingStorageSizeForPrimaryImage:secondaryImage:sourceStates:destinationImage:](encodingstoragesize%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [isResultStateReusedAcrossBatch](isresultstatereusedacrossbatch%28%29.md)
- [resultStateForPrimaryImage:secondaryImage:sourceStates:destinationImage:](resultstate%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [resultStateBatchForPrimaryImage:secondaryImage:sourceStates:destinationImage:](resultstatebatch%28primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateForCommandBuffer:primaryImage:secondaryImage:sourceStates:destinationImage:](temporaryresultstate%28commandbuffer_primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
- [temporaryResultStateBatchForCommandBuffer:primaryImage:secondaryImage:sourceStates:destinationImage:](temporaryresultstatebatch%28commandbuffer_primaryimage_secondaryimage_sourcestates_destinationimage_%29.md)
