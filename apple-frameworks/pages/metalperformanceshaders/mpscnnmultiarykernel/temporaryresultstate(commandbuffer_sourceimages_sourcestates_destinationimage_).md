> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnmultiarykernel/temporaryresultstate(commandbuffer:sourceimages:sourcestates:destinationimage:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnmultiarykernel/temporaryresultstate(commandbuffer:sourceimages:sourcestates:destinationimage:))

# temporaryResultState(commandBuffer:sourceImages:sourceStates:destinationImage:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func temporaryResultState(commandBuffer: any MTLCommandBuffer, sourceImages sourceImage: [MPSImage], sourceStates: [MPSState]?, destinationImage: MPSImage) -> MPSState?
```

# temporaryResultStateForCommandBuffer:sourceImages:sourceStates:destinationImage: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSState *) temporaryResultStateForCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImages:(NSArray<MPSImage *> *) sourceImage sourceStates:(NSArray<MPSState *> *) sourceStates destinationImage:(MPSImage *) destinationImage;
```
