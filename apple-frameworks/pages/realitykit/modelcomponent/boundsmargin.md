> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/modelcomponent/boundsmargin](https://developer.apple.com/documentation/realitykit/modelcomponent/boundsmargin)

# boundsMargin

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A margin applied to an entity’s bounding box that determines object visibility.

## Declaration

```swift
var boundsMargin: Float { get set }
```

## Mentioned In

- [Modifying RealityKit rendering using custom materials](../modifying-realitykit-rendering-using-custom-materials.md)

<a id="discussion"></a>

## Discussion

When determining which entities are currently visible, RealityKit tests each entity’s bounding box to see if it overlaps with the camera’s field of view (also known as the camera’s *frustum*). For efficiency, entities with a bounding box that don’t overlap the camera’s frustum aren’t rendered. Use this property to prevent RealityKit from incorrectly culling entities that use a [CustomMaterial](../custommaterial.md) with a geometry modifier that moves vertices outside of the entity’s bounding box.

RealityKit adds the value of `boundsMargin` to the bounding box before determining which entities are visible.

> **Note**

> On visionOS, if a mesh has an incorrect axis-aligned bounding box (AABB), you might see pixelated passthrough artifacts on the mesh due to inaccurate depth reprojection. Provide a correct AABB for your virtual content, or if the mesh is animated by a shader, make the AABB more conservative using this property.
