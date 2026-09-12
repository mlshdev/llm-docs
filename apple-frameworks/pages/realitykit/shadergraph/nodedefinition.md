> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/nodedefinition](https://developer.apple.com/documentation/realitykit/shadergraph/nodedefinition)

# ShaderGraph.NodeDefinition

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A description of a node type supported by RealityKit, including its inputs, outputs, and platform availability.

## Declaration

```swift
struct NodeDefinition
```

<a id="overview"></a>

## Overview

Obtain definitions from a [ShaderGraph.NodeLibrary](nodelibrary.md) and use them to add nodes to a [ShaderGraph](../shadergraph.md).

## Topics

### Structures

- [ShaderGraph.NodeDefinition.Input](nodedefinition/input.md)
- [ShaderGraph.NodeDefinition.Output](nodedefinition/output.md)
- [ShaderGraph.NodeDefinition.SemanticType](nodedefinition/semantictype.md)

### Instance Properties

- [availability](nodedefinition/availability-swift.property.md): The availability of this node definition on each platform.
- [functionalName](nodedefinition/functionalname.md): The name of the functional operation this definition implements.
- [group](nodedefinition/group.md): The category this definition belongs to, or `nil` if uncategorized.
- [inputs](nodedefinition/inputs.md): The input ports accepted by this node definition.
- [name](nodedefinition/name.md): The unique identifier for this node definition.
- [outputs](nodedefinition/outputs.md): The output ports produced by this node definition.

### Instance Methods

- [isAvailable(on:version:)](nodedefinition/isavailable%28on_version_%29.md): Returns whether this node definition is available on a given platform and OS version.

### Enumerations

- [ShaderGraph.NodeDefinition.Availability](nodedefinition/availability-swift.enum.md)
- [ShaderGraph.NodeDefinition.Platform](nodedefinition/platform.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
