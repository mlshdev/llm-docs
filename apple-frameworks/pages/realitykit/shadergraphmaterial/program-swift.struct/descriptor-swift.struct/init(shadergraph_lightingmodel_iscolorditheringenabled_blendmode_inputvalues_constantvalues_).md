> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct/init(shadergraph:lightingmodel:iscolorditheringenabled:blendmode:inputvalues:constantvalues:)](https://developer.apple.com/documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct/init(shadergraph:lightingmodel:iscolorditheringenabled:blendmode:inputvalues:constantvalues:))

# init(shaderGraph:lightingModel:isColorDitheringEnabled:blendMode:inputValues:constantValues:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a descriptor with explicit configuration.

## Declaration

```swift
init(shaderGraph: ShaderGraph, lightingModel: LightingModel, isColorDitheringEnabled: Bool = false, blendMode: MaterialParameterTypes.BlendMode? = nil, inputValues: [String : MaterialParameters.Value] = [:], constantValues: MTLFunctionConstantValues = .init())
```

## See Also

### Creating a descriptor

- [init(inferredFrom:inputValues:constantValues:)](init%28inferredfrom_inputvalues_constantvalues_%29.md): Creates a descriptor by inferring configuration from a shader graph.
