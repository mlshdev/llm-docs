> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshaders/mpssvgfdenoiser/encode(commandbuffer:sourcetexture:motionvectortexture:depthnormaltexture:previousdepthnormaltexture:)

# encode(commandBuffer:sourceTexture:motionVectorTexture:depthNormalTexture:previousDepthNormalTexture:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encode(commandBuffer: any MTLCommandBuffer, sourceTexture: any MTLTexture, motionVectorTexture: (any MTLTexture)?, depthNormalTexture: any MTLTexture, previousDepthNormalTexture: (any MTLTexture)?) -> any MTLTexture
```

# encodeToCommandBuffer:sourceTexture:motionVectorTexture:depthNormalTexture:previousDepthNormalTexture: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (id<MTLTexture>) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceTexture:(id<MTLTexture>) sourceTexture motionVectorTexture:(id<MTLTexture>) motionVectorTexture depthNormalTexture:(id<MTLTexture>) depthNormalTexture previousDepthNormalTexture:(id<MTLTexture>) previousDepthNormalTexture;
```
