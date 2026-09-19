> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsimagecopytomatrix/encodebatch(commandbuffer:sourceimages:destinationmatrix:)

# encodeBatch(commandBuffer:sourceImages:destinationMatrix:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(commandBuffer: any MTLCommandBuffer, sourceImages: [MPSImage], destinationMatrix: MPSMatrix)
```

## See Also

### Instance Methods

- [encode(commandBuffer:sourceImage:destinationMatrix:)](encode%28commandbuffer_sourceimage_destinationmatrix_%29.md)

# encodeBatchToCommandBuffer:sourceImages:destinationMatrix: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImages:(MPSImageBatch *) sourceImages destinationMatrix:(MPSMatrix *) destinationMatrix;
```

## See Also

### Instance Methods

- [encodeToCommandBuffer:sourceImage:destinationMatrix:](encode%28commandbuffer_sourceimage_destinationmatrix_%29.md)
