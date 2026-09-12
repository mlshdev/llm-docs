> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/connect(_:outputport:to:inputport:)](https://developer.apple.com/documentation/realitykit/shadergraph/connect(_:outputport:to:inputport:))

# connect(\_:outputPort:to:inputPort:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Connect a node with a given output, to a node with a given input. If outputPort is nil, the first output on outputNode is used.

## Declaration

```swift
final func connect(_ outputNode: ShaderGraph.Node, outputPort: String? = nil, to inputNode: ShaderGraph.Node, inputPort: String) throws
```
