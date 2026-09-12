> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalmaterial/program-swift.struct](https://developer.apple.com/documentation/realitykit/portalmaterial/program-swift.struct)

# PortalMaterial.Program

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A compiled shader program that drives the appearance of a portal’s surface and geometry.

## Declaration

```swift
struct Program
```

## Topics

### Configuring the program

- [descriptor](program-swift.struct/descriptor-swift.property.md): The descriptor that produced this program.
- [PortalMaterial.Program.Descriptor](program-swift.struct/descriptor-swift.struct.md): Configuration used to compile a [PortalMaterial.Program](program-swift.struct.md).

### Initializers

- [init(descriptor:)](program-swift.struct/init%28descriptor_%29.md): Compiles a program from the given descriptor.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the shader program

- [program](program-swift.property.md): The compiled program that drives this material’s surface and geometry shading.
