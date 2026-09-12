> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelargumenttable/descriptor-swift.struct/buffer](https://developer.apple.com/documentation/realitykit/lowlevelargumenttable/descriptor-swift.struct/buffer)

# LowLevelArgumentTable.Descriptor.Buffer

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A buffer slot descriptor in an argument table.

## Declaration

```swift
struct Buffer
```

## Topics

### Creating a buffer descriptor

- [init(size:)](buffer/init%28size_%29.md): Creates a buffer slot descriptor with the given size.
- [size](buffer/size.md): The minimum size, in bytes, that a buffer slice must have to be bound to this slot.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying resources

- [buffers](buffers.md): The ordered list of buffer slots in this table.
- [textures](textures.md): The ordered list of texture slots in this table.
- [LowLevelArgumentTable.Descriptor.Texture](texture.md): A texture slot descriptor in an argument table.
