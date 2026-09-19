> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsrnnmatrixtraininglayer/encodegradientsequence(commandbuffer:forwardsources:sourcegradients:destinationgradients:weightgradients:trainingstates:weights:)

# encodeGradientSequence(commandBuffer:forwardSources:sourceGradients:destinationGradients:weightGradients:trainingStates:weights:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encodeGradientSequence(commandBuffer: any MTLCommandBuffer, forwardSources: [MPSMatrix], sourceGradients: [MPSMatrix], destinationGradients: [MPSMatrix]?, weightGradients: [MPSMatrix]?, trainingStates: [MPSRNNMatrixTrainingState], weights: [MPSMatrix])
```

# encodeGradientSequenceToCommandBuffer:forwardSources:sourceGradients:destinationGradients:weightGradients:trainingStates:weights: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeGradientSequenceToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer forwardSources:(NSArray<MPSMatrix *> *) forwardSources sourceGradients:(NSArray<MPSMatrix *> *) sourceGradients destinationGradients:(NSArray<MPSMatrix *> *) destinationGradients weightGradients:(NSArray<MPSMatrix *> *) weightGradients trainingStates:(NSArray<MPSRNNMatrixTrainingState *> *) trainingStates weights:(NSArray<MPSMatrix *> *) weights;
```
