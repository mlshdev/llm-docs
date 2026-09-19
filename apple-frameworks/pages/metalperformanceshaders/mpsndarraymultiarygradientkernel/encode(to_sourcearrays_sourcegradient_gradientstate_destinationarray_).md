> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraymultiarygradientkernel/encode(to:sourcearrays:sourcegradient:gradientstate:destinationarray:)

# encode(to:sourceArrays:sourceGradient:gradientState:destinationArray:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to cmdBuf: any MTLCommandBuffer, sourceArrays sources: [MPSNDArray], sourceGradient gradient: MPSNDArray, gradientState state: MPSState, destinationArray destination: MPSNDArray)
```

# encodeToCommandBuffer:sourceArrays:sourceGradient:gradientState:destinationArray: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) cmdBuf sourceArrays:(NSArray<MPSNDArray *> *) sources sourceGradient:(MPSNDArray *) gradient gradientState:(MPSState *) state destinationArray:(MPSNDArray *) destination;
```
