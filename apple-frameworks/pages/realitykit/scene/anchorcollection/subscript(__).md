> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/scene/anchorcollection/subscript(_:)

# subscript(\_:)

**Framework:** RealityKit  
**Kind:** Instance Subscript  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Accesses the element at the specified position.

## Declaration

```swift
@MainActor @preconcurrency subscript(index: Int) -> any HasAnchoring { get set }
```

## See Also

### Accessing anchors

- [Scene.AnchorCollection.SubSequence](subsequence.md): A sequence that represents a contiguous subrange of the collection’s elements.
