> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/skeletalpose/init(id:from:)

# init(id:from:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a skeletal pose from the rest pose of the model skeleton.

## Declaration

```swift
init(id: SkeletalPose.ID, from skeleton: MeshResource.Skeleton)
```

## Parameters

- `id`: The unique name of the pose.
- `skeleton`: The skeleton to extract the joint names and rest pose transformations from.
