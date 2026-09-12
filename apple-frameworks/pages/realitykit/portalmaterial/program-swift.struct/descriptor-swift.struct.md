> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalmaterial/program-swift.struct/descriptor-swift.struct](https://developer.apple.com/documentation/realitykit/portalmaterial/program-swift.struct/descriptor-swift.struct)

# PortalMaterial.Program.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Configuration used to compile a [PortalMaterial.Program](../program-swift.struct.md).

## Declaration

```swift
struct Descriptor
```

## Topics

### Creating a descriptor

- [init(shaderGraph:inputValues:constantValues:)](descriptor-swift.struct/init%28shadergraph_inputvalues_constantvalues_%29.md): Creates a descriptor with the given shader graph and optional initial values.

### Configuring the shader program

- [shaderGraph](descriptor-swift.struct/shadergraph.md): The shader graph that describes the shading logic for this program.
- [inputValues](descriptor-swift.struct/inputvalues.md): Initial values for the inputs that the shader graph declares.
- [constantValues](descriptor-swift.struct/constantvalues.md): Values for the function-constant inputs that the shader graph declares.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Configuring the program

- [descriptor](descriptor-swift.property.md): The descriptor that produced this program.
