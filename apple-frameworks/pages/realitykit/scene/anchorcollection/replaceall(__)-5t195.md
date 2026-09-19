> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/scene/anchorcollection/replaceall(_:)-5t195

# replaceAll(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Replaces the existing anchor collection with a provided sequence.

## Declaration

```swift
@MainActor @preconcurrency func replaceAll<S>(_ entities: S) where S : Sequence, S.Element : HasAnchoring
```

## Parameters

- `entities`: A sequence of anchors to replace the existing collection.

## See Also

### Replacing anchors

- [replaceAll(\_:)](replaceall%28__%29-tris.md): Replaces the existing anchor collection with a provided collection.
