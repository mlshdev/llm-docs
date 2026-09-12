> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarrayunarygradientkernel/encode(to:sourcearray:sourcegradient:gradientstate:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarrayunarygradientkernel/encode(to:sourcearray:sourcegradient:gradientstate:))

# encode(to:sourceArray:sourceGradient:gradientState:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to cmdBuf: any MTLCommandBuffer, sourceArray: MPSNDArray, sourceGradient gradient: MPSNDArray, gradientState state: MPSState) -> MPSNDArray
```

# encodeToCommandBuffer:sourceArray:sourceGradient:gradientState: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSNDArray *) encodeToCommandBuffer:(id<MTLCommandBuffer>) cmdBuf sourceArray:(MPSNDArray *) sourceArray sourceGradient:(MPSNDArray *) gradient gradientState:(MPSState *) state;
```
