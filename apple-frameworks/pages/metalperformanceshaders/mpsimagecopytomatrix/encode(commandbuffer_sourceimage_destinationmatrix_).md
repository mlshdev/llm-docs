> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagecopytomatrix/encode(commandbuffer:sourceimage:destinationmatrix:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagecopytomatrix/encode(commandbuffer:sourceimage:destinationmatrix:))

# encode(commandBuffer:sourceImage:destinationMatrix:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceImage: MPSImage, destinationMatrix: MPSMatrix)
```

## See Also

### Instance Methods

- [encodeBatch(commandBuffer:sourceImages:destinationMatrix:)](encodebatch%28commandbuffer_sourceimages_destinationmatrix_%29.md)

# encodeToCommandBuffer:sourceImage:destinationMatrix: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImage:(MPSImage *) sourceImage destinationMatrix:(MPSMatrix *) destinationMatrix;
```

## See Also

### Instance Methods

- [encodeBatchToCommandBuffer:sourceImages:destinationMatrix:](encodebatch%28commandbuffer_sourceimages_destinationmatrix_%29.md)
