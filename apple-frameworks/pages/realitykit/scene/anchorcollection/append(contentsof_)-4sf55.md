> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/anchorcollection/append(contentsof:)-4sf55](https://developer.apple.com/documentation/realitykit/scene/anchorcollection/append(contentsof:)-4sf55)

# append(contentsOf:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Adds anchors from a sequence to the end of this collection.

## Declaration

```swift
@MainActor @preconcurrency func append<S>(contentsOf sequence: S) where S : Sequence, S.Element : HasAnchoring
```

## Parameters

- `sequence`: The sequence of anchor entities to add.

## See Also

### Adding anchors

- [append(\_:)](append%28__%29.md): Adds a new anchor at the end of the collection.
- [append(contentsOf:)](append%28contentsof_%29-3bjib.md): Adds anchors from an array to the end of this collection.
