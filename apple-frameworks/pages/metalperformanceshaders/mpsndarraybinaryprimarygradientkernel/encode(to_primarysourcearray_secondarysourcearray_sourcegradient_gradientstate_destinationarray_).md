> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraybinaryprimarygradientkernel/encode(to:primarysourcearray:secondarysourcearray:sourcegradient:gradientstate:destinationarray:)

# encode(to:primarySourceArray:secondarySourceArray:sourceGradient:gradientState:destinationArray:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to cmdBuf: any MTLCommandBuffer, primarySourceArray: MPSNDArray, secondarySourceArray: MPSNDArray, sourceGradient gradient: MPSNDArray, gradientState state: MPSState, destinationArray destination: MPSNDArray)
```

# encodeToCommandBuffer:primarySourceArray:secondarySourceArray:sourceGradient:gradientState:destinationArray: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) cmdBuf primarySourceArray:(MPSNDArray *) primarySourceArray secondarySourceArray:(MPSNDArray *) secondarySourceArray sourceGradient:(MPSNDArray *) gradient gradientState:(MPSState *) state destinationArray:(MPSNDArray *) destination;
```
