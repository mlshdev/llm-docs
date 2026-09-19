> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shadergraph/init(named:inputs:outputs:)

# init(named:inputs:outputs:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a shader graph with the given name, inputs, and outputs.

> Create a \`ShaderGraph\` instance with a NodeLibrary value instead.

## Declaration

```swift
init(named name: String, inputs: [ShaderGraph.NodeDefinition.Input], outputs: [ShaderGraph.NodeDefinition.Output]) throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> If any input or output name is empty or duplicated.
