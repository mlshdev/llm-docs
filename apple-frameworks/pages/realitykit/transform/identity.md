> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/transform/identity

# identity

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The identity transform.

## Declaration

```swift
static let identity: Transform
```

<a id="discussion"></a>

## Discussion

The identity transform is defined as `scale = (1, 1, 1)`, `rotation = (0, 0, 0, 1)`, and `translation = (0, 0, 0)`.
