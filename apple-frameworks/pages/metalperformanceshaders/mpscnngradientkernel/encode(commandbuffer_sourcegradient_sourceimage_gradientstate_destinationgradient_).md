> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnngradientkernel/encode(commandbuffer:sourcegradient:sourceimage:gradientstate:destinationgradient:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnngradientkernel/encode(commandbuffer:sourcegradient:sourceimage:gradientstate:destinationgradient:))

# encode(commandBuffer:sourceGradient:sourceImage:gradientState:destinationGradient:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceGradient: MPSImage, sourceImage: MPSImage, gradientState: MPSState, destinationGradient: MPSImage)
```

# encodeToCommandBuffer:sourceGradient:sourceImage:gradientState:destinationGradient: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceGradient:(MPSImage *) sourceGradient sourceImage:(MPSImage *) sourceImage gradientState:(MPSState *) gradientState destinationGradient:(MPSImage *) destinationGradient;
```
