> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpstemporalaa/encode(to:sourcetexture:previoustexture:destinationtexture:motionvectortexture:depthtexture:)](https://developer.apple.com/documentation/metalperformanceshaders/mpstemporalaa/encode(to:sourcetexture:previoustexture:destinationtexture:motionvectortexture:depthtexture:))

# encode(to:sourceTexture:previousTexture:destinationTexture:motionVectorTexture:depthTexture:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
func encode(to commandBuffer: any MTLCommandBuffer, sourceTexture: any MTLTexture, previousTexture: any MTLTexture, destinationTexture: any MTLTexture, motionVectorTexture: (any MTLTexture)?, depthTexture: (any MTLTexture)?)
```

# encodeToCommandBuffer:sourceTexture:previousTexture:destinationTexture:motionVectorTexture:depthTexture: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceTexture:(id<MTLTexture>) sourceTexture previousTexture:(id<MTLTexture>) previousTexture destinationTexture:(id<MTLTexture>) destinationTexture motionVectorTexture:(id<MTLTexture>) motionVectorTexture depthTexture:(id<MTLTexture>) depthTexture;
```
