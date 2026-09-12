> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageguidedfilter/encodereconstruction(to:guidancetexture:coefficientstexture:destinationtexture:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageguidedfilter/encodereconstruction(to:guidancetexture:coefficientstexture:destinationtexture:))

# encodeReconstruction(to:guidanceTexture:coefficientsTexture:destinationTexture:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```swift
func encodeReconstruction(to commandBuffer: any MTLCommandBuffer, guidanceTexture: any MTLTexture, coefficientsTexture: any MTLTexture, destinationTexture: any MTLTexture)
```

# encodeReconstructionToCommandBuffer:guidanceTexture:coefficientsTexture:destinationTexture: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeReconstructionToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer guidanceTexture:(id<MTLTexture>) guidanceTexture coefficientsTexture:(id<MTLTexture>) coefficientsTexture destinationTexture:(id<MTLTexture>) destinationTexture;
```
