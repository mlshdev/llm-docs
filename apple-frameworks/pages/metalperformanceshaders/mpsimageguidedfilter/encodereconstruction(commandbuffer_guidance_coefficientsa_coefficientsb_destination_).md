> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageguidedfilter/encodereconstruction(commandbuffer:guidance:coefficientsa:coefficientsb:destination:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageguidedfilter/encodereconstruction(commandbuffer:guidance:coefficientsa:coefficientsb:destination:))

# encodeReconstruction(commandBuffer:guidance:coefficientsA:coefficientsB:destination:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.2+ · iPadOS 13.2+ · Mac Catalyst 13.2+ · macOS 10.15.4+ · tvOS 13.2+ · visionOS 1.0+

## Declaration

```swift
func encodeReconstruction(commandBuffer: any MTLCommandBuffer, guidance guidanceTexture: any MTLTexture, coefficientsA coefficientsTextureA: any MTLTexture, coefficientsB coefficientsTextureB: any MTLTexture, destination destinationTexture: any MTLTexture)
```

# encodeReconstructionToCommandBuffer:guidanceTexture:coefficientsTextureA:coefficientsTextureB:destinationTexture: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.2+ · iPadOS 13.2+ · Mac Catalyst 13.2+ · macOS 10.15.4+ · tvOS 13.2+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeReconstructionToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer guidanceTexture:(id<MTLTexture>) guidanceTexture coefficientsTextureA:(id<MTLTexture>) coefficientsTextureA coefficientsTextureB:(id<MTLTexture>) coefficientsTextureB destinationTexture:(id<MTLTexture>) destinationTexture;
```
