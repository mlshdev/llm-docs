> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpssvgf/encodevarianceestimation(to:sourcetexture:luminancemomentstexture:destinationtexture:sourcetexture2:luminancemomentstexture2:destinationtexture2:framecount:depthnormaltexture:)](https://developer.apple.com/documentation/metalperformanceshaders/mpssvgf/encodevarianceestimation(to:sourcetexture:luminancemomentstexture:destinationtexture:sourcetexture2:luminancemomentstexture2:destinationtexture2:framecount:depthnormaltexture:))

# encodeVarianceEstimation(to:sourceTexture:luminanceMomentsTexture:destinationTexture:sourceTexture2:luminanceMomentsTexture2:destinationTexture2:frameCount:depthNormalTexture:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encodeVarianceEstimation(to commandBuffer: any MTLCommandBuffer, sourceTexture: any MTLTexture, luminanceMomentsTexture: any MTLTexture, destinationTexture: any MTLTexture, sourceTexture2: (any MTLTexture)?, luminanceMomentsTexture2: (any MTLTexture)?, destinationTexture2: (any MTLTexture)?, frameCount frameCountTexture: any MTLTexture, depthNormalTexture: (any MTLTexture)?)
```

# encodeVarianceEstimationToCommandBuffer:sourceTexture:luminanceMomentsTexture:destinationTexture:sourceTexture2:luminanceMomentsTexture2:destinationTexture2:frameCountTexture:depthNormalTexture: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeVarianceEstimationToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceTexture:(id<MTLTexture>) sourceTexture luminanceMomentsTexture:(id<MTLTexture>) luminanceMomentsTexture destinationTexture:(id<MTLTexture>) destinationTexture sourceTexture2:(id<MTLTexture>) sourceTexture2 luminanceMomentsTexture2:(id<MTLTexture>) luminanceMomentsTexture2 destinationTexture2:(id<MTLTexture>) destinationTexture2 frameCountTexture:(id<MTLTexture>) frameCountTexture depthNormalTexture:(id<MTLTexture>) depthNormalTexture;
```
