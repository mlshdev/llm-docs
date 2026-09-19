> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontranspose/encodebatch(commandbuffer:sourceimages:convolutiongradientstates:destinationstates:destinationstateistemporary:)

# encodeBatch(commandBuffer:sourceImages:convolutionGradientStates:destinationStates:destinationStateIsTemporary:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encodeBatch(commandBuffer: any MTLCommandBuffer, sourceImages: [MPSImage], convolutionGradientStates: [MPSCNNConvolutionGradientState]?, destinationStates outStates: AutoreleasingUnsafeMutablePointer<NSArray?>, destinationStateIsTemporary isTemporary: Bool) -> [MPSImage]
```

# encodeBatchToCommandBuffer:sourceImages:convolutionGradientStates:destinationStates:destinationStateIsTemporary: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSImageBatch *) encodeBatchToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImages:(MPSImageBatch *) sourceImages convolutionGradientStates:(MPSCNNConvolutionGradientStateBatch *) convolutionGradientStates destinationStates:(MPSCNNConvolutionTransposeGradientStateBatch **) outStates destinationStateIsTemporary:(BOOL) isTemporary;
```
