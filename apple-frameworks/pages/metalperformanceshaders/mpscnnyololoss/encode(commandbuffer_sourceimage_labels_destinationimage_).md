> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnyololoss/encode(commandbuffer:sourceimage:labels:destinationimage:)

# encode(commandBuffer:sourceImage:labels:destinationImage:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceImage: MPSImage, labels: MPSCNNLossLabels, destinationImage: MPSImage)
```

# encodeToCommandBuffer:sourceImage:labels:destinationImage: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImage:(MPSImage *) sourceImage labels:(MPSCNNLossLabels *) labels destinationImage:(MPSImage *) destinationImage;
```
