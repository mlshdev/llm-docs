> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsndarrayunarykernel/encode(to:sourcearray:resultstate:destinationarray:)

# encode(to:sourceArray:resultState:destinationArray:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to cmdBuf: any MTLCommandBuffer, sourceArray: MPSNDArray, resultState outGradientState: MPSState?, destinationArray destination: MPSNDArray)
```

# encodeToCommandBuffer:sourceArray:resultState:destinationArray: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) cmdBuf sourceArray:(MPSNDArray *) sourceArray resultState:(MPSState *) outGradientState destinationArray:(MPSNDArray *) destination;
```
