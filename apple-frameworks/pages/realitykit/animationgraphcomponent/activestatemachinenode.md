> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgraphcomponent/activestatemachinenode](https://developer.apple.com/documentation/realitykit/animationgraphcomponent/activestatemachinenode)

# AnimationGraphComponent.ActiveStateMachineNode

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Debug information for an active state machine node within the graph.

## Declaration

```swift
struct ActiveStateMachineNode
```

<a id="overview"></a>

## Overview

Use this type to read the current and previous states of a state machine, along with the most recent transition the state machine took. The state and transition values are IDs into the graph definition rather than human-readable strings.

## Topics

### Identifying the node

- [id](activestatemachinenode/id.md): The unique identifier of the node within the compiled graph.

### Inspecting the node state

- [currentState](activestatemachinenode/currentstate.md): The ID of the state the state machine is currently in.
- [previousState](activestatemachinenode/previousstate.md): The ID of the state the state machine was in immediately before [currentState](activestatemachinenode/currentstate.md).
- [lastTransition](activestatemachinenode/lasttransition.md): The ID of the most recent transition the state machine took.
- [wasReset](activestatemachinenode/wasreset.md): A Boolean value that indicates whether the node was reset during the last evaluation tick.

### Instance Properties

- [name](activestatemachinenode/name.md): The author-supplied name of the node from the graph definition.

## Relationships

### Conforms To

- [AnimationGraphComponent.ActiveNode](activenode.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing active nodes

- [activeNodes](activenodes.md): Every node that contributed to the most recent graph evaluation tick.
- [AnimationGraphComponent.ActiveNode](activenode.md): Common debug information for any node that was active during the most recent graph evaluation tick.
- [activeClipNodes](activeclipnodes.md): The animation clip nodes that were active during the most recent graph evaluation tick.
- [AnimationGraphComponent.ActiveClipNode](activeclipnode.md): Debug information for an active animation clip node within the graph.
- [activeStateMachineNodes](activestatemachinenodes.md): The state machine nodes that were active during the most recent graph evaluation tick.
