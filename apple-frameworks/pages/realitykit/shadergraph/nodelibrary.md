> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/nodelibrary](https://developer.apple.com/documentation/realitykit/shadergraph/nodelibrary)

# ShaderGraph.NodeLibrary

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A catalog of node definitions supported by RealityKit.

## Declaration

```swift
final class NodeLibrary
```

<a id="overview"></a>

## Overview

Use a library to discover available [ShaderGraph.NodeDefinition](nodedefinition.md) values and add instances of them to a [ShaderGraph](../shadergraph.md).

```swift
let library = ShaderGraph.NodeLibrary(version: .materialX138)
let pbrDef = library.definition(named: "ND_realitykit_pbr_surfaceshader")!
let pbrNode = try library.makeNode(from: pbrDef)
let pbr = graph.addNode(pbrNode)
```

## Topics

### Structures

- [ShaderGraph.NodeLibrary.Version](nodelibrary/version-swift.struct.md)

### Initializers

- [init(version:)](nodelibrary/init%28version_%29.md): Creates a library containing all node definitions supported by RealityKit for the given library version.

### Instance Properties

- [definitions](nodelibrary/definitions.md): All node definitions in this library.
- [version](nodelibrary/version-swift.property.md)

### Instance Methods

- [definition(named:)](nodelibrary/definition%28named_%29.md): Returns the definition with the given name, or `nil` if no such definition exists in this library.
- [definitions(function:input:)](nodelibrary/definitions%28function_input_%29.md): Returns all definitions that implement the given function with the specified input type.
- [definitions(function:inputs:)](nodelibrary/definitions%28function_inputs_%29.md): Returns all definitions that implement the given function with the specified input types, in order.
- [definitions(function:output:)](nodelibrary/definitions%28function_output_%29.md): Returns all definitions that implement the given function with the specified output type.
- [makeNode(from:)](nodelibrary/makenode%28from_%29.md): Creates a node instance of the given definition.
