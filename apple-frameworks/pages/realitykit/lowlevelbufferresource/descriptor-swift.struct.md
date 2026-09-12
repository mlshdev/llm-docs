> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelbufferresource/descriptor-swift.struct](https://developer.apple.com/documentation/realitykit/lowlevelbufferresource/descriptor-swift.struct)

# LowLevelBufferResource.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The capacity and alignment requirements for a buffer resource.

## Declaration

```swift
struct Descriptor
```

## Topics

### Creating a descriptor

- [init(capacity:sizeMultiple:)](descriptor-swift.struct/init%28capacity_sizemultiple_%29.md): Creates a buffer descriptor with the given capacity and size alignment.

### Configuring the buffer size

- [capacity](descriptor-swift.struct/capacity.md): The capacity of the buffer, in bytes.
- [sizeMultiple](descriptor-swift.struct/sizemultiple.md): The required alignment of the buffer’s size, in bytes.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting the descriptor

- [descriptor](descriptor-swift.property.md): The descriptor used to create this buffer resource.
