> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/surfaceshader/descriptor](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/surfaceshader/descriptor)

# LowLevelMaterialResource.SurfaceShader.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The name and library for a user-authored Metal surface shader function.

## Declaration

```swift
struct Descriptor
```

## Topics

### Creating a descriptor

- [init(named:in:constantValues:)](descriptor/init%28named_in_constantvalues_%29.md): Creates a descriptor referencing the named function in the given library, with the provided function constant values.
- [init(named:in:constantValues:uniformsSize:)](descriptor/init%28named_in_constantvalues_uniformssize_%29.md): Creates a descriptor for a surface shader that accepts a custom uniforms argument buffer.
- [init(named:in:constantValues:uniformsType:)](descriptor/init%28named_in_constantvalues_uniformstype_%29.md): Creates a descriptor for a surface shader that accepts a custom uniforms argument buffer, deriving the buffer size from `uniformsType`.

### Configuring the shader function

- [library](descriptor/library.md): The Metal library that contains the function.
- [constantValues](descriptor/constantvalues.md): The constant values to use when creating the function. These correspond to constants defined in your Metal code.

### Initializers

- [init(named:in:)](descriptor/init%28named_in_%29.md): Creates a descriptor referencing the named function in the given library.

### Instance Properties

- [name](descriptor/name.md): The name of the Metal function in the library.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
