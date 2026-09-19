> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnngradientkernel/encodebatch(commandbuffer:sourcegradients:sourceimages:gradientstates:destinationgradients:)

# encodeBatch(commandBuffer:sourceGradients:sourceImages:gradientStates:destinationGradients:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(commandBuffer: any MTLCommandBuffer, sourceGradients: [MPSImage], sourceImages: [MPSImage], gradientStates: [MPSState], destinationGradients: [MPSImage])
```

# encodeBatchToCommandBuffer:sourceGradients:sourceImages:gradientStates:destinationGradients: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceGradients:(MPSImageBatch *) sourceGradients sourceImages:(MPSImageBatch *) sourceImages gradientStates:(MPSStateBatch *) gradientStates destinationGradients:(MPSImageBatch *) destinationGradients;
```
