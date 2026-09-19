> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/hastransform/transform

# transform

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The transform of an entity relative to its parent.

## Declaration

```swift
@MainActor @preconcurrency var transform: Transform { get set }
```

<a id="discussion"></a>

## Discussion

For an [AnchorEntity](../anchorentity.md) instance, the transform is relative to the AR anchor.
