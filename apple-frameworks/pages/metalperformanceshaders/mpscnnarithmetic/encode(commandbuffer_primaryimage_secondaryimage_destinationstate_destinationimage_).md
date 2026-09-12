> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnarithmetic/encode(commandbuffer:primaryimage:secondaryimage:destinationstate:destinationimage:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnarithmetic/encode(commandbuffer:primaryimage:secondaryimage:destinationstate:destinationimage:))

# encode(commandBuffer:primaryImage:secondaryImage:destinationState:destinationImage:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, primaryImage: MPSImage, secondaryImage: MPSImage, destinationState: MPSCNNArithmeticGradientState, destinationImage: MPSImage)
```

# encodeToCommandBuffer:primaryImage:secondaryImage:destinationState:destinationImage: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer primaryImage:(MPSImage *) primaryImage secondaryImage:(MPSImage *) secondaryImage destinationState:(MPSCNNArithmeticGradientState *) destinationState destinationImage:(MPSImage *) destinationImage;
```
