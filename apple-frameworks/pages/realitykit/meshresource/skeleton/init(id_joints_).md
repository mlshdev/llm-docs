> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshresource/skeleton/init(id:joints:)](https://developer.apple.com/documentation/realitykit/meshresource/skeleton/init(id:joints:))

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
