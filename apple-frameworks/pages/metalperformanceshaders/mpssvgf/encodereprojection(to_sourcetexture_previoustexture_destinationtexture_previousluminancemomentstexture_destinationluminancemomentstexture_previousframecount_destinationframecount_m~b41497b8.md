> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpssvgf/encodereprojection(to:sourcetexture:previoustexture:destinationtexture:previousluminancemomentstexture:destinationluminancemomentstexture:previousframecount:destinationframecount:motionvectortexture:depthnormaltexture:previousdepthnormaltex-3k6zp](https://developer.apple.com/documentation/metalperformanceshaders/mpssvgf/encodereprojection(to:sourcetexture:previoustexture:destinationtexture:previousluminancemomentstexture:destinationluminancemomentstexture:previousframecount:destinationframecount:motionvectortexture:depthnormaltexture:previousdepthnormaltex-3k6zp)

# encodeReprojection(to:sourceTexture:previousTexture:destinationTexture:previousLuminanceMomentsTexture:destinationLuminanceMomentsTexture:previousFrameCount:destinationFrameCount:motionVectorTexture:depthNormalTexture:previousDepthNormalTexture:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encodeReprojection(to commandBuffer: any MTLCommandBuffer, sourceTexture: any MTLTexture, previousTexture: any MTLTexture, destinationTexture: any MTLTexture, previousLuminanceMomentsTexture: any MTLTexture, destinationLuminanceMomentsTexture: any MTLTexture, previousFrameCount previousFrameCountTexture: any MTLTexture, destinationFrameCount destinationFrameCountTexture: any MTLTexture, motionVectorTexture: (any MTLTexture)?, depthNormalTexture: (any MTLTexture)?, previousDepthNormalTexture: (any MTLTexture)?)
```

# encodeReprojectionToCommandBuffer:sourceTexture:previousTexture:destinationTexture:previousLuminanceMomentsTexture:destinationLuminanceMomentsTexture:previousFrameCountTexture:destinationFrameCountTexture:motionVectorTexture:depthNormalTexture:previousDepthNormalTexture: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeReprojectionToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceTexture:(id<MTLTexture>) sourceTexture previousTexture:(id<MTLTexture>) previousTexture destinationTexture:(id<MTLTexture>) destinationTexture previousLuminanceMomentsTexture:(id<MTLTexture>) previousLuminanceMomentsTexture destinationLuminanceMomentsTexture:(id<MTLTexture>) destinationLuminanceMomentsTexture previousFrameCountTexture:(id<MTLTexture>) previousFrameCountTexture destinationFrameCountTexture:(id<MTLTexture>) destinationFrameCountTexture motionVectorTexture:(id<MTLTexture>) motionVectorTexture depthNormalTexture:(id<MTLTexture>) depthNormalTexture previousDepthNormalTexture:(id<MTLTexture>) previousDepthNormalTexture;
```
