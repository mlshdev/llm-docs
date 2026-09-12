> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalmaterial/program-swift.struct/descriptor-swift.struct/inputvalues](https://developer.apple.com/documentation/realitykit/portalmaterial/program-swift.struct/descriptor-swift.struct/inputvalues)

# inputValues

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Initial values for the inputs that the shader graph declares.

## Declaration

```swift
var inputValues: [String : MaterialParameters.Value]
```

<a id="discussion"></a>

## Discussion

Each entry binds a graph input by name to a starting value. The engine applies these values when a [PortalMaterial](../../../portalmaterial.md) is first created from the resulting program; you can change any of them at runtime by calling [setParameter(name:value:)](../../setparameter%28name_value_%29.md).

Inputs that the graph declares as function constants belong in [constantValues](constantvalues.md) instead.

## See Also

### Configuring the shader program

- [shaderGraph](shadergraph.md): The shader graph that describes the shading logic for this program.
- [constantValues](constantvalues.md): Values for the function-constant inputs that the shader graph declares.
