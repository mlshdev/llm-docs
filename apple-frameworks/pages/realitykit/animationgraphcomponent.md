> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgraphcomponent](https://developer.apple.com/documentation/realitykit/animationgraphcomponent)

# AnimationGraphComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A component that drives skeletal animation on an entity using an animation graph.

## Declaration

```swift
struct AnimationGraphComponent
```

<a id="overview"></a>

## Overview

[AnimationGraphComponent](animationgraphcomponent.md) attaches a compiled [AnimationGraphResource](animationgraphresource.md) to an entity. The component evaluates the graph each frame, computes a skeletal pose by blending and transitioning between animation clips, and applies the resulting pose to the entity’s [SkeletalPosesComponent](skeletalposescomponent.md).

Multiple components in the same scene can reference the same resource, which lets a single graph drive many entities without duplicating its underlying data. Each component keeps its own per-instance evaluation state — animation timing, state-machine progress, and parameter values — so characters that share a graph stay independent.

<a id="Attach-a-graph-to-an-entity"></a>

### Attach a graph to an entity

```swift
entity.components.set(AnimationGraphComponent(graph: graphResource))
```

<a id="Inspect-the-active-graph-state"></a>

### Inspect the active graph state

The component exposes the graph’s runtime state for debugging and for building tools that visualize what a character is doing. [activeNodes](animationgraphcomponent/activenodes.md) returns every node that contributed to the most recent pose. To work with a single kind of node, iterate [activeStateMachineNodes](animationgraphcomponent/activestatemachinenodes.md) or [activeClipNodes](animationgraphcomponent/activeclipnodes.md) instead — those collections return the narrower [AnimationGraphComponent.ActiveStateMachineNode](animationgraphcomponent/activestatemachinenode.md) and [AnimationGraphComponent.ActiveClipNode](animationgraphcomponent/activeclipnode.md) types, which expose only the fields that apply to that node kind.

```swift
for node in component.activeStateMachineNodes {
    print("\(node.name): state \(node.currentState)")
}

for node in component.activeClipNodes {
    print("\(node.name): cycle \(node.currentCycle)")
}
```

To observe outputs the graph emits back to the rest of the application, read [activeTags](animationgraphcomponent/activetags.md). Tags are graph-level signals that the graph raises while certain states are active.

## Topics

### Creating a component

- [init(graph:)](animationgraphcomponent/init%28graph_%29.md): Creates a component that drives skeletal animation on an entity using the supplied compiled animation graph.

### Accessing the graph

- [graph](animationgraphcomponent/graph.md): The compiled animation graph that backs this component.

### Accessing active nodes

- [activeNodes](animationgraphcomponent/activenodes.md): Every node that contributed to the most recent graph evaluation tick.
- [AnimationGraphComponent.ActiveNode](animationgraphcomponent/activenode.md): Common debug information for any node that was active during the most recent graph evaluation tick.
- [activeClipNodes](animationgraphcomponent/activeclipnodes.md): The animation clip nodes that were active during the most recent graph evaluation tick.
- [AnimationGraphComponent.ActiveClipNode](animationgraphcomponent/activeclipnode.md): Debug information for an active animation clip node within the graph.
- [activeStateMachineNodes](animationgraphcomponent/activestatemachinenodes.md): The state machine nodes that were active during the most recent graph evaluation tick.
- [AnimationGraphComponent.ActiveStateMachineNode](animationgraphcomponent/activestatemachinenode.md): Debug information for an active state machine node within the graph.

### Accessing active tags

- [activeTags](animationgraphcomponent/activetags.md): The tags that were active or fired during the most recent graph evaluation tick.
- [AnimationGraphComponent.ActiveTag](animationgraphcomponent/activetag.md): A graph-level signal raised by the graph while certain states are active.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Animation graphs

- [AnimationGraphResource](animationgraphresource.md): A compiled animation graph that drives skeletal animation on an entity by blending and transitioning between animation clips at runtime.
