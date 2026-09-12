> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/simplesurfacedescriptor/outputchannel-swift.enum](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/simplesurfacedescriptor/outputchannel-swift.enum)

# LowLevelMaterialResource.SimpleSurfaceDescriptor.OutputChannel

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The output channel that the simple surface shader writes to.

## Declaration

```swift
enum OutputChannel
```

## Topics

### Specifying output channels

- [LowLevelMaterialResource.SimpleSurfaceDescriptor.OutputChannel.baseColor](outputchannel-swift.enum/basecolor.md): The base color output channel for the shader result.
- [LowLevelMaterialResource.SimpleSurfaceDescriptor.OutputChannel.emissiveColor](outputchannel-swift.enum/emissivecolor.md): The emissive color output channel for the shader result.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the output

- [outputChannel](outputchannel-swift.property.md): The surface output channel the shader writes to.
- [outputOpacity](outputopacity.md): A Boolean value that indicates whether the shader also writes the computed alpha to the surface opacity output.
