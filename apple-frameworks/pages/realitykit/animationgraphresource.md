> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgraphresource](https://developer.apple.com/documentation/realitykit/animationgraphresource)

# AnimationGraphResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A compiled animation graph that drives skeletal animation on an entity by blending and transitioning between animation clips at runtime.

## Declaration

```swift
class AnimationGraphResource
```

<a id="overview"></a>

## Overview

Compile an animation graph definition once into an [AnimationGraphResource](animationgraphresource.md), then attach it to one or more entities through [AnimationGraphComponent](animationgraphcomponent.md). The same resource can drive many entities — each [AnimationGraphComponent](animationgraphcomponent.md) keeps its own per-instance evaluation state, so animation timing, state-machine progress, and parameter values stay independent across characters that share a graph.

<a id="Compile-and-attach-a-graph"></a>

### Compile and attach a graph

```swift
let resource = try AnimationGraphResource(
    definition: graphDefinition,
    nodeResourceMapping: clips,
    skeletonResource: skeleton
)
entity.components.set(AnimationGraphComponent(graph: resource))
```

<a id="Drive-the-graph-with-parameters"></a>

### Drive the graph with parameters

A graph exposes a set of named, typed parameters that control its behavior at runtime, such as a movement speed or a trigger that initiates a transition. List the parameters declared by the graph through [parameterNames](animationgraphresource/parameternames.md). Set values through the owning entity’s parameter binding rather than through the resource itself:

```swift
entity.parameters["MoveSpeed"] = BindableValue(Float(1.0))
```

When the graph evaluates next, it picks up the values bound on the entity whose names and types match the graph’s declared parameters.

<a id="Validate-before-compiling"></a>

### Validate before compiling

To check a graph definition for errors without producing a resource — for example, in editor tooling — call [validate(definition:nodeResourceMapping:skeletonResource:)](animationgraphresource/validate%28definition_noderesourcemapping_skeletonresource_%29.md), which returns compiler diagnostics rather than throwing.

## Topics

### Creating an animation graph

- [init(definition:nodeResourceMapping:skeletonResource:)](animationgraphresource/init%28definition_noderesourcemapping_skeletonresource_%29.md): Compiles an animation graph definition into a resource that can drive animation on an entity.
- [validate(definition:nodeResourceMapping:skeletonResource:)](animationgraphresource/validate%28definition_noderesourcemapping_skeletonresource_%29.md): Compiles an animation graph definition and returns any diagnostic messages the compiler produced, without producing a resource.

### Accessing parameters

- [parameterNames](animationgraphresource/parameternames.md): The names of all parameters declared by the graph definition.

## Relationships

### Conforms To

- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Animation graphs

- [AnimationGraphComponent](animationgraphcomponent.md): A component that drives skeletal animation on an entity using an animation graph.
