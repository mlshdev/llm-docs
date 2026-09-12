> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgraphcomponent/activenode](https://developer.apple.com/documentation/realitykit/animationgraphcomponent/activenode)

# AnimationGraphComponent.ActiveNode

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Common debug information for any node that was active during the most recent graph evaluation tick.

## Declaration

```swift
protocol ActiveNode : Identifiable, Sendable
```

<a id="overview"></a>

## Overview

`AnimationGraphComponent` reports active nodes through this protocol so that tools can iterate every node uniformly. To inspect node-kind-specific state, downcast to [AnimationGraphComponent.ActiveStateMachineNode](activestatemachinenode.md) or [AnimationGraphComponent.ActiveClipNode](activeclipnode.md), or iterate the typed accessors [activeStateMachineNodes](activestatemachinenodes.md) and [activeClipNodes](activeclipnodes.md) directly.

## Topics

### Inspecting the active node

- [id](activenode/id.md): The unique identifier of the node within the compiled graph.
- [wasReset](activenode/wasreset.md): A Boolean value that indicates whether the node was reset during the last evaluation tick.

### Instance Properties

- [name](activenode/name.md): The author-supplied name of the node from the graph definition.

## Relationships

### Inherits From

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AnimationGraphComponent.ActiveClipNode](activeclipnode.md)
- [AnimationGraphComponent.ActiveStateMachineNode](activestatemachinenode.md)

## See Also

### Accessing active nodes

- [activeNodes](activenodes.md): Every node that contributed to the most recent graph evaluation tick.
- [activeClipNodes](activeclipnodes.md): The animation clip nodes that were active during the most recent graph evaluation tick.
- [AnimationGraphComponent.ActiveClipNode](activeclipnode.md): Debug information for an active animation clip node within the graph.
- [activeStateMachineNodes](activestatemachinenodes.md): The state machine nodes that were active during the most recent graph evaluation tick.
- [AnimationGraphComponent.ActiveStateMachineNode](activestatemachinenode.md): Debug information for an active state machine node within the graph.
