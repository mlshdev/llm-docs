> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aunodeinteraction](https://developer.apple.com/documentation/audiotoolbox/aunodeinteraction)

# AUNodeInteraction (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Describes the interaction between two node objects.

## Declaration

```swift
struct AUNodeInteraction
```

<a id="overview"></a>

## Overview

This structure contains information about the interaction between two nodes (in the case of a connection), or the input to a node (in the case of a callback).

The type of the interaction is used to determine how to interpret the contents of the following union.

There may be other nodal interactions in the future, so NO ASSUMPTIONS should be made that these are the only two nodal interaction types; you must always check the nodeInteractionType and only act on those types you understand.

Arrays of these structs can be returned, the addition of new members to the nodeInteraction union will NOT change the size of this structure.

## Topics

### Initializers

- [init()](aunodeinteraction/init%28%29.md)
- [init(nodeInteractionType:nodeInteraction:)](aunodeinteraction/init%28nodeinteractiontype_nodeinteraction_%29.md)

### Instance Properties

- [nodeInteraction](aunodeinteraction/nodeinteraction.md): A union providing information about a node interaction.
- [nodeInteractionType](aunodeinteraction/nodeinteractiontype.md): The interaction type.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [AudioUnitNodeConnection](audiounitnodeconnection.md): A connection between two node objects in an audio processing graph.
- [AUGraph](augraph.md): An opaque type representing an audio processing graph.
- [AUNode](aunode.md): A member of an audio processing graph, associated with an audio unit.
- [AUNodeRenderCallback](aunoderendercallback.md): A callback used to provide input to an audio unit.

# AUNodeInteraction (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Describes the interaction between two node objects.

## Declaration

```objectivec
struct AUNodeInteraction;
```

<a id="overview"></a>

## Overview

This structure contains information about the interaction between two nodes (in the case of a connection), or the input to a node (in the case of a callback).

The type of the interaction is used to determine how to interpret the contents of the following union.

There may be other nodal interactions in the future, so NO ASSUMPTIONS should be made that these are the only two nodal interaction types; you must always check the nodeInteractionType and only act on those types you understand.

Arrays of these structs can be returned, the addition of new members to the nodeInteraction union will NOT change the size of this structure.

## Topics

### Instance Properties

- [nodeInteraction](aunodeinteraction/nodeinteraction.md): A union providing information about a node interaction.
- [nodeInteractionType](aunodeinteraction/nodeinteractiontype.md): The interaction type.

## See Also

### Data Types

- [AudioUnitNodeConnection](audiounitnodeconnection.md): A connection between two node objects in an audio processing graph.
- [AUGraph](augraph.md): An opaque type representing an audio processing graph.
- [AUNode](aunode.md): A member of an audio processing graph, associated with an audio unit.
- [AUNodeRenderCallback](aunoderendercallback.md): A callback used to provide input to an audio unit.
