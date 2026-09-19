> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshresource/skeleton/joints

# joints

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The joints which define this skeleton’s hierarchy.

## Declaration

```swift
var joints: [MeshResource.Skeleton.Joint]
```

<a id="discussion"></a>

## Discussion

> **Important**

> The order of joints in this array is significant; parents need to precede their children.
