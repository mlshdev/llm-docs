> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgraphresource/validate(definition:noderesourcemapping:skeletonresource:)](https://developer.apple.com/documentation/realitykit/animationgraphresource/validate(definition:noderesourcemapping:skeletonresource:))

# validate(definition:nodeResourceMapping:skeletonResource:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Compiles an animation graph definition and returns any diagnostic messages the compiler produced, without producing a resource.

## Declaration

```swift
static func validate(definition: Data, nodeResourceMapping: [Int : AnimationResource] = [:], skeletonResource: SkeletonResource) -> [String]
```

## Parameters

- `definition`: The animation graph definition to validate.
- `nodeResourceMapping`: A mapping from graph-node IDs to the [AnimationResource](../animationresource.md) clips those nodes reference. Defaults to empty.
- `skeletonResource`: The [SkeletonResource](../skeletonresource.md) the graph targets.

<a id="return-value"></a>

## Return Value

An array of diagnostic messages produced by the compiler. An empty array indicates the definition compiled cleanly.

<a id="discussion"></a>

## Discussion

Call this method to validate a definition at editor time without paying the cost of holding on to the compiled resource and without having to handle a thrown error. To produce a usable [AnimationGraphResource](../animationgraphresource.md), call [init(definition:nodeResourceMapping:skeletonResource:)](init%28definition_noderesourcemapping_skeletonresource_%29.md) instead.

## See Also

### Creating an animation graph

- [init(definition:nodeResourceMapping:skeletonResource:)](init%28definition_noderesourcemapping_skeletonresource_%29.md): Compiles an animation graph definition into a resource that can drive animation on an entity.
