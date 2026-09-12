> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgraphcomponent/activeclipnode](https://developer.apple.com/documentation/realitykit/animationgraphcomponent/activeclipnode)

# AnimationGraphComponent.ActiveClipNode

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Debug information for an active animation clip node within the graph.

## Declaration

```swift
struct ActiveClipNode
```

<a id="overview"></a>

## Overview

Use this type to read the current playback position of an animation clip the graph is sampling.

## Topics

### Inspecting playback state

- [id](activeclipnode/id.md): The unique identifier of the node within the compiled graph.
- [currentCycle](activeclipnode/currentcycle.md): The current playback cycle of the clip.
- [wasReset](activeclipnode/wasreset.md): A Boolean value that indicates whether the node was reset during the last evaluation tick.

### Instance Properties

- [name](activeclipnode/name.md): The author-supplied name of the node from the graph definition.

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
- [activeStateMachineNodes](activestatemachinenodes.md): The state machine nodes that were active during the most recent graph evaluation tick.
- [AnimationGraphComponent.ActiveStateMachineNode](activestatemachinenode.md): Debug information for an active state machine node within the graph.
