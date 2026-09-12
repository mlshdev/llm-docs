> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/skeletalpose](https://developer.apple.com/documentation/realitykit/skeletalpose)

# SkeletalPose

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A container that holds the position and orientation of each joint in a single animation skeleton.

## Declaration

```swift
struct SkeletalPose
```

<a id="overview"></a>

## Overview

Each index in [jointNames](skeletalpose/jointnames.md) directly corresponds to the same index in [jointTransforms](skeletalpose/jointtransforms.md), linking each joint name to its respective transform.

## Topics

### Initializers

- [init(id:from:)](skeletalpose/init%28id_from_%29.md): Creates a skeletal pose from the rest pose of the model skeleton.
- [init(id:joints:)](skeletalpose/init%28id_joints_%29.md): Creates a pose for the joint name and transformation pairs.

### Instance Properties

- [id](skeletalpose/id.md): The unique identifier of the pose.
- [jointNames](skeletalpose/jointnames.md): The names of the joints in the pose in specific order.
- [jointTransforms](skeletalpose/jointtransforms.md): The transformations of the joints in the pose.

### Subscripts

- [subscript(\_:)](skeletalpose/subscript%28__%29.md): Accesses a pose transformation using the index of the joint name.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)

## See Also

### Skeletons

- [SkeletalPosesComponent](skeletalposescomponent.md): A component that exposes the collection of named animation skeletal poses.
- [SkeletalPoseSet](skeletalposeset.md): A collection of named skeletal poses.
