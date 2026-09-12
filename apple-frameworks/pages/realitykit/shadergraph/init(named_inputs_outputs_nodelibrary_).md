> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/init(named:inputs:outputs:nodelibrary:)](https://developer.apple.com/documentation/realitykit/shadergraph/init(named:inputs:outputs:nodelibrary:))

# init(named:inputs:outputs:nodeLibrary:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a shader graph with the given name, inputs, and outputs.

## Declaration

```swift
init(named name: String, inputs: [ShaderGraph.NodeDefinition.Input], outputs: [ShaderGraph.NodeDefinition.Output], nodeLibrary: ShaderGraph.NodeLibrary) throws
```

## Parameters

- `name`: The name of the graph.
- `inputs`: The inputs of the graph.
- `outputs`: The outputs of the graph.
- `nodeLibrary`: The node library to use for this graph.
