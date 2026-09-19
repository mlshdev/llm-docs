> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsnnlossgradient/encodebatch(commandbuffer:sourcegradients:sourceimages:labels:weights:sourcestates:destinationgradients:)

# encodeBatch(commandBuffer:sourceGradients:sourceImages:labels:weights:sourceStates:destinationGradients:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(commandBuffer: any MTLCommandBuffer, sourceGradients: [MPSImage], sourceImages: [MPSImage], labels: [MPSImage], weights: [MPSImage]?, sourceStates: [MPSState]?, destinationGradients: [MPSImage])
```

# encodeBatchToCommandBuffer:sourceGradients:sourceImages:labels:weights:sourceStates:destinationGradients: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceGradients:(MPSImageBatch *) sourceGradients sourceImages:(MPSImageBatch *) sourceImages labels:(MPSImageBatch *) labels weights:(MPSImageBatch *) weights sourceStates:(MPSStateBatch *) sourceStates destinationGradients:(MPSImageBatch *) destinationGradients;
```
