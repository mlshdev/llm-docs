> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelargumenttable/descriptor-swift.struct/texture](https://developer.apple.com/documentation/realitykit/lowlevelargumenttable/descriptor-swift.struct/texture)

# LowLevelArgumentTable.Descriptor.Texture

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A texture slot descriptor in an argument table.

## Declaration

```swift
struct Texture
```

## Topics

### Creating a texture descriptor

- [init(type:)](texture/init%28type_%29.md): Creates a texture slot descriptor with the given texture type.

### Configuring the texture type

- [type](texture/type.md): The texture type expected at this slot.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying resources

- [buffers](buffers.md): The ordered list of buffer slots in this table.
- [LowLevelArgumentTable.Descriptor.Buffer](buffer.md): A buffer slot descriptor in an argument table.
- [textures](textures.md): The ordered list of texture slots in this table.
