> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/init(named:rootjoint:)](https://developer.apple.com/documentation/realitykit/ikrig/init(named:rootjoint:))

# init(named:rootJoint:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an IK rig from a joint hierarchy.

## Declaration

```swift
init(named name: String, rootJoint: SkeletonResource.Joint) throws
```

## Parameters

- `name`: The name to associate with the rig.
- `rootJoint`: The root joint of the skeleton hierarchy to derive the rig from.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the joint hierarchy contains invalid data.
