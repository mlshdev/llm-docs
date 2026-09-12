> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitoption](https://developer.apple.com/documentation/metal/mtlblitoption)

# MTLBlitOption (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The options that enable behavior for some blit operations.

## Declaration

```swift
struct MTLBlitOption
```

## Topics

### Depth and stencil buffer options

- [depthFromDepthStencil](mtlblitoption/depthfromdepthstencil.md): A blit option that copies the depth portion of a combined depth and stencil texture to or from a buffer.
- [stencilFromDepthStencil](mtlblitoption/stencilfromdepthstencil.md): A blit option that copies the stencil portion of a combined depth and stencil texture to or from a buffer.

### Texture compression options

- [rowLinearPVRTC](mtlblitoption/rowlinearpvrtc.md): A blit option that copies PVRTC data between a texture and a buffer.

### Swift support

- [init(rawValue:)](mtlblitoption/init%28rawvalue_%29.md): Creates a blit option from a raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Encoding a blit pass

- [MTLBlitCommandEncoder](mtlblitcommandencoder.md): Encodes commands that copy and modify resources for a single blit pass.

# MTLBlitOption (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The options that enable behavior for some blit operations.

## Declaration

```objectivec
enum MTLBlitOption : NSUInteger;
```

## Topics

### Depth and stencil buffer options

- [MTLBlitOptionDepthFromDepthStencil](mtlblitoption/depthfromdepthstencil.md): A blit option that copies the depth portion of a combined depth and stencil texture to or from a buffer.
- [MTLBlitOptionStencilFromDepthStencil](mtlblitoption/stencilfromdepthstencil.md): A blit option that copies the stencil portion of a combined depth and stencil texture to or from a buffer.

### Texture compression options

- [MTLBlitOptionRowLinearPVRTC](mtlblitoption/rowlinearpvrtc.md): A blit option that copies PVRTC data between a texture and a buffer.

### Clearing options

- [MTLBlitOptionNone](mtlblitoption/mtlblitoptionnone.md): A blit option that clears other blit options, which removes any optional behavior for a blit operation.

## See Also

### Encoding a blit pass

- [MTLBlitCommandEncoder](mtlblitcommandencoder.md): Encodes commands that copy and modify resources for a single blit pass.
