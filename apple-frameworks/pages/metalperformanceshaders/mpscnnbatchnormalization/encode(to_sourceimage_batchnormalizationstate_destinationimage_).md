> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpscnnbatchnormalization/encode(to:sourceimage:batchnormalizationstate:destinationimage:)](https://developer.apple.com/documentation/metalperformanceshaders/mpscnnbatchnormalization/encode(to:sourceimage:batchnormalizationstate:destinationimage:))

# encode(to:sourceImage:batchNormalizationState:destinationImage:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encode(to commandBuffer: any MTLCommandBuffer, sourceImage: MPSImage, batchNormalizationState: MPSCNNBatchNormalizationState, destinationImage: MPSImage)
```

# encodeToCommandBuffer:sourceImage:batchNormalizationState:destinationImage: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImage:(MPSImage *) sourceImage batchNormalizationState:(MPSCNNBatchNormalizationState *) batchNormalizationState destinationImage:(MPSImage *) destinationImage;
```
