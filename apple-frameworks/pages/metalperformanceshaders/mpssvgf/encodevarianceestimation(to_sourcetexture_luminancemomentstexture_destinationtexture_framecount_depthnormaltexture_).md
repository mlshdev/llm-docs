> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpssvgf/encodevarianceestimation(to:sourcetexture:luminancemomentstexture:destinationtexture:framecount:depthnormaltexture:)](https://developer.apple.com/documentation/metalperformanceshaders/mpssvgf/encodevarianceestimation(to:sourcetexture:luminancemomentstexture:destinationtexture:framecount:depthnormaltexture:))

# encodeVarianceEstimation(to:sourceTexture:luminanceMomentsTexture:destinationTexture:frameCount:depthNormalTexture:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encodeVarianceEstimation(to commandBuffer: any MTLCommandBuffer, sourceTexture: any MTLTexture, luminanceMomentsTexture: any MTLTexture, destinationTexture: any MTLTexture, frameCount frameCountTexture: any MTLTexture, depthNormalTexture: (any MTLTexture)?)
```

# encodeVarianceEstimationToCommandBuffer:sourceTexture:luminanceMomentsTexture:destinationTexture:frameCountTexture:depthNormalTexture: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeVarianceEstimationToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceTexture:(id<MTLTexture>) sourceTexture luminanceMomentsTexture:(id<MTLTexture>) luminanceMomentsTexture destinationTexture:(id<MTLTexture>) destinationTexture frameCountTexture:(id<MTLTexture>) frameCountTexture depthNormalTexture:(id<MTLTexture>) depthNormalTexture;
```
