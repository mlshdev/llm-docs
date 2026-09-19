> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/animationgraphcomponent/init(graph:)

# init(graph:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a component that drives skeletal animation on an entity using the supplied compiled animation graph.

## Declaration

```swift
init(graph: AnimationGraphResource)
```

## Parameters

- `graph`: The compiled [AnimationGraphResource](../animationgraphresource.md) that drives this component.

<a id="discussion"></a>

## Discussion

Per-instance evaluation state initializes when the entity becomes active in a scene, so accessors such as [activeNodes](activenodes.md) return an empty array until the first evaluation tick has run.
