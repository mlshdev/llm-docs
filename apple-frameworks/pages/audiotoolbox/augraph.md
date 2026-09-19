> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/augraph

# AUGraph (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An opaque type representing an audio processing graph.

## Declaration

```swift
typealias AUGraph = OpaquePointer
```

## See Also

### Data Types

- [AudioUnitNodeConnection](audiounitnodeconnection.md): A connection between two node objects in an audio processing graph.
- [AUNode](aunode.md): A member of an audio processing graph, associated with an audio unit.
- [AUNodeInteraction](aunodeinteraction.md): Describes the interaction between two node objects.
- [AUNodeRenderCallback](aunoderendercallback.md): A callback used to provide input to an audio unit.

# AUGraph (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An opaque type representing an audio processing graph.

## Declaration

```objectivec
typedef struct OpaqueAUGraph * AUGraph;
```

## See Also

### Data Types

- [AudioUnitNodeConnection](audiounitnodeconnection.md): A connection between two node objects in an audio processing graph.
- [AUNode](aunode.md): A member of an audio processing graph, associated with an audio unit.
- [AUNodeInteraction](aunodeinteraction.md): Describes the interaction between two node objects.
- [AUNodeRenderCallback](aunoderendercallback.md): A callback used to provide input to an audio unit.
