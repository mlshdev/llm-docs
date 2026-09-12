> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgraphresource/init(definition:noderesourcemapping:skeletonresource:)](https://developer.apple.com/documentation/realitykit/animationgraphresource/init(definition:noderesourcemapping:skeletonresource:))

# init(definition:nodeResourceMapping:skeletonResource:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Compiles an animation graph definition into a resource that can drive animation on an entity.

## Declaration

```swift
convenience init(definition: Data, nodeResourceMapping: [Int : AnimationResource] = [:], skeletonResource: SkeletonResource) throws
```

## Parameters

- `definition`: The animation graph definition to compile.
- `nodeResourceMapping`: A mapping from graph-node IDs to the [AnimationResource](../animationresource.md) clips those nodes reference. Defaults to empty.
- `skeletonResource`: The [SkeletonResource](../skeletonresource.md) the graph targets.

<a id="discussion"></a>

## Discussion

To validate a definition without producing a resource — for example, when surfacing errors in editor tooling — call [validate(definition:nodeResourceMapping:skeletonResource:)](validate%28definition_noderesourcemapping_skeletonresource_%29.md) instead.

> **Throws**

> An error if the compiler couldn’t produce a resource from the definition. The thrown error carries every diagnostic the compiler reported.

## See Also

### Creating an animation graph

- [validate(definition:nodeResourceMapping:skeletonResource:)](validate%28definition_noderesourcemapping_skeletonresource_%29.md): Compiles an animation graph definition and returns any diagnostic messages the compiler produced, without producing a resource.
