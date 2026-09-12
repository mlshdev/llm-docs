> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitnodeconnection](https://developer.apple.com/documentation/audiotoolbox/audiounitnodeconnection)

# AudioUnitNodeConnection (Swift)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A connection between two node objects in an audio processing graph.

## Declaration

```swift
struct AudioUnitNodeConnection
```

## Topics

### Initializers

- [init()](audiounitnodeconnection/init%28%29.md)
- [init(sourceNode:sourceOutputNumber:destNode:destInputNumber:)](audiounitnodeconnection/init%28sourcenode_sourceoutputnumber_destnode_destinputnumber_%29.md)

### Instance Properties

- [destInputNumber](audiounitnodeconnection/destinputnumber.md)
- [destNode](audiounitnodeconnection/destnode.md)
- [sourceNode](audiounitnodeconnection/sourcenode.md)
- [sourceOutputNumber](audiounitnodeconnection/sourceoutputnumber.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [AUGraph](augraph.md): An opaque type representing an audio processing graph.
- [AUNode](aunode.md): A member of an audio processing graph, associated with an audio unit.
- [AUNodeInteraction](aunodeinteraction.md): Describes the interaction between two node objects.
- [AUNodeRenderCallback](aunoderendercallback.md): A callback used to provide input to an audio unit.

# AudioUnitNodeConnection (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A connection between two node objects in an audio processing graph.

## Declaration

```objectivec
struct AudioUnitNodeConnection;
```

## Topics

### Instance Properties

- [destInputNumber](audiounitnodeconnection/destinputnumber.md)
- [destNode](audiounitnodeconnection/destnode.md)
- [sourceNode](audiounitnodeconnection/sourcenode.md)
- [sourceOutputNumber](audiounitnodeconnection/sourceoutputnumber.md)

## See Also

### Data Types

- [AUGraph](augraph.md): An opaque type representing an audio processing graph.
- [AUNode](aunode.md): A member of an audio processing graph, associated with an audio unit.
- [AUNodeInteraction](aunodeinteraction.md): Describes the interaction between two node objects.
- [AUNodeRenderCallback](aunoderendercallback.md): A callback used to provide input to an audio unit.
