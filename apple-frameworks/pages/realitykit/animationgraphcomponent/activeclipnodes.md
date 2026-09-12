> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgraphcomponent/activeclipnodes](https://developer.apple.com/documentation/realitykit/animationgraphcomponent/activeclipnodes)

# activeClipNodes

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The animation clip nodes that were active during the most recent graph evaluation tick.

## Declaration

```swift
var activeClipNodes: [AnimationGraphComponent.ActiveClipNode] { get }
```

<a id="discussion"></a>

## Discussion

This is the typed view of [activeNodes](activenodes.md) filtered to [AnimationGraphComponent.ActiveClipNode](activeclipnode.md).

## See Also

### Accessing active nodes

- [activeNodes](activenodes.md): Every node that contributed to the most recent graph evaluation tick.
- [AnimationGraphComponent.ActiveNode](activenode.md): Common debug information for any node that was active during the most recent graph evaluation tick.
- [AnimationGraphComponent.ActiveClipNode](activeclipnode.md): Debug information for an active animation clip node within the graph.
- [activeStateMachineNodes](activestatemachinenodes.md): The state machine nodes that were active during the most recent graph evaluation tick.
- [AnimationGraphComponent.ActiveStateMachineNode](activestatemachinenode.md): Debug information for an active state machine node within the graph.
