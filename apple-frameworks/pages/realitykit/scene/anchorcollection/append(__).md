> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/scene/anchorcollection/append(_:)

# append(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Adds a new anchor at the end of the collection.

## Declaration

```swift
@MainActor @preconcurrency func append(_ entity: any HasAnchoring)
```

## Parameters

- `entity`: The element to append to the collection.

## See Also

### Adding anchors

- [append(contentsOf:)](append%28contentsof_%29-3bjib.md): Adds anchors from an array to the end of this collection.
- [append(contentsOf:)](append%28contentsof_%29-4sf55.md): Adds anchors from a sequence to the end of this collection.
