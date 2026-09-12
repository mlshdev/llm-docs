> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/edge](https://developer.apple.com/documentation/realitykit/shadergraph/edge)

# ShaderGraph.Edge

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Represents a connection between two nodes in a shader graph.

## Declaration

```swift
struct Edge
```

## Topics

### Initializers

- [init(outputNode:outputPort:inputNode:inputPort:)](edge/init%28outputnode_outputport_inputnode_inputport_%29.md)

### Instance Properties

- [from](edge/from.md)
- [inputNode](edge/inputnode.md): The name of the node receiving the input value.
- [inputPort](edge/inputport.md): The name of the input port on the destination node.
- [outputNode](edge/outputnode.md): The name of the node providing the output value.
- [outputPort](edge/outputport.md): The name of the output port on the source node.
- [to](edge/to.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
