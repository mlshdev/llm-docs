> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct](https://developer.apple.com/documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct)

# ShaderGraphMaterial.Program.Descriptor

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
struct Descriptor
```

## Topics

### Creating a descriptor

- [init(shaderGraph:lightingModel:isColorDitheringEnabled:blendMode:inputValues:constantValues:)](descriptor-swift.struct/init%28shadergraph_lightingmodel_iscolorditheringenabled_blendmode_inputvalues_constantvalues_%29.md): Creates a descriptor with explicit configuration.
- [init(inferredFrom:inputValues:constantValues:)](descriptor-swift.struct/init%28inferredfrom_inputvalues_constantvalues_%29.md): Creates a descriptor by inferring configuration from a shader graph.

### Specifying the shader graph

- [shaderGraph](descriptor-swift.struct/shadergraph.md): The shader graph that describes the shading logic for this program.
- [inputValues](descriptor-swift.struct/inputvalues.md): Initial values for the inputs declared in `shaderNodeGraph`.
- [constantValues](descriptor-swift.struct/constantvalues.md): Values for the function constant inputs declared in `shaderNodeGraph`.

### Configuring rendering

- [lightingModel](descriptor-swift.struct/lightingmodel.md): The lighting model to use when rendering this material.
- [blendMode](descriptor-swift.struct/blendmode.md): How materials using this program blend with content behind them.
- [isColorDitheringEnabled](descriptor-swift.struct/iscolorditheringenabled.md): Whether to dither color values before writing to the frame buffer.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Accessing the descriptor

- [descriptor](descriptor-swift.property.md): The descriptor used to create this program.
