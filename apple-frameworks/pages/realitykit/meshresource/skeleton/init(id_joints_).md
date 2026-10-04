> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshresource/skeleton/init(id:joints:)

# init(id:joints:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Creates a skeleton from an array of joints.

## Declaration

```swift
init(id: String, joints: [MeshResource.Skeleton.Joint])
```

<a id="discussion"></a>

## Discussion

> **Important**

> The order of joints in this array is significant; parents need to precede their children.
