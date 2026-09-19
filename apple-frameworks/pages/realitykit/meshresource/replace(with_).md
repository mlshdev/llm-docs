> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshresource/replace(with:)

# replace(with:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Replace the contents of this mesh resource.

## Declaration

```swift
@MainActor @preconcurrency func replace(with content: MeshResource.Contents) throws
```

<a id="discussion"></a>

## Discussion

> **Note**

> The contents of the modified mesh resource will not be synced between network clients.
