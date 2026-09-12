> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/aunoderendercallback](https://developer.apple.com/documentation/audiotoolbox/aunoderendercallback)

# AUNodeRenderCallback (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A callback used to provide input to an audio unit.

## Declaration

```swift
struct AUNodeRenderCallback
```

<a id="overview"></a>

## Overview

Used to contain information when a callback is used to provide input to the specific node’s specified input.

## Topics

### Initializers

- [init()](aunoderendercallback/init%28%29.md)
- [init(destNode:destInputNumber:cback:)](aunoderendercallback/init%28destnode_destinputnumber_cback_%29.md)

### Instance Properties

- [cback](aunoderendercallback/cback.md)
- [destInputNumber](aunoderendercallback/destinputnumber.md)
- [destNode](aunoderendercallback/destnode.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Data Types

- [AudioUnitNodeConnection](audiounitnodeconnection.md): A connection between two node objects in an audio processing graph.
- [AUGraph](augraph.md): An opaque type representing an audio processing graph.
- [AUNode](aunode.md): A member of an audio processing graph, associated with an audio unit.
- [AUNodeInteraction](aunodeinteraction.md): Describes the interaction between two node objects.

# AUNodeRenderCallback (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A callback used to provide input to an audio unit.

## Declaration

```objectivec
struct AUNodeRenderCallback;
```

<a id="overview"></a>

## Overview

Used to contain information when a callback is used to provide input to the specific node’s specified input.

## Topics

### Instance Properties

- [cback](aunoderendercallback/cback.md)
- [destInputNumber](aunoderendercallback/destinputnumber.md)
- [destNode](aunoderendercallback/destnode.md)

## See Also

### Data Types

- [AudioUnitNodeConnection](audiounitnodeconnection.md): A connection between two node objects in an audio processing graph.
- [AUGraph](augraph.md): An opaque type representing an audio processing graph.
- [AUNode](aunode.md): A member of an audio processing graph, associated with an audio unit.
- [AUNodeInteraction](aunodeinteraction.md): Describes the interaction between two node objects.
