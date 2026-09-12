> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph](https://developer.apple.com/documentation/realitykit/shadergraph)

# ShaderGraph

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
final class ShaderGraph
```

## Topics

### Classes

- [ShaderGraph.NodeLibrary](shadergraph/nodelibrary.md): A catalog of node definitions supported by RealityKit.

### Structures

- [ShaderGraph.Edge](shadergraph/edge.md): Represents a connection between two nodes in a shader graph.
- [ShaderGraph.Node](shadergraph/node.md)
- [ShaderGraph.NodeDefinition](shadergraph/nodedefinition.md): A description of a node type supported by RealityKit, including its inputs, outputs, and platform availability.

### Initializers

- [init(from:)](shadergraph/init%28from_%29.md): Creates a graph from data previously produced by [encode()](shadergraph/encode%28%29.md).
- [init(named:inputs:outputs:)](shadergraph/init%28named_inputs_outputs_%29.md): Deprecated. Creates a shader graph with the given name, inputs, and outputs.
- [init(named:inputs:outputs:nodeLibrary:)](shadergraph/init%28named_inputs_outputs_nodelibrary_%29.md): Creates a shader graph with the given name, inputs, and outputs.

### Instance Properties

- [arguments](shadergraph/arguments.md): The virtual node representing this graph’s inputs.
- [edges](shadergraph/edges.md)
- [functionConstantInputs](shadergraph/functionconstantinputs.md): The names of graph inputs whose values are baked in at program compilation time.
- [inputs](shadergraph/inputs.md): The declared input ports of this graph.
- [nodes](shadergraph/nodes.md): All nodes in the graph, keyed by node name.
- [outputs](shadergraph/outputs.md): The declared output ports of this graph.
- [primvarMappings](shadergraph/primvarmappings.md): Maps primvar names used in this graph to texture coordinate channels.
- [results](shadergraph/results.md): The virtual node representing this graph’s outputs.

### Instance Methods

- [addConstant(\_:)](shadergraph/addconstant%28__%29.md)
- [addConstant(\_:named:)](shadergraph/addconstant%28__named_%29.md)
- [addEdge(\_:)](shadergraph/addedge%28__%29.md): Adds an edge to the graph.
- [addNode(\_:)](shadergraph/addnode%28__%29.md): Adds a node to the graph and returns its name.
- [canAddEdge(\_:)](shadergraph/canaddedge%28__%29.md): Returns whether an edge can be added to the graph.
- [canAddNode(\_:)](shadergraph/canaddnode%28__%29.md): Returns whether a node can be added to the graph.
- [connect(\_:outputPort:to:inputPort:)](shadergraph/connect%28__outputport_to_inputport_%29.md): Connect a node with a given output, to a node with a given input. If outputPort is nil, the first output on outputNode is used.
- [containsEdge(\_:)](shadergraph/containsedge%28__%29.md): Returns whether the graph contains an edge equal to the given edge.
- [encode()](shadergraph/encode%28%29.md): Encodes the graph into a binary representation.
- [removeEdge(\_:)](shadergraph/removeedge%28__%29.md): Removes an edge from the graph.
- [removeNode(\_:)](shadergraph/removenode%28__%29.md)
- [replace(nodes:edges:)](shadergraph/replace%28nodes_edges_%29.md): Replaces all nodes and edges in the graph.
- [updateNode(\_:forKey:)](shadergraph/updatenode%28__forkey_%29.md): Replaces the node stored under the given name.
- [validate()](shadergraph/validate%28%29.md): Checks whether the graph is well-formed without producing a Metal library.
- [validateAddingEdge(\_:)](shadergraph/validateaddingedge%28__%29.md): Validates that an edge can be added to the graph without adding it, throwing a descriptive error if not.
- [validateAddingNode(\_:)](shadergraph/validateaddingnode%28__%29.md): Validates that a node can be added to the graph without adding it, throwing a descriptive error if not.

### Subscripts

- [subscript(\_:)](shadergraph/subscript%28__%29.md)

### Type Aliases

- [ShaderGraph.EdgeError](shadergraph/edgeerror.md)
- [ShaderGraph.EdgeType](shadergraph/edgetype.md)
- [ShaderGraph.NodeError](shadergraph/nodeerror.md)
- [ShaderGraph.NodeKey](shadergraph/nodekey.md)
- [ShaderGraph.NodeType](shadergraph/nodetype.md)

### Enumerations

- [ShaderGraph.DataType](shadergraph/datatype.md)
- [ShaderGraph.TextureCoordinate](shadergraph/texturecoordinate.md)
- [ShaderGraph.Value](shadergraph/value.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
