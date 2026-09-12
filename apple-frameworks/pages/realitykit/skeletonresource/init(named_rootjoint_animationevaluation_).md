> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletonresource/init(named:rootjoint:animationevaluation:)](https://developer.apple.com/documentation/realitykit/skeletonresource/init(named:rootjoint:animationevaluation:))

# init(named:rootJoint:animationEvaluation:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a skeleton resource with the specified name, joint hierarchy, and animation-evaluation data.

## Declaration

```swift
convenience init(named name: String, rootJoint: SkeletonResource.Joint, animationEvaluation: SkeletonResource.AnimationEvaluation = .init()) throws
```

## Parameters

- `name`: A unique identifier for the skeleton, used by the animation runtime to link animation clips and retargeting configurations to this skeleton.
- `rootJoint`: The root joint of the skeleton hierarchy.
- `animationEvaluation`: Additional animation-related skeletal data to bake into the resource. Defaults to empty.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the joint hierarchy contains invalid data, or if the underlying resource cannot be created.
