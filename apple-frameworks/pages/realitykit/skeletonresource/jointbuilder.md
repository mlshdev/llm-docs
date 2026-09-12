> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletonresource/jointbuilder](https://developer.apple.com/documentation/realitykit/skeletonresource/jointbuilder)

# SkeletonResource.JointBuilder

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A result builder for declaratively constructing the children of a joint.

## Declaration

```swift
@resultBuilder struct JointBuilder
```

<a id="overview"></a>

## Overview

Inside the `Joint(_:restPoseTransform:children:)` closure, you can write any mix of:

- **`Joint` literals** — each becomes one child of the parent joint.

  ```swift
  try Joint("root") {
      try Joint("spine")
      try Joint("hip")
  }
  // root.children == [spine, hip]
  ```
- **`[Joint]` values** — each element becomes a child of the parent joint, in array order, alongside any other declarations in the same closure body. Use this when the children are produced from runtime data (e.g. mapped from a flat array) rather than spelled out as literals.

  ```swift
  let kids: [Joint] = ...
  try Joint("root") {
      kids   // every element of kids becomes a child of root
  }
  ```

Both forms can be mixed freely. Each `Joint` in any array can itself be a fully built subtree.

## Topics

### Building joints

- [buildBlock(\_:)](jointbuilder/buildblock%28__%29.md): Combines all joints declared in the closure body into the parent’s `children`.

### Type Methods

- [buildExpression(\_:)](jointbuilder/buildexpression%28__%29.md): Treats a single `Joint` value in the closure body as one child of the parent.

## See Also

### Defining the joint hierarchy

- [rootJoint](rootjoint.md): The root joint of the skeleton hierarchy.
- [SkeletonResource.Joint](joint.md): Describes a single joint of a `Skeleton`
