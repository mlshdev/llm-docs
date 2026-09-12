> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarraymultiarygradientkernel/encode(to:sourcearrays:sourcegradient:gradientstate:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarraymultiarygradientkernel/encode(to:sourcearrays:sourcegradient:gradientstate:))

# encode(to:sourceArrays:sourceGradient:gradientState:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to cmdBuf: any MTLCommandBuffer, sourceArrays sources: [MPSNDArray], sourceGradient gradient: MPSNDArray, gradientState state: MPSState) -> MPSNDArray
```

# encodeToCommandBuffer:sourceArrays:sourceGradient:gradientState: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSNDArray *) encodeToCommandBuffer:(id<MTLCommandBuffer>) cmdBuf sourceArrays:(NSArray<MPSNDArray *> *) sources sourceGradient:(MPSNDArray *) gradient gradientState:(MPSState *) state;
```
