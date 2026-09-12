> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/functionconstantinputs](https://developer.apple.com/documentation/realitykit/shadergraph/functionconstantinputs)

# functionConstantInputs

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The names of graph inputs whose values are baked in at program compilation time.

## Declaration

```swift
final var functionConstantInputs: [String]
```

<a id="discussion"></a>

## Discussion

Function constant inputs are compiled directly into the shader and cannot be changed after [ShaderGraphMaterial.Program](../shadergraphmaterial/program-swift.struct.md) is created. Supply their values via [constantValues](../shadergraphmaterial/program-swift.struct/descriptor-swift.struct/constantvalues.md).
