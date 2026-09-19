> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbatchnormalizationgradient/encode(to:sourcegradient:sourceimage:batchnormalizationstate:destinationgradient:)

# encode(to:sourceGradient:sourceImage:batchNormalizationState:destinationGradient:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encode(to commandBuffer: any MTLCommandBuffer, sourceGradient: MPSImage, sourceImage: MPSImage, batchNormalizationState: MPSCNNBatchNormalizationState, destinationGradient: MPSImage)
```

# encodeToCommandBuffer:sourceGradient:sourceImage:batchNormalizationState:destinationGradient: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceGradient:(MPSImage *) sourceGradient sourceImage:(MPSImage *) sourceImage batchNormalizationState:(MPSCNNBatchNormalizationState *) batchNormalizationState destinationGradient:(MPSImage *) destinationGradient;
```
