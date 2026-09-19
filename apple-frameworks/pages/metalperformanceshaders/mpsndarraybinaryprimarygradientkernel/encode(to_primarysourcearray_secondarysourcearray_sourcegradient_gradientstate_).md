> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraybinaryprimarygradientkernel/encode(to:primarysourcearray:secondarysourcearray:sourcegradient:gradientstate:)

# encode(to:primarySourceArray:secondarySourceArray:sourceGradient:gradientState:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to cmdBuf: any MTLCommandBuffer, primarySourceArray: MPSNDArray, secondarySourceArray: MPSNDArray, sourceGradient gradient: MPSNDArray, gradientState state: MPSState) -> MPSNDArray
```

# encodeToCommandBuffer:primarySourceArray:secondarySourceArray:sourceGradient:gradientState: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSNDArray *) encodeToCommandBuffer:(id<MTLCommandBuffer>) cmdBuf primarySourceArray:(MPSNDArray *) primarySourceArray secondarySourceArray:(MPSNDArray *) secondarySourceArray sourceGradient:(MPSNDArray *) gradient gradientState:(MPSState *) state;
```
