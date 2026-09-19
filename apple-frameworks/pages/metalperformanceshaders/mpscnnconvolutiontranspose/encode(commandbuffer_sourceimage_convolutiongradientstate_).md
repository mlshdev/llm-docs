> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpscnnconvolutiontranspose/encode(commandbuffer:sourceimage:convolutiongradientstate:)

# encode(commandBuffer:sourceImage:convolutionGradientState:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceImage: MPSImage, convolutionGradientState: MPSCNNConvolutionGradientState?) -> MPSImage
```

# encodeToCommandBuffer:sourceImage:convolutionGradientState: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (MPSImage *) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceImage:(MPSImage *) sourceImage convolutionGradientState:(MPSCNNConvolutionGradientState *) convolutionGradientState;
```
