> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnmultiarykernel/encodebatch(commandbuffer:sourceimages:destinationimages:)

# encodeBatch(commandBuffer:sourceImages:destinationImages:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(commandBuffer: any MTLCommandBuffer, sourceImages: [[MPSImage]], destinationImages: [MPSImage])
```

# encodeBatchToCommandBuffer:sourceImages:destinationImages: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImages:(NSArray<NSArray<MPSImage *> *> *) sourceImages destinationImages:(MPSImageBatch *) destinationImages;
```
