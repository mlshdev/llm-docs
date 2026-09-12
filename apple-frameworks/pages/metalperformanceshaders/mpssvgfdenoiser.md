> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpssvgfdenoiser](https://developer.apple.com/documentation/metalperformanceshaders/mpssvgfdenoiser)

# MPSSVGFDenoiser (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSSVGFDenoiser
```

## Topics

### Initializers

- [init(SVGF:textureAllocator:)](mpssvgfdenoiser/init%28svgf_textureallocator_%29.md)
- [init(device:)](mpssvgfdenoiser/init%28device_%29.md)

### Instance Properties

- [bilateralFilterIterations](mpssvgfdenoiser/bilateralfilteriterations.md)
- [svgf](mpssvgfdenoiser/svgf.md)
- [textureAllocator](mpssvgfdenoiser/textureallocator.md)

### Instance Methods

- [clearTemporalHistory()](mpssvgfdenoiser/cleartemporalhistory%28%29.md)
- [encode(commandBuffer:sourceTexture:destinationTexture:sourceTexture2:destinationTexture2:motionVectorTexture:depthNormalTexture:previousDepthNormalTexture:)](mpssvgfdenoiser/encode%28commandbuffer_sourcetexture_destinationtexture_sourcetexture2_destinationtexture2_motionvectortexture_depthnormaltexture_previousdepthnormaltexture_%29.md)
- [encode(commandBuffer:sourceTexture:motionVectorTexture:depthNormalTexture:previousDepthNormalTexture:)](mpssvgfdenoiser/encode%28commandbuffer_sourcetexture_motionvectortexture_depthnormaltexture_previousdepthnormaltexture_%29.md)
- [releaseTemporaryTextures()](mpssvgfdenoiser/releasetemporarytextures%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MPSSVGFDenoiser (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSSVGFDenoiser : NSObject
```

## Topics

### Instance Properties

- [bilateralFilterIterations](mpssvgfdenoiser/bilateralfilteriterations.md)
- [svgf](mpssvgfdenoiser/svgf.md)
- [textureAllocator](mpssvgfdenoiser/textureallocator.md)

### Instance Methods

- [clearTemporalHistory](mpssvgfdenoiser/cleartemporalhistory%28%29.md)
- [encodeToCommandBuffer:sourceTexture:destinationTexture:sourceTexture2:destinationTexture2:motionVectorTexture:depthNormalTexture:previousDepthNormalTexture:](mpssvgfdenoiser/encode%28commandbuffer_sourcetexture_destinationtexture_sourcetexture2_destinationtexture2_motionvectortexture_depthnormaltexture_previousdepthnormaltexture_%29.md)
- [encodeToCommandBuffer:sourceTexture:motionVectorTexture:depthNormalTexture:previousDepthNormalTexture:](mpssvgfdenoiser/encode%28commandbuffer_sourcetexture_motionvectortexture_depthnormaltexture_previousdepthnormaltexture_%29.md)
- [initWithSVGF:textureAllocator:](mpssvgfdenoiser/init%28svgf_textureallocator_%29.md)
- [initWithDevice:](mpssvgfdenoiser/init%28device_%29.md)
- [releaseTemporaryTextures](mpssvgfdenoiser/releasetemporarytextures%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
