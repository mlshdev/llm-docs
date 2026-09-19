> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/skeletonresource/init(from:)

# init(from:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a skeleton resource from a mesh resource skeleton.

## Declaration

```swift
convenience init(from skeleton: MeshResource.Skeleton) throws
```

## Parameters

- `skeleton`: The mesh resource skeleton to convert.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the skeleton asset cannot be created.
