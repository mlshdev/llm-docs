> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/worldtrackingprovider/removeanchor(forid:)

# removeAnchor(forID:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Removes a world anchor from a world-tracking provider based on its ID.

## Declaration

```swift
final func removeAnchor(forID id: UUID) async throws
```

## Parameters

- `id`: The unique ID of the world anchor to remove.

## See Also

### Stopping object tracking

- [removeAnchor(\_:)](removeanchor%28__%29.md): Removes a world anchor from a world-tracking provider.
