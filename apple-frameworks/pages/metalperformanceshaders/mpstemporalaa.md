> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpstemporalaa](https://developer.apple.com/documentation/metalperformanceshaders/mpstemporalaa)

# MPSTemporalAA (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
class MPSTemporalAA
```

## Topics

### Initializers

- [init(coder:device:)](mpstemporalaa/init%28coder_device_%29.md)
- [init(device:)](mpstemporalaa/init%28device_%29.md)

### Instance Properties

- [blendFactor](mpstemporalaa/blendfactor.md)

### Instance Methods

- [copy(with:device:)](mpstemporalaa/copy%28with_device_%29.md)
- [encode(to:sourceTexture:previousTexture:destinationTexture:motionVectorTexture:depthTexture:)](mpstemporalaa/encode%28to_sourcetexture_previoustexture_destinationtexture_motionvectortexture_depthtexture_%29.md)
- [encode(with:)](mpstemporalaa/encode%28with_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# MPSTemporalAA (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
@interface MPSTemporalAA : MPSKernel
```

## Topics

### Instance Properties

- [blendFactor](mpstemporalaa/blendfactor.md)

### Instance Methods

- [copyWithZone:device:](mpstemporalaa/copy%28with_device_%29.md)
- [encodeToCommandBuffer:sourceTexture:previousTexture:destinationTexture:motionVectorTexture:depthTexture:](mpstemporalaa/encode%28to_sourcetexture_previoustexture_destinationtexture_motionvectortexture_depthtexture_%29.md)
- [encodeWithCoder:](mpstemporalaa/encode%28with_%29.md)
- [initWithCoder:device:](mpstemporalaa/init%28coder_device_%29.md)
- [initWithDevice:](mpstemporalaa/init%28device_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
