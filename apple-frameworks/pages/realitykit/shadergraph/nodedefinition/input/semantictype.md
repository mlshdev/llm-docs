> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/nodedefinition/input/semantictype](https://developer.apple.com/documentation/realitykit/shadergraph/nodedefinition/input/semantictype)

# semanticType

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The original type of this input.

## Declaration

```swift
let semanticType: ShaderGraph.NodeDefinition.SemanticType?
```

<a id="discussion"></a>

## Discussion

Semantic types describe the type information from a standard, such as MaterialX 1.38. RealityKit converts this type information into a `ShaderGraph.DataType` on [ShaderGraph.NodeLibrary](../../nodelibrary.md) creation, which it can use for various type checking during ShaderGraphMaterial.Program compilation.
