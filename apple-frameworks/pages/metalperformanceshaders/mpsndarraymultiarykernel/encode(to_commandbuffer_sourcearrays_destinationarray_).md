> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraymultiarykernel/encode(to:commandbuffer:sourcearrays:destinationarray:)

# encode(to:commandBuffer:sourceArrays:destinationArray:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func encode(to encoder: (any MTLComputeCommandEncoder)?, commandBuffer: any MTLCommandBuffer, sourceArrays: [MPSNDArray], destinationArray destination: MPSNDArray)
```

# encodeToCommandEncoder:commandBuffer:sourceArrays:destinationArray: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
- (void) encodeToCommandEncoder:(id<MTLComputeCommandEncoder>) encoder commandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceArrays:(NSArray<MPSNDArray *> *) sourceArrays destinationArray:(MPSNDArray *) destination;
```
