> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveldeformation/descriptor-swift.struct/skinning-swift.struct](https://developer.apple.com/documentation/realitykit/lowleveldeformation/descriptor-swift.struct/skinning-swift.struct)

# LowLevelDeformation.Descriptor.Skinning

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The skinning data dimensions for a [LowLevelDeformation](../../lowleveldeformation.md).

## Declaration

```swift
struct Skinning
```

## Topics

### Creating a skinning descriptor

- [init(jointTransformCount:influencesPerVertex:)](skinning-swift.struct/init%28jointtransformcount_influencespervertex_%29.md): Creates a skinning descriptor.

### Configuring skinning parameters

- [jointTransformCount](skinning-swift.struct/jointtransformcount.md): The number of joint transforms.
- [influencesPerVertex](skinning-swift.struct/influencespervertex.md): The number of joint influences per vertex.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring skinning

- [skinning](skinning-swift.property.md): The skinning configuration, or `nil` if skinning is not used.
