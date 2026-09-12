> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalcomponent/targetentity](https://developer.apple.com/documentation/realitykit/portalcomponent/targetentity)

# targetEntity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The root entity for the portal’s target world.

## Declaration

```swift
var targetEntity: Entity? { get set }
```

<a id="discussion"></a>

## Discussion

When the target entity is valid and has a [WorldComponent](../worldcomponent.md), the portal renders with the target entity and its hierarchy tree.

When the target entity doesn’t have a [WorldComponent](../worldcomponent.md), the portal doesn’t render.
