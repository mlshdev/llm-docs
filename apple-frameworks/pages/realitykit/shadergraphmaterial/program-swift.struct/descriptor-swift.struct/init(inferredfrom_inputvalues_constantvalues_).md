> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct/init(inferredfrom:inputvalues:constantvalues:)](https://developer.apple.com/documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct/init(inferredfrom:inputvalues:constantvalues:))

# init(inferredFrom:inputValues:constantValues:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a descriptor by inferring configuration from a shader graph.

## Declaration

```swift
init(inferredFrom graph: ShaderGraph, inputValues: [String : MaterialParameters.Value] = [:], constantValues: MTLFunctionConstantValues = .init()) throws
```

<a id="discussion"></a>

## Discussion

Analyzes node connections to determine the appropriate lighting model and settings — for example, enabling clearcoat if the graph connects to the clearcoat output.

This initializer will not infer default values of inputs or function constants.

## See Also

### Creating a descriptor

- [init(shaderGraph:lightingModel:isColorDitheringEnabled:blendMode:inputValues:constantValues:)](init%28shadergraph_lightingmodel_iscolorditheringenabled_blendmode_inputvalues_constantvalues_%29.md): Creates a descriptor with explicit configuration.
