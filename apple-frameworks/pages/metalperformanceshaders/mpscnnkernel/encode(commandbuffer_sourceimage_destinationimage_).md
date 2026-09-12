> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnkernel/encode(commandbuffer:sourceimage:destinationimage:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnkernel/encode(commandbuffer:sourceimage:destinationimage:))

# encode(commandBuffer:sourceImage:destinationImage:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Encodes a kernel into a command buffer.  The ensuing operation proceeds out-of-place.

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceImage: MPSImage, destinationImage: MPSImage)
```

## Parameters

- `commandBuffer`: A valid command buffer to receive the encoded filter.
- `sourceImage`: A valid source image.
- `destinationImage`: A valid destination image to be overwritten by the results.

<a id="Discussion"></a>

## Discussion

The `destinationImage` object may not alias the `sourceImage` object.

## See Also

### Instance Methods

- [encode(commandBuffer:sourceImage:)](encode%28commandbuffer_sourceimage_%29.md)
- [appendBatchBarrier()](appendbatchbarrier%28%29.md)
- [batchEncodingStorageSize(sourceImage:sourceStates:destinationImage:)](batchencodingstoragesize%28sourceimage_sourcestates_destinationimage_%29.md)
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

# encodeToCommandBuffer:sourceImage:destinationImage: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Encodes a kernel into a command buffer.  The ensuing operation proceeds out-of-place.

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImage:(MPSImage *) sourceImage destinationImage:(MPSImage *) destinationImage;
```

## Parameters

- `commandBuffer`: A valid command buffer to receive the encoded filter.
- `sourceImage`: A valid source image.
- `destinationImage`: A valid destination image to be overwritten by the results.

<a id="Discussion"></a>

## Discussion

The `destinationImage` object may not alias the `sourceImage` object.

## See Also

### Instance Methods

- [encodeToCommandBuffer:sourceImage:](encode%28commandbuffer_sourceimage_%29.md)
- [appendBatchBarrier](appendbatchbarrier%28%29.md)
- [batchEncodingStorageSizeForSourceImage:sourceStates:destinationImage:](batchencodingstoragesize%28sourceimage_sourcestates_destinationimage_%29.md)
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
